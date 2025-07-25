import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ceaiuri',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ceaiuri.component.html',
  styleUrls: ['./ceaiuri.component.scss']
})
export class CeaiuriComponent implements OnInit{
  products = [
    {
      name: 'Ceai Adipolit',
      description: 'Ceaiul Adipolit este un remediu natural destinat în mod special pentru controlul greutății și eliminarea excesului de grăsime din organism',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Adipolit.jpeg'
    },
    {
      name: 'Ceai Antistres',
      description: 'Relaxare naturală pentru minte și corp.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Antistres.jpeg'
    },
    {
      name: 'Ceai Bilohep',
      description: 'Ceaiul Bilohep este un remediu natural destinat tratării afecțiunilor biliare și hepatice. Conține un amestec de 18 plante medicinale cu efecte benefice asupra vezicii biliare, ficatului și căilor biliare, având proprietăți antiinflamatorii, regenerante și depurative.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Bilohep.jpeg'
    },
    {
      name: 'Ceai Cardiac',
      description: ' Ceaiul Cardiac este un remediu natural destinat tratării și prevenției afecțiunilor cardiace, având un efect calmant și reglator asupra ritmului cardiac.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Cardiac.jpeg'
    },
    {
      name: 'Ceai Depurativ',
      description: 'Ceaiul depurativ este un amestec de plante medicinale cu rol în curățarea organismului de toxine, având acțiune benefică asupra pielii și a stării generale de sănătate. Este utilizat pentru a trata o gamă largă de afecțiuni ale pielii și pentru a sprijini detoxifierea organismului.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Depurativ.jpeg'
    },
    {
      name: 'Ceai Gastro-Intestinal',
      description: 'Ceaiul gastro-intestinal este un remediu natural eficient în tratamentul afecţiunilor stomacale și intestinale.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Gastro-Intestinal.jpeg'
    },
    {
      name: 'Ceai Ginecologic Extern',
      description: 'Ceaiul ginecologic extern este un remediu natural ce ajută la tratarea și prevenirea afecțiunilor ginecologice și urologice, având atât un rol intern, cât și extern.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Ginecologic Extern.jpeg'
    },
    {
      name: 'Ceai Ginecologic Intern',
      description: 'Ceaiul ginecologic intern este un amestec de plante medicinale care ajută la tratamentul și prevenirea afecțiunilor ginecologice și urinare. ',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Ginecologice Intern.jpeg'
    },
    {
      name: 'Ceai Hemoroizi Externi',
      description: 'Hemoroizii externi sunt dilatări ale vaselor de sânge situate la capătul rectului, în afara sfincterului anal, și pot provoca noduli dureroși și fisuri anale.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Hemoroizi Externi.jpeg'
    },
    {
      name: 'Ceai Hemoroizi Interni',
      description: 'Soluție naturală pentru confort intestinal.Acest amestec de plante este formulat special pentru a sprijini sănătatea digestivă și pentru a ameliora disconfortul cauzat de hemoroizii interni. ',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Hemoroizi Interni.jpeg'
    },
    {
      name: 'Ceai Hipotensiv',
      description: 'Acest ceai este un amestec din 11 plante medicinale, care ajută la tratarea afecțiunilor legate de tensiunea arterială și arterioscleroză. ',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Hipotensiv.jpeg'
    },
    {
      name: 'Ceai Marul Lupului',
      description: 'Acest ceai se poate folosi, cu mare succes, in următoarele cazuri : ~ tăieturi, arsuri, păgi, ulcer varicos cu sau fară rană,hemoroizi externi, boli ale pielii, exeme umede sau uscate, furunculoze, mâncărimi, acnee, psoriazis, aparatul genital feminin şi masculin.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Marul Lupului.jpeg'
    },
    {
      name: 'Ceai Napraznic',
      description: 'Năpraznicul este o plantă medicinală cunoscută pentru acțiunea sa rapidă și eficientă, folosită în tratamentele pentru mai multe afecțiuni, inclusiv cele tumorale. Această plantă este apreciată pentru proprietățile sale terapeutice și capacitatea de a sprijini diverse funcții ale organismului.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Napraznic.jpeg'
    },
    {
      name: 'Ceai Paraziti Intestinali',
      description: 'Pentru eliminarea paraziților intestinali, acest ceai conține un amestec de 10 plante medicinale care ajută la curățarea organismului de paraziți și îmbunătățirea stării de sănătate intestinală. Este recomandat pentru tratamentele împotriva viermilor intestinali și pentru persoanele cu probleme digestive asociate cu paraziți.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Paraziti Intestinali.jpeg'
    },
    {
      name: 'Ceai pentru Prostata',
      description: 'Acest ceai este un remediu natural folosit în tratarea afecțiunilor prostatei, inclusiv inflamarea, durerile urinare și alte tulburări ale prostatei. Conține un amestec de 20 de plante medicinale care ajută la regenerarea țesutului glandular, combat inflamațiile și normalizează urinarea.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai pentru Prostata.jpeg'
    },
    {
      name: 'Ceai Renofit',
      description: 'Ceaiul Renofit este un remediu natural eficient pentru tratarea afecțiunilor renale, inclusiv pietrele la rinichi, infecțiile urinare și insuficiența renală. Acesta conține un amestec de 16 plante medicinale ce contribuie la eliminarea toxinelor din organism, susțin sănătatea rinichilor și normalizează funcțiile acestora.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Renofit.jpeg'
    },
    {
      name: 'Ceai Respirofit',
      description: 'Ceaiul Respirofit este un remediu natural eficient pentru tratarea afecțiunilor respiratorii, cum ar fi laringita, traheita, bronșita, diverse tipuri de tuse, și astmul bronșic.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Respirofit.jpeg'
    },
    {
      name: 'Ceai Sanguinorm',
      description:' Ceaiul Sanguinorm este un remediu natural eficient pentru afecțiuni ale sistemului circulator și pentru reducerea colesterolului. Acesta conține un amestec de 12 plante medicinale care contribuie la îmbunătățirea circulației sângelui și la prevenirea sau tratarea unor afecțiuni precum arteritele, varicele și ulcerul varicos.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Sanguinorm.jpeg'
    },
    {
      name: 'Ceai Scaderea Glicemiei',
      description: 'Acest ceai este un aliat natural în gestionarea diabetului zaharat și a glicozuriei diabetice, având un rol important în reglarea glicemiei. Amestecul conține 15 plante medicinale care ajută la menținerea unui metabolism glucidic echilibrat și la eliminarea excesului de glucoză din organism.',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Scaderea Glicemiei.jpeg'
    },
    {
      name: 'Ceai Tiroidiene',
      description: 'Ceaiul Tiroidiene este un remediu natural destinat reglării secreției hormonale a glandei tiroide, ajutând la normalizarea funcției tiroidiene în caz de hiposecreție (hipotiroidie) sau hipersecreție (hipertiroidie). ',
      price: '30',
      image:' assets/images/Ceaiuri/Ceai Tiroidiene.jpeg'
    }
    
  ]
  constructor() { }

  ngOnInit(): void { }
}
