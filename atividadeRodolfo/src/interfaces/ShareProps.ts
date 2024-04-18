export interface ShareProps {
    symbol: string,
   currency: string,
   twoHundredDayAverage: number,
   twoHundredDayAverageChange: number,
   twoHundredDayAverageChangePercent: number,
   marketCap: number,
   shortName: string,
   longName: string,
   regularMarketChange: number,
   regularMarketChangePercent: number,
   regularMarketTime: Date
   regularMarketPrice: number,
   regularMarketDayHigh: number,
   regularMarketDayRange: string,
   regularMarketDayLow: number,
   regularMarketVolume: number,
   regularMarketPreviousClose: number,
   regularMarketOpen: number,
   averageDailyVolume3Month: number,
   averageDailyVolume10Day: number,
   fiftyTwoWeekLowChange: number,
   fiftyTwoWeekLowChangePercent: number,
   fiftyTwoWeekRange: string,
   fiftyTwoWeekHighChange: number,
   fiftyTwoWeekHighChangePercent: number,
   fiftyTwoWeekLow: number,
   fiftyTwoWeekHigh: number,
   priceEarnings: number,
   earningsPerShare: number,
   logourl: string,
   id: string,
   createdAt: Date,
   updatedAt: null,
   active: boolean,
   isDeleted: boolean
 }