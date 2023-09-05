import { ContentType } from '../models/content-type.enum';
import { Question } from '../models/question.model';

const Q1: Question = {
  id: 1,
  heading: '1. Metody uwierzytelniania',
  subQuestions: [
    {
      heading: 'Etapy procesu uwierzytelniania',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Identyfikacja</strong> - zadeklarowanie tożsamości przez podmiot, np. podanie loginu, adresu email.',
            '<strong>Uwierzytelnienie</strong> - uzyskanie pewnego stopnia pewności, że zadeklarowana tożsamość podmiotu jest prawdziwa. „Pewien stopień pewności” oznacza, że podmiot podał wystarczająco dowodów na potwierdzenie deklarowanej tożsamości.',
            '<strong>Autoryzacja</strong> - przyznanie dostępu do zasobów na podstawie tożsamości podmiotu. Bywa mylone z uwierzytelnianiem, jednak na tym etapie nie następuje żadna weryfikacja.',
          ],
        },
      ],
    },
    {
      heading: 'Coś co wiesz',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Jest to informacja będąca jedynie w posiadaniu podmiotu uprawnionego. Przykładami takiej informacji są hasło w kryptografii symetrycznej czy klucz prywatny w kryptografii asymetrycznej.',
          ],
        },
        {
          type: ContentType.TABLE,
          content: [
            ['Zalety', 'Wady'],
            [
              'Uniwersalne i tanie - pozwala na dostęp do systemu bez dodatkowego sprzętu.',
              'Podatność na przechwytywanie informacji poprzez np. keylogger, atak man-in-the-middle',
            ],
            [null, 'Niebezpieczeństwo wycieku danych'],
          ],
        },
      ],
    },
    {
      heading: 'Coś co masz',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Fizyczny przedmiot będący w posiadaniu podmiotu uprawnionego. Przykładem tej metody jest klucz sprzętowy.',
          ],
        },
        {
          type: ContentType.TABLE,
          content: [
            ['Zalety', 'Wady'],
            [
              'Bezpieczeństwo dostępu w przypadku wycieku danych (w przypadku klucza sprzętowego sekret nigdy go nie opuszcza)',
              'Konieczność posiadania fizycznego przedmiotu, który można zgubić bądź może zostać skradziony',
            ],
            ['Odporność na phishing', 'Koszt przedmiotu'],
          ],
        },
      ],
    },
    {
      heading: 'Coś czym jesteś',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Informacja biometryczna o podmiocie uprawnionym, np. odcisk palca, twarz.',
          ],
        },
        {
          type: ContentType.TABLE,
          content: [
            ['Zalety', 'Wady'],
            [
              'Wygoda - Uwierzytelnianie bez konieczności posiadania dodatkowych elementów',
              'Informacje biometryczne są danymi wrażliwymi',
            ],
            [
              'Wysoki stopień bezpieczeństwa w zaawansowanych systemach, np. na lotniskach.',
              'Tanie systemy łatwo oszukać, np. odblokowanie telefonu za pomocą skanu zdjęcia twarzy',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Uwierzytelnianie wieloskładnikowe',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Wykorzystanie kilku z wyżej wymienionych metod uwierzytelniających jednocześnie. Aby uzyskać dostęp podmiot musi podać dwa dowody tożsamości, np. hasło do skrzynki email (coś, co wiesz) i klucz sprzętowy (coś, co masz).',
          ],
        },
        {
          type: ContentType.TABLE,
          content: [
            ['Zalety', 'Wady'],
            [
              'Zwiększone bezpieczeństwo',
              'Utrata jednego z dowodów uniemożliwia dostęp do systemu mimo posiadania pozostałych',
            ],
          ],
        },
      ],
    },
  ],
};

const Q2: Question = {
  id: 2,
  heading: '2. Mechanizmy ochrony danych w systemach operacyjnych',
  subQuestions: [
    {
      heading: 'Źródła zagrożenia',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            'Nieuprawniony dostęp użytkownika/ów do zasobów',
            'Nieuprawniony dostęp procesu do zasobu (może skutkować uszkodzeniem danych)',
            'Ataki na system (ataki hackerskie, złośliwe oprogramowanie)',
            'Awaria sprzętu prowadząca do utraty danych',
          ],
        },
      ],
    },
    {
      heading: 'Pojęcia',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Poufność</strong> - dostęp do danych mają użytkownicy z odpowiednimi prawami dostępu',
            '<strong>Integralność</strong> - Dane nie zostaną przypadkowo zmienione, uszkodzone podczas awarii, zapisu, odczytu ',
            '<strong>Dostępność</strong> - każda osoba mająca odpowiednie prawa ma dostęp do danych',
          ],
        },
      ],
    },
    {
      heading: 'Uwierzytelnianie',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Dwa etapy: identyfikacja – podanie identyfikatora do celu rozpoznania jako istniejący użytkownik, weryfikacja – podanie hasła, które jest hashowane i porównywane z hashem przypisanym do odpowiedniego loginu. Hasła w systemach unixowych są zapisywane w dwóch plikach – password i shadow.',
            '<strong>Funkcje hashujące<strong> – algorytmy służące do przekształcania dowolnych danych wejściowych na skróconą wartość o stałej długości. Przykładowe funkcje hashujące:',
          ],
        },
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>MD5</strong> - generuje 128-bitowy skrót. Przestarzała, mało bezpieczna, podatna na ataki umożliwiające odzyskanie oryginalnych danych na podstawie skrótu, szybszy algorytm',
            '<strong>SHA-3</strong> - generuje skróty o różnych długościach (224 – 512). Bezpieczniejszy i odporniejszy na ataki kryptograficzne bo oparty na konstrukcji Keccak, wolniejszy algorytm.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Po procesie uwierzytelniania użytkownik ma dostęp tylko do tych obiektów, do których jest upoważniony.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          extraClass: 'importantNote',
          content: [
            '<strong> Wspomnieć o silnych i słabych hasłach, atakach słownikowych i siłowych.</strong>',
          ],
        },
      ],
    },
    {
      heading: 'Kontrola dostępu',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Podmioty</strong> - mające dostęp do obiektów np. terminal, użytkownik, aplikacja',
            '<strong>Obiekty</strong> - jednostki do których kontroluje się dostęp',
            '<strong>Prawa dostępu</strong> - określają sposób dostępu podmiotu do obiektu. Definiowane dla par podmiot – obiekt',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Każdy plik w systemach unixowych ma swojego właściciela i właściciela grupowego. Opisany przez 3 grupy praw dostępu: user, group, other. Podstawowe prawa dostępu: read, write, execute.',
          ],
        },
      ],
    },
    {
      heading: 'Awaria sprzętu',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'W celu uniknięcia utraty danych spowodowanych awarią sprzętu (dysku) stosuje się macierze RAID. Jest to sposób łączenia kilku dysków w jeden, zapewniających zwiększenie przepustowości, pojemności i niezawodności. Awaria jednego z dysków nie musi prowadzić do utraty danych',
          ],
        },
      ],
    },
    {
      heading: 'Typy macierzy RAID',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>RAID 0</strong> - Awaria pojedynczego dysku powoduje utratę wszystkich danych ze względu na zapis danych przy pomocy przeplotu (podział sektorów logicznych - pierwsze n na pierwszym, kolejne n na drugim itd.).',
            '<strong>RAID 1</strong> - 2 dyski, jeden jest kopią drugiego. Pojemność pojedynczego dysku, awaria nie powoduje utraty danych',
            '<strong>RAID 0+1</strong> - zapewnienie szybkości i bezpieczeństwa kosztem ilości dysków.',
            '<strong>RAID 5</strong> - 3 dyski: na jednym jest zapisywana suma kontrolna dzięki czemu tracąc jeden dysk jest możliwość odzyskania danych na podstawie pozostałych.',
            '<strong>RAID 6</strong> - 4 dyski, działanie podobne do RAID 5 ale podwójne sumy kontrolne. Awaria jednego lub dwóch dysków  nie powoduje utraty danych.',
          ],
        },
      ],
    },
    {
      heading: 'Szyfrowanie danych',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Na różnych systemach operacyjnych są dostępne narzędzia do szyfrowania danych aby uchronić je przed nieuprawnionym dostępem w przypadku kradzieży czy zgubienia sprzętu. BitLocker (Win), FileVault (Mac), Luks (Linux).',
          ],
        },
      ],
    },
    {
      heading: 'Firewall',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Kompletny system kontrolujący ruch między określonymi częściami sieci komputerowej lub program komputerowy. Służy do przepuszczania/blokowania pakietów sieciowych na podstawie określonych reguł. Dzięki niemu możliwa jest ochrona sieci lokalnej przed nieuprawnionym dostępem i jego efektami.',
          ],
        },
        {
          type: ContentType.TABLE,
          content: [
            ['Chroni', 'Nie chroni'],
            ['Nieautoryzowanym dostępem', 'Podsłuchem'],
            [
              'atakami DoS* w warstwie sieciowej',
              'ujawnieniem tajnych informacji',
            ],
            ['spoofingiem IP**', 'skryptami typu exploit'],
            [null, 'atakami DoS* w warstwie aplikacji'],
          ],
        },
        {
          type: ContentType.DIV,
          extraClass: 'annotation',
          content: [
            '<small><strong>DoS </strong>* - blokowanie usługi dużą ilością ruchu lub danych przez co użytkownik nie może z takiej usługi korzystać </small>',
            '<small><strong>IP Spoofing </strong>** - modyfikacja pakietów danych aby ukryć prawdziwe źródło pochodzenia takich pakietów</small>',
          ],
        },
      ],
    },
    {
      heading: 'Antywirus',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Program służący do wykrywania, zwalczania, usuwania i odizolowania wirusów komputerowych. Chroni system operacyjny przed złośliwym oprogramowaniem i innymi zagrożeniami.',
          ],
        },
      ],
    },
  ],
};

