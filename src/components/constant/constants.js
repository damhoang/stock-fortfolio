export const equityTypes = ["Stock", "Call", "Put", "Forex", "Bond"];
export const resultTypes = ["Profit", "Lost"];
export const orderByTypes = ["Symbol", "Company", "Type", "Quantity", "EntryDate", "ExitDate", "Profit"];
export const newPosition = {
    Id: '',
    Symbol: '',
    Company: '',
    Type: 'Stock',
    Quantity: '',
    EntryDate: (new Date()).toISOString().slice(0, 10),
    ExitDate: (new Date()).toISOString().slice(0, 10),
    EntryPrice: '',
    ExitPrice: '',
    Commission: '',
    Profit: ''
};
export const newCalculator = {
    AccountTotal: '',
    PercentRisk: '',
    EntryPrice: '',
    StopLossPrice: '',
    NumberOfShares: ''
};
export const newSearch = {
    Symbol: '',
    Company: '',
    Type: 'Stock',
    StartDate: new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10),
    EndDate: (new Date()).toISOString().slice(0, 10),
    Result: 'Profit',
    OrderBy: 'Symbol'
};