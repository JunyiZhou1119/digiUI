import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cart } from './cart.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{

  // private availableExercises: Exercise[] = [
  //   { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
  //   { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
  //   { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
  //   { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  // ];
  
  displayedColumns = [
      'date','name','item','price'
  ];

  dataSource = [
    '11/19/92','zzzz4444','golden dragon','$44.44'
  ];

}