const Q3: Question = {
  id: 3,
  heading:
    '3. Zastosowanie łańcucha bloków do zapewnienia niezmienności rejestrów danych.',
  subQuestions: [
    {
      heading: 'Co to jest blockchain',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Zdecentralizowana i rozproszona baza danych która zazwyczaj przetrzymuje informacje o transakcjach w postaci bezpieczeństwo i ostateczność zapisanych informacji.',
            'Idea blockchain jest przeniesienie kontroli i mocy decyzyjnej z nadrzędnej jednostki na uczestników danej sieci. Kontrola i weryfikacja odbywa się przy pomocy wszystkich użytkowników takiej sieci które współpracują ze sobą.',
          ],
        },
      ],
    },
    {
      heading: 'Niezmienność',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Inicjacja transakcji zostaje przesłana do sieci. Każdy węzeł poświadcza transakcję weryfikując podpisy cyfrowe oraz inne dane transakcji. Weryfikacja transakcji opiera się o mechanizm konsensusów. Po pozytywnej weryfikacji dany blok transakcji jest dołączany do łańcucha przy pomocy metod kryptograficznych (np. funkcje skrótu SHA256).',
            'Zmiana danych danego bloku w sieci wymagałaby akceptacji 50% + 1 węzłów w sieci oraz byłaby to operacja kosztowna obliczeniowo. Sprawia to, że wprowadzanie oszustw i manipulacji jest nieopłacalne obliczeniowo a w przypadku sieci z dużą liczbą węzłów praktycznie niemozliwa do wykonania.',
          ],
        },
      ],
    },
    {
      heading: 'Budowa bloku',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          content: [
            '<strong>Nagłówek</strong> – który posiada informację o czasie utworzenia bloku, wersji bloku, hasha bloku, hasha poprzedniego bloku oraz bitu trudności',
            '<strong>Część transakcyjna</strong> – ograniczona ilośc danych, przechowywane informacje o danych odbiorcy i nadawcy, ilość przesłanych pieniędzy itd.',
          ],
        },
      ],
    },
    {
      heading: "Drzewo Merkle'a",
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Postać drzewa binarnego. Mechanizm działania polega na hashowaniu każdego poziomu drzewa. Każda transakcja jest hashowana, hashe transakcji są łączone w pary i hashowane ponownie aż do dotarcia do korzenia drzewa. Liczba transakcji w bloku (liczba poziomów) zależy od implementacji ale jest to zawsze potęga liczby 2.',
            'Zastosowanie tego mechanizmu pozwala szybko znaleźć błąd/zmianę w bloku – wprowadzenie zmiany w jednej transakcji powoduje konieczność zmiany wszystkich hashy zależnych od zmienionego hasha transakcji. Znalezienie błędu opiera się na porównaywaniu hashy między odpowiadającymi sobie blokami z różnych baz i wyznaczeniu drzewa w którym błąd się rozpoczął a następnie sprawdzanie wężłów w drzewie od korzenia do liści tak aby znaleźć niewłaściwą transakcję. ',
            'Operowanie na skrótach transakcji powoduje że proces ma niski koszt obliczeniowy oraz jest szybki w działaniu.',
          ],
        },
      ],
    },
    {
      heading: 'Konsensusy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Służą do zatwierdzania transakcji',
            '<strong>Proof of work</strong> – proces kosztowny obliczeniowo polegający na znalezieniu wartości nonce. W tym procesie biorą udział wszystkie węzły w sieci chcące otrzymać nagrodę. Każda generacja bloku jest nagradzana za wygenerowanie nowego bloku. Proces ma charakter wyścigu.',
            '<strong>Proof of stake</strong> – wszystkie tokeny są tworzone na samym początku. Twórca kolejnego bloku (węzeł wyznaczający wartość nonce) w sieci jest wybierany na zasadzie loterii w której liczba losów jest zależna od inwestycji danego węzła w losowaniu. W tym przypadku nie ma nagrów ale są opłaty od wykonania transakcji. Proces dużo mniej kosztowny obliczeniowo i nie wymaga uczestnictwa wszystkich węzłów danej sieci. ',
          ],
        },
      ],
    },
    {
      heading: 'Zastosowania',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Kryptowaluty – tworzenie walut cyfrowych oraz przetrzymywanie informacji o transakcjach',
            'Tożsamość cyfrowa – odporna na manipulacje, służąca do weryfikacji danych osobowych oraz innych danych wrażliwych.',
            'Głosowanie – gwarancja decentralizacji oraz odporność na manipulację może zapewnić dobre działanie przy wykorzystnaiu blockchain do głosowania. Stworzyłoby to bezpieczny i przejrzysty system eliminujący możliwość oszustwa wyborczego i zapewniloby uczciwość samej procedury.',
          ],
        },
      ],
    },
  ],
};

const Q4: Question = {
  id: 4,
  heading: '4. Koncepcja sieci sterowanych programowo',
  subQuestions: [
    {
      heading: 'Co to jest SDN',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>SDN</strong> to koncepcja architektury sieci polegająca na wydzieleniu z urządzenia sieciowego inteligentnego tj. zarządczosterującego komponentu i pozostawienie dla tego urządzenia wyłącznie zadań polegających a przesyłaniu danych w pakietach między portami.',
          ],
        },
      ],
    },
    {
      heading: 'Modele',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Open SDN</strong> wykorzystanie OpenFlow do kontrolowania zachowania fizycznych i wirtualnych przełączników,',
            '<strong>SDN by APIs</strong> sterowanie przepływem w sieci przez interfejsy API poszczególnych urządzeń',
            '<strong>Overlay SDN Model</strong> tworzenie wirtualnej sieci na istniejącej infrastrukturze sprzętowej; urządzenia końcowe przypisywane do dynamicznych tuneli, którym indywidualnie przydzielana jest przepustowość; sieć fizyczna pozostaje nietknięta',
            '<strong>Hybrid SDN</strong> SDN współistniejący z innymi protokołami.',
          ],
        },
      ],
    },
    {
      heading: 'OpenFlow',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Definiuje interfejs między kontrolerem sieci a urządzeniami sieciowymi tj. przełączniki, routery. Dzięki temu interfejsowi, kontroler może programować przepływ ruchu sieciowego, określać priorytety, a także monitorować i analizować ruch sieciowy.',
            'W ramach protokołu OpenFlow definiuje się strukturę przepływów (flow table), która jest przechowywana na urządzeniach sieciowych. Przepływy te określają, jakie pakiety powinny być przekazywane, a jakie odrzucane na podstawie określonych kryteriów tj. adres IP, port źródłowy i docelowy, protokół i wiele innych. ',
          ],
        },
      ],
    },
    {
      heading: 'Konstrukcja SDN',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          content: [
            '<strong>Aplikacji</strong> dostarczanie otwartych programowalnych interfejsów do orkiestracji usług sieciowych',
            '<strong>Zarządzania</strong> rozdzielanie płaszczyzn danych i zarządzania; łączenie płaszczyzn zarządzania wielu urządzeń do jednej',
            '<strong>Warstwa infrastruktury</strong> bazujący na otwartych standardach programowalny dostęp do infrastruktury',
          ],
        },
      ],
    },
    {
      heading: 'Tablica przepływu',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Każda pozycja w tablicy przepływów zawiera zestaw instrukcji, które są wykonywane gdy pakiet pasuje do danej pozycji. Instrukcje powodują zmiany w przetwarzaniu pakietów albo uruchomienie zestawu działań potoku.',
            'Przy pomocy instrukcji WriteAction i CleanActions można modyfikować akcje. Zestaw przenoszony jest pomiędzy tabelami przepływu. ',
          ],
        },
        {
          type: ContentType.ORDERED_LIST,
          content: [
            'Czytane są pola nagłówków',
            'Szukamy dopasowania o najwyższym priorytecie',
            'W zależności co zostanie wybrane odpalane są instrukcje z tabeli',
            'Jeśli nic nie zostanie znalezione to table-miss flow entry',
          ],
        },
      ],
    },
    {
      heading: 'Podsumowanie',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Ogólna idea SDN zakłada możliwość globalnego zarządzania siecią przez logiczną centralizacje funkcji kontrolnych pozwalającą na sterowanie wieloma urządzeniami sieciowymi tak, jakby był to jeden element infrastruktury. Przepływy są kontrolowane na poziomie abstrakcyjnej sieci globalnej niezwiązanej z pojedynczymi urządzeniami najczęściej przy wykorzystaniu protokołu OpenFlow. ',
            'Koncepcja zakłada jeden/wiele kontrolerów jest odpowiedzialnych za monitorowanie i sterowanie przełącznikami które pozostają jedynie maszynami wykonawczymi służącymi do przełączanie określonych ramek/pakietów z danymi. Dzięki temu możliwe jest bardzo szybkie wdrożenie nowych usług, aplikacji we współdzielonym środowisku z zapewnieniem, aby każda usługa, aplikacja działając fizycznie na tych samych urządzeniach pracowała w środowisku zwirualizowanym w sposób sprawny, szybki, odizolowany i bezpieczny',
          ],
        },
      ],
    },
  ],
};

const Q5: Question = {
  id: 5,
  heading:
    '5. Metody i narzędzia wykorzystywane w opisywaniu procesów biznesowych',
  subQuestions: [
    {
      heading: 'Co to jest proces biznesowy?',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Seria połączonych ze sobą działań, zadań, które rozwiązują określony problem lub prowadzą do osiągnięcia określonego efektu. Wynika z potrzeb klienta a jego wynikiem jest ich zaspokojenie. Można go podzielić na podprocesy o własnych atrybutach dających wkład w rezultat procesu nadrzędnego. ',
          ],
        },
      ],
    },
    {
      heading: 'Typy procesów biznesowych',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Procesy operacyjne </strong> - generują wartość dodaną i są postrzegane przez klienta jako najważniejsze (zaopatrzenie,produkcja, marketing, sprzedaż).',
            '<strong>Procesy pomocnicze </strong> – wspomaga procesy operacyjne (księgowość, rekrutacja, wsparcie techniczne) ',
            '<strong>Procesy zarządzania</strong> - kieruje działaniem systemu, strategiczne oddziaływanie na wartość dodaną – (zarządzanieprzedsiębiorstwem, zarządzanie strategiczne).',
          ],
        },
      ],
    },
    {
      heading: 'Wymagane cechy procesu biznesowego',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Definiowalność</strong> - jasno zdefiniowane granice - wejście/wyjście',
            '<strong>Porządek</strong> - działania uporządkowane według ich usytuowania w czasie i przestrzeni',
            '<strong>Klient</strong> - odbiorca rezultatów procesu',
            '<strong>Zwiększenie wartości</strong> - transformacja w trakcie procesu musi dawać odbiorcy dodatkową wartość',
            '<strong>Osadzenie</strong> - proces nie może egzystować samodzielnie, musi być wbudowany w strukturę organizacyjną',
            '<strong>Wielofunkcyjność</strong> - może ale nie musi obejmować wiele funkcji',
          ],
        },
      ],
    },
    {
      heading: 'Metody',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>SOA</strong> - koncepcja stawiająca nacisk na definiowanie usług spełniających wymagania użytkowników. Obejmuje zestaw metod organizacyjnych, technicznych mający na celu powiązanie biznesowej strony organizacji z jej zasobami informatycznymi. ',
            '<strong>(WS)BPEL</strong> - tekstowy sposób opisu procesu oparty o format XML. Umożliwia realizację architektury SOA. Pozwala opisać orkiestrację, choreografię usługi typu Web Services.',
            '<strong>BPMN </strong> - notacja graficzna opisu procesu. Realizuje architekturę SOA. Opisuje kroki, zdarzenia, logikę. Odzwierciedla przepływ, komunikację i istotne dane.',
            '<strong>UML </strong> - notacja graficzna, zorientowana na modelowanie obiektowo. Składa się z szeregu diagramów wystarczających na kompleksowy opis systemu informatycznego i jego procesów. Diagramy dzielą się na: strukturalne, behawioralne, interakcji. Przykładami są: diagram przypadków użycia, diagram sekwencji.',
          ],
        },
      ],
    },
  ],
};

