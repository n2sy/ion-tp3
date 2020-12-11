import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  CurrenciesList = ["EUR", "GBP", "JPY", "CNY", "TND", "EGP"]
  CurrienciesNames = ["Euro", "British pound", "Japanese yen", "Chinese yuan", "Tunisian Dinar", "Egyptian pound"]

  toConvert = false;
  value : number;
  cur2 : string;

  constructor(private exService : ExchangeService) {}
  
  ngOnInit() {
   
  }

  computeRate(c2) {
    this.exService.getCurrency().subscribe(
      (reponse) => {
        console.log(reponse['quotes']);
        let c1c2 = "USD"+c2.value;
        this.value = reponse['quotes'][c1c2];
        let x = this.CurrenciesList.indexOf(c2.value);
        //console.log(x);
        
        this.cur2 = this.CurrienciesNames[x];
        //console.log(this.cur2);
        
        
        this.toConvert = true;
        
        
      }
    )

  } 



}
