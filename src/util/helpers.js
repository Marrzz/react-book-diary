import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import React from "react";
import { Text, Button, Box } from "grommet";
import { Link } from "react-router-dom";
import { Add } from "grommet-icons";

const CURRENT_DATE = new Date();

export function checkIfInsertedDateIsGreaterThanCurrentDate(date) {
  const INSERTED_DATE = new Date(date);
  console.log(INSERTED_DATE);
  return INSERTED_DATE > CURRENT_DATE;
}
export function getCurrentYear() {
  return CURRENT_DATE.getFullYear();
}
export function getTextFieldRegexPattern() {
  return /^[a-z]/i;
}

export function getPublishingYearRegexPattern() {
  return /^[0-9]{1,4}/i;
}
export function getEmptyBook() {
  return {
    name: "",
    author: "",
    genre: "",
    releaseYear: "",
    description: "",
    startReading: "",
    finishReading: "",
    status: "",
    grade: null,
  };
}

export function clearDateValuesWhenStatusChanges(valueObj) {
  if (valueObj.status === "In-Progress") {
    valueObj = { ...valueObj, finishReading: "" };
  }
  if (valueObj.status === "Unread") {
    valueObj = { ...valueObj, startReading: "", finishReading: "" };
  }

  return valueObj;
}
export function getCustomTheme() {
  const customTheme = deepMerge(grommet, {
    formField: {
      border: {
        side: "all",
      },
      error: {
        size: "xsmall",
      },
      help: {
        size: "xsmall",
      },
      info: {
        size: "xsmall",
      },
      label: {
        size: "small",
      },
      round: "4px",
    },
    global: { font: { size: "small" } },
  });
  return customTheme;
}

export function tableColumns() {
  const COLUMNS = [
    {
      property: "name",
      header: <Text>Title</Text>,
      primary: true,
      size: "small",
    },
    { property: "author", header: <Text>Author</Text>, primary: true },
    { property: "genre", header: <Text>Genre</Text>, primary: true },
    {
      property: "releaseYear",
      header: <Text>Published</Text>,
      primary: true,
    },
    { property: "status", header: <Text>Status</Text>, primary: true },
    { property: "grade", header: <Text>Grade</Text>, primary: true },
    {
      property: "details",
      header: (
        <Link to="/addbook">
          <Button label="Add Book" icon={<Add color="black" />} />
        </Link>
      ),
      primary: true,
      render: () => (
        <Box direction="row" size="medium">
          <Button label="Edit" />
        </Box>
      ),
    },
  ];

  return COLUMNS;
}

export function getActionMessage(status) {
  const messages = {
    added: { message: "Book Added!", color: "#74C943" },
    edited: { message: "Book Edited!", color: "#E2E440" },
    deleted: { message: "Book Deleted!", color: "#ED2B0C" },
  };
  return messages[status];
}

export function removeTimestampFromDate(date) {
  let returnString = date.toString();
  returnString = returnString.substring(0, 10);
  return returnString;
}
