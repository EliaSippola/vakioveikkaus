# vakioveikkaus sovellus

Sovellus vakioveikkauksen rivien generointiin valinnasta ja rivien filtteröintiin painoarvojen avulla.
Sovellukseen kuuluu MongoDB tietokanta, johon voidaan tallentaa valinnat sekä painoarvot.

## Käyttö

> <details>
> <summary style="font-weight: bold; font-size: medium;">Miten vakioveikkaus toimii</summary>
> <br>
>
> Vakioveikkaus on veikkauksen uhkapeli. Pelissä veikkaaja veikkaa erilaisten urheilulajien päivän tuloksista. Peliä pelataan riveillä, joilla yritetään ennustaa kaikkien pelien lopputulokset (voitto, häviö tai tasapeli). Pelissä voidaan myöskin valita useampi valinta voitosta, tasapelistä sekä häviöstä. Jos valitaan useampi vaihtoehto, on pelaajan ostettava kaikki rivit, jotka vastaavat hänen valintaansa. 
>
> *jos pelaaja ei ole varma onko ensimmäisen pelin tulos voitto vai häviö, hän ostaa sekä rivin jossa ensimmäinen peli voitetaan, että pelin jossa ensimmäinen peli päättyy häviöön*
>
> Sovellus on suunniteltu 13 pelin vakioon. Sovelluksella pystyy generoimaan kaikki mahdolliset rivit, jonka jälkeen käuttjä voi asettaa peleille erilaisia painoarvoja. Painoarvojen asettamisen jälkeen käyttäjä voi filtteroida rivejä asettamien painoarvojen jälkeen, jonka avulla voidaan muodostaa valinta jotka ovat painoarvojen mukaan todennäköisimmät.
> 
> Rivit muodostetaan systeemillä, jossa sarakkeissa on pelin tulokset (1 - voitto, X - tasapeli, 2 - häviö). Rivit taas ovat pelejä.
> 
> veikkauksen sivu: https://www.veikkaus.fi/fi/vedonlyonti/vakio
>
> <br>
> </details>

### Sarake 1, generoitavien rivien valinta

Valitse rivit jotka haluat generoida kohdasta **Selected rows**. Valinnan jälkeen paina kohtaa **Generate**, jolloin sarakkeeseen **Generated rows** generoituu kaikki mahdolliset rivit jotka on valittu.

*Huomaa, että sovellus ei kykene gemerpo,aam kaikkia 1,5 miljoonaa riviä kerralla. Pyri generoimaan alle 200 000 riviä kerralla*

### Sarake 2, generoidut rivit

Sarakkeessa 2 näkyy kaikki generoidut rivit listana.

> <details>
> <summary style="font-weight: bold;">Compact row</summary>
> <br>
>
> Compact row on tapa näyttää kaikki generoidut rivit yhdellä rivillä. Compact row ei ole tärkeä sovelluksen käytössä.
>
> Compact row toimii antamalla riville kirjaintunnuksen. Kirjaintunnukset ovat:
>
> 1 -> vastaa riviä jolla on vain 1  
> X -> vastaa riviä jolla on vain X  
> 2 -> vastaa riviä jolla on vain 2  
> L (left) -> vastaa riviä jossa on sekä 1 että X  
> R (right) -> vastaa riviä jossa on sekä X että 2  
> C (cross) -> vastaa riviä jossa on sekä 1 että 2  
> A (all) -> vastaa riviä jossa on kaikki vaihtoehdot (1, X ja 2)
> 
> ```javascript
> // esimerkiksi
> compactRow = "1X2LRCA";
> 
> // vastaa valintaa
> selection = [
>     [1, 0, 0],
>     [0, 1, 0],
>     [0, 0, 1],
>     [1, 1, 0],
>     [0, 1, 1],
>     [1, 0, 1],
>     [1, 1, 1]
> ];
>
> // ja rivejä
> rows = [
>     "1X21X11",
>     "1X2XX11",
>     "1X21211",
>     "1X2X211",
>     "1X21X21",
>     "...",
>     "1X2X222"
> ];
> ```
> </details>

