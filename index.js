import XLSX from "xlsx";
import * as path from "path";

const json = {
  Test: { ko: "테스트", en: "test" },
  choose: { ko: "선택", en: "choose" },
  apple: { ko: "사과", en: "apple" },
  water: { ko: "물", en: "water" },
};
const sheetColumnName = ["ID", "ko", "en"];
const sheetName = "프론트엔드";
const filePath = "./test.xlsx";

const exportUsersToExcel = (json, columns, sheetName, filePath) => {
  const data = Object.entries(json).map(([key, { ko, en }]) => [key, ko, en]);
  const workBook = XLSX.utils.book_new();
  const sheetData = [columns, ...data];
  const sheet = XLSX.utils.aoa_to_sheet(sheetData);
  XLSX.utils.book_append_sheet(workBook, sheet, sheetName);
  XLSX.writeFile(workBook, path.resolve(filePath));

  return true;
};

exportUsersToExcel(json, sheetColumnName, sheetName, filePath);
