export const dateValidationInMonths = (date: string | number | Date, months: number) => {
    let b = new Date(date);
    let d = new Date();
    d.setMonth(d.getMonth() - months);
    if (b >= d) return true;
    return false;
  }
  
export const findByMatchingProperties = (set: any[], properties: { [x: string]: any; }) => {
    return set.filter(function (entry: { [x: string]: any; }) {
        return Object.keys(properties).every(function (key) {
            return entry[key] === properties[key];
        });
    });
  }