const Q6: Question = {
  id: 6,
  heading:
    '6. Bezpieczeństwo komunikacji bezprzewodowej i transakcji sieciowych',
  subQuestions: [
    {
      heading: 'Zabezpieczenia',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Szyfrowanie blokowe</strong> - podział wiadomości na bloki i określonej długości a następnie wykonanie operacji kryptograficznych na każdym z bloków. Operacje to podstawienie – zastąpienie jednej grupy znaków inną, przestawienie – permutacja grup znaków. Przykłady do DES, AES',
            '<strong>Szyfrowanie strumieniowe</strong> - bloki o długości jednego znaku na którym wykonywana inne przekształcenie z wykorzystaniem różnych kluczy.',
            '<strong>RSA</strong> - jeden z najbardziej popularnych i powszechnie używanych szyfrów z kluczem publicznym. Asymetryczny algorytm kryptograficzny umożliwiający szyfrowanie i deszyfrowanie danych oraz podpisywanie cyfrowe.',
            '<strong>WPA2/WPA3</strong> - standard szyfrowania wykorzystywany w sieciach bezprzewodowych. Różnica polega na metodzie szyfrowania',
            '<strong>SSH</strong> - protokół komunikacyjny w którym wszelkie dane są szyfrowane a uwierzytelnianie zachodzi na wielu poziomach. Relacja klient-server.',
            '<strong>VPN</strong> - wirtualna sieć prywatna chroniąca połączenie internetowe i zachowuje prywatność online przy tworzeniu zaszyfrowanego tunelu dla danych. Dodatkowo pozwala ukryć adres IP.',
            '<strong>Firewall</strong> - służy do kontrolowania ruchu sieciowego. Blokowanie nieuprawnionego dostępu.',
          ],
        },
      ],
    },
    {
      heading: 'Niebezpieczeństwa',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Man-in-the-middle</strong> - przechwytywanie niezbędnych do wykonania transakcji danych. Kradzież środków, tożsamości. Przechwycenie komunikacji i przekonanie użytkownika że strona na którą się loguje jest tą właściwą (a jest spreparowana). ',
            '<strong>Sniffing</strong> - podsłuch nieszyfrowanych transmisji w celu uzyskania danych logowania',
            '<strong>Evil twin</strong> - podsatwienie urządzenia symulującego Access Point do zbierania danych',
            '<strong>Spoofing</strong> - podszywanie pod jakiś podmiot aby wykraść dane lub uzyskać dostęp do kont ofiary.',
            '<strong>DDoS</strong> - zakłócenie działania usług',
          ],
        },
      ],
    },
    {
      heading: 'Transakcje sieciowe',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            'Logowanie na fałszywych stronach podszywających się pod inne (np. Bank)',
            'Podmiana numerów kont w transakcjach',
            'Phishing',
            'Kradzież danych logowania, osobowych, karty kredytowej',
            'Spam',
            'Nieuczciwi sprzedawcy',
          ],
        },
      ],
    },
  ],
};

const Q7: Question = {
  id: 7,
  heading: '7. Analiza systemowa z wykorzystaniem sieci Petriego',
  subQuestions: [
    {
      heading: 'Co to sieci Petriego',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Matematyczna reprezentacja systemów rozproszonych. Umożliwia badanie zjawisk współbieżnych zachodząchych w systemach wzajemnie się warunkujących w czasie. Uogólnia ona teorię automatów',
          ],
        },
      ],
    },
    {
      heading: 'Elementy sieci',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Miejsca</strong> - warunki',
            '<strong>Przejścia</strong> -  zdarzenia',
            '<strong>Łuki</strong> -  związki między warunkami a zdarzeniami',
            '<strong>Łuki Czasowe</strong> -  podany czas przejścia uzależniony od wieku znaczników.',
            '<strong>Łuki Hamujące</strong> -  zatrzymują przejścia jeśli w miejscu je poprzedzającym jest tyle samo lub więcej znaczników niż wynosi waga łuku',
          ],
        },
      ],
    },
    {
      heading: 'Rodzaje',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Uogólnione stochastycznie</strong> - sieci posiadające dwa rodzaje przejść – natychmiastowe i czasowe',
            '<strong>Natychmiastowe</strong> - czas odpalenia jest zerowy, wykonywane w kolejności losowej (chyba że przejścia mają ustalony priorytet)',
            '<strong>Czasowe</strong> - podany czas odpalenia określany przy pomocy parametru lambda. Im większa wartość parametru tym większe prawdopodobieństwo odpalenia przejścia',
          ],
        },
      ],
    },
    {
      heading: 'Właściwości sieci',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Osiągalność</strong> - sprawdzanie, czy dany stan jest osiągalny ze stanu początkowego (tzn. czy istnieje skończona liczba przejść, która prowadzi od znakowania początkowego do znakowania badanego).',
            '<strong>Ograniczoność</strong> - liczba znaczników w danym miejscu jest ograniczona.',
            '<strong>Zachowawczość</strong> - sieć Petriego jest zachowawcza, jeżeli liczba występujących w niej znaczników jest stała.',
            '<strong>Żywotność</strong> - określa liczbę możliwych wykonań przejścia. Sieć jest żywa, jeżeli z każdego oznakowania można osiągnąć inne oznakowania.',
            '<strong>Odwracalność</strong> - sieć jest odwracalna, jeżeli stan początkowy sieci jest osiągalny z każdego oznakowania',
          ],
        },
      ],
    },
    {
      heading: 'Stany sieci',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Początkowy</strong> - początkowy stan rozproszenia tokenów',
            '<strong>Osiągalny</strong> - stan osiągalny ze stanu początkowego',
            '<strong>Martwy</strong> - stan w którym nie ma aktywnych przejść',
            '<strong>Końcowy</strong> - stan w którym brak aktywnych przejść',
            '<strong>Bezpieczny</strong> - stan osiągalny ze wszystkich innych stanów',
          ],
        },
      ],
    },
    {
      heading: 'Własności behawioralne',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Ograniczoność</strong> - jest ograniczona jeśli liczba żetonów w żadnym miejscu nie będzie większa niż k dla wszystkich stanów osiągalnych ze stanu początkowego. Jeśli k = 1 to sieć bezpieczna.',
            '<strong>Osiągalność</strong> - stan osiągalny jeśli możliwe jest przejście ze stanu początkowego',
            '<strong>Żywotność</strong> - każde przejście ma szansę się wykonać',
            '<strong>Zakleszczenie</strong> - jeśli jest możliwe przejście do stanu martwego',
          ],
        },
      ],
    },
    {
      heading: 'Metody analizy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Graf osiągalności</strong> - opiera się o drzewo osiągalności poprzez scalenie duplikujących się wierzchołków. Ze stanu początkowego odpala się wszystkie możliwe przejścia prowadzące do osiągalnych znakowań tworzących węzły grafu. Może być nieskończone',
            '<strong>Graf pokrycia</strong> - otrzymywane z drzewa pokrycia poprzez scalenie duplikujących się wierzchołów. Możliwe jest badanie sieci o nieskończonym zbiorze znakowań',
            '<strong>Macierz incydencji</strong> - definiowanie macierzy wejść/wyjść. W macierzy liczba wierszy to liczba miejsc, liczba kolumn to liczba przejść',
            '<strong>Drzewo osiągalności</strong> - ze stanu początkowego odpala się wszystkie możliwe przejścia które prowadzą do osiągalnych znakowań tworząc węzły gafu',
          ],
        },
      ],
    },
  ],
};

