_Repo initialized using [example app with Chakra UI and Typescript](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui-typescript)_

# Napredni razvoj programske potpore za web - LV1

## Zahtjevi

- [x] prikaz brojčane vrijednoste trenutne lokacije
- [x] prikaz lokacije na karti
- [x] prijava korisnika
- [x] evidentiranje prijave
- [x] prikaz karte s oznakama zadnjih pet prijava
- [ ] prikaz informacije o oznaci na karti.

## Opis zadatka

Potrebno je izraditi web-aplikaciju koja će na početnoj stranici prikazati posjetiteljevu trenutnu lokaciju - brojčano i na karti. Kao podloge za kartu koristiti OpenStreetMap.

Omogućiti prijavu korisnika u aplikaciju korištenjem protokola OpenId Connect (OIDC) i servisa Auth0. Korisnike na servisu Auth0 možete dodati kroz opciju User management/Users na Auth0.

Prijavljenim korisnicima prikazati kartu na kojoj se vide lokacije zadnjih 5 prijavljenih korisnika. Klikom na oznaku treba se prikazati informacija o korisniku na toj lokaciji (ime i/ili e-mail) i vremenu prijave. Popis prijavljenih korisnika ne mora biti trajnog karaktera, tj. može se čuvati u memoriji servera.

Aplikaciju postaviti u oblak (prepouča se Heroku), a kao odgovor na ovo pitanje isporučiti redom:

- adresu git repozitorija s izvornim kodom aplikacije (repozitorij može biti privatni, ali omogućiti pravo pristupa nastavnicima)
- adresu aplikacije
- 3 testna korisnička imena s lozinkama s kojima se aplikacija može isprobati. Koristiti neki od servisa s privremenim poštanskim sandučićima (npr. https://www.mailinator.com/)
- Potrebno je navesti što je od navedenog implementirano: prikaz brojčane vrijednoste trenutne lokacije, prikaz lokacije na karti, prijava korisnika, evidentiranje prijave, prikaz karte s oznakama zadnjih pet prijava, prikaz informacije o oznaci na karti.

Aplikacija može biti napisana u bilo kojem programskom jeziku, a preporuča se da to bude u node.js-u.
