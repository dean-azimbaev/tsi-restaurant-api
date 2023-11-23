export interface CodeGeneratorService {
  generate(): Promise<string>;
}