const Q8: Question = {
  id: 8,
  heading: '8. Weryfikacja modelowa z zastosowaniem logiki temporalnej',
  subQuestions: [
    {
      heading: 'Pojęcia',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Logika temporalna</strong> pozwala na wnioskowanie z uwzględnieniem czasu, przypisując wartości logiczne do wyrażeń. Opisuje jak statyczne stany zmieniają się w czasie.',
            '<strong>Weryfikacja modelowa</strong> to technika analizy i sprawdzenia poprawności systemów opartych na czasie. Logika temporalna pozwala na wyrażanie właściwości czasowych i relacji między zdarzeniami w systemie. Podczas weryfikacji model systemu reprezentowany jest w postaci grafu skierowanego w którym wierzchołki reprezentują stany systemu a krawędzie reprezentują przejścia między stanami. Właściwości temporalne są wyrażane za pomocą formuł logiki temporalnej i sprawdzane na grafie.',
            '<strong>Wyrażenie atomowe</strong> – niepodzielne na inne, pomniejsze wyrażenia',
            '<strong>Relacje</strong> - Koniunkcja, negacja, alternatywa, implikacja, równoważność',
          ],
        },
      ],
    },
    {
      heading: 'Czas',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            'Ciągły i dyskretny',
            'Skończony i nieskończony',
            'Liniowy, rozgałęziony, równoległy',
            'Punktowy i przedziałowy',
          ],
        },
      ],
    },
    {
      heading: 'Własności współbieżnych programów',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>bezpieczeństwo</strong> (zdarzenie spełnione w każdym momencie),',
            '<strong>osiągalność</strong> (zdarzenie spełnione w pewnym momencie),',
            '<strong>odpowiedź </strong>(zdarzenie spełnione od czasu do czasu),',
            '<strong>trwałość</strong> (od pewnego momentu zdarzenie jest spełnione w każdym momencie),',
            '<strong>żywotność</strong> (zdarzenie jest osiągalne jako skutek)',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Automat skończenie stanowy</strong> – abstrakcyjna maszyna stanów o skończonej liczbie stanów i przejść. Posiada stanypoczątkowe, może posiadać stany końcowe. Przejścia między stanami odpalane deterministycznie.',
          ],
        },
      ],
    },
    {
      heading: 'Rodzaje logiki',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>LTL</strong>    – dyskretny, lewostronnie skończony, liniowy, punktowy,',
            '<strong>CTL</strong>    – dyskretny, lewostronnie skończony, rozgałęziony, punktowy,',
            '<strong>RTCTL</strong>  – wartości czasu dane są ilościowo jako stałe,',
            '<strong>PRTCTL</strong> – wartości czasu dane są ilościowo jako zmienne,',
            '<strong>ILT</strong> – dyskretny, skończony/nieskończony, liniowy, przedziałowy',
          ],
        },
      ],
    },
    {
      heading: 'Operatory temporalne',
      sections: [
        {
          type: ContentType.TABLE,
          content: [
            ['Podstawowe', 'W logice CTL'],
            ['U - dopóki', 'A - dla każdej możliwej ścieżki'],
            ['X - następnie', 'E - dla pewnej możliwej ścieżki'],
            ['G - zawsze', null],
            ['F - kiedyś', null],
          ],
        },
      ],
    },
    {
      heading: 'Zastosowanie w systemach',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Współbieżnych</strong> - składają się z procesów wykonywanych jednocześnie, mających dostęp do wspólnych danych, potencjalnie współdziałających ze sobą',
            '<strong>Reaktywnych</strong> - działają na zasadzie akcja-reakcja, wobec pojawiających się okoliczności, np.: kontrolujące reaktor elektryczny, silnik w maszynie lub ruch lotniczy',
          ],
        },
      ],
    },
    {
      heading: 'Narzędzia modelowej weryfikacji',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Upaal</strong> służy do modelowania i analizy systemów czasu rzeczywistego w tym programów współbieżnych. Pozwala na graficzne modelowanie jako skończenie stanowe automaty oraz używanie automatów czasowych. Pozwala graficznie symulować możliwe przebiegi automatów. Pozwala na specyfikowanie własności systemu jako formuł CTL oraz weryfikację pewnych własności modelu.',
            '<strong>NuSMV</strong> to program będący symbolicznym weryfikatorem modelowym. Sprawdza czy model skończenie stanowy spełnia założone wymagania. Opisywany jest językiem SMV. Ma wsparcie dla logiki LTL, CTL, LTL-, RTCTL. Jest przedstawiany przy pomocy skrytpu.',
          ],
        },
      ],
    },
  ],
};

const Q9: Question = {
  id: 9,
  heading: '9. Definicja i zadania eksploracji danych',
  subQuestions: [
    {
      heading: 'Definicja',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Eksploracja danych</strong> proces odkrywania uogólnionych reguł i wiedzy zawartej w bazach danych. Opiera się o metody statystyczne i techniki sztucznej inteligencji. Wiedza nie wynika bezpośrednio z danych ale z faktu że właśnie takie dane znalazły się razem w jednym miejscu.',
            'Wykrywa współzależności oraz tendencje na podsatwie zgromadzonych danych za pomocą technik statystycznych, matematycznych i rozpoznawania prawidłowości występujących w danych.',
            'Dodatkowo eksploracja danych jest:',
          ],
        },
        {
          type: ContentType.BULLET_LIST,
          content: [
            'klasycznym narzędziem do generowania sprawozdań i analizy',
            'automaycznym procesem nie wymagającym nadzoru',
            'pozwala wyszukiwać problemy przedsiębiorstwa lub biznesowe',
            'jest szybkim procesem.',
          ],
        },
      ],
    },
    {
      heading: 'Modele eksploracji danych - cz. 2',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          heading: 'DMAIC',
          content: [
            'Definiowanie (cel i identyfikacja problemów)',
            'Pomiar (informacje o aktualnym stanie procesu)',
            'Analiza (definicja krytycznych przyczyn problemów, uzasadnienie wpływu)',
            'Usprawnienie (wprowadzenie odpowiednich rozwiązań)',
            'Kontrola',
          ],
        },
        {
          type: ContentType.ORDERED_LIST,
          heading: 'VcofDM',
          content: [
            'Identyfikacja problemów biznesowych',
            'Przekształcanie danych w informacje',
            'Podjęcie działań',
            'Mierzenie i ocena wyników',
          ],
        },
      ],
    },
    {
      heading: 'Modele eksploracji danych - cz. 1',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          heading: 'CRISP-DM',
          content: [
            'Zrozumienie uwarunkowań biznesowych',
            'Zrozumienie danych',
            'Przygotowanie danych',
            'Modelowanie (wyubór techniki)',
            'Ewaluacja (ocena modelu)',
            'Wdrożenie',
          ],
        },
        {
          type: ContentType.ORDERED_LIST,
          heading: 'SEMMA',
          content: [
            'Próbkowanie (wykorzystanie części danych)',
            'Eksplorowanie',
            'Manipulacja',
            'Modelowanie',
            'Ocena',
          ],
        },
      ],
    },
    {
      heading: 'Metody eksploracji danych',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Klastrowanie</strong> - głównym celem tych metod jest odnajdowanie w bazie danych skończonych zbiorów klas obiektów, czyli klastrów, posiadających podobne cechy. Owy proces klastrowania przebiega bardzo często w dwóch cyklach: cykl zewnętrzny, który przebiega po liczbie możliwych klastrów; cykl wewnętrzny, próbujący odnaleźć optymalny podział między klastry',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Odkrywanie asocjacji</strong> - jest to najrozleglejsza klasa metod. Obejmuje odkrywanie różnego rodzaju nieznanych współzależności w bazie danych. Jest to przede wszystkim odkrywanie asocjacji między obiektami.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Odkrywanie wzorców sekwencji</strong> - czyli odkrywanie wzorców zachowań czasowych, na przykład sekwencja notowań giełdowych, zachowania klientów supermarketów.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Wykrywanie zmian i odchyleń</strong> - odnajdywanie różnic pomiędzy oczekiwanymi a aktualnymi wartościami danych, na przykład odnajdywanie anomalnych zachowań klientów firm telekomunikacyjnych.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Odkrywanie zbieżności w przebiegach czasowych </strong> - odnajdywanie podobieństw w czasowych przebiegach, które opisują określone procesy.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Odkrywanie klasyfikacji</strong> - do głównego celu tych metod należy odnajdywanie zależności między klasyfikacją danych obiektów (taką wprowadzoną przez eksperta lub naturalną) a ich charakterystyką',
          ],
        },
      ],
    },
  ],
};

const Q10: Question = {
  id: 10,
  heading: '10. Cel i metody redukcji wymiarowości danych',
  subQuestions: [
    {
      heading: 'Definicje',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Dane masywne</strong>, inaczej Big data (3V – Volume, Velocity, Variety) są związane z eksploracją danych. Składają się z dużej iczby obserwacji i/lub atrybutów. Mogą składać się z danych multimedialnych.',
            '<strong>Wymiarowośc danych</strong> – liczba atrybutów, cech, kolumn.',
          ],
        },
      ],
    },
    {
      heading: 'Zalety redukcji wymiarowości',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Uniknięcie klątwy wymiarowości</strong> - zbyt duża liczba cech opisujących dane. Wzrost liczby atrybutów wymaga wykładniczo rosnącej liczby rekordów do poprawnej reprezentacji cech. Duża liczba atrybutów wymaga tworzenia modeli o dużej liczbie parametrów i w efekcie naraża je na przeuczenie i utrudnia zdolności generalizujące.',
            '<strong>Uniknięcie przeuczenia modeli</strong> - zbytnie dopasowanie się modelu do danych uczących skutkuje bardzo niską sprawnością podczas pracy w rzeczywistymi danymi.',
            '<strong>Ułatwienie wizualizacji danych</strong>',
            '<strong>Usuwanie szumu</strong>',
            '<strong>Znajdowanie faktorów</strong> - czyli niewystępujące w zbiorze danych niejawne cechy będące kombinacjami istniejących atrybutów danych.',
            '<strong>Zmniejszenie złożoności czasowej i pamięciowej</strong>',
          ],
        },
      ],
    },
    {
      heading: 'Selekcja cech',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Wybranie cech uznanych za najbardziej przydatne pod kątem rozwiązywanego problemu i odrzucenie pozostałych. Cechy redundantne to takie, które niosą informacje jak inne istniejące.',
            '<strong>Filtry</strong> – cechy oceniane według wybranego kryterium, następnie sortowane jego wartości. Pozostawione zostaną najlepsze cechy w rankingu. Kryterium oceny to np. korelacja Pearsona.',
            '<strong>Wrappery</strong> – selekcja cech poprzez uczenie i walidowanie wielu modeli dla przypadków różnych cech wejściowych. Model o najkorzystniejszej sprawności podczas walidacji zostaje wybrany jako finalny model. Selekcja połączona z przygotowaniem właściwego modelu. Bardziej złożone obliczeniowo niż filtry.',
          ],
        },
      ],
    },
    {
      heading: 'Ekstrakcja cech',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Polega na utworzeniu nowych cech na podstawie oryginalnych. Możliwość otrzymania taką samą lub większą liczbę cech niż na początku',
            '<strong>PCA</strong> - dane wejściowe przekształcane na składowe główne odpowiadające kierunkom maksymalnej wariancji danych. Możliwość wyboru pierwszych k-składowych skutkuje zmniejszeniem wymiarowości danych. Często wykorzystywana przed grupowaniem danych. W trakcie przeprowadzany jest rozkład macierzy kowariancji na wektory i wartości własne. Przykładowe zastosowania to redukcja szumów, rozpoznawanie twarzy, kompresja danych. Ograniczenia w postaci trudności interpretacji wyników, wrażliwość na błędy grube, założenie liniowych zależności między danymi.',
            '<strong>NMF</strong> - wiele algorytmów realizujących zadanie, należy do zadań optymalizacyjnych NP trudnych. Dekompozycja na nieujemne macierze cech oraz wag. Zastosowania to ekstrakcja cech ze spektrogramu, z dokumentu tekstów, systemy rekomendacji.',
            '<strong>Metody dekompozycji tensorów</strong> - mody tensora stosowane zamiast określania wymiaru, modele dekompozycji to CP, Tuckera, matrycyzacja tensora. ',
            '<strong>LDA</strong> - przygotowanie danych pod kątem klasyfikacji. Znalezienie kombinacji cech najlepiej rozróżniających klasy obiektów. Minimalizacja wariancję między obiektami jednej klasy, maksymalizacja wariancji między obiektami różnych klas.',
          ],
        },
      ],
    },
  ],
};

