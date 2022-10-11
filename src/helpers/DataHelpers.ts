type orgOptionType = {
  name: string;
  value: number;
};
export const organizationOptions = (items: any[]) => {
  const options: orgOptionType[] = [];
  if (items) {
    items.map((item: any) => options.push({ name: item.org_name, value: item.org_id }));
  }
  return options;
};

export const previousDate = (month: number) => {
  const today = new Date();
  return (
    today.getFullYear() +
    '-' +
    String(today.getMonth() + month).padStart(2, '0') +
    '-' +
    String(today.getDate()).padStart(2, '0')
  );
};

export const sumOfNumbers = (numbers: number[]) => numbers.reduce((total, num) => total + num, 0);

export const sumOfObjectKeys = (items: any[], key: string) => {
  const allItems = [...items];
  let total = 0;
  for (let i = 0; i < allItems.length; i++) {
    total += allItems[i][key];
  }
  return total;
};

export const integerValue = (value: string) => (value ? parseInt(value) : 0);
