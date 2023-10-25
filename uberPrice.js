
class uberPrice {
   constructor(distance, tripDuration, costPerHour, costPerKm, driverBatta, basePrice, fuelCost) {
     this.distance = distance;
     this.tripDuration = tripDuration;
     this.costPerHour = costPerHour;
     this.costPerKm = costPerKm;
     this.driverBatta = driverBatta;
     this.basePrice = basePrice;
     this.fuelCost = fuelCost;
   }
   calculateBillAmount() {
     const mileageCost = this.distance * this.costPerKm;
     const timeCost = this.tripDuration * this.costPerHour;
     const totalAmount = mileageCost + timeCost + this.basePrice + this.fuelCost + this.driverBatta;
     return totalAmount;
   }
}

const trip1 = new uberPrice(10, 2, 100, 20, 150, 350, 300);
const billAmount = trip1.calculateBillAmount();

console.log(`Bill amount to be paid is Rs.${billAmount}`);