### Sarake 3, painoarvot

Muokkaa painoarvoja sarakkeessa **Selected weighs** (tai käytä alkuperäisiä painoarvoja).

Kun painoarvot on asetettu, valitse filtteröitävien rivien määrä. Tämä asetus löytyy painikkeen vierestä. Kun rivien määrä on asetettu, voidaan filtteröidä rivit painamalla **Filter** painiketta.

*Huomaa, että vaikka rivien määrä olisi suurempi kuin generoidut rivit, painike generoi vain generoitujen rivien määrän*

### Sarake 4, filtteroidut rivit

Sarakkeessa 4 näkyy rivit, jotka on filtteröity. Tämä tarkoittaa siis että riveille on annettu oma painoarvo sarakkeen 3 painoarvojen mukaan, jonka jälkeen rivit on järjestetty niille annetun painoarvon mukaan.

### Sarake 5, Valittu valinta

Sarakkeeseen 5 tulee valinnat, jotka on valittu filtteroitujen rivien avulla. Aseta rivien määrä painikkeen viereen, ja paina painiketta **Select** generoidaksesi valinnat.

***Huom! Rivimäärän tulee olla jaollinen numerolla 2 ja/tai 3 jotta rivien valinta toimii. Jos asetat rivien määräksi jonkin lukeman joka ei ole kahdella tai kolmella jaollinen, valintojen generointi on mahdotonta. (esim. 128 riviä toimii, mutta 129 riviä ei).***

### Valintojen ja painoarvojen valinta ja tallennus

Sovelluksen alaosassa on kohta valintojen tallennukselle. Kirjoita tallennuksen nimi, ja paina nappia **Save current selection and weighs**. Painike tallentaa tämänhetkiset valinnat ja painoarvot.

Voit valita nämä valinnat ja painoarvot sovelluksen yläosasta painikkeella **Select**.

Voit poistaa tallenetut tiedot painikkeesta **delete**. (Valikosta valittu tallenne).

## Asennus

Sovellus on jaettu backendiin ([server/backend](/server/backend/)) ja frontendiin ([client/vakioveikkaus-client](/client/vakioveikkaus-client/))

Lataa tiedostot, ja käytä komentoa `node install` pakettien asentamiseksi

### asetukset

**Backend .env**

luo tiedosto [server/backend/](/server/backend/).env

Tiedoston asetukset:

```ini
# port to open from
# with port 3000 url will be http://localhost:3000)
PORT = 3000

# get login url from MongoDB. App will create tables "datas" and "saves"
MONGODB_URL = mongodb+srv://<Username>:<Password>@<database>/<collection>?retryWrites=true&w=majority&appName=<Cluster>

# Api key to use for the app. This can be changed to whatever as long as it matches frontend api key
API_KEY = 1234567890
```

**Frontend .env**

luo tiedosto [client/vakioveikkaus-client/](/client/vakioveikkaus-client/).env

Tiedoston asetukset:

```ini
# api key will need to match backend api key
REACT_APP_DB_API_KEY = 1234567890

# url to match to backend. Backend api is open on /api/db.
# http://localhost:3000/api/db is default
REACT_APP_BASEURL = http://localhost:3000/api/db
```

**Luo build**

Käytä komentoa `npm run build` frontendissä ([/client/vakioveikkaus-client](/client/vakioveikkaus-client/)), ja siirrä luotu kansio polkuun ([/server/backend](/server/backend/))

**Käynnistä sovellus**

Käytä komentoa `node app.js` backendissä. Sovelluksen tulisi toimia odotetusti ilman virheitä.

*Voit vaihtoehtoisesti käyttää komentoa `npm run nodemon`, jota ei ole vielä poistettu, jos haluat jatkokehittää sovellusta.*

## Jatkokehitys

Sovellusta ei tulla jatkokehittämään.