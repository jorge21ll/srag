import { parse } from "csv-parse";
import fs from "fs";

import { IObjectivesRepository } from "../../repositories/IObjectivesRepository";

interface IImportObjecitve {
  name: string;
}

class ImportObjectiveUseCase {
  constructor(private objectiveRepository: IObjectivesRepository) {}

  loadObjectives(file: Express.Multer.File): Promise<IImportObjecitve[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const objectives: IImportObjecitve[] = [];

      const parseFile = parse();
      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [name] = line;
          objectives.push({
            name,
          });
        })
        .on("end", () => {
          resolve(objectives);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const objectives = await this.loadObjectives(file);

    objectives.map(async (objective) => {
      const { name } = objective;
      const existObjecitve = this.objectiveRepository.findByName(name);

      if (!existObjecitve) {
        this.objectiveRepository.create({ name });
      }
    });
  }
}

export { ImportObjectiveUseCase };
