import { toISOString } from "./common";

export const getMaxNum = (
  firstSwitch,
  secondSwitch,
  thirdSwitch,
  fourthSwitch
) => {
  if (firstSwitch) return 1;
  if (secondSwitch) return 2;
  if (thirdSwitch) return 3;
  if (fourthSwitch) return 12;
  return 1;
};

export const getDateSet = (stampingDate, maxNum, incrementCount) => {
  
  
  let copyDate = stampingDate;
  let customDate = new Date(stampingDate);
  let arr = [];
  let obj = { last_date: "", name: "", date: "" };

  if (incrementCount === 12) maxNum = 1;
  if (incrementCount === 6) maxNum = 2;
  if (incrementCount === 3) maxNum = 3;
  if (incrementCount === 1) maxNum = 12;

  for (let i = 1; i <= maxNum; i++) {
    const d = toISOString(
      customDate.setMonth(customDate.getMonth() + incrementCount)
    );
    const someDate = new Date(d).toDateString();
    const d_name = new Date(d).toLocaleDateString("default", {
      month: "short",
    });

    console.log("???????????????????????????????", someDate, d, copyDate);
    obj = {
      last_date: copyDate,
      name: d_name,
      date: d,
      someDate,
    };
    arr.push(obj);
  }
  return arr;
};
