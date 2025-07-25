import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creme.component.html',
  styleUrl: './creme.component.scss'
})
export class CremeComponent implements OnInit{
  products = [
    {
      name: 'Crema de Marul Lupului combinata cu Rostopasca,Galbenele,Trei frati patati,ulei de sunatoare si coada soricelului',
      description: 'Îngrijire complexă pentru piele sănătoasă și protejată!',
      price: '30',
      image:' assets/images/Creme/Crema de Marul Lupului combinata cu Rostopasca,Galbenele,Trei frati patati,ulei de sunatoare si coada soricelului.jpeg'
    },
    {
      name: 'Crema de Untul Pamantului,Galbenele si Tataneasa',
      description: '🌿 Crema minune pentru sănătatea corpului tău 🌿 Descoperă o soluție naturală și eficientă pentru alinarea rapidă a durerilor și îmbunătățirea stării generale a articulațiilor și pielii.',
      price: '30',
      image:' assets/images/Creme/Crema de Untul Pamantului,Galbenele si Tataneasa.jpeg'
    },
    {
      name: 'Crema de Untul Pamantului si Ardei Iute',
      description: 'Îngrijire naturală pentru durerile reumatice și musculare!',
      price: '30',
      image:' assets/images/Creme/Crema de Untul Pamantului si Ardei Iute.jpeg'
    },
    {
      name: 'Crema de Marul Lupului',
      description: 'Soluție naturală pentru o piele sănătoasă și îngrijită!',
      price: '30',
      image:' assets/images/Creme/Crema de Marul Lupului.jpeg'
    },
    {
      name: 'Crema de Marul Lupului,Galbenele si Arnica',
      description: '🌿 Crema minune pentru sănătatea corpului tău 🌿Descoperă o soluție naturală și eficientă pentru alinarea rapidă a durerilor și îmbunătățirea stării generale a articulațiilor și pielii.',
      price: '30',
      image:' assets/images/Creme/Crema de Marul Lupului,Galbenele si Arnica.jpeg'
    },
    {
      name: 'Crema de Galbenele',
      description: 'Îngrijire naturală pentru o piele sănătoasă și fericită!',
      price: '30',
      image:' assets/images/Creme/Crema de Galbenele.jpeg'
    },
    {
      name: 'Crema de Galbenele si Propolis',
      description: 'Îngrijire naturală pentru pielea iritată și afectată!',
      price: '30',
      image:' assets/images/Creme/Crema de Galbenele si Propolis.jpeg'
    },
    {
      name: 'Crema de Brusture si Tataneasa',
      description: 'Îngrijire naturală pentru o piele sănătoasă și regenerată!',
      price: '30',
      image:' assets/images/Creme/Crema de Brusture si Tataneasa.jpeg'
    },
    {
      name: 'Crema de Sanziene',
      description: 'Sprijin natural pentru sănătatea tiroidei!',
      price: '30',
      image:' assets/images/Creme/Alifie de Sanziene.jpeg'
    },
    {
      name: 'Alifie de 3 Frati Patati,Galbenele,Albastrele,Sunatoare,Arnica',
      description: 'Răsfăț natural pentru piele sănătoasă și catifelată!',
      price: '30',
      image:' assets/images/Creme/Alifie de 3 Frati Patati,Galbenele,Albastrele,Sunatoare,Arnica.jpeg'
    }
    
    
  ]
  constructor() { }

  ngOnInit(): void { }
}