const Q11: Question = {
  id: 11,
  heading:
    '11. Budowa i metody programowania potoku graficznego współczesnych akceleratorów graficznych',
  subQuestions: [
    {
      heading: 'Architektura GPU',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>BIOS karty</strong> - umożliwia działanie karty graficznej zanim zostanie wczytany system operacyjny oraz pozwala na wykonywanie instrukcji karty przez oprogramowanie systemowe.',
            '<strong>Złącze magistrali wejścia/wyjścia</strong> - złącze na płycie głównej umożliwiający komunikację GPU z pozostałymi komponentami komputera',
            '<strong>Pamięć RAM</strong> - pamięć operacyjna stanowiąca przestrzeń roboczą procesora GPU, przechowuje aktualnie przetwarzane dane graficzne. Od wielkości pamięci RAM karty zależy liczba wyświetlanych kolorów w grafice 2D oraz jakość i rozmiary nanoszonych tekstur w grafice 3D.',
            '<strong>Procesor graficzny GPU</strong> - główna jednostka obliczeniowa karty graficznej, zbudowana z tysięcy rdzeni ',
            '<strong>Konwerter cyfrowo-analogowy RAMDAC</strong> - zamienia sygnał cyfrowy generowany przez kartę graficzną na sygnał analogowy (w którym napięcie elektryczne jest proporcjonalne do wartości reprezentowanej liczby cyfrowej), możliwy do wyświetlenia na analogowym ekranie. ',
            '<strong>Zestaw wyjść</strong> - Cyfrowe (HDMI, DVI. DisplayPort), Analogowe (D-SUB, VGA)',
          ],
        },
      ],
    },
    {
      heading: 'Programowanie potoku graficznego',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Potok graficzny</strong> to droga przepływu danych pomiędzy interfejsem karty graficznej a buforem ramki.',
            '<strong>Bufor ramki</strong> jest częścią pamięci RAM karty graficznej przeznaczoną do przechowywania informacji o pojedynczej ramce (klatce) obrazu. W buforze przechowywane są informacje o wartości każdego piksela tworzącego ramkę. ',
            'Potok graficzny dzieli się na 3 części:',
          ],
        },
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Aplikacja</strong> - Program komputerowy, pozwalający na wyświetlanie, lub manipulację obiektami sceny 3D, ustawianie animacji, tekstur i zależności w świecie. ',
            '<strong>Przekształcenia geometryczne</strong> - dane odczytane z aplikacji są przetwarzane w celu uzyskania wymaganych efektów wizualnych. ',
            '<strong>Rasteryzacja</strong> - Operacje wykonywane w celu wyliczenia koloru każdego piksela w wyjściowym obrazie i umieszczenie ich w buforze ramki ',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Programowanie potoku umożliwia implementację dowolnych modyfikacji potoku przy pomocy API lub przez programowanie jednostek zwanych shaderami. 2 główne API graficzne:',
            '<strong>DirectX</strong> – product firmy Microsoft, dostępny dla systemów Windows oraz Xbox. Obsługa grafiki i dźwięku, ukierunkowany na rozrywkę. Jest programem',
            '<strong>OpenGL</strong> – bilbioteka opensource, dostępna na wielu systemach operacyjnych, zapewniana bezpośrednio przez producentów sprzętu w sterownikach. Obsługuje grafikę i jest ukierunkowana na aplikacje związane z grafiką',
          ],
        },
      ],
    },
    {
      heading: 'Potok w OpenGL',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          content: [
            '<strong>Vertex Data</strong> - wczytanie danych',
            '<strong>Vertex Shader (Edytowalny)</strong> - program wywoływany dla każdego wierzchołka. Celem jest przekształcenie wierzchołków do współrzędnych ekranu i dodatkowe przekształcenia pozycji. ',
            '<strong>Geometry Shader (Edytowalny)</strong> - Tworzenie nowych obiektów geometrycznych i dodawanie lub usuwanie wierzchołków w celu uzyskania określonej szczegółowości detali w siatce ',
            '<strong>Clipping</strong> - automatyczny proces usuwanie niewidocznych obiektów ',
            '<strong>Rasterization</strong> - Określanie, który piksele rzutni są pokryte kształtami. ',
            '<strong>Fragment Shader (Edytowalny)</strong> - Program wykonywany dla każdego fragmentu powstałego w rasteryzacji. Programista ustala zależności fragmentów, które ostatecznie tworzą piksel.',
          ],
        },
      ],
    },
  ],
};

const Q12: Question = {
  id: 12,
  heading: '12. Cechy i realizacja transakcji w rozproszonych bazach danych',
  subQuestions: [
    {
      heading: 'Definicje',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Rozproszona baza danych </strong> – poszczególne węzły są zdecentralizowane dostępne na wielu serwerach. Kieruje nimi system zarządzania który służy do łączenia autonomicznych baz w jedną całość. Zapewnia spójność danych.',
            '<strong>Transakcje rozproszone</strong>  – transakcja której podstawowe metody odwołują się do tabel znajdujących się w co najmniej dwóch węzłach bazy. Jest reprezentowana przez zbiór transakcji lokalnych. Istnieje możliwość wykonywania transakcji współbieżnych które zwiększają wydajność ale wymagają odpowiednich mechanizmów synchronizacji dostępu do wspólnych zasobów. Jednoczesna modyfikacja tych samych danych przez różne transakcjie może doprowadzić do błędów i niespójności danych.',
          ],
        },
      ],
    },
    {
      heading: 'Cechy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Atomowość</strong> – transakcje wykonywane atomowo. Wszystkie operacje muszą zostać wykonanane w ramach transakcji lub żadna nie może mieć miejsca. W przypadku błędu nastepuje wycofanie transakcji i przywrócenie do pierwotnego stanu',
            '<strong>Spójność</strong>  – transakcje musza utrzymywać spójność danych. Po zakończeniu transakcji baza danych powinna być w spójnym i zgodnym stanie z określonymi ograniczeniami i regułami integralności.',
            '<strong>Izolacja</strong>  – transakcje powinny być odizolowane od siebie. Działanie jednej transakcji nie powinno mieć wpływu na działanie innej transakcji. Minimalizacja konfliktów i niejednoznaczności przez jednoczesne transakcje.',
            '<strong>Trwałość</strong>  – po zatwierdzeniu transakcji jej efekty powinny być trwałe i nieodwracalne nawet w przypadku awarii.',
          ],
        },
      ],
    },
    {
      heading: 'Realizacja transakcji',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Protokoły rozproszonego zarządzania transakcjami</strong> - protokoły zarządzające zapewniają koordynację między węzłami w celu utrzymania cech ACID.',
            '<strong>Replikacja danych</strong> - utrzymanie kopii danych na różnych węzłach. Transakcje wykonywane na jednej replice, zmiany następnie propagowane w sposób synchroniczny lub asynchroniczny.',
            '<strong>Protokół blokowania dwufazowego</strong> - pierwsza faza opiera się na blokowaniu transakcji. W drugiej fazie następuje zatwierdzenie lub wycofanie transakcji i jednoczesne zwolnienie blokady.',
            '<strong>Protokół zatwierdzania dwufazowego</strong> - pierwsza faza przygotowuje transakcje lokalne do zatwierdzenia lub wycofania. W drugiej fazie następuje zatwierdzenie lub wycofanie transakcji oraz usuwane są z systemu informacje o niej + zwalnianie zasobów.',
          ],
        },
      ],
    },
    {
      heading: 'Zatwierdzanie dwufazowe',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          content: [
            'Koordynator wysyła do wszystkich węzłów komunikat PREPARE',
            'Węzły podejmują lokalnie decyzję zatwierdzenia lub wycofania (prepare, abort), zapisują odpowiedni rekord w dzienniku i wysyłają do koordynatora komunikat yes/no',
            'Koordynator po uzyskaniu jednomyślnej odpowiedzi zapisuje odpowiedni rekrod do swojego dziennika (commit. Abort) i wysyła do wszystkich węzłów komunikat commit/abort',
            'Węzły zapisują do dziennika rekord abort/commit/end, kończą transakcję i wysyłają do koordynatora komunikat ack',
            'Po otrzymaniu wszystkich potwierdzeń koordynator zapisuje rekord end i kończy transakcję usuwając o niej informacje z bufora.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Dwufazowość – głosowanie i kończenie inicjowane przez koordynatora. ',
            'Brak odpowiedzi z dowolnego węzła może skutkować wycofaniem',
            'Każdy węzeł może zdecydować o wycofaniu transakcji przed lub w trakcie fazy głosowania',
          ],
        },
      ],
    },
  ],
};

