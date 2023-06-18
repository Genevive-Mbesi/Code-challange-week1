let basicSalary = prompt("Enter Basic Salary");


const grossSalary = basicSalary + relief

const deductions =paye+fringeBenefitTax+nhif+nssf


//Calculation of netSalary

if(netSalary = grossSalary-deductions){
    console.log(grossSalary-deductions);
}

// Calculatin of Monthly paye

function paye(){
if (grossSalary<= 24000){
    return(grossSalary*0.1);
}
else if(grossSalary >=24001 && grossSalary<=32333){
    return(grossSalary*0.25);
}
else(grossSalary>32333);{
    return(grossSalary*0.3)
}}

// Calculation of Monthly fringeBenefitTax

function fringeBenefitTax(){
    if(january-march){
        return(grossSalary*0.09);
    }
    else if(april-june){
        return(grossSalary*0.1);
    }
    else if(july-september){
        return(grossSalary*0.08);
    }
    else (october-december);{
        return(grossSalary*0.09);
    }}

    //Calculation of Monthly nhif

function nhif(){
    if(grossSalary<5999)
    return(150);
    else if(grossSalary>=6000 && grossSalary<=7999)
    return(300);
    else if(grossSalary>=8000 && grossSalary<=11999)
    return(400);
    else if(grossSalary>=12000 && grossSalary<=14999)
    return(500);
    else if(grossSalary>=15000 && grossSalary<=19999)
    return(600);
    else if(grossSalary>=20000 && grossSalary<=24999)
    return(750);
    else if(grossSalary>=25000 && grossSalary<=29999)
    return(850);
    else if(grossSalary>=30000 && grossSalary<=34999)
    return(900);
    else if(grossSalary>=35000 && grossSalary<=39999)
    return(950);
    else if(grossSalary>=40000 && grossSalary<=44999)
    return(1000);
    else if(grossSalary>=45000 && grossSalary<=49999)
    return(1100);
    else if(grossSalary>=50000 && grossSalary<=59999)
    return(1200);
    else if(grossSalary>=60000 && grossSalary<=69999)
    return(1300);
    else if(grossSalary>=70000 && grossSalary<=79999)
    return(1400);
    else if(grossSalary>=80000 && grossSalary<=89999)
    return(1500);
    else if(grossSalary>=90000 && grossSalary<=99999)
    return(1600);
    else(grossSalary>=100000);
    return(1700)
}

//Calculation of Monthly nssf

function nssf(){
 if(pensionablepayI>=6000)
  return(grossSalary*0.06);
else if (pensionablepayII>=60001 && pensionablepay>=18000)
  return(grossSalary*0.06);
else if(monthly)
  return(400);
else if(biweekly)
  return(200);
else(weekly);
return(100);
}

//Calculation of Monthly Relief

function relief(){
    personalRelief>=2400
    insuranceRelief>=5000
    allowablePensionFundContribution>=20000
    affordableHousingRelief>=9000
    allowableOwnerOccupierInterest>=25000
    disabilityExemption>=150000
}




