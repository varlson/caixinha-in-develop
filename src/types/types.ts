export type Fines = {
  resident_name: string;
  status: boolean;
  date: string;
  desc: string;
};
export type MonthStatus = {
  resident_name: string;
  months: (string | boolean)[];
};
export type Expenses = {
  desc: string;
  link: string;
  author: string;
  value: number;
  date: string;
};

export type AllDatasType = {
  datas: {
    fines: Fines[];
    monthStatus: MonthStatus[];
    purchase: Expenses[];
    resume: ResumeType;
  };
};

export type AppWrapperType = {
  error: string | null;
  datas: AllDatasType;
  setDatas: (datas: AllDatasType) => void;
  setErrorMsg: (errorMsg: string) => void;
  // resume: ResumeType;
};

export type ResumeType = {
  initialBalance: number;
  totalUsed: number;
  currentBalance: number;
  currentMonth: string;
};

export type PurchaseType = {
  desc: string;
  link: string;
  author: string;
  value: number;
  date: string;
};
