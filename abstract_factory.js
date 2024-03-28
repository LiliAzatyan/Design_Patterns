class Chair {
    sit() {}
}
class ModernChair extends Chair {
    sit() {
        return 'Sitting on a modern chair';
    }
}
class VictorianChair extends Chair {
    sit() {
        return 'Sitting on a Victorian chair';
    }
}
class Sofa {
    lieDown() {}
}
class ModernSofa extends Sofa {
    lieDown() {
        return 'Lying down on a modern sofa';
    }
}
class VictorianSofa extends Sofa {
    lieDown() {
        return 'Lying down on a Victorian sofa';
    }
}
class FurnitureFactory {
    createChair() {}
    createSofa() {}
}
class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    
    createSofa() {
        return new ModernSofa();
    }
}
class VictorianFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    
    createSofa() {
        return new VictorianSofa();
    }
}

const modernFactory = new ModernFurnitureFactory();
const modernChair = modernFactory.createChair();
const modernSofa = modernFactory.createSofa();

console.log(modernChair.sit()); 
console.log(modernSofa.lieDown()); 

const victorianFactory = new VictorianFurnitureFactory();
const victorianChair = victorianFactory.createChair();
const victorianSofa = victorianFactory.createSofa();

console.log(victorianChair.sit()); 
console.log(victorianSofa.lieDown()); 