const Q13: Question = {
  id: 13,
  heading: '13. Modele cyklu życia oprogramowania',
  subQuestions: [
    {
      heading: 'Model kaskadowy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Tradycyjny, sekwencyjny model w którym etapy projektowania, implementacji, testowania i wdrożenia następują po sobie w liniowym porządku. Każdy etap musi być zakończony przed rozpoczęciem następnego. ',
            'Zalety – identyfikacja podstawowych faz rozwoju oprogramowania  i uporządkowanie procesu tworzenia (ułatwia planowanie i zarządzanie)',
            'Wady – Rygorystyczne określenie następstw faz, brak elastyczności',
          ],
        },
      ],
    },
    {
      heading: 'Model spiralny',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Model łączący aspekt modelu kaskadowego z iteracyjnym podejściem. Wykonywanie serii cykli w których każdy obejmuje analizę wymagań, projektowanie, implementację i testowanie. Cykl rozpoczyna się analizą i identyfikacją ryzyka co pomaga na kontrolowanie zmian i adaptację do zmieniających się wymagań.',
            'Zalety – jawne uwzględnienie ryzyka',
            'Wady – umiejętność szacowania ryzyka',
          ],
        },
      ],
    },
    {
      heading: 'Model ewolucyjny',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Poprawa modelu kaskadowego poprzez rezygnację ze ścisłego, liniowego następstwa faz. Te same fazy ale możliwy powrót do poprzednich faz. Umożliwia adaptację do zmian w wymaganiach i korygowanie błędów. Wymaga dodatkowych strategii porządkowujących proces wytwarzania oprogramowania',
          ],
        },
      ],
    },
    {
      heading: 'Model odkrywczy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Wariant modelu ewolucyjnego w którym iteracje dotyczą całego cyklu wytwarzania. Nacisk na stałą współpracę z klientem który otrzymuje kolejne, bogatsze wersje systemu i określa na ich podstawie dalsze wymagania. Dobrze radzi sobie ze zmianami wymagań przez klienta. Stała modyfikacja bez odrzucania dotychczas wytworzonego oprogramowania. Wymagane jest opracowanie strategii zarządzania wersjami.',
          ],
        },
      ],
    },
    {
      heading: 'Prototypowanie',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Tworzenie prototypów oprogramowania, które są sukcesywnie udoskonalane na podstawie interakcji z użytkownikami. Prototypy pozwalają szybko zrozumieć wymagania i uzyskać opinię użytkowników przed końcowym wdrożeniem. Przydatny w projektach w których wymagania są trudne do ustalenia na początku.',
          ],
        },
      ],
    },
  ],
};

const Q14: Question = {
  id: 14,
  heading: '14. Metody ochrony informacji',
  subQuestions: [
    {
      heading: 'Metody fizyczne',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Kontrola dostępu do pomieszczeń</strong> - zabezpieczenia w postaci kart dostępu, kodów PIN, czytników linii papilarnych. Zapewnienie dostępu tylko uprawnionym osobom.',
            '<strong>Monitoring</strong> - zapobieganie kradzieży, nieautoryzowanemu dostępowi poprzez wykorzystanie kamer w strategicznych miejsach.',
            '<strong>Zabezpieczenia sprzętu</strong> - utrudnianie kradzieży. Zamykanie sprzętu w zabezpieczonych pomieszczeniach, stosowanie systemu alarmowego, znakowanie i rejestrowanie sprzętu.',
          ],
        },
      ],
    },
    {
      heading: 'Metody techniczne',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Szyfrowanie danych</strong> - wykorzystanie algorytmów kryptograficznych do szyfrowania informacji aby uniemożliwić osobom nieuprawnionym dostęp do nich.',
            '<strong>Zapora sieciowa</strong> - Monitorowanie i kontrola ruchu sieciowego. Blokowanie nieautoryzowanych dostępów, wykrywanie potencjalnych zagrożeń.',
            '<strong>Systemy wykrywania i zapobiegania włamaniom</strong> - analiza ruchu sieciowego do identyfikacji podejrzanych i niebezpiecznych aktywności.',
            '<strong>Zarządzanie dostępem</strong> - kontrola dostępu mająca na celu minimalizację ryzyka nieuprawnionego dostępu, kradzieży danych oraz naruszeń bezpieczeństwa. Sprawdzanie tożsamości, uprawnień, zarządzanie rolami i grupami.',
            '<strong>Zabezpieczenie danych w transmisji</strong> - ochrona poufności i integralności danych podczas przesyłania przez sieć. Minimalizacja ryzyka przechwycenia danych poprzez wykorzystanie sieci VPN, szyfrowanie plików i wiadomości, podpisy i certyfikaty, bezpieczne portokoły.',
            '<strong>Polityka bezpieczeństwa</strong> - zbiór spójnych i zgodnych z prawem przepisów do zarządzania i udostępniania zasobów informacji.',
          ],
        },
      ],
    },
    {
      heading: 'Naruszenia ochrony informacji',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Kradzież danych osobowych</strong> - numery id, konta bankowe, dane medyczne, informacje tożsamości. Wynikają z ataków hakerskich, phishingowych, nieuczciwości pracowników.',
            '<strong>Wyciek poufnych danych</strong> - różne przyczyny, błędy ludzkie, niewłaściwe zarządzanie uprawnieniami, ataki.',
            '<strong>Ataki ransomware</strong> - infekowanie systemu informatycznego złośliwym oprogramowaniem oraz blokowanie dostępu do informacji w zamian za okup.',
          ],
        },
      ],
    },
  ],
};

const Q15: Question = {
  id: 15,
  heading:
    '15. Obliczenia na danych masywnych z wykorzystaniem paradygmatu Map-Reduce',
  subQuestions: [
    {
      heading: 'Definicja',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Map-Reduce to struktura dla zadań przetwarzających ogromne ilości danych. Dane podzielone na niezależne fragmenty (podgrupy). Każdy fragment przetwarzany równolegle w klastrze obliczeniowym.',
          ],
        },
      ],
    },
    {
      heading: 'Zadanie Map',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Odpowiedzialne za pobieranie danych z wejścia, analizę przy wykorzystaniu operacji filtrowania i sortowania, emitowanie krotek.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          heading: 'Fazy',
          content: [
            '<strong>Record-reader</strong> - tłumaczenie danych wejściowych na krotki',
            '<strong>Mapper</strong> - wykonywanie zdefiniowanego przez programistę kodu na każdej krotce. Wynikowo 0 lub więcej nowych par krotek (intermediate pairs)',
            '<strong>Combiner</strong> - opcjonalny reducer, wczesne grupowanie danych na etapie mapowania. Optymalizuje ruch sieciowy, nie ma gwarancji że ta faza zostanie wykonana.',
            '<strong>Partitioner</strong> - dane otrzymane z poprzednich faz dzielone na odłamki. Grupowanie danych po kluczach aby zapewnić, ze dane o tych samych kluczach trafią do tego samego reducera. Zpartycjonowane dane zapisywane na lokalnym systemie plików',
          ],
        },
      ],
    },
    {
      heading: 'Zadanie Reduce',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Wykonuje podsumowanie danych otrzymanych z zadania map. Tworzony jest mniejszy, połączony wynik.',
          ],
        },
        {
          type: ContentType.PARAGRAPH,
          heading: 'Fazy',
          content: [
            '<strong>Shuffle and sort</strong> - najbardziej kosztowna obliczeniowo faza. Z poszczególnych fragmentów tworzona jest lista danych na której wykonywane są operacja sortowania i grupowania. Można przekazać własną funkcję porównywania.',
            '<strong>Reduce</strong> - redukcja, podsumowanie danych wykorzystując wcześniej zdefiniowaną funkcję',
            '<strong>Output format</strong> - tłumaczenie wynikowej krotki do dogodnego formatu reprezentacji danych oraz zapis do pliku w wykorzystaniem Record-writer. Dane zapisywane na HDFS.',
          ],
        },
      ],
    },
    {
      heading: 'Wady i zalety',
      sections: [
        {
          type: ContentType.TABLE,
          content: [
            ['Zalety', 'Wady'],
            [
              'Skalowalność',
              'Nie można przetwarzać danych w czasie rzeczywistym',
            ],
            [
              'Szybkośc przetwarzania ze względu na zrównoleglenie obliczeń',
              'Brak możliwości zastosowania w problemach nie mających charakteru równoległego',
            ],
            [
              'Redukcja ilości danych przesyłanych przez sieć',
              'Nie daje efektów natychmiast',
            ],
          ],
        },
      ],
    },
  ],
};

