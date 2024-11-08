import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b, l, s } = yarg;
let outputMessage = '';
const headerMessage = `
==========================================
            Tabla del ${b}
==========================================\n
`;
for (let i = 1; i <= l; i++) {
  outputMessage += `${b} x ${i} = ${b * i}\n`;
}
outputMessage = headerMessage + outputMessage;

if (s) console.log(outputMessage);
const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${b}.txt`, outputMessage);
console.log('File created');
