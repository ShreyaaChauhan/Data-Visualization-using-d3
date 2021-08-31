import React from "react";
import { useState, useEffect } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import * as d3 from "d3"

const CsvFiles = () => {
  const [csvData, setcsvData] = useState(null);
  const [size, setsize] = useState(null);
  const [rows, setrows ] = useState(null);
  const [columns, setcolumns] = useState(null);
  
  const Csvurl =
    "https://gist.githubusercontent.com/ShreyaaChauhan/e5a43df5c7fe582a19cfa8d7ee776004/raw/b0074299a15a7bd5dede88c734c20ba079a211fa/cssNamedColors.csv";
  useEffect(() => {
    const getdata = async (url) => {
      const response = await fetch(url);
      return await response.text();
    };
    getdata(Csvurl).then((text) => {
      setcsvData(text);
      const data = d3.csvParse(text);
      setsize(Math.round(text.length /1024));
      setrows(data.length);
      setcolumns(data.columns.length)
    });
  }, []);
  return (
    <>
    <div className="csvheading">
      <p >Fetching data from url in csv format and displaying it </p>
      </div>
      <p style={{color: 'white'}}> The size of this table is {size} kb. It has {rows} rows and {columns} columns </p>
      <div className="csvtable">
        {csvData && (
          <CsvToHtmlTable
            data={csvData}
            csvDelimiter=","
            hasHeader={true}
            className="table"
          />
        )}
      </div>
    </>
  );
};

export default CsvFiles;