const Q16: Question = {
  id: 16,
  heading: '16. Metody i technologie budowy hurtowni danych',
  subQuestions: [
    {
      heading: 'Architektura',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Strukturę hurtowni tworzą kolejne warstwy danych przy czym każda następna stanowi prztworzenie poprzedniej',
          ],
        },
        {
          type: ContentType.BULLET_LIST,
          content: [
            'Źródła danych – dane zasilające hurtownię',
            'Magazyn danych operacyjnych – wyniki transformacji, integracji i agregacji danych z różnych źródeł',
            'Centralna hurtownia – przechowuje informacje zgromadzonej ze źródeł, podstawa w zadaniach typu OLAP i we wspomaganiu decyzji. ',
            'Hurtownie tematyczne – wyselekcjonowane, silnie zagregowane dane na potrzeby użytkowników (działów analitycznych)',
            'Baza metadanych – przechowywanie aktualnych i historycznych schematów bazy, procesów ekstrakcji, transformacji, czyszczenia i przechowywania informacji oraz historii użycia. ',
          ],
        },
      ],
    },
    {
      heading: 'Modele',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Model pojęciowy</strong> to opis struktury, zawartości i przeznaczenia hurtowni danych przeprowadzony na poziomie pojęciowym, tzn. z punktu widzenia celów biznesowych, przy użyciu nazw z języka naturalnego specjalistycznego, właściwego dla danej organizacji. Model pojęciowy może np. określić, że konieczne jest gromadzenie pewnych informacji o klientach, definiuje też pojęcie "klient" i wskazuje na biznesowe cele zaplanowanych analiz.',
            '<strong>Model logiczny</strong> to opis odwołujący się do elementów logicznych baz danych i procesów hurtowni, a więc kolumn, tablic, relacji itp. Opis na poziomie logicznym przypomina typowy projekt bazy danych wykonany np. w języku UML.',
            '<strong>Model fizyczny</strong> to opis parametrów mających na celu optymalizację działania hurtowni danych, takich jak indeksowanie, partycjonowanie, kopiowanie danych, a także takich elementów, jak sprzęt komputerowy, sieć, systemy archiwizujące, rozmieszczenie poszczególnych zasobów logicznych, itp.',
          ],
        },
      ],
    },
    {
      heading: 'Metody projektowania',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>projektowanie wstępujące</strong> (od szczegółu do ogółu), w ramach którego najpierw tworzone są projekty związane z poszczególnymi źródłami danych, działami przedsiębiorstwa, potrzebami użytkowników itp., a następnie projekty te scalane są w jeden projekt ogólny',
            '<strong>projektowanie zstępujące</strong>, w ramach którego rozpoczynamy od stworzenia modelu przedsiębiorstwa na poziomie pojęciowym, by następnie stopniowo przejść do projektu integracji potrzebnych danych źródłowych.',
          ],
        },
      ],
    },
    {
      heading: 'Procesy ETL',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Ekstrakcja</strong> – odczyt źródłowych danych z operacyjnych baz danych, systemów starej generacji, plików zewnętrznych',
            '<strong>Transformacja</strong> – łączenie danych, weryfikacja, walidacja, czyszczenie i znakowanie czasowe',
            '<strong>Wczytywanie</strong> – wprowadzanie danych do docelowej hurtowni danych',
          ],
        },
      ],
    },
    {
      heading: 'Implementacja systemu BI',
      sections: [
        {
          type: ContentType.ORDERED_LIST,
          content: [
            'Analiza wymagań – zgromadzenie wiedzy o wymaganiach biznesowych w zakresie przetwarzania analitycznego',
            'Projekt logiczny – pojęciowa definicja wymaganych struktur danych',
            'Implementacja struktur fizycznych – tworzenie bazy danych, tabel, indeksów, materializowanych perspektyw',
            'Realizacja aplikacji analitycznych – implementacja programów dla użytkowników końcowych',
            'Strojenie – rekonfiguracja serwera bazy, tworzenie dodatkowych indeksów, materializowanych perspektyw',
          ],
        },
      ],
    },
    {
      heading: 'Fakty i wymiary',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Fakty</strong> – wartości ciągłe, numeryczne typowe dla wartości kosztów, sprzedaży zysków. Rodzaje – addytywne, częściowo addytywne, nieaddytywne',
            '<strong>Wymiary</strong> – wartości dyskretne, niezmienne lub rzadko zmienne. Nadają znaczenie danym. Umożliwiają organizację danych na różnych poziomach agregacji, poziom reprezentuje pozycję w hierarchii a atrybuty dodstarczają dodatkowych informacji o danych. Przykładem jest klient, sklep, produkt, czas.',
          ],
        },
      ],
    },
    {
      heading: 'Hol`up',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>OLAP</strong> – baza danych dedykowana do wspierania rozwiązań analitycznych, założenie że baza zawiera fakty opisane przez wymiary.',
            '<strong>ROLAP</strong> – Relacyjny OLAP',
            '<strong>MOLAP</strong> – Wielowymiarowy OLAP',
            '<strong>HOLAP</strong> – Hybrydowy OLAP',
          ],
        },
      ],
    },
    {
      heading: 'Schematy',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Gwiazda</strong> – centralna tabela faktów, wymiary zdenormalizowane, tabela faktów połączona z tabelami wymiarów poprzez klucze główne',
            '<strong>Płatek śniegu</strong> – centralna tabela faktów, wymiary znormalizowane',
          ],
        },
      ],
    },
  ],
};

const Q17: Question = {
  id: 17,
  heading: '17. Metody wspomagania decyzji w systemach ekspertowych',
  subQuestions: [
    {
      heading: 'Definicja',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>System ekspercki</strong> – oprogramowanie oparte na rozbudowanej bazie wiedzy. Dane zawarte w bazie są podstawą do wyciągania wniosku przez system. Takie systemy wykorzystują wiedzę ekspertów z danej dziedziny do podejmowania decyzji i udzielania odpowiedzi.',
          ],
        },
      ],
    },
    {
      heading: 'Metody',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Systemy regułowe</strong> - podstawowa metoda, w której zdefiniowane są reguły logiczne opisujące zależności między danymi wejściowymi a wynikami. System analizuje dostarczone informacje i stosuje pasujące reguły, aby uzyskać pożądane odpowiedzi lub podejście do rozwiązania problemu.',
            '<strong>Systemy oparte na sieciach semantycznych</strong> - opierają się na reprezentacji wiedzy w postaci grafów, gdzie węzły reprezentują pojęcia, a krawędzie ich wzajemne relacje. Takie grafy umożliwiają analizę i wnioskowanie na temat powiązań między różnymi elementami w dziedzinie.',
            '<strong>Systemy oparte na logice rozmytej</strong> - w przeciwieństwie do klasycznej logiki binarnej, logika rozmyta pozwala na wyrażanie pojęć z użyciem stopni przynależności, co jest szczególnie przydatne w dziedzinach, gdzie granice między kategoriami są niejasne.',
            '<strong>Systemy bazujące na przypadkach</strong> - systemy wykorzystują bazę przypadków, czyli zbiór wcześniej rozwiązanych problemów wraz z ich kontekstami i wynikami. Nowe problemy są porównywane z istniejącymi przypadkami, aby znaleźć podobieństwa i dostarczyć rozwiązania.',
            '<strong>Systemy bazujące na sztucznych sieciach neuronowych</strong> - w przypadkach, gdy dostępna jest duża ilość danych uczących, sztuczne sieci neuronowe mogą być wykorzystane do przewidywania, klasyfikowania i generowania odpowiedzi na podstawie wzorców w danych.',
            '<strong>Systemy oparte na hybrydowym wnioskowaniu</strong> - Często w praktyce stosuje się kombinacje różnych metod wnioskowania w celu osiągnięcia lepszej wydajności i dokładności.',
          ],
        },
      ],
    },
  ],
};

const Q18: Question = {
  id: 18,
  heading:
    '18. Zastosowanie gramatyk formalnych w przetwarzaniu języka naturalnego',
  subQuestions: [
    {
      heading: 'Definicje',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Analiza składniowa</strong> - rozbiór zdania na składowe gramatyczne z określeniem struktury. Definicja reguł składniowych języka naturalnego umożliwia analizę i rozpoznawanie poprawnej struktury zdania',
            '<strong>Gramatyki formalne</strong> - matematyczne modele opisujące struktury językowe i reguły tworzenia zdanń w różnych językach. ',
            '<strong>Gramatyka</strong> musi spełniać 2 warunki:',
          ],
        },

        {
          type: ContentType.BULLET_LIST,
          content: [
            'Generować wszystkie poprawne zdania danego języka',
            'Generować wyłącznie zdania tego języka',
          ],
        },
        {
          type: ContentType.BULLET_LIST,
          heading: 'Typy gramatyk',
          content: [
            '0 – rekurencyjne przeliczalne',
            '1 – kontekstowe',
            '2 – bezkontekstowe',
            '3 – regularne',
          ],
        },
      ],
    },
    {
      heading: 'Zastosowanie - cz. 1',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Analiza składniowa (parsowanie)</strong> - Gramatyki formalne, takie jak gramatyki kontekstowo-szczegółowe (CFG) czy gramatyki zależnościowe, są wykorzystywane do analizy składniowej tekstu. Parsowanie polega na rozbijaniu zdania na jego składniki składowe (np. frazy, wyrazy) i określaniu ich struktury zgodnie z zdefiniowanymi regułami gramatycznymi.',
            '<strong>Generowanie tekstu</strong> - Gramatyki formalne mogą być wykorzystane do generowania poprawnych zdań lub tekstów w języku naturalnym. Można to osiągnąć, tworząc reguły gramatyczne, które opisują, w jaki sposób elementy tekstu mogą być łączone w poprawne zdania.',
            '<strong>Korekcja gramatyczna</strong> - Gramatyki formalne mogą być używane w narzędziach do korekty gramatycznej, które sprawdzają, czy zdanie spełnia reguły gramatyczne danego języka. Takie narzędzia mogą pomagać w poprawianiu błędów składniowych w tekście.',
            '<strong>Analiza semantyczna</strong> - Chociaż gramatyki formalne skupiają się głównie na strukturze zdania, mogą również wprowadzać pewne elementy semantyczne. Na przykład gramatyki zależnościowe mogą określać związki semantyczne między wyrazami.',
            '<strong>Tworzenie systemów dialogowych</strong> - W systemach dialogowych, gdzie komputer komunikuje się z użytkownikiem w sposób naturalny, gramatyki formalne mogą być wykorzystywane do analizy wypowiedzi użytkownika i generowania odpowiedzi, które są gramatycznie poprawne.',
          ],
        },
      ],
    },
    {
      heading: 'Zastosowanie - cz. 2',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Wyszukiwanie informacji</strong> - Wyszukiwarki mogą wykorzystywać gramatyki formalne do analizy zapytań użytkowników i przekształcania ich na zrozumiałe dla systemu formy, które mogą być używane do przeszukiwania baz danych.',
            '<strong>Wydobywanie informacji</strong> - Gramatyki formalne mogą pomagać w procesie wydobywania informacji z tekstu, szczególnie w dziedzinach takich jak analiza treści i ekstrakcja relacji między encjami.',
            '<strong>Generowanie reguł w systemach ekstrakcji informacji</strong> - Gramatyki formalne mogą być używane do generowania reguł wydobywania informacji z tekstów strukturalnych, takich jak dokumenty XML lub HTML.',
            '<strong>Rozpoznawanie nazw własnych</strong> - Gramatyki formalne mogą pomagać w rozpoznawaniu i ekstrakcji nazw własnych, takich jak nazwy miejsc, osób, firm itp.',
            '<strong>Analiza konwersacji</strong> - W analizie konwersacji i przetwarzaniu dialogów gramatyki formalne mogą pomóc w identyfikacji struktury rozmowy, zrozumieniu ról uczestników i relacji między wypowiedziami.',
          ],
        },
      ],
    },
  ],
};

