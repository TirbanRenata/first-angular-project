import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-siropuri',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './siropuri.component.html',
  styleUrl: './siropuri.component.scss'
})
export class SiropuriComponent implements OnInit{
  products = [
    {
      id: 1, 
      name: 'Sirop de Catina si Macese',
      description: '🌿 Elixirul sănătății – Sprijin complet pentru organismul tău! 🌿Acest remediu natural este creat pentru a susține sănătatea și bunăstarea întregii familii, oferind un spectru larg de beneficii terapeutice.',
      price: '30',
      image:' assets/images/Siropuri/Sirop de Catina si Macese.jpeg'
    },
    {
      name: 'Sirop de Coacaze Negre',
      description: '🌿 Elixirul naturii – Aliatul sănătății tale! 🌿Acest remediu multifuncțional este special creat pentru a sprijini organismul în lupta cu o gamă largă de afecțiuni și pentru a oferi o îngrijire completă a sănătății',
      price: '30',
      image:' assets/images/Siropuri/Sirop de Coacaze Negre.jpeg'
    },
    {
      name: 'Sirop de Muguri de Brad',
      description: '🌿Grija naturii pentru sănătatea căilor respiratorii!Acest supliment alimentar este ideal pentru susținerea sănătății aparatului respirator. 🌿',
      price: '30',
      image:' assets/images/Siropuri/Sirop de Muguri de Brad.jpeg'
    },
     {
      name: 'Sirop de Muguri de pin,Limba Cerbului,Patlagina si Cimbrisor',
      description: '🌿 Remediul perfect pentru sănătatea căilor respiratorii 🌿Acest produs natural este ideal pentru a calma și trata afecțiunile respiratorii, oferind un sprijin complet pentru o respirație ușoară și sănătoasă.',
      price: '30',
      image:' assets/images/Siropuri/Sirop de Muguri de pin,Limba Cerbului,Patlagina si Cimbrisor.jpeg'
    }
   
    
  ]
  constructor() { }

  ngOnInit(): void { }
}

