import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importă CommonModule

@Component({
  selector: 'app-tincturi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tincturi.component.html',
  styleUrls: ['./tincturi.component.scss']
})
export class TincturiComponent implements OnInit {
  products = [
    {
      id: '1',
      name: 'Tinctură de Afrodisiac',
      description: 'Tinctura afrodisiacă este un preparat pe bază de plante cu efecte benefice asupra libidoului și potenței masculine, având un impact pozitiv asupra fertilității și sănătății sexuale.',
      price: '30',
      image: 'assets/images/Tincturi/img1.jpeg'
    },
    {
      name: 'Tinctura de Afin si Castravete Amar',
      description: 'Ajutor natural pentru echilibrarea glicemiei și sănătatea generală! ',
      price: '15',
      image: 'assets/images/Tincturi/Tinctura  de Afin si Castravete Amar.jpeg'
    },
    {
      name: 'Tinctura Adipolit',
      description: 'Pentru persoanele care doresc un efect de slabire mai rapid le recomndăm şi tinctura din plante, o lingură înainte de fiecare cană cu ceai impotriva obezităţii consumat',
      price: '25',
      image: 'assets/images/Tincturi/Tinctura Adipolit.jpeg'
    },
    {
      name: 'Tinctură Aronia',
      description: 'Tinctura de  Aronia este recomandată pentru detoxifiere, susținerea imunității, protejarea sistemului cardiovascular și îmbunătățirea sănătății creierului.',
      price: '30',
      image: 'assets/images/Tincturi/Tinctura Aronia.jpeg'
    },
    {
      name: 'Tinctura de Bitter Suedez',
      description: 'Bitterul suedez este un extract hodroalcoolic sau mai bine zis o tinctură din 32 plante medicinale, majoritatea plantelor având principii amare. Plantele cu gustul amar au o importanţă deosebită în terapia naturistă.',
      price: '15',
      image: 'assets/images/Tincturi/Tinctura de Bitter Suedez.jpeg'
    },
    {
      name: 'Tinctura de Branca Ursului',
      description: 'Brânca ursului, o plantă miraculoasă cu origini în zonele de deal și munte, este binecunoscută pentru proprietățile sale revigorante, tonice și curative. De la rădăcini la inflorescențe și semințe, fiecare parte a plantei contribuie la sănătate și vitalitate.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Branca Ursului.jpeg'
    },
    {
      name: 'Tinctură de Catina',
      description: 'Elixirul sănătății naturale 🌿Tinctura de cătină este un remediu natural cu multiple beneficii, recunoscut pentru proprietățile sale vindecătoare și capacitatea de a sprijini organismul în lupta cu diverse afecțiuni.',
      price: '30',
      image:' assets/images/Tincturi/Tinctura de Catina.jpeg'
    },
    {
      name: 'Tinctura de Coltul Lupului',
      description: 'Ajutor natural pentru echilibrarea glicemiei și sănătatea generală!',
      price: '15',
      image: 'assets/images/Tincturi/Tinctura de Coltul Lupului.jpeg'
    },
    {
      name: 'Tinctura de Dragaica',
      description: 'Planta cu puteri magice și terapeutice 🌿Drăgaica, cunoscută și sub numele de sânziene, este o plantă cu o tradiție de peste 2000 de ani, atribuite-i fiind puteri magice. ',
      price: '25',
      image: 'assets/images/Tincturi/Tinctura de Dragaica.jpeg'
    },
    {
      name: 'Tinctură de Ghimbir',
      description: 'Un tonic natural pentru sănătatea ta!  Tinctura de Ghimbir este un remediu natural valoros, folosit în medicina tradițională de mii de ani, cu efecte terapeutice remarcabile asupra sistemului digestiv și sănătății generale.',
      price: '30',
      image: 'assets/images/Tincturi/Tinctura de Ghimbir.jpeg'
    },
    {
      name: 'Tinctura de Ghintura',
      description: 'Remediu puternic pentru afecțiuni digestive 🌿Tinctura de ghintură este un remediu natural extrem de eficient în tratarea diferitelor afecțiuni ale sistemului digestiv, datorită compușilor chimici activi pe care îi conține. Este utilizată de secole pentru a sprijini sănătatea stomacului, ficatului și a întregului aparat digestiv.',
      price: '15',
      image: 'assets/images/Tincturi/Tinctura de Ghintura.jpeg'
    },
    {
      name: 'Tinctura de Ienupar',
      description: 'Remediu natural pentru afecțiuni diverse 🌿Tinctura de ienupar este un produs natural eficient, utilizat în tratamentele pentru o gamă largă de afecțiuni. Ienuparul este cunoscut pentru proprietățile sale diuretice, antiseptice și de stimulare a metabolismului, fiind folosit de secole în medicina tradițională.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Ienupar.jpeg'
    },

    {
      name: 'Tinctura de Leurda',
      description: 'Leurda este un vestitor al primăverii, creşte numai in câmpii bogate in humus şi umede, sub tufişuri, în păduri de foioase şi alpine.Odata cu venirea primăverii toată lumea ar trebui să facă o cură de curăţire şi depuraţie a organismului, care duc la o împrospătare şi înviorare a organismului demne de luat in seama.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Leurda.jpeg'
    },
    {
      name: 'Tinctura de Marul Lupului',
      description: 'Remediu natural pentru diverse afecțiuni 🌿Tinctura de mărul lupului este un tratament extrem de eficient în tratarea unor afecțiuni ale pielii, mucoaselor și organelor interne. Aceasta se distinge prin proprietățile sale dezinfectante, antifungice, antiinflamatorii și cicatrizante, fiind utilizată cu succes pentru o gamă variată de afecțiuni.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Marul Lupului.jpeg'
    },
    {
      name: 'Tinctura de Merisor',
      description: 'Grija naturală pentru sănătatea rinichilor și inimii!',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Merisor.jpeg'
    },
    {
      name: 'Tinctura de Napraznic',
      description: 'Planta cu efecte miraculoase pentru tratamentele tumorale și alte afecțiuniNăpraznicul este o plantă medicinală extraordinară, apreciată pentru proprietățile sale terapeutice rapide și eficiente în tratarea diferitelor afecțiuni, în special cele de natură tumorală. ',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Napraznic.jpeg'
    },
    {
      name: 'Tinctura de Obligeana',
      description: ' O plantă medicinală cu multiple beneficii terapeutice.Obligeana este o plantă cu proprietăți terapeutice remarcabile, utilizată de mult timp în medicina tradițională pentru tratarea unei game largi de afecțiuni. Datorită substanțelor chimice active pe care le conține, aceasta are efecte benefice asupra sistemului digestiv, nervos și imunitar.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Obligeana.jpeg'
    },
    {
      name: 'Tinctura de Osul Sarpelui,Rostopasca si Marul Lupului',
      description: 'Tinctura de Osul Șarpelui, Răstăpască și Mărul Lupului este un remediu natural eficient, folosit în tratamente externe pentru diverse afecțiuni ale pielii. ',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Osul Sarpelui,Rostopasca si Marul Lupului.jpeg'
    },
    {
      name: 'Tinctura de Paducel,Vasc si Urzica',
      description: 'Tinctura de Paducel,Vasc si Urzica este cunoscută pentru proprietățile sale benefice asupra sistemului cardiovascular și nervos. Este folosită de mult timp în medicina tradițională pentru tratarea problemelor de circulație, hipertensiune și afecțiuni cardiovasculare.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Paducel,Vasc si Urzica.jpeg'
    },
    {
      name: 'Tinctura de Pufulita cu flori mici si Ghimpe ',
      description: 'Pufuliţa cu flori mici este o plantă unică în tratamentul bolilor de vezică urinară, rinichi, dar in special e un leac remarcabil în toate bolile de prostată.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Pufulita cu flori mici si Ghimpe.jpeg'
    },
    {
      name: 'Tinctura de Spanz ',
      description: 'Spânzul este o plantă medicinală cu proprietăți terapeutice puternice, utilizată în tratamentele pentru afecțiuni interne și externe, în special în cazul tumorilor și problemelor reumatice.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Spanz.jpeg'
    },
    {
      name: 'Tinctura de Untul pamantului, tataneasa si spanz ',
      description: 'Tinctura de Untul Pământului este un remediu natural eficient pentru diverse afecțiuni reumatice și musculare, având un efect rapid și puternic asupra durerilor și inflamațiilor.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Untul pamantului, tataneasa si spanz.jpeg'
    },
    {
      name: 'Tinctura din Fructe de soc ',
      description: 'Socul este un copac cu o istorie de utilizare vastă în medicina tradițională. Acesta a fost folosit pentru a trata diverse afecțiuni, atât când oamenii erau bolnavi, cât și pentru menținerea sănătății. ',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura din Fructe de Soc.jpeg'
    },
    {
      name: 'Tinctura de Echinacea ',
      description: 'Folosită din vremuri îndepărtate pentru tratarea diverselor infecţii şi pentru întărirea sistemului imunitar, în zilele noastre extractul de echinaceea este folosit pentru efectele benefice pe care le aduce în cazul răcelii, gripei şi a sindromului oboselii cronice.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura Echinacea.jpeg'
    },
    {
      name: 'Tinctura impotriva caderii parului ',
      description: 'Tinctura pentru prevenirea căderii părului este un remediu natural obținut din macerarea în alcool a unui amestec de plante, fiecare având un rol important în stimularea creșterii părului și întărirea acestuia.',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura de Spanz.jpeg'
    },
 
    {
      name: 'Tinctura pentru Afectiuni Pulmonare ',
      description: 'Un sprijin natural pentru sănătatea plămânilor și a căilor respiratorii! ',
      price: '25',
     image: 'assets/images/Tincturi/Tinctura pentru Afectiuni Pulmonare.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