const Q19: Question = {
  id: 19,
  heading:
    '19. Metody reprezentacji i przetwarzania danych w trójwymiarowej grafice komputerowej czasu rzeczywistego',
  subQuestions: [
    {
      heading: 'Definicja',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Grafika komputerowa CzRz – tworzenie, renderowanie, wyświetlanie obrazów lub treści komputerowych w czasie rzeczywistym. Najważniejsza cecha to wysoka częstotliwość aby zachować płynność obrazu. Do tworzenia wykorzystuje się procesor graficzny GPU. Najczęściej spotykane w grach komputerowych ale także AR/VR i uczenie maszynowe.',
          ],
        },
      ],
    },
    {
      heading: 'Siatka wielokątów',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Najczęściej wykorzystywana do symulatorów, gier, filmów lub modeli 3D. Składa się z wierzchołka i krawędzi. Grupa co najmniej trzech wierzchołków połączona krawędziami daje wielokąt. Z nich tworzona jest siatka która może posłużyć jako podsatwa do tworzenia złożonych obiektów. Idealnie nadaje się do zastosowań gdzie ważniejsza jest wizualizacja niż precyzja.',
          ],
        },
      ],
    },
    {
      heading: 'Woksele',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Trójwymiarowe piksele, sześciany. Obecne komputery nie są zoptymalizowane do tworzenia i renderowania złożonych obiektów w wysokiej rozdzielczości przy użyciu wokseli. Wykorzystywane w diagnostyce medycznej. Użyteczne przy potrzebie zachowania informacji o wewnętrznej strukturze obiektu.',
          ],
        },
      ],
    },
    {
      heading: 'Opis matematyczny',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            'Reprezentacja obiektów przy pomocy równań np. CAD. Projekty karoserii samochodu przy minimalizacji oporu powietrza. Mniejszy koszt przechowywania informacji o modelu, skomplikowane obiekty wymagają dużej wiedzy, duża precyzja finalnego produktu.',
          ],
        },
      ],
    },
    {
      heading: 'Przetwarzanie',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Translacja</strong>  – przesunięcie o wektor T',
            '<strong>Skalowanie</strong> – mnożenie współrzędnych',
            '<strong>Rotacja</strong> – obroty wokół każdej z 3 osi (X, Y, Z). Osobne macierze przekształcenia.',
            '<strong>Cieniowanie</strong> – określanie barwy powierzchni obiektów oświetlanych przez różne źródła światła. Cieniowanie płaskie, interpolacyjne, Guro, Phonga',
            '<strong>Oświetlenie</strong> – założenie że każdy obiekt jest oświetlane przez światło emitowane ze źródła oraz światło odbite od innych obiektów. Przykładowym algorytmem jest śledzenie promieni.',
          ],
        },
      ],
    },
  ],
};

const Q20: Question = {
  id: 20,
  heading:
    '20. Obiektowy model danych – podstawowe własności i różnice do relacyjnego modelu, przykłady zastosowań',
  subQuestions: [
    {
      heading: 'Wlasności',
      sections: [
        {
          type: ContentType.BULLET_LIST,
          content: [
            '<strong>Abstrakcja</strong> - obiekty umożliwiają abstrakcję danych i ich operacji. Obiekty mogą reprezentować rzeczywiste lub logiczne byty, a ich atrybuty i metody odzwierciedlają właściwości i zachowanie tych bytów.',
            '<strong>Enkapsulacja</strong> - obiekty łączą dane (atrybuty) i operacje (metody) w jednostki zwane klasami. Klasa definiuje strukturę danych i metody, które mogą operować na tych danych. Zapewnia hermetyzację danych i ukrycie szczegółów implementacyjnych.',
            '<strong>Dziedziczenie</strong> - dziedziczenie cech i metod z innych obiektów. Umożliwia tworzenie hierarchii klas, gdzie klasy podrzędne dziedziczą cechy i zachowanie od klas nadrzędnych. Reużywalność kodu i definiowanie relacji.',
            '<strong>Polimorfizm</strong> – możliwość wykonywania tej samej operacji w różny sposób. Może to dotyczyć zarówno metod, jak i operatorów.',
          ],
        },
      ],
    },
    {
      heading: 'Różnice',
      sections: [
        {
          type: ContentType.TABLE,
          extraClass: 'three-cell-table',
          content: [
            [null, 'Obiektowy', 'Relacyjny'],
            [
              'Struktura',
              'Dane reprezentowane jako obiekty zawierające atrybuty i metody',
              'Dane organizowane w tabelach reprezentujących encję, kolumny reprezentują atrybuty',
            ],
            ['Relacje', 'Referencja między obiektami', 'Klucze obce'],
            [
              'Język zapytań',
              'Języki programowania do manipulacji obiektami i operowania na danych',
              'SQL do wykonywania operacji na danych',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Przykłady',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Programowanie obiektowe</strong> - główny model używany w programowaniu obiektowym. Tworzenie obiektów, klas i hierarchii dziedziczenia, co umożliwia organizację i zarządzanie danymi w sposób modułowy i zwięzły.',
            '<strong>Bazy danych obiektowych</strong> - bazy wykorzystują obiektowy model danych do przechowywania, zarządzania i manipulowania danymi. Są one szczególnie przydatne w przypadkach, gdy dane mają złożoną strukturę i wymagają bardziej zaawansowanych  operacji niż proste zapytania SQL.',
            '<strong>Systemy informacyjne</strong> - stosowany w systemach informacyjnych, łączących dane z różnych źródeł i dostarczających interfejsy do ich przeglądania i manipulacji. Obiekty reprezentują różne elementy informacji, takie jak dokumenty, multimedia, pliki, itp.',
            '<strong>Systemy zarządzania wiedzą</strong> - przydatny w systemach zarządzania wiedzą, - dane muszą być zorganizowane i udostępniane w kontekście wiedzy i relacji między nimi. Artykuły, publikacje, wątki dyskusyjne, itp.',
            '<strong>Systemy e-handlu</strong> - zarządzanie danymi o produktach, klientach, zamówieniach, płatnościach itp. Koszyk zakupowy, śledzenie zamówień, zarządzanie kontem klienta, itp.',
          ],
        },
      ],
    },
  ],
};

const Q21: Question = {
  id: 21,
  heading:
    '21. Technologie oraz protokoły umożliwiające integrację aplikacji mobilnych z serwisami internetowymi.',
  subQuestions: [
    {
      heading: 'Protokoły',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>HTTP </strong> - protokół wykorzystywany do przesyłania danych między przeglądarką a serwerem. Jest bezstanowy (zapytania nie zależą od siebie, serwer nie przechowuje historii żądań), wykorzystuje różne metody (GET, POST, DELETE). Adres URL czyli protokół + domena + ścieżka zasobu. Dodatkowo nagłówki, kody odpowiedzi i bezpieczeństwo.',
            '<strong>REST  API</strong> - styl architektury oprogramownaia zorientowany na zasoby, które są identyfikowane przy pomocy unikalnych URI. Do komunikacji wykorzystuje http. Skalowalność, prostota systemów.',
            '<strong>SOAP </strong> - protokół umożliwiający wymianę danych między klientem a serwerem. Mało popularne rozwiązanie obecnie wśród aplikacji mobilnych. Najczęściej wiadomości przesyłane przez protokół HTTP a ich struktura jest zakodowana przy pomocy znaczników XML. Dokumenty SOAP zawierają główny znacznik envelope w którym jest obowiązkowy znacznik body i opcjonalny header.',
            '<strong>GraphQL </strong> - alternatywa dla REST API. Język zapytań niezależny od platformy lub języka programowania. Pozwala pobierać dane w sposób elastyczny i dynamiczny. Udostępnia tylko jeden endpoint który obsługuje wszelkie zapytania.',
            '<strong>WebSockets </strong> - dwukierunkowy kanał komunikacji za pośrednictwem gniazda TCP. Pozwalają na przesył informacji do momentu zamknięcia połączenia. Format danych dowolny ale preferowany JSON.',
          ],
        },
      ],
    },
    {
      heading: 'Reprezentacja danych',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>JSON</strong> – lekki format wymiany danych opierający się na języku JavaScript ale jest niezależny od niego.',
            '<strong>XML</strong> – język znaczników niezależny od platformy dzięki czemu umożliwia wymianę dokumentów między platformami.',
          ],
        },
      ],
    },
    {
      heading: 'Narzędzia',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Firebase</strong> – zestaw narzędzi do tworzenia i wdrażania aplikacji opierający się na usługach chmurowych. Opórcz aplikacji internetowych wspiera komunikację z aplikacjami mobilnymi i grami.',
          ],
        },
      ],
    },
  ],
};

const Q22: Question = {
  id: 22,
  heading:
    '22. Cykl życia aktywności oraz podstawowe elementy architektoniczne w złożonej aplikacji mobilnej dla systemu Android.',
  subQuestions: [
    {
      heading: 'Definicje',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Cykl</strong> życia aktywności – stadia w jakich działa dana aktywność',
            '<strong>Architektura</strong> – definiuje poszczególne komponenty oraz relacje między komponentami',
            '<strong>Metody</strong> – bloki kodu wykonujące określone działania lub operacje',
          ],
        },
      ],
    },
    {
      heading: 'Cykl życia',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<tt>onCreate</tt> – wywoływana przy tworzeniu aktywności. Obsługa interfejsu użytkownika, dodanie elementów do UI, inicjalizacja potrzebnymi danymi',
            '<tt>onStart</tt> – wywoływana gdy aktywność staje się widoczna dla użytkownika ale nie jest możliwa interakcja',
            '<tt>onResume</tt> – wywoływana gdy interakcja użytkownika staje się możliwa. Zachowuje najwyższe miejsce na stosie aktywności i jest najważniejsza. Przywracanie zasobów, procesów.',
            '<tt>onPause</tt> – wywoływana gdy inna aktywność wchodzi w reakcję z użytkownikiem. Zapis danych, zatrzymanie animacji, zwolnienie procesów obciążających procesor',
            '<tt>onStop</tt> – wywoływana gdy aktywność przestaje być widoczna dla użytkownika. Zwalnianie zasobów aplikacji',
            '<tt>onDestroy</tt> – wywoływana gdy aktywność jest niszczona',
          ],
        },
      ],
    },
    {
      heading: 'Elementy architektury',
      sections: [
        {
          type: ContentType.PARAGRAPH,
          content: [
            '<strong>Aktywności</strong> - elementy interfejsu, ekrany',
            '<strong>Fragmenty</strong> - modularne części interfejsu',
            '<strong>Instancje</strong> - komunikacja między komponentami',
            '<strong>Usługi</strong> - komponenty działające w tle niezależne od interakcji użytkownika',
            '<strong>Odbiorniki nadawców</strong> - komponenty reagujące na zdarzenia systemowe, niestandardowe',
            '<strong>Bazy danych</strong> - bazy danych dla systemu mobilnego',
          ],
        },
      ],
    },
  ],
};

export const QUESTIONS: Question[] = [
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  Q13,
  Q14,
  Q15,
  Q16,
  Q17,
  Q18,
  Q19,
  Q20,
  Q21,
  Q22,
];
