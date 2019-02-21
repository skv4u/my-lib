import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skv-calender',
  templateUrl: './skv-calender.component.html',
  styleUrls: ['./skv-calender.component.css']
})
export class SkvCalenderComponent implements OnInit {
  monthNames:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  yearList:number[]=[];
  daysNameList:string[]=["Sun","Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
  dayNumberList:any = [];
  month:number = new Date().getMonth();
  selectedDate:string = "";
  // month:number = 2;
  year:number = new Date().getFullYear();
  // selectedMonth:number = new Date().getMonth();
  // selectedYear:number = new Date().getFullYear();
  // year:number = 2019;
  constructor() { }

  ngOnInit() {
    // console.log(this.month);
    // this.month++;
    this.selectedDate = this.setCurrentDate(new Date());
    for(let i=1970; i< this.year + 25; i++){
      this.yearList.push(i);
    }
    this.setCalender(this.month,this.year);
  }
  setCurrentDate(date:any){
    
      var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
  
  }

  setCalender(month:number,year:number){
    this.dayNumberList = [];
    
    month = month +1;
    let daysInMonth:number = new Date(year, month, 0).getDate();
// console.log(daysInMonth)
    // let blankRow = ;
    // console.log(new Date(year, month-1, 1 ).getDay());
    this.addBlankRow(new Date(year, month-1,1).getDay());
    
    for(let i=1; i<=daysInMonth; i++){
      this.dayNumberList.push({
        "display":i,
        "dayName":this.daysNameList[new Date(year, month-1,i).getDay()],
        "isSelected":this.isTodayDate(new Date(year, month-1,i)),
        "isDisabled":false
      });
    }
    console.log(this.dayNumberList)
    this.addBlankRow(6-new Date(year, month, 28).getDay());
    
    // console.log(this.dayNumberList);
  }
  isTodayDate(pDate:any){
    return (
      new Date().getFullYear() === pDate.getFullYear() &&
      new Date().getMonth() === pDate.getMonth() &&
      new Date().getDate() === pDate.getDate()
    );
  }
  addBlankRow(blankLength:number){
    // console.log(blankLength);
    for(let i=1; i<=blankLength; i++){
      this.dayNumberList.push({
        "display":"",
        "dayName":"",
        "isSelected":"",
        "isDisabled":false
      });
    }
  }

  renderCal(type:string){
    if(type == 'prev'){
      this.month--;
    }
    else{
      this.month++;
    }
    console.log(typeof this.month, typeof this.year,this.month,this.year);
    
    this.setCalender(this.month,this.year);
  }
  changeMonthYear(){
    console.log(typeof this.month, typeof this.year,this.month,this.year);
    // console.log(this.month,this.year);
    this.setCalender(Number(this.month),this.year);
  }
}
