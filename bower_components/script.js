"use strict";

function determineLanguageFromBrowserOnly() {
  var e = window.navigator.userLanguage || window.navigator.language;
  return e && e.length > 2 && (e = e.substring(0, 2)), e && pepprSupportedLangMap[e] || (e = fallbackLang), e
}

function determineLanguage() {
  var e = determineLanguageFromBrowserOnly(),
    i = window.location.pathname,
    n = window.location.toString(),
    t = document.getElementsByTagName("base").length > 0 ? document.getElementsByTagName("base")[0].href : null;
  t && 0 === n.indexOf(t) && (i = n.substring(t.length));
  var a = 2 === i.length || i.length > 2 && "/" === i[2] ? i.substring(0, 2) : null;
  return a && pepprSupportedLangMap[a] && (e = a), pepprSupportedLangMap[e] || (e = fallbackLang), e
}

function getPathWithoutContextAndLang() {
  var e = window.location.pathname,
    i = window.location.toString(),
    n = document.getElementsByTagName("base").length > 0 ? document.getElementsByTagName("base")[0].href : null;
  n && 0 === i.indexOf(n) && (e = i.substring(n.length));
  var t = 2 === e.length || e.length > 2 && "/" === e[2] ? e.substring(0, 2) : null;
  return t && pepprSupportedLangMap[t] ? 2 === e.length ? "/" : e.substring(2) : e
}

function createIntroService(e, i, n) {
  return function(t, a, o) {
    var r = window.jQuery,
      s = n,
      l = t.$new(),
      c = 0;
    return l.screen = 1, r(e + " .screen").each(function() {
      var e = Number((r(this).attr("class").match(/.*screen-([0-9]+)/) || [0, 0])[1]);
      e > c && (c = e)
    }), {
      scope: l,
      clickClose: function() {
        o.add(s, "seen"), r(i).foundation("reveal", "close")
      },
      clickPrev: function() {
        l.screen > 1 && l.screen--
      },
      clickNext: function() {
        l.screen < c && l.screen++
      },
      showIntro: function(e) {
        ("seen" !== o.get(s) || e) && r(i).foundation("reveal", "open")
      },
      showScreen: function(e) {
        return l.screen === e
      },
      showSkipButton: function() {
        return 1 === l.screen
      },
      showStartButton: function() {
        return 1 === l.screen
      },
      showNextButton: function() {
        return l.screen > 1 && l.screen < c
      },
      showPrevButton: function() {
        return l.screen > 1
      },
      showCloseButton: function() {
        return l.screen === c
      }
    }
  }
}

function isProductionServer() {
  return "localhost" !== location.hostname && "acoveo.com" !== location.hostname && "www.acoveo.com" !== location.hostname
}
var peppritLang_it = {
    site_title: "peppr.it - Go peppr it!",
    site_title_it: "italy.peppr.it",
    site_description: "La nuova App per la prenotazione di servizi erotici",
    provider_list_title: "Pepprs",
    provider_title: "Profilo Peppr",
    booking_title: "Prenota",
    booking_payment_title: "Controlla la tua prenotazione",
    provider_status_title: "Guadagni",
    phone_confirm_title: "Conferma numero di telefono ",
    email_confirm_title: "Conferma indirizzo e-mail",
    booking_confirmation_title: "Conferma prenotazione",
    booking_payment_confirmation_title: "Conferma",
    provider_imageupload_title: "Carica Fotografie",
    provider_faq_title: "Domande frequenti",
    client_faq_title: "Domande frequenti",
    agency_faq_title: "Domande frequenti",
    provider_claims_title: "Tipo",
    provider_services_title: "Servizi",
    shortlink_admin_title: "Shortlink admin",
    agency_admin_title: "Agency admin",
    edit_professional_title: "Modifica profilo ",
    signup_admin_title: "Sign-up",
    agency_booking_list_title: "Lista prenotazioni",
    agency_booking_title: "Prenotazione",
    imageupload_admin_title: "Rivedi immagini",
    edit_profile_title: "Modifica Profilo ",
    edit_user_profile_title: "Modifica profilo utente",
    platformsettings_admin_title: "Impostazioni",
    login_title: "Login",
    logout_title: "Logout",
    register_title: "Registrati come",
    about_title: "Informazione legale",
    imprint_modal_title: "Informazione legale",
    reset_password_title: "Reimposta la Password",
    change_location_title: "Modifica luogo",
    press_kit_title: "Rassegna stampa",
    agency_list_title: "Agenzie",
    privacy_title: "Privato",
    min: "min",
    max: "max",
    short_date_time_format: "D.M. H:mm",
    short_weekday_time_format: "dd H:mm",
    option_choose: "-- scegli --",
    zip_code_country: "CAP, Paese",
    confirm: "Conferma",
    confirm_now: "Conferma ora",
    enter: "Via!",
    back: "Indietro",
    start: "Start",
    skip: "Salta",
    next: "Avanti",
    previous: "Indietro",
    "continue": "Continuare",
    close: "Chiudi",
    Menu: "Menu",
    filter: "Filtro",
    save: "Salva",
    edit: "Modifica",
    change: "Modifica",
    accept: "Accetta",
    decline: "Rifiuta",
    make_offer: "Offrire",
    no_thanks: "No grazie",
    required: "Obbligatorio",
    optional: "Opzionale",
    reviewed: "Approva",
    rejected: "Rifiuta",
    show_map: "Mappa",
    menu_home: "Home",
    menu_login: "Log in",
    menu_logout: "Esci",
    menu_signup: "Registrati",
    menu_providers: "Pepprs",
    menu_faq: "FAQs",
    menu_admin: "Profilo",
    menu_admin_agency: "Agenzia",
    menu_agency_bookings: "Prenotazione",
    menu_provider_bookings: "Prenotazione",
    menu_about: "Contatti",
    menu_tnc: "Termini",
    menu_signup_professional: "Diventa un Peppr",
    menu_privacy: "Privacy",
    admin_only: "Solo amministratori",
    main_greeting: "Ehi tu!",
    main_slogan: "Incontriamoci! Dimmi dove sei:",
    main_first_mobile_app: "La Web-App<br/>per prenotare servizi erotici<br/>",
    main_first_mobile_app_it: "La Web-App<br/>per prenotare dati<br/>con escort",
    anonymous_booking_promise: "Prenotazione sicura",
    genuine_profiles_promise: "100% profili autentici",
    anonymous_and_secure: "Anonimo e sicuro",
    main_show_peppr: "Entra in PEPPR",
    main_show_video: "Video di presentazione",
    featured_in: "Reccomendato da",
    we_are_looking_for_you: "Vogliamo te!",
    become_a_peppr: "Diventa un peppr!",
    choose_sex_show_males: "Pepprs uomini",
    choose_sex_show_females: "Pepprs donne",
    show_me_pepprs: "Mostra",
    company_ceo: "Amministratore",
    customer_support: "Servizio clienti",
    phone: "Telefono",
    tech_suport_phone: "Supporto tecnico",
    live_chat: "Chat Live",
    terms_and_conditions: "Termini e condizioni",
    about_terms_and_conditions: "Termini e condizioni",
    privacy_policy: "Informativa sulla privacy",
    professional_contract: "Condizioni d'uso",
    age_disclaimer: "Si, ho superato i 18 anni di etÃ .",
    offline_disclaimer: "PEPPR non Ã¨ responsabile di alcuna attivitÃ  offline.",
    terms_and_conditions_privacy_policy_agreement: "Accetto i {{tac}} e l' {{pp}}.",
    professional_contract_terms_and_conditions_privacy_policy_agreement: "Accetto il {{contract}}, e i {{tac}} e l' {{pp}}.",
    welcome_slogan: "Benvenuti su PEPPR",
    no_pepprs_found: "Nessun peppr Ã¨ stato trovato - Per favore modifica i filtri alla tua ricerca.",
    reset_filter: "Elimina filtri",
    create_client_account: "Registrati",
    create_provider_account: "Indipendente",
    create_agency_account: "Agenzia",
    edit_professional: "Modifica profilo ",
    review_profile: "Conferma profilo ",
    publish_profile: "Pubblica profilo ",
    disable_profile: "Disattiva profilo ",
    delete_profile: "Elimina profilo ",
    private_data: "Dati privati",
    public_data: "Dati pubblici",
    archive_profile_agency_confirmation: "Il profilo non sarÃ  piÃ¹ disponibile. Continuare?",
    delete_profile_do_you_really_want_to_delete_cannot_be_undone: "Il tuo profilo verrÃ  eliminato definitivamente, tutti i tuoi dati cancellati e non avrai piÃ¹ accesso ai servizi di PEPPR. Continuare?",
    instant_booking: "Disponibile ora",
    we_are_looking_for_new_pepprs: "Cerchiamo nuovi pepprs!",
    click_here_to_apply: "Clicca qua per promuoverti!",
    your_profile_is_inactive_and_reviewed_you_can_publish_it: "Il tuo profilo non Ã¨ al momento attivo ma Ã¨ giÃ  stato salvato e potrai renderlo pubblico in qualsiasi momento. Allo stesso modo, potrai disattivarlo in qualsiasi momento.",
    instant_booking_is_active: ' Quando "Disponibile ora" Ã¨ attivato, significa che sei da subito libero per nuove prenotazioni. Per favore rispondi rapidamente alle richieste dando il tuo primo appuntamento disponibile.',
    you_can_enable_instant_booking: 'Puoi attivare "Disponibile ora"  e accettare subito prenotazioni. I clienti potranno cosÃ¬ fare richieste per incontri anche immediati. Tu potrai comunicare la tua disponibilitÃ  e il cliente accettare o rifiutare l\'appuntamento da te proposto.',
    agency_add_provider: " Crea un nuovo profilo ",
    agency_manage_bookings: "Gestisci prenotazione",
    agency_please_specify_travel_terms_client_will_have_to_accept: "Per favore inserisci i costi di viaggio e le modalitÃ  di arrivo nella casella â€œNoteâ€. Il cliente dovrÃ  accettarle prima della conferma della prenotazione.",
    booking_shortlist_provider_explanation: "Sei stato invitato a fare un'offerta per una prenotazione shortlist. CiÃ² significa che il cliente ha attualmente prenotato qualcun altro, ma si ha la possibilitÃ  di reclamarlo. Quando si effettua una offerta e il cliente accetta, la prenotazione viene modificata a voi.",
    agency_successfully_accepted_the_booking: "La prenotazione Ã¨ stata effettuata con successo",
    agency_successfully_declined_the_booking: "La sua prenotazione Ã¨ stata rifiutata",
    no_active_bookings: "Non sono state trovate prenotazioni attive",
    no_agencies: "Non sono state trovate agenzie",
    phone_number_privacy_disclaimer: "Il tuo numero di telefono non sarÃ  fornito a nessuno. Riceverai soltanto sms relativi alla tua prenotazione in modo che tu non possa perderti mai niente!",
    signup_form_short_instructions: " Riempi  la scheda di seguito e diventa in poco tempo un peppr:",
    client_signup_form_short_instructions: "Riempi la scheda di seguito e potrai in breve effettuare prenotazioni:",
    client_signup_form_short_instructions_completion: "Compila questo modulo per garantire la sua conto:",
    continue_to_complete_account: "Si prega di continuare a garantire la sua conto.",
    client_signup_free_ride: "Prova ora gratuitamente peppr!",
    how_did_you_learn_about_peppr: "Come sei venuto a conoscenza di PEPPR?",
    agency_signup_form_short_instructions: "Riempi la scheda per dare l'accesso a una agenzia:",
    payout_requirements_instructions: "Puoi richiedere la tua parte di pagamento per le prenotazioni ricevute, a partire da un minimo di 20 â‚¬ guadagnati attraverso i costi di prenotazione.",
    login_short_instructions: "Immetti e-mail e password",
    phone_confirm_short_instructions: " Per favore, immetti il codice ricevuto  per sms",
    email_confirm_short_instructions: "Per favore, immetti il codice ricevuto per e-mail",
    imageupload_short_instructions: "Carica fotografie. Le fotografie verranno controllate e quindi aggiunte al tuo profilo.",
    imageupload_long_instructions: "Siamo una Premium-Plattform e le tue fotografie devono rispettare criteri interni. Per favore non pubblicare foto che riprendano in maniera ravvicinata le tue parti intime.",
    imageupload_long_instructions_no_sex: "Stiamo rivoluzionando il mercato delle escort/accompagnatrici creando una nuova piattaforma di ragazze di altissimo livello. Su PEPPR, vogliamo che i clienti si sentono a suo agio andando ad un appuntamento a pagamento.<br/><br/>Per questo, gli immagini che stanno sul sito dovranno rispettare una serie di linea guida. PerciÃ² vogliamo far vedere il â€œvero voiâ€ usando foto reali! Naturalmente possono essere un poâ€™ sexy ma preferibilmente non nude!<br/><br/>Come regola generale, scegli delle immagine che pubblicheresti anche su Facebook.",
    imageupload_agency_instructions: " Le immagini non possono contenere informazioni sulla tua agenzia.",
    imageupload_admin_do_you_really_want_to_delete_cannot_be_undone: "Lâ€™immagine verrÃ  eliminata in maniera definitiva, continuare?",
    imageupload_cannot_delete_too_few_reviewed_images: "Non Ã¨ possibile cancellare questa immagine, avete bisogno di un almeno {{numReviewed}} immagini recensiti",
    provider_price_discount_instructions: " Nel caso in cui un cliente voglia prenotare piÃ¹ ore, verranno applicate le tariffe orarie previste. Esempio sconto: a partire da 2h 180â‚¬/h, da 4h 160â‚¬/h. Prenotazione di  2h totali: 360â‚¬, 3h 540â‚¬, 5h 800â‚¬",
    successfully_created_your_account: "Il tuo profilo Ã¨ stato creato con successo!",
    successfully_published_your_profile: "Il tuo profilo Ã¨ stato reso pubblico con successo!",
    successfully_disabled_your_profile: "Il tuo profilo Ã¨ stato disattivato con successo!",
    provider_thank_you_for_signing_up_with_peppr: "Grazie per la tua registrazione a Peppr. Il tuo account Ã¨ stato creato con successo!",
    creating_provider_successful: "Il nuovo profilo Peppr Ã¨ stato creato con successo!",
    successfully_enabled_instant_booking: "â€Ora disponibileâ€ Ã¨ stato attivato!",
    successfully_disabled_instant_booking: "â€Ora disponibileâ€ Ã¨ stato disattivato!",
    provider_editing_successful: "Le tue modifiche sono state salvate con successo.",
    saving_changes_successful: "Le tue modifiche sono state salvate con successo.",
    agency_thank_you_for_signing_up_with_peppr: "Grazie per la tua registrazione a Peppr. Il tuo account Ã¨ stato creato con successo!",
    successfully_sent_message: "Il tuo messaggio Ã¨ stato inviato correttamente",
    successfully_sent_review: "Il tuo commento Ã¨ stato salvato",
    successfully_confirmed_your_phone: "Il tuo numero di telefono Ã¨ stato confermato!",
    successfully_confirmed_your_email: "Il tuo indirizzo e-mail Ã¨ stato confermato!",
    successfully_logged_in: "Hai effettuato il  Log-in.",
    successfully_created_an_enquiry: " La tua richiesta di prenotazione Ã¨ stata inoltrata con successo",
    successfully_signed_you_up: "Grazie, la tua registrazione Ã¨ stata salvata.",
    successfully_reset_password: "Le Ã¨ stata inviata una nuova Password per e-mail",
    successfully_updated_profile: "Il tuo Profilo Ã¨ stato modificato con successo",
    success: " Realizzato con successo",
    create_new_profile_action: "Crea",
    create_new_profile_rest: "Nuovo profilo su PEPPR per te o per la tua agenzia .",
    provider_type: "Tipo",
    provider_type_indiependent: "Independent",
    provider_type_agency: "Agenzia",
    forename: "Nome",
    claim: "Tipo",
    email_address: "Indirizzo e-mail",
    email: "E-mail",
    login_username: "E-mail o Username",
    phone_number: "Numero di telefono ",
    sex: "Sesso",
    your_sex: "Il tuo sesso",
    age: "EtÃ ",
    date_of_birth: "Data di nascita",
    height: "Altezza",
    height_cm: "Altezza (cm)",
    confection_size: "Misura fianchi",
    hair_colour: "Colore dei capelli",
    hair_length: "Lunghezza dei capelli",
    figure: "Fisico",
    bust_size: "Misura seno",
    body_hair: "PelositÃ  corpo",
    pubic_hair: "PelositÃ  parti intime",
    sexuality: "SessualitÃ ",
    ethnicity: "Caratteri fisici di provenienza",
    nationality: "NazionalitÃ ",
    location: "Luogo",
    locations: "Luoghi",
    travel_types: "Tipo di spostamento",
    for_travels: "Per spostamento",
    provider_attributes: "Caratteristiche",
    tattooed: "Tatuaggi",
    smoker: "Fumatore",
    pierced: "Piercings",
    service_fee: "Costi dei servizi (quando non inclusi)",
    fee: "Tariffa",
    hours: "Ore",
    booking_fee: "Spese di prenotazione",
    pricing_booking_fee_now: " Spese di prenotazione ",
    service: "Servizi",
    language: "Lingua",
    speaks_language: "Lingue parlate",
    distance_km: "Distanza (km)",
    price: "Prezzo",
    price_h: "Prezzo (h)",
    response_rate: "Tasso di risposta",
    created: "Registrato",
    created_on: "Registrato il",
    profile_visits: "Visualizzazioni Profilo",
    profile_reviews: "Commenti",
    create_provider: "Applica",
    create_client: "Applica",
    create_not_published_now: "Non ancora pubblico ",
    instant_booking_available: "Subito disponibile",
    service_included: "Incluso",
    app_language: "Lingua App",
    provider_app_usage: "Uso App",
    provider_uses_smartphone: "Uso il mio Smartphone per l' App",
    provider_languages: "Lingue",
    provider_price_per_hour: "Prezzi (per ora)",
    provider_location_types: "Luoghi ",
    provider_location: "Il mio luogo",
    provider_travel_types: "Destinazione di viaggio",
    provider_interests: "Interessi",
    provider_food_preferences: "Cibo",
    provider_drink_preferences: "Bevande",
    provider_occupation: "Lavoro",
    provider_perfume: "Profumo",
    provider_dress_style: "Stile abbigliamento",
    provider_booking_upfront_hours: "Minimo preavviso (h)",
    provider_booking_min_hours: "Durata minima della prenotazione (h)",
    provider_travel_confirmation_threshold_km: "Costi di viaggio a partire da (km)",
    provider_description: "Descrizione",
    provider_available_services: "Servizi disponibili (sovraprezzo)",
    provider_notes_placeholder: "Cose che ancora dovresti sapere su di meâ€¦",
    provider_autodescription: "{{sex}}, {{heightCm}}cm altezza, {{age}} anni, fisico: {{figure}}",
    provider_update_location: "Localizzare",
    profile_url: "Link profilo ",
    show_more: "Altro",
    show_more_attributes: "Altri particolari",
    show_more_services: "Altri servizi",
    add_price_discount: "Aggiungi sconto ",
    provider_price_discount: "Prezzo scontato",
    min_booked_hours: " Ore minime prenotate",
    agency_name: "Nome",
    agency_location: "Indirizzo (circa.)",
    price_to_professional: "{{price}} â‚¬  a {{name}}",
    service_requires_phone_call: "Chiama per favore",
    eur_per_hour: "â‚¬ / h",
    cashout_type: "Pagamento",
    cashout_type_cash: "Contanti (solo per  Berlino)",
    cashout_type_bank: "Trasferimento",
    bank_account: "Conto bancario",
    password: "Password",
    password_confirm: "Conferma password",
    forgot_password: "dimenticata?",
    reset_password: "Crea una nuova password",
    update_profile: "Salva profilo ",
    username: "Username",
    newsletter_subsribed: "Abbonati alla newsletter di PEPPR ",
    login: "Login",
    logout: "Logout",
    click_to_show_profile: "Clicca per i dettagli",
    click_here: "Clicca qua",
    enquire: "Avanti",
    book: "Prenota",
    book_now: "Prenota ora",
    next_availability: "Libero",
    availability_upon_request: "Su richiesta",
    availability_upon_request_long: "Su richiesta",
    availability_now: "ora",
    availability_minutes: "m",
    availability_hours: "h",
    availability_days: "g",
    availability_minutes_long: "in {{minutes}} min",
    availability_hours_long: "in {{hours}} h",
    availability_days_long: "in {{days}} t",
    availability_in: "in",
    availability: "DisponibilitÃ ",
    available_extra_services: "Altri servizi",
    booking_booking_heading: "Prenotazione",
    booking_in_n_hours: "in {{hours}} h",
    booking_in_other: "Data e ora",
    booking_all_night_long: "Tutta la notte",
    booking_duration_other: "Altro",
    min_booking_duration: "Prenotazione minima",
    booking_in_advance: "Tempo minimo di anticipo per la prenotazione",
    search_map: "Consulta mappa...",
    services: "Servizi",
    free_services: "Incluso",
    extras: "Extras",
    please_choose_extras: "Scegli Extras ",
    please_call_after_booking_to_discuss_details: "Dopo la prenotazione per favore mettiti in contatto telefonico con il tuo peppr per discutere i dettagli.",
    service_info_call: "(tel)",
    please_validate_your_phone_number: "Conferma numero di telefono!",
    phone_confirmation_code: "Codice di conferma",
    email_confirmation_code: "Codice di Conferma",
    resend_confirmation_code: " Richiedi il codice",
    login_to_resend_code: "Richiedere un nuovo codice",
    email_confirmation_prefilled_just_press_confirm: "Abbiamo giÃ  immesso il codice â€“ Per favore, premi â€œConfermaâ€",
    show_profile: "Mostra Profilo ",
    profile: "Profilo ",
    set_card: "Sed Card",
    pricing_and_extras: "Prezzi e Servizi",
    profile_state: "Profilo",
    stats_and_reviews: "Stats & Recensioni",
    show_in_maps: "Mostra mappa",
    pay_now: "Paga ora",
    booking_beware_not_launched: "Non abbiamo ancora lanciato! Siamo spiacenti, non Ã¨ possibile inviare ancora qualsiasi richiesta.",
    booking_state: "Stato prenotazione",
    booking_shortlist_state: "Stato shortlist ",
    booking_shortlist_expiration: "Rispondere al",
    booking_provider: "Prenotato",
    booking_travel_confirmation_required: "Dopo la prenotazione {{name}} ti informerÃ  meglio su come arrivare e potrai ancora decidere se accettare o meno. Per favore prenota con sufficiente anticipo il tuo appuntamento calcolando tempi di percorrenza e arrivo",
    booking_notes_placeholder: "Per favore specifica il Hotel e numero di stanza, desideri particolari, informazioni di viaggio etc.",
    booking_notes_placeholder_provider: "Per favore rispondere sempre fornendo le informazioni a nome del peppr richiesto dal cliente (e non come agenzia).",
    booking_notes: "Note",
    booking_payment_peppr_is_anonymous: "PEPPR Ã¨ anonimo",
    booking_shortlist: "Prenotazione shortlist",
    we_do_not_share_phone_number_if_like_call_type_in_message: " Non forniamo i contatti telefonici ai clienti. Se vuoi telefonare con i clienti, scrivi il tuo numero nei messaggi e chiedi di essere richiamato.",
    booking_payment_intro_now: "Ora",
    booking_payment_intro_now_info: "{{fee}}â‚¬ spese di prenotazione",
    booking_payment_intro_later: "Al vostro incontro",
    booking_payment_intro_later_info: "{{servicefee}}â‚¬ in una busta aperta",
    booking_payment_creditcard_text: "Sullâ€™ <strong>Kreditkartenabrechnung</strong> (Kreditkartenabrechnung= estratto conto) della tua carta di credito verrÃ  mostrato una intestazione discreta <strong>diskrete</strong> con solo il nome della <em>{{companyName}}</em> , senza mostrare il tipo di servizio prenotato.",
    booking_payment_debitcard_text: "Sullâ€™ <strong>Kontoauszug</strong> (Kontoauszug=estratto conto) della tua carta di debito <strong>diskrete</strong> verrÃ  mostrato una intestazione discreta <strong>diskrete</strong> con solo il nome della <em>{{companyName}}</em>, senza mostrare il tipo di servizio prenotato.",
    booking_payment_transaction_security_text: " La tua transazione Ã¨ assicurata dal protocollo SSL. Per favore accertati che la barra degli indirizzi del tuo browser mostri correttamente il lucchetto.",
    booking_payment_privacy_text: "I tuoi dati non vengono salvati nei nostri sistemi. I dati immessi vengono direttamente comunicati ai fornitori dei servizi di pagamento.",
    booking_payment_credit_card_cancel_info: "Lâ€™ importo verrÃ  soltanto addebitato se la tua richiesta verrÃ  accettata da  <em>{{name}}</em> entro le 24 ore. ",
    booking_payment_debit_cancel_charge: " Per i pagamenti con addebito su conto corrente, i costi di prenotazione verranno addebitati immediatamente. Se la prenotazione viene rifiutata, le sarÃ  rimborsato lâ€™ importo direttamente sul conto bancario indicato",
    booking_payment_refund_info: " I costi di prenotazione non vengono restituiti nel caso doveste mancare allâ€™ appuntamento. Come previsto dalla legge {{name}} puÃ² rifiutarsi di prestare il servizio. In questo caso, su richiesta, le verranno rimborsati i costi di prenotazione.",
    booking_payment_free_ride: "Per questa prenotazione non sono previsti costi di prenotazione, pagherai solo il servizio nel momento della prestazione.",
    booking_payment_card_number: "Numero della carta di credito",
    booking_payment_card_cvv: "CVV",
    booking_payment_card_holdername: "Nome presente sulla carta di credito",
    booking_payment_card_expiry: "Data di scadenza",
    booking_payment_iban: "IBAN",
    booking_payment_bic: "BIC",
    booking_payment_card_address: " Via e nr.",
    booking_payment_zip_city: "Codice postale, CittÃ ",
    payment_method: "Metodo di pagamento",
    privacy_privacy_text: "I dati personali e i dati di pagamento immessi vengono direttamente trasmessi ai nostri fornitori di servizi di pagamento. Su PEPPR rimani completamente anonimo.",
    privacy_peppr_is_secure: "PEPPR Ã¨ sicuro",
    privacy_peppr_is_secure_text: "La tua transazione viene assicurata attraverso protocollo SSL. Tutte le informazioni comunicate rimangono segrete. Tutti i nostri sistemi e PC sono certificati e controllati regolarmente per garantirne la sicurezza",
    instant_booking_duration: "Ora disponibile per",
    enable_instant_booking: "Attiva â€ž Ora disponibileâ€œ",
    disable_instant_booking: "Disattiva â€ž Ora disponibileâ€œ",
    instant_booking_ends_at: "Fine {{endDate}}",
    thankYouForBookingYouWillShortlyReceiveAReplyFromViaSms: "Grazie per la tua prenotazione su PEPPR. A breve riceverai per sms una risposta da  <em>{{name}}</em>.",
    weHaveBlockedAmountWeWillChargeOnConfirmationFrom: " Se hai pagato attraverso carta di credito o PaypPal ti verrÃ  addebitato lâ€˜ importo di {{amount}} â‚¬ solo nel momento in cui <em>{{name}}</em> conferma la tua prenotazione.",
    client_shortlist_notice_title: "Aumentare le vostre probabilitÃ  per una prenotazione di successo!",
    client_shortlist_notice_text: "Vorremmo aggiungere le seguenti escorte simile alla shortlist per questa prenotazione. Avere una shortlist significa che questo escort possono anche vedere la vostra prenotazione e fare un'offerta.",
    shortlist_add: "Aggiungere ({{numChecked}})",
    successfully_saved_shortlist: "La tua shortlist Ã© state salvate con successo",
    shortlist_max_num_reached: "Ãˆ possibile aggiungere un massimo di {{maxNum}} persone alla shortlist",
    provider_account_status: "Situazione conto ",
    upload_profile_pictures: "Carica foto del profilo ",
    no_images_at_the_moment: "Nessuna immagine al momento",
    im_done_with_uploading_num_pictures: "Ho completato lâ€˜ upload di immagini",
    click_to_upload_an_image: "Clicca qua per aggiungere foto ",
    drop_images_here_to_upload: "Clicca qua o trascina immagini per aggiungere foto ",
    login_username_error: "Immetti e-mail e username",
    login_password_error: "Immetti password",
    provider_name_error: " Vogliamo rivolgerci a te per nome. Per favore immetti la prima lettera in maiuscolo.",
    provider_username_error: "Username giÃ  presente o non valido. Per favore, scegline un altro utilizzando lettere e numeri.",
    provider_claim_error: "Scegli il tipo che piÃ¹ ti si addice",
    provider_email_error: " Dobbiamo poterti contattare per e-mail. Lâ€™ e-mail immessa Ã¨ giÃ  presente o invalida.",
    provider_phone_error: " Abbiamo bisogno del tuo numero di telefono per poter inoltrare la tua prenotazione. Per favore immetti il numero come segue: 176 1234 5678",
    provider_birthdate_error: "Per legge necessitiamo della informazioni sulla tua etÃ . Per favore immetti la tua data di nascita nel seguente formato nel caso il tuo browser non visualizzi il calendario: YYYY-MM-DD",
    provider_height_error: "Per favore forniscici un paio di informazioni su di te ",
    provider_figure_error: "Per favore forniscici un paio di informazioni su di te ",
    provider_price_per_hour_error: "Per favore immetti la tua tariffa oraria",
    provider_sex_error: "Immetti il tuo sesso",
    provider_bank_account_error: "Il tuo IBAN e/o BIC non Ã¨ valido ",
    provider_availability_time_error: "Immettere lâ€™ orario da â€“ a nel formato 24H. Esempio, 14:00",
    agency_failed_to_respond_to_booking: "Salvataggio dati non riuscito. Per favore riprova piÃ¹ tardi.",
    booking_date: "Data",
    booking_time: "Ora",
    booking_duration: "Durata",
    booking_duration_hours: "Durata (h)",
    booking_location_type: "Luogo",
    you_have_to_sign_the_agency_contract: "Il profilo della tua agenzia non Ã¨ ancora stato attivato. Per favore, sottoscrivi il contratto per poter attivare la tua agenzia su PEPPR.",
    successfully_signed_contract: "Il contratto Ã¨ stato sottoscritto con successo.",
    show_contract: "Mostra contratto ",
    hide_contract: "Chiudi contratto ",
    agency_details: "Informazioni agenzia",
    contract_company_name: "Nome agenzia",
    contract_register_number: "Numero di registrazione impresa",
    contract_full_address: "Indirizzo",
    contract_director_name: "Amministratore",
    contract_signature: "Firma",
    contract_signed_by: "Rappresentante di",
    contract_sign: "Firma (con validitÃ  giuridica)",
    agency_contact: "Contatti agenzia",
    contract_contact_name: "Nome e Cognome",
    contract_contact_email: "E-mail",
    contract_contact_phonenumber: "Telefono",
    rating_high: "Ecellente",
    rating_low: "Basso",
    review_title: "Perfavore dai un voto al tuo Peppr",
    review_text: "Rivedi il testo",
    review_text_placeholder: "Ci sta qualcosa che ci vorresti dire? Il testo rimarrÃ  privato tra te e i dipendenti di Peppr.",
    review_send: "Invia commentÃ²",
    review_category_1: "PuntualitÃ ",
    review_category_2: "Profilo accurato",
    review_category_3: "Ordinata",
    messages_deleted_for_privacy: " Tutti I messaggi di questa prenotazione sono stati cancellati per motive di privacy.",
    message: "Messaggio",
    messages_header: "Messaggi",
    message_from: "da",
    message_to: "a",
    message_date: "Data",
    message_send: "Invia messaggio",
    booking_date_error: "Per favore, immetti data prenotazione",
    booking_time_error: "Per favore, immetti da quando vuoi che la tua la tua prenotazione parta.",
    booking_availability_warning: "Il giorno e lâ€™ora non sono disponibili. Puoi comunque inviare la richiesta di prenotazione. La tua richiesta verrÃ  perÃ² probabilmente rifiutata.",
    booking_availability_ondemand_warning: "{{name}} non ha orari prefissati e Ã¨ disponibile a soddisfare le tue richieste dâ€™orario.",
    booking_instant_profile_info: "{{name}} Ã¨ online e immediatamente disponibile per le tue prenotazioni. Invia la tua richiesta e riceverai velocemente una risposta con gli orari disponibili per il vostro appuntamento.",
    booking_instant_info: 'Hai scelto "Ora disponibile". {{name}} farÃ  in modo di incontrarti il prima possibile e ti invierÃ  per sms lâ€™orario per il vostro appuntamento. Potrai puoi decidere se per te va bene o meno.',
    booking_duration_hours_error: "Immetti la durata della tua prenotazione",
    booking_constraints_error: "Per favore, verifica il momento e la durata della tua prenotazione.",
    booking_constraints_error_hint_advance: "Almeno {{advanceHours}} h dâ€™anticipo.",
    booking_constraints_error_hint_duration: "Per minimo {{durationHours}} h.",
    booking_constraints_error_hint_travel: "in quanto questa prenotazione prevede uno spostamento.",
    booking_location_error: "Immetti il luogo dâ€™ incontro ",
    booking_payment_card_number_error: "Immetti il numero della carta",
    booking_payment_card_cvc_error: "Il CVV Ã¨ il numero di tre cifre stampato sul pannello della firma sul retro della carta",
    booking_payment_card_holdername_error: " Immetti il nome indicato sulla carta",
    booking_payment_card_expiry_month_error: "Immetti la data di scadenza della tua carta",
    booking_payment_card_expiry_year_error: "Immetti la data di scadenza attraverso 4 cifre",
    booking_payment_address_error: "Immetti Via e nr.",
    booking_payment_zip_error: "Immetti il codice postale",
    booking_payment_city_error: "Immetti cittÃ ",
    booking_payment_wrong_state_error: "Questa prenotazione Ã¨ giÃ  stata effettuata o Ã¨ stata annullata",
    booking_payment_paypal_cancelled: "Il pagamento PayPal Ã¨ stato interrotto. Per favore ritenta o scegli unâ€™ altra modalitÃ  di pagamento.",
    instant_booking_duration_hours_error: "Indica per quanto tempo â€ž Ora disponibileâ€œ deve rimanere attivo ",
    password_error: "La Password deve contenere minimo 6 caratteri e non puÃ² iniziare e finire con uno spazio ",
    password_confirm_error: "Le password non corrispondono",
    please_fill_out_the_field_error: "Per favore completare il campo ",
    login_error: "Logion non riuscito, controlla Username e password",
    auto_login_error: "Login non riuscito, immetti nuovamente Username e password",
    main_geocoding_error: "La posizione attuale non Ã¨ stata rilevata. Ritenta per favore.",
    main_invalid_postcode_error: "Codice postale non valido ",
    we_havent_launched_in_your_country_yet: "Non siamo ancora attivi nel tuo Paese! ",
    would_you_use_peppr_when_we_launch: "Utilizzeresti PEPPR se fossimo presenti anche in {{country}} ?",
    we_would_like_notify_launch: "Ti informiamo volentieri appena saremo presenti anche da te!",
    email_required_error: "Per favore immetti un indirizzo e-mail valido ",
    retrieving_booking_please_try_again_error: "Prenotazione non riuscita, per favore ritenta piÃ¹ tardi.",
    creating_boooking_failed_please_check_and_try_again: "Prenotazione non riuscita, per favore controlla i tuoi dati e ritenta nuovamente",
    please_create_an_account_or_login_to_book: "Per favore crea account o fai login ",
    access_denied_please_login_error: "Accesso negato, per favore fai prima login",
    access_denied_you_are_registered_as_a_client_error: "Accesso negato. Hai effettuato il login ad cliente.",
    access_denied_please_verify_your_phone_number: "Accesso negato. Per favore prima conferma il tuo numero di telefono.",
    phone_confirmation_code_error: "Immetti il codice  sms",
    email_confirmation_code_error: "Immetti il codice della e-mail",
    failed_to_load_providers_error: "La lista dei Pepprs non puÃ² essere caricata",
    failed_to_upload_your_picture_error: "Caricamento di foto non riuscito, per favore ritenta piÃ¹ tardi.",
    failed_to_reorder_your_picture_error: "Disposizione foto non riuscito, per favore ritenta piÃ¹ tardi",
    invalid_confirmation_code_error: "Codice di conferma non valido ",
    save_shortlist_error: "Impossibile salvare la vostra shortlist, , per favore ritenta piÃ¹ tardi",
    unknown_error: "Errore sconosciuto",
    server_error_msg: "Errore: {{errormsg}}",
    signup_server_error: "Errore del server, per favore ritenta piÃ¹ tardi",
    username_changed_please_login_again: "Hai cambiato la tua username effettua di nuovo il log-in",
    acquisition_error: "Come sei venuto a conoscenza di Peppr?",
    dropzone_your_browser_is_not_supported: " Il tuo browser non viene riconosciuto. Per favore apri la pagina con un browser aggiornato.",
    dropzone_please_use_the_form_below_to_upload: "Per favore utilizza il seguente format per lâ€™upload",
    dropzone_invalid_file_type: "Formato non valido ",
    dropzone_file_is_too_big: "Formato troppo grande",
    dropzone_failed_to_upload_please_try_later: "Caricamento non riuscito, per favore ritenta piÃ¹ tardi",
    dropzone_cancel_upload: "Interrompi caricamento",
    dropzone_are_you_sure_you_want_to_cancel_the_upload: "Sicuro di voler interrompere il caricamento?",
    dropzone_remove_upload: "Elimina caricamento",
    dropzone_you_cant_add_more_files: "Non Ã¨ possibile caricare altri dati",
    payment_country: "Paese",
    bust_size_small: "Piccolo",
    bust_size_medium: "Medio",
    bust_size_large: "Grande",
    bust_size_xlarge: "Molto grande",
    height_small: "Piccolo",
    height_medium: "Medio",
    height_tall: "Grande",
    ENUM_PhoneNumberCountry_30: "30 Grecia",
    ENUM_PhoneNumberCountry_31: "31 Olanda",
    ENUM_PhoneNumberCountry_32: "32 Belgio",
    ENUM_PhoneNumberCountry_33: "33 Francia",
    ENUM_PhoneNumberCountry_34: "34 Spagna",
    ENUM_PhoneNumberCountry_350: "350 Gibilterra",
    ENUM_PhoneNumberCountry_351: "351 Portogallo",
    ENUM_PhoneNumberCountry_352: "352 Lussemburgo",
    ENUM_PhoneNumberCountry_353: "353 Irlanda",
    ENUM_PhoneNumberCountry_354: "354 Islanda",
    ENUM_PhoneNumberCountry_355: "355 Albania",
    ENUM_PhoneNumberCountry_356: "356 Malta",
    ENUM_PhoneNumberCountry_357: "357 Cipro",
    ENUM_PhoneNumberCountry_358: "358 Finlandia",
    ENUM_PhoneNumberCountry_359: "359 Bulgaria",
    ENUM_PhoneNumberCountry_36: "36 Ungheria",
    ENUM_PhoneNumberCountry_370: "370 Lituania",
    ENUM_PhoneNumberCountry_371: "371 Latvia",
    ENUM_PhoneNumberCountry_372: "372 Estonia",
    ENUM_PhoneNumberCountry_373: "373 Moldavia",
    ENUM_PhoneNumberCountry_374: "374 Armenia",
    ENUM_PhoneNumberCountry_375: "375 Bielorussia",
    ENUM_PhoneNumberCountry_376: "376 Andorra",
    ENUM_PhoneNumberCountry_377: "377 Monaco",
    ENUM_PhoneNumberCountry_378: "378 San Marino",
    ENUM_PhoneNumberCountry_380: "380 Ucraina",
    ENUM_PhoneNumberCountry_381: "381 Serbia",
    ENUM_PhoneNumberCountry_382: "382 Montenegro",
    ENUM_PhoneNumberCountry_385: "385 Croazia",
    ENUM_PhoneNumberCountry_386: "386 Slovenia",
    ENUM_PhoneNumberCountry_387: "387 Bosnia and Erzegovina",
    ENUM_PhoneNumberCountry_389: "389 Macedonia",
    ENUM_PhoneNumberCountry_40: "40 Romania",
    ENUM_PhoneNumberCountry_420: "420 Repubblica Ceca",
    ENUM_PhoneNumberCountry_421: "421 Slovacchia",
    ENUM_PhoneNumberCountry_423: "423 Liechtenstein",
    ENUM_PhoneNumberCountry_44: "44 Regno Unito",
    ENUM_PhoneNumberCountry_45: "45 Danimarca",
    ENUM_PhoneNumberCountry_46: "46 Svezia",
    ENUM_PhoneNumberCountry_47: "47 Norvegia",
    ENUM_PhoneNumberCountry_48: "48 Polonia",
    ENUM_PhoneNumberCountry_65: "65 Singapore",
    ENUM_PhoneNumberCountry_1: "1 Stati Uniti dâ€™America",
    ENUM_PhoneNumberCountry_7: "7 Russia",
    ENUM_Ethnicity_MIXED: "Misto",
    ENUM_Ethnicity_WESTERN: "Occidentale",
    ENUM_Ethnicity_ASIAN: "Asiatico",
    ENUM_Ethnicity_AFRICAN: "Africano",
    ENUM_Ethnicity_CARRIBEAN: "Caraibico",
    ENUM_Ethnicity_ARAB: "Arabo",
    ENUM_Sex_MALE: "Uomo",
    ENUM_Sex_FEMALE: "Donna",
    ENUM_Sex_TRANS: "Trans",
    ENUM_Sexuality_HETERO: "Etero",
    ENUM_Sexuality_BI: "Bi",
    ENUM_Sexuality_HOMO: "Homo",
    ENUM_Sexuality_TRANS: "Trans",
    ENUM_HairLength_SHAVED: "Rasati",
    ENUM_HairLength_SHORT: "Corti",
    ENUM_HairLength_SHOULDER_LONG: "Mezza lunghezza",
    ENUM_HairLength_LONG: "Lunghi",
    ENUM_HairColor_blonde: "Biondi",
    ENUM_HairColor_brunette: "Castani",
    ENUM_HairColor_red: "Rossi",
    ENUM_HairColor_black: "Neri",
    ENUM_Figure_THIN: "Fine",
    ENUM_Figure_SLIM: "Magra",
    ENUM_Figure_FEMININE: "Femminile",
    ENUM_Figure_CUSHY: "Corposa",
    ENUM_Figure_RUBENESQUE: "Molto corposa",
    ENUM_Figure_MUSCULAR: "Muscoloso",
    ENUM_Figure_SPORTY: "Sportiva/o",
    ENUM_Figure_EASYGOING: "Amichevole",
    ENUM_BustSize_A: "1",
    ENUM_BustSize_B: "2",
    ENUM_BustSize_C: "3",
    ENUM_BustSize_D: "4",
    ENUM_BustSize_Dplus: "5+",
    ENUM_BodyHair_LIGHT: "Leggera",
    ENUM_BodyHair_MEDIUM: "Media",
    ENUM_BodyHair_FULL: "Folta",
    ENUM_PubicHair_SHAVED: "Rasatura completa",
    ENUM_PubicHair_GROOMED: "Rasatura curata",
    ENUM_PubicHair_FULL: "Naturale",
    ENUM_Languages_de: "Tedesco",
    ENUM_Languages_en: "Inglese",
    ENUM_Languages_pl: "Polacco",
    ENUM_Languages_fr: "Francese",
    ENUM_Languages_bg: "Bulgaro",
    ENUM_Languages_es: "Spagnolo",
    ENUM_Languages_cs: "Ceco",
    ENUM_Languages_da: "Danese",
    ENUM_Languages_et: "Estone",
    ENUM_Languages_el: "Greco",
    ENUM_Languages_ga: "Irlandese",
    ENUM_Languages_hr: "Croato",
    ENUM_Languages_it: "Italiano",
    ENUM_Languages_lv: "Lettone",
    ENUM_Languages_lt: "Lituano",
    ENUM_Languages_hu: "Ungherese",
    ENUM_Languages_mt: "Maltese",
    ENUM_Languages_nl: "Olandese",
    ENUM_Languages_pt: "Portoghese",
    ENUM_Languages_ro: "Rumeno",
    ENUM_Languages_sk: "Slovacco",
    ENUM_Languages_sl: "Sloveno",
    ENUM_Languages_fi: "Finlandese",
    ENUM_Languages_sv: "Svedese",
    ENUM_Languages_ru: "Russo",
    ENUM_LocationType_INCALL: "{{name}} (a casa)",
    ENUM_LocationType_INCALL_BROTHEL: "{{name}} (bordello)",
    ENUM_LocationType_HOTEL: "Nel tuo Hotel",
    ENUM_LocationType_HOME: "A casa tua",
    ENUM_LocationType_ESCORT: "Escort",
    ENUM_SignUp_LocationType_INCALL: "Da me",
    ENUM_SignUp_LocationType_INCALL_BROTHEL: "Dove lavoro",
    ENUM_SignUp_LocationType_HOTEL: "In albergo",
    ENUM_SignUp_LocationType_HOME: "A casa dei clienti",
    ENUM_SignUp_LocationType_ESCORT: "Escort",
    ENUM_Agency_LocationType_INCALL: "A casa di Escort",
    ENUM_Agency_LocationType_INCALL_BROTHEL: "Dove lavoro",
    ENUM_Agency_LocationType_HOTEL: "In Hotel dei clienti",
    ENUM_Agency_LocationType_HOME: "A casa di clienti",
    ENUM_Agency_LocationType_ESCORT: "Escort",
    ENUM_PAYMENT_ERROR_MSG_KEYS_ccvInvalid: "Codice CVV non valido ",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryMonthInvalid: "Mese di scadenza non valido ",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryYearInvalid: "Data di scadenza non valida",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardNumberInvalid: "Numero carta di credito non valido ",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeInvalid: "Tipo di carta non valido ",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeDoesNotMatchNumber: "Il tipo di carta non corrisponde al numero indicato",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditExceedsLimit: "Lâ€™importo supera i limiti consentiti dalla tua carta",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardExpired: "Carta di credito scaduta",
    ENUM_Weekday_MO: "LunedÃ¬",
    ENUM_Weekday_TU: "MartedÃ¬",
    ENUM_Weekday_WE: "MercoledÃ¬",
    ENUM_Weekday_TH: "GiovedÃ¬",
    ENUM_Weekday_FR: "VenerdÃ¬",
    ENUM_Weekday_SA: "Sabato",
    ENUM_Weekday_SU: "Domenica",
    ENUM_ProviderState_ACTIVE: "Attivo",
    ENUM_ProviderState_INACTIVE: "Inattivo",
    ENUM_ProviderState_DELETED: "Eliminato",
    ENUM_ProviderState_BETA: "Beta",
    ENUM_ProviderState_REVIEWED: "Verificato",
    ENUM_ShortLinkUsage_EMAIL: "E-Mail",
    ENUM_ShortLinkUsage_SMS: "SMS",
    ENUM_ShortLinkUsage_WEBFORM: "Webform",
    ENUM_ShortLinkUsage_SOCIAL: "Social Network",
    ENUM_TravelType_CITY: "CittÃ ",
    ENUM_TravelType_CITY_SURROUNDINGS: "Periferia",
    ENUM_TravelType_NATIONAL: "Nazionale",
    ENUM_TravelType_INTERNATIONAL: "Internazionale",
    ENUM_BookingState_ENQUIRY: "Richiesto",
    ENUM_BookingState_PAYMENT_AUTH: "Autorizzato",
    ENUM_BookingState_PAID: "Pagato",
    ENUM_BookingState_ACCEPTED: "Accettato",
    ENUM_BookingState_DECLINED: "Rifiutato",
    ENUM_BookingState_COMPLETED: "Concluso",
    ENUM_BookingState_ARCHIVED: "Archiviato",
    ENUM_Agency_BookingState_ENQUIRY: "Richiesto",
    ENUM_Agency_BookingState_PAYMENT_AUTH: "Richiesto",
    ENUM_Agency_BookingState_PAID: "Richiesto",
    ENUM_Agency_BookingState_PROVIDER_ACCEPTED: "Accettato dall' fornitore",
    ENUM_Agency_BookingState_ACCEPTED: "Accettato",
    ENUM_Agency_BookingState_DECLINED: "Rifiutato",
    ENUM_Agency_BookingState_SHORTLIST: "Shortlist",
    ENUM_Agency_BookingState_COMPLETED: "Completato",
    ENUM_Agency_BookingState_ARCHIVED: "Archiviato",
    ENUM_ShortlistState_CONTACTED: "Contattato",
    ENUM_ShortlistState_PROVIDER_ACCEPTED: "Accettato dall' fornitore",
    ENUM_ShortlistState_PROVIDER_DECLINED: "Rifiutato dall' fornitore",
    ENUM_ShortlistState_CLIENT_DECLINED: "Rifiutato dall' cliente",
    ENUM_ShortlistState_ACCEPTED: "Accettato",
    ENUM_ShortlistState_EXPIRED: "Scaduto",
    booking_shortlist_state_contacted_soon: "SarÃ  ricontattato presto",
    booking_shortlist_state_waiting_for_reply: "In attesa di risposta",
    booking_shortlist_state_declined: "Rifiutato",
    booking_shortlist_state_expired: "Scaduto",
    ENUM_PaymentMethod_CREDIT_CARD: "Carta di credito",
    ENUM_PaymentMethod_PAYPAL: "PayPal",
    ENUM_PaymentMethod_DEBIT_CARD: "Carta prepagata",
    ENUM_AcquisitionChannel_PRESSE: "Stampa",
    ENUM_AcquisitionChannel_BLOG: "Blogs",
    ENUM_AcquisitionChannel_FREUNDE: "Amici",
    ENUM_AcquisitionChannel_WORK: "Colleghi",
    ENUM_AcquisitionChannel_ADVERTISEMENT: "PubblicitÃ ",
    ENUM_AcquisitionChannel_OTHER: "Altro",
    ENUM_SignupType_ITALY: "Cliente",
    ENUM_SignupType_ITALY_PROVIDER: "Potenziale peppr",
    Insterest_cooking: "Cucinare",
    Insterest_travelling: "Viaggiare",
    Insterest_sports: "AttivitÃ  Fisica",
    Insterest_sailing: "Vela",
    Insterest_shopping: "Shopping",
    Insterest_arts_culture: "Arte e Cultura",
    Insterest_music: "Musica",
    Insterest_soccer: "Calcio",
    Insterest_dancing: "Danza",
    Insterest_politics: "Politica",
    Insterest_cars: "Macchine",
    Insterest_dinner: "Cena",
    Insterest_fashion: "Fashion",
    Insterest_literature: "Letteratura",
    Insterest_musical_theater: "Cinema e Teatro",
    Insterest_wellness: "Salute",
    FoodPref_italian: "Italiano",
    FoodPref_french: "Francese",
    FoodPref_fast_food: "Fast food",
    FoodPref_asian: "Asiatico",
    FoodPref_healthy_food: "Cibo salutare",
    FoodPref_mediterranean: "Mediterraneo",
    FoodPref_vegetarian: "Vegetariano",
    FoodPref_gourmet: "Gourmet",
    FoodPref_mexican: "Messicano",
    FoodPref_no_preference: "Nessuna preferenza",
    DrinkPref_champagne: "Champagne",
    DrinkPref_long_drinks: "Cocktails",
    DrinkPref_beer: "Birra",
    DrinkPref_white_wine: "Vino Bianco",
    DrinkPref_red_wine: "Vino Rosso",
    DrinkPref_shots: "Shots",
    DrinkPref_no_preference: "Nessuna preferenza",
    DrinkPref_no_alcohol: "Astemia",
    Occupation_student: "Studente",
    Occupation_bar_tender: "Barista",
    Occupation_journalist: "Giornalista",
    Occupation_dancer: "Danzatrice",
    Occupation_assistent: "Assistente",
    Occupation_manager: "Manager",
    Occupation_nurse: "Infermiera",
    Occupation_actress: "Attrice",
    Occupation_lawyer: "Avvocato",
    Occupation_cook: "Cuoca/o",
    Occupation_artist: "Artista",
    Occupation_designer: "Designer",
    Occupation_stylist: "Stilista",
    Occupation_consultant: "Consulente",
    Occupation_pilot: "Pilota",
    Occupation_sales_manager: "Rappresentante Commerciale",
    Occupation_project_manager: "Project Manager",
    Occupation_secretary: "Segretaria",
    Occupation_self_employed: "Self-employed",
    Occupation_model: "Modella",
    Occupation_secret: "Eâ€™ un segreto ;)",
    Service_oral: "Francese",
    Service_roleplay: "Giochi di ruolo",
    Service_anal: "Anale",
    Service_urolagnia: "Golden Shower",
    Service_bondage: "Bondage",
    Service_fetish: "Fetisch",
    Service_blowjob: "Sesso orale",
    Service_handicapped: "Per portatori di handicap",
    Service_handjob: "Rilassamento manuale",
    Service_tongueAnal: "Lingua anale",
    Service_tittyFuck: "Spagnola",
    Service_tongueKisses: "Bacio con lingua",
    Service_nipplePlay: "Giochi ai capezzoli",
    Service_leather: "Lack & leather",
    Service_comeInMouth: "Vieni in bocca",
    Service_kaviar: "Kaviar",
    Service_dildoPlay: "Giochi con il vibratore",
    Service_ballLicking: "Leccare le palle",
    Service_fingerAnal: "Dito anale",
    Service_footFuck: "Erotismo con i piedi",
    Service_faceSitting: "Face Sitting",
    Service_comeInFace: "Vieni in faccia",
    Service_girlfriendSex: "Girlfriendsex",
    Service_eroticMassage: "Massaggio erotico",
    Service_massage: "Massaggio",
    Service_striptease: "Striptease",
    Service_showerPlay: "Giochi in vasca & doccia",
    Service_domination: "Giochi di dominio",
    Service_dirtyTalk: "Erotismo verbale",
    Service_kissesSympathy: "Bacio simpatico",
    Service_coupleService: "Servizio di coppia",
    Service_dinnerDate: "Dinner Date",
    ProviderClaim_slimBeauty: "Bellezza magra",
    ProviderClaim_wildCat: "Gatto selvaggio",
    ProviderClaim_playfulAngel: "Angioletto giocherellone",
    ProviderClaim_girlNextDoor: "Ragazza della porta accanto",
    ProviderClaim_hotBloodedLolita: "Lolita",
    ProviderClaim_femmeFatale: "Femme fatale",
    ProviderClaim_domina: "Dominatrice",
    ProviderClaim_wildTiger: "Tigre selvaggia",
    ProviderClaim_sexyWorker: "Lavoratore sexy",
    ProviderClaim_hotGentleman: "Gentiluomo arrapante",
    ProviderClaim_reliable: "Affidabile",
    ProviderClaim_adventurous: "Avventurosa",
    ProviderClaim_calm: "Calma",
    ProviderClaim_welcoming: "Conciliante",
    ProviderClaim_sporty: "Sportiva",
    ProviderClaim_generous: "Generosa",
    ProviderClaim_proud: "Orgogliosa",
    ProviderClaim_courteous: "Premurosa"
  },
  peppritLang_en = {
    site_title: "peppr.it - Go peppr it!",
    site_title_it: "italy.peppr.it",
    site_description: "The mobile web-app for booking erotic entertainment",
    site_keywords: "escort berlin callgirls frankfurt book discreet trustworthy",
    main_title: "Escort Berlin / Frankfurt - Private Models, Escortgirls - PEPPR.it",
    main_description: "Escortservice Berlin â™¡ Escort Frankfurt â™¡ Dream girls for romantic moments â™¡ discreet and trustworthy â˜› Book your callgirls in Berlin now!",
    provider_list_title: "The Pepprs",
    provider_title: "Professional Profile",
    booking_title: "Book",
    booking_payment_title: "Secure your booking",
    provider_status_title: "Earnings",
    phone_confirm_title: "Phone Number Confirmation",
    email_confirm_title: "Email Address Confirmation",
    booking_confirmation_title: "Booking Confirmation",
    booking_payment_confirmation_title: "Payment Confirmation",
    provider_imageupload_title: "Upload Pictures",
    provider_faq_title: "Frequently asked questions",
    client_faq_title: "Frequently asked questions",
    agency_faq_title: "Frequently asked questions",
    provider_claims_title: "Provider claims",
    provider_services_title: "Provider services",
    shortlink_admin_title: "Shortlink admin",
    agency_admin_title: "Agency admin",
    edit_professional_title: "Edit Profile",
    signup_admin_title: "Sign-ups",
    agency_booking_list_title: "Bookings",
    agency_booking_title: "Booking",
    imageupload_admin_title: "Picture Review",
    edit_profile_title: "Edit Profile",
    edit_user_profile_title: "Edit User Profile",
    platformsettings_admin_title: "Platform settings",
    login_title: "Log in",
    logout_title: "Log out",
    register_title: "Register",
    about_title: "Imprint",
    imprint_modal_title: "Imprint",
    reset_password_title: "Reset password",
    change_location_title: "Change Location",
    press_kit_title: "Download press kit",
    agency_list_title: "Agencies",
    privacy_title: "Privacy",
    city_frankfurt_title: "Escort Frankfurt | PEPPR Escort Service | Direkt buchen",
    city_frankfurt_keywords: "Escort Frankfurt, Escort Wiesbaden, Escort Mainz, Escortservice, Begleitservice, Rhein-Main, Hessen",
    city_frankfurt_description: "ESCORT FRANKFURT âœ® PEPPR die APP fÃ¼r High Class Escortservices in Frankfurt, Wiesbaden, Mainz, im Rhein-Main Gebiet und Hessen",
    city_berlin_title: "Escort Berlin | PEPPR Escort Service | Direkt buchen",
    city_berlin_keywords: "Escort Berlin, Escort Brandenburg, Escortservice, Begleitservice, Berlin, Brandenburg",
    city_berlin_description: "ESCORT BERLIN âœ® PEPPR die APP fÃ¼r High Class Escortservices in Berlin und Brandenburg",
    min: "min",
    max: "max",
    short_date_time_format: "M/D h:mm A",
    short_weekday_time_format: "dd h:mm a",
    option_choose: "-- choose --",
    zip_code_country: "Zip Code, Country",
    confirm: "Confirm",
    confirm_now: "Confirm now",
    enter: "Go!",
    back: "Back",
    start: "Start",
    skip: "Skip",
    next: "Next",
    previous: "Prev",
    "continue": "Continue",
    close: "Close",
    Menu: "Menu",
    filter: "Filter",
    save: "Save",
    edit: "Edit",
    change: "Change",
    accept: "Accept",
    decline: "Decline",
    modify: "Modify",
    make_offer: "Make offer",
    no_thanks: "No thanks",
    required: "Required",
    optional: "Optional",
    reviewed: "Approved",
    rejected: "Rejected",
    show_map: "Show map",
    menu_home: "Home",
    menu_login: "Log in",
    menu_logout: "Log out",
    menu_signup: "Sign up",
    menu_providers: "The Pepprs",
    menu_faq: "FAQ",
    menu_admin: "Profile",
    menu_admin_agency: "Agency",
    menu_agency_bookings: "Bookings",
    menu_provider_bookings: "Bookings",
    menu_about: "Imprint / Press",
    menu_tnc: "Terms",
    menu_signup_professional: "Become a peppr",
    menu_privacy: "Privacy",
    menu_partners: "Partners",
    admin_only: "Admins only",
    main_greeting: "Hey!",
    main_slogan: "Let's meet up! Tell me where you are.",
    main_first_mobile_app: "The mobile web-app<br/>for booking erotic<br/>entertainment",
    main_first_mobile_app_it: "The mobile web-app<br/>for booking escorts<br/>online",
    anonymous_booking_promise: "secure booking",
    genuine_profiles_promise: "100% genuine profiles",
    anonymous_and_secure: "anonymous & secure",
    main_show_peppr: "to peppr",
    main_show_video: "to video",
    featured_in: "Featured in",
    we_are_looking_for_you: "We want you",
    become_a_peppr: "Become a peppr!",
    choose_sex_show_males: "Male pepprs",
    choose_sex_show_females: "Female pepprs",
    choose_sex_show_trans: "trans pepprs",
    show_me_pepprs: "Show me",
    company_ceo: "CEO",
    customer_support: "Customer support",
    phone: "Phone",
    tech_suport_phone: "Tech support",
    live_chat: "Live chat",
    terms_and_conditions: "Terms and Conditions",
    about_terms_and_conditions: "Terms and Conditions",
    privacy_policy: "Privacy Policy",
    professional_contract: "Professional Contract",
    locate_yourself: "Please locate yourself",
    locate_me: "Locate me",
    tell_us_what_you_like: "Tell us what you like",
    age_disclaimer: "I'm at least 18 years old.",
    offline_disclaimer: "PEPPR is not responsible for any offline activities.",
    terms_and_conditions_privacy_policy_agreement: "I agree to the {{tac}} as well as the {{pp}}.",
    professional_contract_terms_and_conditions_privacy_policy_agreement: "I agree to the {{contract}}, the {{tac}} as well as the {{pp}}.",
    welcome_slogan: "Welcome to PEPPR",
    no_pepprs_found: "No pepprs found - Please change the filter settings.",
    reset_filter: "Reset filter",
    register_as: "Register as",
    register_now_for_free: "Register now for free",
    create_client_account: "Register",
    create_provider_account: "Independent",
    create_agency_account: "Agency",
    edit_professional: "Edit Profile",
    review_profile: "Review Profile",
    publish_profile: "Publish Profile",
    disable_profile: "Disable Profile",
    delete_profile: "Delete Profile",
    private_data: "Private Data",
    public_data: "Public Data",
    imageupload_admin_mode: "Mode",
    archive_profile_agency_confirmation: "This will make the profile inaccessible. Do you want to proceed?",
    delete_profile_do_you_really_want_to_delete_cannot_be_undone: "This will permanently delete your profile, remove all your data from PEPPR and log you out. Do you want to proceed?",
    delete_booking_do_you_really_want_to_delete: "This will permanently delete the booking and remove all information abount messages and payment. Do you want to proceed?",
    you_are_leaving_the_app_for_booking_confirmation: "You will be forwarded to our website for the booking.",
    instant_booking: "Available Now",
    we_are_looking_for_new_pepprs: "We are looking for new pepprs!",
    click_here_to_apply: "Click here to apply!",
    your_profile_is_inactive_and_reviewed_you_can_publish_it: "Your profile is not active yet, but we have already reviewed it. Please enable it below. Of course you can also disable it at any time.",
    instant_booking_is_active: "'Available Now' is enabled, you are available for immediate bookings. Please reply promptly at which time you can meet up with your clients, once you receive an enquiry.",
    you_can_enable_instant_booking: "You can enable 'Available Now' if you are currently available for immediate bookings. Once enabled, clients can send you a booking request for an immediate date. You reply at which time you can meet up with them and they can accept or decline.",
    agency_add_provider: "Add a new peppr",
    agency_manage_bookings: "Manage bookings",
    agency_please_specify_travel_terms_client_will_have_to_accept: "Please specify the terms and pricing for travelling in the notes below. The client will have to accept them before the booking is confirmed.",
    booking_shortlist_provider_explanation: "You have been invited to make an offer for a shortlist booking. That means the client has currently booked someone else, but you have a chance to claim it. When you make an offer and the client accepts it, the booking is changed to you.",
    agency_successfully_accepted_the_booking: "Successfully accepted the booking",
    agency_successfully_declined_the_booking: "Successfully declined the booking",
    agency_successfully_modified_the_booking: "Successfully modified the booking",
    successfully_refunded_the_booking: "Successfully refunded the booking fee",
    no_active_bookings: "No active bookings found",
    no_agencies: "No agencies found",
    phone_number_privacy_disclaimer: "We will not share your phone number with anyone, we'll only send you SMS regarding your bookings, so you don't miss out!",
    signup_form_short_instructions: "Fill out this form and you'll be a spicy peppr in no time:",
    client_signup_form_short_instructions: "Fill out this form and you can book a peppr in no time:",
    client_signup_form_short_instructions_completion: "Fill out this form to secure your account:",
    continue_to_complete_account: "Please continue to secure your account.",
    client_signup_free_ride: "Give peppr a try! Register now and book without a fee!",
    i_have_a: "I have a",
    discount_code: "Discount code",
    how_did_you_learn_about_peppr: "How did you find out about PEPPR?",
    agency_signup_form_short_instructions: "Fill out this form to create an agency account:",
    payout_requirements_instructions: "You can request a payout if you have collected 20 â‚¬ or more from your share of the booking fees.",
    login_short_instructions: "Please enter your email address and your password to log in.",
    phone_confirm_short_instructions: "Please enter the code you have received via SMS on your mobile phone number.",
    email_confirm_short_instructions: "Please enter the code you have received via Email.",
    imageupload_short_instructions: "Upload new images for your profile. We will review them and publish them on your profile.",
    imageupload_long_instructions: "We are a premium platform and profile pictures need to match our guidelines. We will review all submitted photos before publishing them on your profile. Please do not submit pictures showing your intimate areas in close-ups, as we will not be able to accept them. Please make sure the photos are high-resolution, sharp and properly exposed. You need at least 3 photos.",
    imageupload_long_instructions_no_sex: "We are a new kind of escort platform, revolutionising the business, so images on our site will have to match a different set of guidelines as you might be familiar with on other platforms.<br/><br/>On PEPPR, we want people to feel very comfortable with going on a paid date. Therefore we want you to show your 'real' self! Of course, they can be a little sexy, but preferably you are fully dressed!<br/><br/>As a general guideline, choose pictures you would also be comfortable to post on your personal facebook.",
    imageupload_agency_instructions: "The pictures must not contain any information about your agency.",
    imageupload_admin_do_you_really_want_to_delete_cannot_be_undone: "This will permanently delete the image. Do you want to proceed?",
    imageupload_cannot_delete_too_few_reviewed_images: "You cannot delete this image, you need a least {{numReviewed}} reviewed images",
    profilepictures_missing: "Missing photos (3 required)",
    provider_price_discount_instructions: "If a customer books the specified number of hours or more, the specified hourly rate will be used to calculate your fee. Example discount rules: from 2h 180â‚¬/h, from 4h 160â‚¬/h. Booking with 2h: 360â‚¬ total, 3h 540â‚¬, 5h 800â‚¬",
    successfully_created_your_account: "Your account has been created successfully!",
    provider_thank_you_for_signing_up_with_peppr: "Thank you for signing up with peppr! Your account has been created successfully!",
    creating_provider_successful: "Successfully created a new peppr profile!",
    successfully_published_your_profile: "Successfully published your peppr profile!",
    successfully_disabled_your_profile: "Successfully disabled your peppr profile!",
    successfully_enabled_instant_booking: "Successfully enabled instant booking!",
    successfully_disabled_instant_booking: "Successfully disabled instant booking!",
    provider_editing_successful: "Your changes have been saved successfully.",
    saving_changes_successful: "Your changes have been saved successfully.",
    agency_thank_you_for_signing_up_with_peppr: "Thank you for signing up with peppr! Your account has been created successfully!",
    successfully_sent_message: "Your messages has been sent",
    successfully_sent_review: "Your review has been saved",
    successfully_confirmed_your_phone: "Your phone number has been confirmed successfully!",
    successfully_confirmed_your_email: "Your email address has been confirmed successfully!",
    successfully_logged_in: "You have been logged in!",
    successfully_created_an_enquiry: "Successfully created your booking request",
    successfully_signed_you_up: "Thank you, you have signed-up successfully",
    successfully_reset_password: "We have sent a new password to your email address",
    successfully_updated_profile: "Successfully updated your profile",
    success: "Success",
    create_new_profile_action: "Create",
    create_new_profile_rest: "a new PEPPR profile for you or your agency.",
    provider_type: "Profile type",
    provider_type_indiependent: "Independent",
    provider_type_agency: "Agency",
    forename: "Forename",
    claim: "Claim",
    email_address: "Email address",
    email: "Email",
    login_username: "Email or phone (+44 ...)",
    phone_number: "Phone number",
    sex: "Sex",
    your_sex: "Your Sex",
    we_only_accept_professional_hetero_male_escorts: "Please note: At the moment we only accept applications from experienced hetero male escorts.",
    age: "Age",
    date_of_birth: "Birthday",
    height: "Height",
    height_cm: "Height (cm)",
    confection_size: "Confection size",
    hair_colour: "Hair color",
    hair_length: "Hair length",
    figure: "Figure",
    bust_size: "Bust size",
    body_hair: "Body hair",
    pubic_hair: "Pubic hair",
    sexuality: "Sexuality",
    ethnicity: "Ethnicity",
    nationality: "Nationality",
    location: "Location",
    locations: "Locations",
    travel_types: "Travel",
    for_travels: "for travels",
    provider_attributes: "Attributes",
    tattooed: "Tattooed",
    smoker: "Smoker",
    pierced: "Pierced",
    service_fee: "Service fee (if not included)",
    fee: "Fee",
    hours: "hrs",
    booking_fee: "Booking fee",
    pricing_booking_fee_now: "booking fee (now)",
    service: "Service",
    language: "Language",
    speaks_language: "Speaks",
    distance_km: "Distance (km)",
    price_h: "Price (h)",
    price: "Price",
    response_rate: "Response rate",
    created: "Registered",
    created_on: "Registered on",
    profile_visits: "Profile views",
    profile_reviews: "Reviews",
    profile_review: "Review system",
    profile_review_count: "1-5 flames",
    profile_num_reviews: "Number of reviews",
    create_provider: "Create",
    create_client: "Create",
    create_not_published_now: "Not published yet",
    instant_booking_available: "Available Now",
    service_included: "Included",
    app_language: "App language",
    provider_app_usage: "App usage",
    provider_uses_smartphone: "I use a smartphone for this number",
    provider_languages: "Languages",
    provider_price_per_hour: "Price (per hour)",
    provider_location_types: "Locations",
    provider_location: "Your location",
    provider_travel_types: "Travel types",
    provider_interests: "Interests",
    provider_food_preferences: "Food",
    provider_drink_preferences: "Drinks",
    provider_occupation: "Occupation",
    provider_perfume: "Scent",
    provider_dress_style: "Dress style",
    provider_booking_upfront_hours: "Upfront booking (h)",
    provider_booking_min_hours: "Minimum booking (h)",
    provider_travel_confirmation_threshold_km: "Custom travel pricing from (km)",
    provider_description: "Description",
    provider_booking_notes: "Booking notes",
    provider_booking_notes_placeholder: "E.g. only a certain hotel category, what you would like to know about your client...",
    provider_booking_notes_prefix: "Notes from {{name}}:",
    provider_booking_notes_prefix_agency: "Notes from {{name}}'s agency:",
    provider_available_services: "Available Services (price added to fee)",
    provider_notes_placeholder: "What you should know about me...",
    provider_autodescription: "{{sex}}, {{heightCm}}cm tall, {{age}} years, figure: {{figure}}",
    provider_update_location: "Update location",
    profile_url: "Profile Link",
    show_more: "Show more",
    show_more_attributes: "Show more attributes",
    show_more_services: "Show more services",
    add_price_discount: "Add a discount rule",
    provider_price_discount: "Price discount",
    min_booked_hours: "Min. booked hours",
    agency_name: "Name",
    agency_location: "Adress (approx.)",
    price_to_professional: "{{price}} â‚¬ to {{name}}",
    service_requires_phone_call: "Please call",
    eur_per_hour: "â‚¬ / h",
    cashout_type: "Cashout",
    cashout_type_cash: "Cash (only in Berlin)",
    cashout_type_bank: "Bank",
    bank_account: "Bank Account",
    password: "Password",
    password_confirm: "Confirm password",
    forgot_password: "forgotten?",
    reset_password: "Reset password",
    update_profile: "Update profile",
    username: "User name",
    newsletter_subsribed: "Subscribe to PEPPR newsletter",
    login: "Log in",
    logout: "Log out",
    click_to_show_profile: "Click to show profile",
    click_here: "Click here",
    enquire: "Continue",
    book: "Book",
    book_now: "Book Now",
    next_availability: "Next Availability",
    availability_upon_request: "Upon request",
    availability_upon_request_long: "Upon request",
    availability_now: "Instantly",
    availability_minutes: "m",
    availability_hours: "h",
    availability_days: "d",
    availability_minutes_long: "in {{minutes}} min",
    availability_hours_long: "in {{hours}} hours",
    availability_days_long: "in {{days}} days",
    availability_in: "in",
    availability: "Availability",
    available_extra_services: "More Services",
    booking_booking_heading: "Booking",
    booking_in_n_hours: "in {{hours}} hours",
    booking_in_other: "Set date and time",
    booking_all_night_long: "All night long (12h)",
    booking_duration_other: "Set duration",
    min_booking_duration: "Min. duration",
    booking_in_advance: "Prior notice",
    search_map: "Search map...",
    services: "Services",
    free_services: "Free services",
    extras: "Extras",
    please_choose_extras: "Please choose the extras",
    please_call_after_booking_to_discuss_details: "You will be asked to call after booking to discuss the details",
    service_info_call: "(tel)",
    please_validate_your_phone_number: "Please validate your phone number!",
    phone_confirmation_code: "Confirmation code",
    email_confirmation_code: "Confirmation code",
    resend_confirmation_code: "Re-send code",
    login_to_resend_code: "Log-in to re-send",
    email_confirmation_prefilled_just_press_confirm: "We have pre-filled the code from the link, just press 'Confirm'",
    show_profile: "Show profile",
    profile: "Profile",
    set_card: "Sed Card",
    pricing: "Pricing",
    pricing_and_extras: "Pricing & Services",
    profile_state: "Profile",
    stats_and_reviews: "Statistics & Reviews",
    show_in_maps: "Show in maps",
    pay_now: "Pay now",
    booking_beware_not_launched: "We haven't launched yet! We're sorry, you cannot send any enquiries yet.",
    booking_state: "State",
    booking_shortlist_state: "Shortlist state",
    booking_shortlist_expiration: "Respond by",
    booking_provider: "Booked",
    booking_travel_confirmation_required: "This is a bit farther away. {{name}} will tell you the exact terms regarding travel costs after booking and you can decide whether to accept them. Please note that travel planning and the journey itself takes time and book sufficiently in advance.",
    booking_notes_placeholder: "Please provide your hotel and room number in addition to special requests, travel information, etc.",
    booking_notes_placeholder_provider: "Please write in the name of the booked peppr. E.g. travel information etc.",
    booking_notes: "Notes",
    booking_payment_peppr_is_anonymous: "PEPPR is anonymous",
    booking_shortlist: "Shortlist booking",
    booking_tracking: "Tracking",
    booking_tracking_explanation: "In order to accept your booking, prepare yourself for your date and enable the tracking once you are on your way. Please click now if you haven't installed our tracking app yet.",
    start_tracking: "Start tracking",
    we_do_not_share_phone_number_if_like_call_type_in_message: "We do not share your phone number with your clients. If you would like them to call you, please put your own phone number in the message and ask them to call you.",
    booking_payment_intro_now: "Now",
    booking_payment_intro_now_info: "{{fee}}â‚¬ booking fee",
    booking_payment_intro_later: "When meeting up",
    booking_payment_intro_later_info: "{{servicefee}}â‚¬ in <strong>cash</strong> an open envelope",
    booking_payment_creditcard_text: "Your <strong>credit card statement</strong> will show a <strong>discreet</strong> line like <em>{{companyName}}</em> without any reference to the particular service you are booking.",
    booking_payment_paypal_text: "Your <strong>PayPal statement</strong> will show a <strong>discreet</strong> line like <em>{{companyName}}</em> without any reference to the particular service you are booking.",
    booking_payment_debitcard_text: "Your <strong>debit card statement</strong> will show a <strong>discreet</strong> line like <em>{{companyName}}</em> without any reference to the particular service you are booking.",
    booking_payment_transaction_security_text: "Your transaction is securely transmitted using SSL encryption, please check your browser's address bar for the lock, which indicates a secure connection.",
    booking_payment_privacy_text: "We do not store any of the details you enter here on our systems. They are handed off directly to our payment processor.",
    booking_payment_credit_card_cancel_info: "We will only deduce the amount if your booking is accepted by <em>{{name}}</em> within the next 24 hours.",
    booking_payment_debit_cancel_charge: "Using a debit card results in an immediate payment. If the booking is cancelled, we will refund the amount to your debit account.",
    booking_payment_refund_info: "Our booking fee is non-refundable if you don't show up. According to law {{name}} is free to decline the performance of the service. In this case you are eligible for a refund.",
    booking_payment_free_ride: "You are eligible for a free booking. There are no booking fees to pay, you pay for the service only.",
    booking_payment_method_rebill: "Use previous payment method",
    booking_payment_method_rebill_title: "Last payment",
    booking_payment_method_rebill_explanation: "You have recently paid on PEPPR. Our payment provider has your payment details on file, so we can re-use the payment method you used last time. We do not store your payment details on our systems.",
    booking_payment_card_number: "Credit card number",
    booking_payment_card_cvv: "CVV",
    booking_payment_card_holdername: "Card holder",
    booking_payment_card_expiry: "Expiry",
    booking_payment_iban: "IBAN",
    booking_payment_bic: "BIC",
    booking_payment_card_address: "Street and number",
    booking_payment_zip_city: "Post code and city",
    payment_method: "Payment method",
    privacy_privacy_text: "The personal data and payment details you enter during the payment of the booking fee is handed off directly to our payment processor. You stay anonymous on PEPPR.",
    privacy_peppr_is_secure: "PEPPR is secure",
    privacy_peppr_is_secure_text: "Your transaction is securely transmitted using SSL encryption, that means the information you transmit to us remains secret while it is being sent. All our systems are PCI certified, which means that we regularly check our systems to make sure they remain secure.",
    privacy_peppr_is_discreet: "PEPPR is discreet",
    privacy_peppr_is_discreet_text_1: "We delete all information related to your booking 2 weeks after your date. PEPPR relays text messages between you and your date using an SMS provider. That has the following advantages:",
    privacy_peppr_is_discreet_text_bullet_1: "pepprs can register with their private mobile phone number, as we do not share it. That means that you'll get a faster response compared to handling bookings with a second phone.",
    privacy_peppr_is_discreet_text_bullet_2: "pepprs can use the app to handle their bookings, read the message history and reply to messages. This is necessary as receiving several booking requests would otherwise quickly lead to chaos.",
    privacy_peppr_is_discreet_text_bullet_3: "we can make sure that pepprs respond to enquiries in a timely manner and can react if the response time is too high.",
    privacy_peppr_is_discreet_text_2: "We only read the message history if we receive a customer service request from either you or the booked peppr.",
    not_what_you_want: "Not what you want?",
    not_satisfied_with_payment_options: "Not the payment options you would like to have? Or something else which holds you back?",
    tell_us_to_we_can_fix_it: "Release your anger and tell us, so we can fix it!",
    instant_booking_duration: "Now available for",
    enable_instant_booking: "Enable 'Now Available'",
    disable_instant_booking: "Disable 'Now Available'",
    instant_booking_ends_at: "Ends at {{endDate}}",
    thankYouForBookingYouWillShortlyReceiveAReplyFromViaSms: "Thank you for booking with peppr. You will shortly receive a reply from <em>{{name}}</em> via SMS.",
    weHaveBlockedAmountWeWillChargeOnConfirmationFrom: "Thank you for paying our {{amount}} â‚¬ booking fee. If you have used a credit card or PayPal, we will only deduce the amount if your booking is accepted by <em>{{name}}</em>.",
    client_shortlist_notice_title: "Increase your chances for a successful date!",
    client_shortlist_notice_text: "We'd like to add the following similar escorts to your shortlist for this booking. Having a shortlist means, that these escorts can also make you an offer for your booking request.",
    shortlist_add: "Add them ({{numChecked}})",
    successfully_saved_shortlist: "Sucessfully saved your shortlist",
    shortlist_max_num_reached: "You can add a maximum of {{maxNum}} escorts to your shortlist",
    provider_account_status: "Account Status",
    upload_profile_pictures: "Upload profile pictures",
    no_images_at_the_moment: "I don't have any now",
    im_done_with_uploading_num_pictures: "I'm done with uploading {{num}} pictures",
    click_to_upload_an_image: "Click here or drag images here to add pictures",
    drop_images_here_to_upload: "Click or drop pictures here to add them",
    login_username_error: "Please provide your email or username",
    login_password_error: "Please provide your password",
    provider_name_error: "We'd like to greet you personally. No all-caps please.",
    provider_username_error: "This username is already taken or invalid, please choose a different username and only use letters, numbers, _ and -",
    provider_claim_error: "Please provide a claim which matches your personality",
    provider_email_error: "We need to be able to reach you via email. This email address is invalid or already registered with us.",
    provider_phone_error: "We need your phone number, so you can receive bookings. Enter it like: 176 1234 5678",
    provider_birthdate_error: "For legal reasons, we have to know your age. Please enter it in the format YYYY-MM-DD if your browser does not show a calendar.",
    provider_height_error: "Please provide some basic information about yourself",
    provider_figure_error: "Please provide some basic information about yourself",
    provider_price_per_hour_error: "Please provide an hourly price",
    provider_sex_error: "You need to specify your sex",
    provider_bank_account_error: "Your IBAN or BIC are invalid",
    provider_availability_time_error: "You need to provide a from and to time in 24h format, like 14:00",
    phone_error: "Please enter a valid phone number, so we can contact you",
    alarm_emergency_phone_error: "Please enter the phone number, so we can notify your emergency contact",
    agency_failed_to_respond_to_booking: "Failed to respond to booking. Please try again later.",
    agency_failed_to_modify_booking: "Failed to modify the booking.",
    agency_name_error: "The agency name is required",
    booking_date: "Date",
    booking_time: "Time",
    booking_duration: "Duration",
    booking_duration_hours: "Duration (h)",
    booking_location_type: "Location Type",
    you_have_to_sign_the_agency_contract: "Your agency profile is not active yet. Please sign the agency contract before we enable your agency on PEPPR.",
    successfully_signed_contract: "Successfully signed the contract",
    show_contract: "Show contract",
    hide_contract: "Hide contract",
    agency_details: "Agency details",
    contract_company_name: "Company name",
    contract_register_number: "Register number",
    contract_full_address: "Full address",
    contract_director_name: "CEO",
    contract_signature: "Signature",
    contract_signed_by: "Contract signed by",
    contract_sign: "Sign (legally binding)",
    agency_contact: "Agency contact",
    contract_contact_name: "Name",
    contract_contact_email: "Email",
    contract_contact_phonenumber: "Phone number",
    rating_high: "Excellent",
    rating_low: "Poor",
    review_title: "Please rate your peppr",
    review_text: "Review text",
    review_text_placeholder: "Is there something you would like to tell us? This text will remain private between PEPPR staff and you.",
    review_send: "Send review",
    review_category_1: "Punctuality",
    review_category_2: "Accurate profile",
    review_category_3: "Overall satisfaction",
    last_position_update: "Last position",
    messages_deleted_for_privacy: "All messages for this booking have been removed for privacy reasons.",
    message: "Message",
    messages_header: "Messages",
    message_from: "From",
    message_to: "To",
    message_date: "Date",
    message_send: "Send message",
    alarm_emergency_phone_number: "Emergency phone number",
    alarm_duration: "Ring in (m)",
    alarm_rings_at: "Rings at",
    alarm_pin: "PIN to disable",
    alarm_pin_confirm: "Confirm PIN",
    alarm_address: "Address",
    booking_date_error: "Please specify the day you want to book",
    booking_time_error: "Please specify the time you want your booking to start",
    booking_availability_warning: "The time and date you have selected is not available. You can still send a booking request, but your request is likely to be rejected.",
    booking_availability_ondemand_warning: "Your peppr does not publish availability, but {{name}} will happily answer your request for any time and date.",
    booking_constraints_error: "Please check the date and duration of your booking.",
    booking_constraints_error_hint_advance: "At least {{advanceHours}} h in advance.",
    booking_constraints_error_hint_duration: "For at least {{durationHours}} h.",
    booking_constraints_error_hint_travel: "As this booking involves travelling.",
    booking_instant_profile_info: "{{name}} is currently online and available for instant bookings. Send an enquiry now and you'll receive a prompt reply from {{name}} with the time for the date.",
    booking_instant_info: "You have chosen 'Now Available'. {{name}} will try to meet you as soon as possible, you'll receive the time for the date via SMS and can then decide whether that's ok for you.",
    booking_duration_hours_error: "Please specify the duration of your booking",
    booking_location_error: "Please specify the location for the booking",
    booking_payment_card_number_error: "Please type in the number of your card",
    booking_payment_card_cvc_error: "The CVC code is the last 3 digits on the back of your card, immediately above the signature field.",
    booking_payment_card_holdername_error: "Please provide the name exactly as shown on the card",
    booking_payment_card_expiry_month_error: "Please type in the card's month of expiration",
    booking_payment_card_expiry_year_error: "Please type in the card's year of expiration with four digits",
    booking_payment_address_error: "Please enter your street and street number",
    booking_payment_zip_error: "Please enter your post code",
    booking_payment_city_error: "Please enter your city",
    booking_payment_country_error: "Please enter your country",
    booking_payment_wrong_state_error: "This booking has already been paid for or was cancelled",
    booking_payment_paypal_cancelled: "It seems that you have cancelled the PayPal payment, please try again or use a different payment method.",
    instant_booking_duration_hours_error: "Please specify how long 'Now Available' should be enabled",
    please_enter_your_access_code: "Please enter your access code",
    wrong_access_code_try_again: "Wrong access code, try again.",
    access_denied: "Access denied",
    password_error: "Must be at least 6 characters long and must not start or end with a space",
    password_confirm_error: "Does not match the password",
    please_fill_out_the_field_error: "Please fill out the field",
    login_error: "Failed to log in, please check your user name and password",
    auto_login_error: "Failed to log you in automatically, please enter your username and password",
    main_geocoding_error: "Failed to retrieve your location, please try again",
    main_invalid_postcode_error: "Invalid postcode",
    we_havent_launched_in_your_country_yet: "We haven't launched in your country yet!",
    would_you_use_peppr_when_we_launch: "Would you use PEPPR when we launch in {{country}}?",
    we_would_like_notify_launch: "We would like to notify you as soon as we launch near you!",
    email_required_error: "Please provide a valid email address",
    retrieving_booking_please_try_again_error: "Failed to retrieve booking, please book again",
    creating_boooking_failed_please_check_and_try_again: "Creating your booking failed, please check the details and try again.",
    please_create_an_account_or_login_to_book: "Please create an account or log-in to book a peppr",
    access_denied_please_login_error: "Access denied, please log-in first",
    access_denied_you_are_registered_as_a_client_error: "Access denied. You are registered as a client, not a provider",
    access_denied_please_verify_your_phone_number: "Access denied. Please verify your phone number!",
    phone_confirmation_code_error: "Please enter the SMS code",
    email_confirmation_code_error: "Please enter the Email code",
    failed_to_load_providers_error: "Failed to load the list of professionals",
    failed_to_upload_your_picture_error: "Failed to upload your picture, please try again later",
    failed_to_reorder_your_picture_error: "Failed to re-order your picture, please try again later",
    invalid_confirmation_code_error: "Invalid confirmation code",
    save_shortlist_error: "Failed to save your shortlist, please try again later",
    unknown_error: "An unknown error occurred",
    server_error_msg: "An error has occurred: {{errormsg}}",
    signup_server_error: "A server error occurred, please try again",
    username_changed_please_login_again: "You have changed your username, please log-in with your new credentials",
    acquisition_error: "Please tell us how you found out about PEPPR",
    dropzone_your_browser_is_not_supported: "Your browser is not supported. Please open this page with an up-to-date browser.",
    dropzone_please_use_the_form_below_to_upload: "Please use the form below",
    dropzone_invalid_file_type: "Invalid file type",
    dropzone_file_is_too_big: "File is too big",
    dropzone_failed_to_upload_please_try_later: "Failed to upload, please try later",
    dropzone_cancel_upload: "Cancel upload",
    dropzone_are_you_sure_you_want_to_cancel_the_upload: "Are you sure you want to cancel the upload",
    dropzone_remove_upload: "Remove upload",
    dropzone_you_cant_add_more_files: "You can't add more files",
    payment_country: "Country",
    draw_pattern: "Draw a pattern",
    wrong_pattern_try_again: "Wrong pattern, please try again",
    confirm_pattern: "Draw pattern again to confirm",
    send_sms: "Send SMS",
    bust_size_small: "Small",
    bust_size_medium: "Medium",
    bust_size_large: "Large",
    bust_size_xlarge: "Huge",
    height_small: "Small",
    height_medium: "Medium",
    height_tall: "Tall",
    ENUM_PhoneNumberCountry_49: "49 Germany",
    ENUM_PhoneNumberCountry_43: "43 Austria",
    ENUM_PhoneNumberCountry_41: "41 Switzerland",
    ENUM_PhoneNumberCountry_39: "39 Italy",
    ENUM_PhoneNumberCountry_30: "30 Greece",
    ENUM_PhoneNumberCountry_31: "31 Netherlands",
    ENUM_PhoneNumberCountry_32: "32 Belgium",
    ENUM_PhoneNumberCountry_33: "33 France",
    ENUM_PhoneNumberCountry_34: "34 Spain",
    ENUM_PhoneNumberCountry_350: "350 Gibraltar",
    ENUM_PhoneNumberCountry_351: "351 Portugal",
    ENUM_PhoneNumberCountry_352: "352 Luxembourg",
    ENUM_PhoneNumberCountry_353: "353 Ireland",
    ENUM_PhoneNumberCountry_354: "354 Iceand",
    ENUM_PhoneNumberCountry_355: "355 Albania",
    ENUM_PhoneNumberCountry_356: "356 Malta",
    ENUM_PhoneNumberCountry_357: "357 Cyprus",
    ENUM_PhoneNumberCountry_358: "358 Finland",
    ENUM_PhoneNumberCountry_359: "359 Bulgaria",
    ENUM_PhoneNumberCountry_36: "36 Hungary",
    ENUM_PhoneNumberCountry_370: "370 Lithuania",
    ENUM_PhoneNumberCountry_371: "371 Latvia",
    ENUM_PhoneNumberCountry_372: "372 Estonia",
    ENUM_PhoneNumberCountry_373: "373 Moldova",
    ENUM_PhoneNumberCountry_374: "374 Armenia",
    ENUM_PhoneNumberCountry_375: "375 Belarus",
    ENUM_PhoneNumberCountry_376: "376 Andorra",
    ENUM_PhoneNumberCountry_377: "377 Monaco",
    ENUM_PhoneNumberCountry_378: "378 San Marino",
    ENUM_PhoneNumberCountry_380: "380 Ukraine",
    ENUM_PhoneNumberCountry_381: "381 Serbia",
    ENUM_PhoneNumberCountry_382: "382 Montenegro",
    ENUM_PhoneNumberCountry_385: "385 Croatia",
    ENUM_PhoneNumberCountry_386: "386 Slovenia",
    ENUM_PhoneNumberCountry_387: "387 Bosnia and Herzegovina",
    ENUM_PhoneNumberCountry_389: "389 Macedonia",
    ENUM_PhoneNumberCountry_40: "40 Romania",
    ENUM_PhoneNumberCountry_420: "420 Czech Republic",
    ENUM_PhoneNumberCountry_421: "421 Slovakia",
    ENUM_PhoneNumberCountry_423: "423 Liechtenstein",
    ENUM_PhoneNumberCountry_44: "44 United Kingdom",
    ENUM_PhoneNumberCountry_45: "45 Denmark",
    ENUM_PhoneNumberCountry_46: "46 Sweden",
    ENUM_PhoneNumberCountry_47: "47 Norway",
    ENUM_PhoneNumberCountry_48: "48 Poland",
    ENUM_PhoneNumberCountry_65: "65 Singapore",
    ENUM_PhoneNumberCountry_972: "972 Isreal",
    ENUM_PhoneNumberCountry_974: "974 Qatar",
    ENUM_PhoneNumberCountry_1: "1 USA",
    ENUM_PhoneNumberCountry_7: "7 Russia",
    ENUM_Ethnicity_MIXED: "Mixed",
    ENUM_Ethnicity_WESTERN: "Western",
    ENUM_Ethnicity_ASIAN: "Asian",
    ENUM_Ethnicity_AFRICAN: "African",
    ENUM_Ethnicity_CARRIBEAN: "Carribean",
    ENUM_Ethnicity_ARAB: "Arab",
    ENUM_Sex_MALE: "Male",
    ENUM_Sex_FEMALE: "Female",
    ENUM_Sex_TRANS: "Trans",
    ENUM_Sexuality_HETERO: "Hetero",
    ENUM_Sexuality_BI: "Bi",
    ENUM_Sexuality_HOMO: "Homo",
    ENUM_Sexuality_TRANS: "Trans",
    ENUM_HairLength_SHAVED: "Shaved",
    ENUM_HairLength_SHORT: "Short",
    ENUM_HairLength_SHOULDER_LONG: "Shoulder long",
    ENUM_HairLength_LONG: "Long",
    ENUM_HairColor_blonde: "Blonde",
    ENUM_HairColor_brunette: "Brunette",
    ENUM_HairColor_red: "Red",
    ENUM_HairColor_black: "Black",
    ENUM_Figure_THIN: "Thin",
    ENUM_Figure_SLIM: "Slim",
    ENUM_Figure_FEMININE: "Feminine",
    ENUM_Figure_CUSHY: "Cushy",
    ENUM_Figure_RUBENESQUE: "Rubenesque",
    ENUM_Figure_MUSCULAR: "Muscular",
    ENUM_Figure_SPORTY: "Sporty",
    ENUM_Figure_EASYGOING: "Easy-going",
    ENUM_BustSize_A: "A",
    ENUM_BustSize_B: "B",
    ENUM_BustSize_C: "C",
    ENUM_BustSize_D: "D",
    ENUM_BustSize_Dplus: "D+",
    ENUM_BodyHair_LIGHT: "Light",
    ENUM_BodyHair_MEDIUM: "Medium",
    ENUM_BodyHair_FULL: "Full",
    ENUM_PubicHair_SHAVED: "Shaved",
    ENUM_PubicHair_GROOMED: "Groomed",
    ENUM_PubicHair_FULL: "Full",
    ENUM_Languages_de: "German",
    ENUM_Languages_en: "English",
    ENUM_Languages_pl: "Polish",
    ENUM_Languages_fr: "French",
    ENUM_Languages_bg: "Bulgarian",
    ENUM_Languages_es: "Spanish",
    ENUM_Languages_cs: "Czech",
    ENUM_Languages_da: "Danish",
    ENUM_Languages_et: "Estonian",
    ENUM_Languages_el: "Greek",
    ENUM_Languages_ga: "Irish",
    ENUM_Languages_hr: "Croatian",
    ENUM_Languages_it: "Italian",
    ENUM_Languages_lv: "Latvian",
    ENUM_Languages_lt: "Lithuanian",
    ENUM_Languages_hu: "Hungarian",
    ENUM_Languages_mt: "Maltese",
    ENUM_Languages_nl: "Dutch",
    ENUM_Languages_pt: "Portuguese",
    ENUM_Languages_ro: "Romanian",
    ENUM_Languages_sk: "Slovak",
    ENUM_Languages_sl: "Slovenian",
    ENUM_Languages_fi: "Finnish",
    ENUM_Languages_sv: "Swedish",
    ENUM_Languages_ru: "Russian",
    ENUM_LocationType_INCALL: "At {{name}}'s (home)",
    ENUM_LocationType_INCALL_BROTHEL: "At {{name}}'s (brothel)",
    ENUM_LocationType_HOTEL: "At your Hotel",
    ENUM_LocationType_HOME: "At your Home",
    ENUM_LocationType_ESCORT: "Escort",
    ENUM_Description_LocationType_INCALL: "You are are going to meet {{name}} at her/his apartment.",
    ENUM_Description_LocationType_INCALL_BROTHEL: "You are going to meet {{name}} in a brothel.",
    ENUM_Description_LocationType_HOTEL: "{{name}} is going to visit you at your hotel room. Usually only 4 and 5 star hotels are acceptable. Please note that in your message below.",
    ENUM_Description_LocationType_HOME: "{{name}} is going to come to your apartment.",
    ENUM_Description_LocationType_ESCORT: "{{name}} is going to meet you at a public place and you are going to decide together where to go.",
    ENUM_SignUp_LocationType_INCALL: "My home",
    ENUM_SignUp_LocationType_INCALL_BROTHEL: "My workplace",
    ENUM_SignUp_LocationType_HOTEL: "Client's hotel",
    ENUM_SignUp_LocationType_HOME: "Client's home",
    ENUM_SignUp_LocationType_ESCORT: "Escort",
    ENUM_Agency_LocationType_INCALL: "Escort's home",
    ENUM_Agency_LocationType_INCALL_BROTHEL: "Escort's workplace",
    ENUM_Agency_LocationType_HOTEL: "Client's hotel",
    ENUM_Agency_LocationType_HOME: "Client's home",
    ENUM_Agency_LocationType_ESCORT: "Escort",
    ENUM_PAYMENT_ERROR_MSG_KEYS_ccvInvalid: "CVV code is invalid",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryMonthInvalid: "Expiry month is invalid",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryYearInvalid: "Expiry year is invalid",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardNumberInvalid: "Credit card number is invalid",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeInvalid: "Credit card type is invalid",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeDoesNotMatchNumber: "Credit card type does not match number",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditExceedsLimit: "Credit exceeds card limit",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardExpired: "Credit card expired",
    ENUM_PAYMENT_ERROR_MSG_KEYS_transactionAlreadySettled: "Transaction already settled",
    ENUM_Weekday_MO: "Monday",
    ENUM_Weekday_TU: "Tuesday",
    ENUM_Weekday_WE: "Wednesday",
    ENUM_Weekday_TH: "Thursday",
    ENUM_Weekday_FR: "Friday",
    ENUM_Weekday_SA: "Saturday",
    ENUM_Weekday_SU: "Sunday",
    ENUM_ProviderState_ACTIVE: "Active",
    ENUM_ProviderState_INACTIVE: "Inactive",
    ENUM_ProviderState_DELETED: "Deleted",
    ENUM_ProviderState_BETA: "Beta",
    ENUM_ProviderState_REVIEWED: "Reviewed",
    ENUM_ShortLinkUsage_EMAIL: "eMail",
    ENUM_ShortLinkUsage_SMS: "SMS",
    ENUM_ShortLinkUsage_WEBFORM: "Web form",
    ENUM_ShortLinkUsage_SOCIAL: "Social network",
    ENUM_TravelType_CITY: "City",
    ENUM_TravelType_CITY_SURROUNDINGS: "City surroundings",
    ENUM_TravelType_NATIONAL: "National",
    ENUM_TravelType_INTERNATIONAL: "International",
    ENUM_BookingState_ENQUIRY: "Enquiry",
    ENUM_BookingState_PAYMENT_AUTH: "Payment authorised",
    ENUM_BookingState_PAID: "Paid",
    ENUM_BookingState_PROVIDER_ACCEPTED: "Provider Accepted",
    ENUM_BookingState_ACCEPTED: "Accepted",
    ENUM_BookingState_DECLINED: "Declined",
    ENUM_BookingState_COMPLETED: "Completed",
    ENUM_BookingState_ARCHIVED: "Archived",
    ENUM_Agency_BookingState_ENQUIRY: "Enquiry",
    ENUM_Agency_BookingState_PAYMENT_AUTH: "Enquiry",
    ENUM_Agency_BookingState_PAID: "Enquiry",
    ENUM_Agency_BookingState_PROVIDER_ACCEPTED: "Provider Accepted",
    ENUM_Agency_BookingState_ACCEPTED: "Accepted",
    ENUM_Agency_BookingState_DECLINED: "Declined",
    ENUM_Agency_BookingState_SHORTLIST: "Shortlist",
    ENUM_Agency_BookingState_COMPLETED: "Completed",
    ENUM_Agency_BookingState_ARCHIVED: "Archived",
    ENUM_ShortlistState_CONTACTED: "Contacted",
    ENUM_ShortlistState_PROVIDER_ACCEPTED: "Provider Accepted",
    ENUM_ShortlistState_PROVIDER_DECLINED: "Provider Declined",
    ENUM_ShortlistState_CLIENT_DECLINED: "Client Declined",
    ENUM_ShortlistState_ACCEPTED: "Accepted",
    ENUM_ShortlistState_EXPIRED: "Expired",
    booking_shortlist_state_contacted_soon: "Will be contacted soon",
    booking_shortlist_state_waiting_for_reply: "Waiting for a reply",
    booking_shortlist_state_declined: "Declined",
    booking_shortlist_state_expired: "Expired",
    ENUM_PaymentMethod_CREDIT_CARD: "Credit Card",
    ENUM_PaymentMethod_PAYPAL: "PayPal",
    ENUM_PaymentMethod_DEBIT_CARD: "Debit Card",
    ENUM_AcquisitionChannel_PRESSE: "Press",
    ENUM_AcquisitionChannel_BLOG: "Blog",
    ENUM_AcquisitionChannel_FREUNDE: "Friends",
    ENUM_AcquisitionChannel_WORK: "Work colleagues",
    ENUM_AcquisitionChannel_ADVERTISEMENT: "Advertisement",
    ENUM_AcquisitionChannel_CLASSIFIED: "Tip Berlin / Zitty Ad",
    ENUM_AcquisitionChannel_OTHER: "Other",
    ENUM_SignupType_ITALY: "Client",
    ENUM_SignupType_ITALY_PROVIDER: "Provider",
    Insterest_cooking: "Cooking",
    Insterest_travelling: "Travelling",
    Insterest_sports: "Sports",
    Insterest_sailing: "Sailing",
    Insterest_shopping: "Shopping",
    Insterest_arts_culture: "Arts & Culture",
    Insterest_music: "Music",
    Insterest_soccer: "Soccer",
    Insterest_dancing: "Dancing",
    Insterest_politics: "Politics",
    Insterest_cars: "Cars",
    Insterest_dinner: "Dinner",
    Insterest_fashion: "Fashion",
    Insterest_literature: "Literature",
    Insterest_musical_theater: "Musical & Theater",
    Insterest_wellness: "Wellness",
    FoodPref_italian: "Italian",
    FoodPref_french: "French",
    FoodPref_fast_food: "Fast food",
    FoodPref_asian: "Asian",
    FoodPref_healthy_food: "Healthy food",
    FoodPref_mediterranean: "Mediterranean food",
    FoodPref_vegetarian: "Vegetarian",
    FoodPref_gourmet: "Gourmet",
    FoodPref_mexican: "Mexican",
    FoodPref_no_preference: "No preference",
    DrinkPref_champagne: "Champagne",
    DrinkPref_long_drinks: "Long drinks",
    DrinkPref_beer: "Beer",
    DrinkPref_white_wine: "White wine",
    DrinkPref_red_wine: "Red wine",
    DrinkPref_shots: "Shots",
    DrinkPref_no_preference: "No preferences",
    DrinkPref_no_alcohol: "I don't drink alcohol",
    Occupation_student: "Student",
    Occupation_bar_tender: "Bar tender",
    Occupation_journalist: "Journalist",
    Occupation_dancer: "Dancer",
    Occupation_assistent: "Assistent",
    Occupation_manager: "Manager",
    Occupation_nurse: "Nurse",
    Occupation_actress: "Actress",
    Occupation_lawyer: "Lawyer",
    Occupation_cook: "Cook",
    Occupation_artist: "Artist",
    Occupation_designer: "Designer",
    Occupation_stylist: "Stylist",
    Occupation_consultant: "Consultant",
    Occupation_pilot: "Pilot",
    Occupation_sales_manager: "Sales Manager",
    Occupation_project_manager: "Project Manager",
    Occupation_secretary: "Secretary",
    Occupation_self_employed: "Self-employed",
    Occupation_model: "Model",
    Occupation_secret: "Itâ€™s a secret ;)",
    Service_oral: "Oral sex",
    Service_roleplay: "Role play",
    Service_anal: "Anal sex",
    Service_urolagnia: "Golden Shower",
    Service_bondage: "Bondage",
    Service_fetish: "Fetish",
    Service_blowjob: "Blow job",
    Service_handicapped: "For handicapped",
    Service_handjob: "Hand job",
    Service_tongueAnal: "Tongue anal",
    Service_tittyFuck: "Titty fuck",
    Service_tongueKisses: "Tongue kisses",
    Service_nipplePlay: "Nipple play",
    Service_leather: "Leather fetish",
    Service_comeInMouth: "Come in mouth",
    Service_kaviar: "Kaviar",
    Service_dildoPlay: "Dildo play",
    Service_ballLicking: "Ball licking",
    Service_fingerAnal: "Anal fingering",
    Service_footFuck: "Foot fuck",
    Service_faceSitting: "Face sitting",
    Service_comeInFace: "Come in face",
    Service_girlfriendSex: "Girlfriend experience",
    Service_eroticMassage: "Erotic massage",
    Service_massage: "Massage",
    Service_striptease: "Striptease",
    Service_showerPlay: "Shower play",
    Service_domination: "Domination",
    Service_dirtyTalk: "Dirty talk",
    Service_kissesSympathy: "Kisses at my discretion",
    Service_coupleService: "Couple service",
    Service_dinnerDate: "Dinner Date",
    ProviderClaim_slimBeauty: "Slim beauty",
    ProviderClaim_wildCat: "Wild cat",
    ProviderClaim_playfulAngel: "Playful angel",
    ProviderClaim_girlNextDoor: "Girl next door",
    ProviderClaim_hotBloodedLolita: "Classy Lolita",
    ProviderClaim_femmeFatale: "Femme fatale",
    ProviderClaim_domina: "Domina",
    ProviderClaim_wildTiger: "Wild tiger",
    ProviderClaim_sexyWorker: "Sexy worker",
    ProviderClaim_hotGentleman: "Hot gentleman",
    ProviderClaim_reliable: "Reliable",
    ProviderClaim_adventurous: "Adventurous",
    ProviderClaim_calm: "Calm",
    ProviderClaim_welcoming: "Welcoming",
    ProviderClaim_sporty: "Sporty",
    ProviderClaim_generous: "Generous",
    ProviderClaim_proud: "Proud",
    ProviderClaim_courteous: "Courteous"
  },
  peppritLang_de = {
    site_title: "peppr.it - Go peppr it!",
    site_title_it: "italy.peppr.it",
    site_description: "Die mobile Web-App zum Buchen von erotischen Dienstleistungen",
    site_keywords: "escort berlin begleitservice frankfurt buchen diskret vertrauenswÃ¼rdig",
    main_title: "Escort Berlin / Frankfurt - Privat Modelle, Escortgirls - PEPPR.it",
    main_description: "Escortservice Berlin â™¡ Escort Frankfurt â™¡ Traumgirls fÃ¼r schÃ¶ne Stunden â™¡ diskret & vertrauenswÃ¼rdig â˜› Buchen Sie jetzt ihre Callgirls in Berlin!",
    provider_list_title: "Die Pepprs",
    provider_title: "Peppr Profil",
    booking_title: "Buche",
    booking_payment_title: "Sichere deine Buchung",
    provider_status_title: "Verdienste",
    phone_confirm_title: "Telefonnummer bestÃ¤tigen",
    email_confirm_title: "E-mail-Adresse bestÃ¤tigen",
    booking_confirmation_title: "BuchungsbestÃ¤tigung",
    booking_payment_confirmation_title: "BestÃ¤tigung",
    provider_imageupload_title: "Upload Foto",
    provider_faq_title: "HÃ¤ufige Fragen",
    client_faq_title: "HÃ¤ufige Fragen",
    agency_faq_title: "HÃ¤ufige Fragen",
    provider_claims_title: "Typ",
    provider_services_title: "Services",
    shortlink_admin_title: "Shortlink admin",
    agency_admin_title: "Agentur admin",
    edit_professional_title: "Profil bearbeiten",
    signup_admin_title: "Sign-ups",
    agency_booking_list_title: "Buchungen",
    agency_booking_title: "Buchung",
    imageupload_admin_title: "Bilder Review",
    edit_profile_title: "Profil bearbeiten",
    edit_user_profile_title: "Benutzerprofil bearbeiten",
    platformsettings_admin_title: "Platform Einstellungen",
    login_title: "Anmelden",
    logout_title: "Abmelden",
    register_title: "Registrieren",
    about_title: "Impressum / Presse",
    imprint_modal_title: "Impressum",
    reset_password_title: "Passwort zurÃ¼cksetzen",
    change_location_title: "Standort Ã¤ndern",
    press_kit_title: "Presseinformationen ",
    agency_list_title: "Agenturen",
    privacy_title: "PrivatsphÃ¤re",
    city_frankfurt_title: "Escort Frankfurt | PEPPR Escort Service | Direkt buchen",
    city_frankfurt_keywords: "Escort Frankfurt, Escort Wiesbaden, Escort Mainz, Escortservice, Begleitservice, Rhein-Main, Hessen",
    city_frankfurt_description: "ESCORT FRANKFURT âœ® PEPPR die APP fÃ¼r High Class Escortservices in Frankfurt, Wiesbaden, Mainz, im Rhein-Main Gebiet und Hessen",
    city_berlin_title: "Escort Berlin | PEPPR Escort Service | Direkt buchen",
    city_berlin_keywords: "Escort Berlin, Escort Brandenburg, Escortservice, Begleitservice, Berlin, Brandenburg",
    city_berlin_description: "ESCORT BERLIN âœ® PEPPR die APP fÃ¼r High Class Escortservices in Berlin und Brandenburg",
    min: "min",
    max: "max",
    short_date_time_format: "D.M. H:mm",
    short_weekday_time_format: "dd H:mm",
    option_choose: "-- auswÃ¤hlen --",
    zip_code_country: "PLZ, Land",
    confirm: "BestÃ¤tigen",
    confirm_now: "Jetzt bestÃ¤tigen",
    enter: "Los!",
    back: "ZurÃ¼ck",
    start: "Start",
    skip: "Ãœberspr.",
    next: "Weiter",
    previous: "ZurÃ¼ck",
    "continue": "Weiter",
    close: "SchlieÃŸen",
    Menu: "MenÃ¼",
    filter: "Filter",
    save: "Speichern",
    edit: "Bearbeiten",
    change: "Ã„ndern",
    accept: "Annehmen",
    decline: "Ablehnen",
    modify: "Ã„ndern",
    make_offer: "Anbieten",
    no_thanks: "Nein danke",
    required: "Pflichtfeld",
    optional: "Optional",
    reviewed: "Freigegeben",
    rejected: "Abgelegt",
    show_map: "Karte",
    menu_home: "Home",
    menu_login: "Anmelden",
    menu_logout: "Abmelden",
    menu_signup: "Sign up",
    menu_providers: "Die pepprs",
    menu_faq: "FAQ",
    menu_admin: "Profil",
    menu_admin_agency: "Agentur",
    menu_agency_bookings: "Buchungen",
    menu_provider_bookings: "Buchungen",
    menu_about: "Impressum / Presse",
    menu_tnc: "AGB",
    menu_signup_professional: "peppr werden",
    menu_privacy: "PrivatsphÃ¤re",
    menu_partners: "Partner",
    admin_only: "Nur Admins",
    main_greeting: "Hey Du,",
    main_slogan: "Lass uns treffen! Sag mir wo du bist:",
    main_first_mobile_app: "Die mobile Web-App<br/>zum Buchen von erotischen<br/>Dienstleistungen",
    main_first_mobile_app_it: "Die mobile Web-App<br/>zum Buchen von<br/>Escorts",
    anonymous_booking_promise: "Sichere Buchung",
    genuine_profiles_promise: "100% echte Profile",
    anonymous_and_secure: "Anonym & sicher",
    main_show_peppr: "zu peppr",
    main_show_video: "Vorstellungsvideo",
    featured_in: "Featured in",
    we_are_looking_for_you: "Wir suchen dich",
    become_a_peppr: "Jetzt peppr werden!",
    choose_sex_show_males: "MÃ¤nnliche pepprs",
    choose_sex_show_females: "Weibliche pepprs",
    choose_sex_show_trans: "Trans pepprs",
    show_me_pepprs: "Zeig mir",
    company_ceo: "GeschÃ¤ftsfÃ¼hrer",
    customer_support: "Kundenservice",
    phone: "Telefon",
    tech_suport_phone: "Technik Support",
    live_chat: "Live Chat",
    terms_and_conditions: "AGB",
    about_terms_and_conditions: "Allgemeine GeschÃ¤ftsbedingungen",
    privacy_policy: "Datenschutzrichtlinien",
    professional_contract: "Vereinbarung fÃ¼r Reservierungsdienstleistungen",
    locate_yourself: "Wo bist du gerade",
    locate_me: "Lokalisieren",
    tell_us_what_you_like: "Sag uns worauf du stehst",
    age_disclaimer: "Ja, ich bin mindestens 18 Jahre alt.",
    offline_disclaimer: "PEPPR ist fÃ¼r Offline AktivitÃ¤ten in keiner Weise verantwortlich.",
    terms_and_conditions_privacy_policy_agreement: "Ich stimme den {{tac}} und den {{pp}} zu.",
    professional_contract_terms_and_conditions_privacy_policy_agreement: "Ich stimme der {{contract}}, den {{tac}} und den {{pp}} zu.",
    welcome_slogan: "Willkommen bei PEPPR",
    no_pepprs_found: "Keine pepprs gefunden - Bitte Ã¤ndere die Filterkriterien.",
    reset_filter: "Filter zurÃ¼cksetzen",
    register_as: "Registrieren als",
    register_now_for_free: "Jetzt kostenlos registrieren",
    create_client_account: "Registrieren",
    create_provider_account: "Independent",
    create_agency_account: "Agentur",
    edit_professional: "Profil bearbeiten",
    review_profile: "Profil bestÃ¤tigen",
    publish_profile: "Profil verÃ¶ffentlichen",
    disable_profile: "Profil deaktivieren",
    delete_profile: "Profil lÃ¶schen",
    private_data: "Private Daten",
    public_data: "Ã–ffentliche Daten",
    imageupload_admin_mode: "Modus",
    archive_profile_agency_confirmation: "Das Profil ist danach nicht mehr zugÃ¤nglich. Fortfahren?",
    delete_profile_do_you_really_want_to_delete_cannot_be_undone: "Dein Profil wird unwiderruflich gelÃ¶scht, alle deine Daten von PEPPR entfernt und du wirst ausgelogged? Fortfahren?",
    delete_booking_do_you_really_want_to_delete: "Die Buchung wird unwiderruflich gelÃ¶scht, alle Informationen zu Nachrichten und der Zahlung werden gelÃ¶scht. Fortfahren?",
    you_are_leaving_the_app_for_booking_confirmation: "Du wirst fÃ¼r die Buchung auf unsere Webseite weitergeleitet.",
    instant_booking: "Jetzt VerfÃ¼gbar",
    we_are_looking_for_new_pepprs: "Wir suchen neue pepprs!",
    click_here_to_apply: "Klicke hier und bewirb dich!",
    your_profile_is_inactive_and_reviewed_you_can_publish_it: "Dein Profil ist derzeit noch nicht aktiv, wir haben es aber bereits gesichtet und du kannst es nun jederzeit freigeben. Du kannst es natÃ¼rlich danach auch jederzeit wieder deaktivieren.",
    instant_booking_is_active: '"Jetzt VerfÃ¼gbar" is aktiv, du bist fÃ¼r sofortige Buchungen freigeschalten. Bitte antworte zÃ¼gig wann genau du dich frÃ¼hestens treffen kannst, sobald du eine Buchungsanfrage bekommst.',
    you_can_enable_instant_booking: 'Wenn du mÃ¶chtest, kannst du "Jetzt VerfÃ¼gbar" aktivieren und bist damit sofort buchbar. Kunden kÃ¶nnen dir damit eine Buchungsanfrage fÃ¼r ein sofortiges Treffen schicken. Du antwortest dem Kunden wann genau du dich frÃ¼hestens treffen kannst und der Kunde kann annehmen oder ablehnen.',
    agency_add_provider: "Neues Profil anlegen",
    agency_manage_bookings: "Buchungen verwalten",
    agency_please_specify_travel_terms_client_will_have_to_accept: "Bitte gib die Reisekosten und die Bedingungen fÃ¼r die Anreise in das Anmerkungsfeld ein. Der Kunde muss diese akzeptieren, bevor die Buchung bestÃ¤tigt wird.",
    booking_shortlist_provider_explanation: "Du wurdest eingeladen ein Angebot fÃ¼r eine Shortlist Buchung abzugeben. Das heiÃŸt, der Kunde hat derzeit jemand anderen gebucht, aber du hast die Chance die Buchung zu Ã¼bernehmen. Wenn du ein Angebot macht und der Kunde akzeptiert es, Ã¼bernimmst du die Buchung.",
    agency_successfully_accepted_the_booking: "Buchung erfolgreich akzeptiert",
    agency_successfully_declined_the_booking: "Buchung erfolgreich abgeleht",
    agency_successfully_modified_the_booking: "Buchung erfolgreich geÃ¤ndert",
    successfully_refunded_the_booking: "BuchungsgebÃ¼hr erfolgreich rÃ¼ckerstattet",
    no_active_bookings: "Keine aktiven Buchungen gefunden",
    no_agencies: "Keine Agentures gefunden",
    phone_number_privacy_disclaimer: "Wir geben deine Telefonnummer niemals weiter, wir schicken dir nur SMS die deine Buchungen betreffen, damit du nichts verpasst!",
    signup_form_short_instructions: "FÃ¼lle dieses Formular aus und du bist in KÃ¼rze ein peppr:",
    client_signup_form_short_instructions: "FÃ¼lle dieses Formular aus und in KÃ¼rze kannst du buchen:",
    client_signup_form_short_instructions_completion: "FÃ¼lle dieses Formular aus um deinen Account abzusichern:",
    continue_to_complete_account: "Bitte fortfahren um deinen Account abzusichern.",
    client_signup_free_ride: "Jetzt peppr ohne BuchungsgebÃ¼hr unverbindlich testen!",
    i_have_a: "Ich habe einen",
    discount_code: "Gutscheincode",
    how_did_you_learn_about_peppr: "Wie hast du von PEPPR erfahren?",
    agency_signup_form_short_instructions: "FÃ¼lle dieses Formular aus um einen Agentur Zugang anzulegen:",
    payout_requirements_instructions: "Ab 20 â‚¬, die du Ã¼ber deinen Teil der BuchungsgebÃ¼hren verdient hast, kann du eine Auszahlung anfordern.",
    login_short_instructions: "Bitte gib deine E-mail-Adresse und Passwort ein",
    phone_confirm_short_instructions: "Bitte gib den Code ein den du via SMS auf dein Handy erhalten hast",
    email_confirm_short_instructions: "Bitte gib den Code ein, dass du via E-mail erhalten hast",
    imageupload_short_instructions: "Lade Fotos fÃ¼r dein Profil hoch. Wir werden diese prÃ¼fen und deinem Profil hinzufÃ¼gen.",
    imageupload_long_instructions: "Wir sind eine Premium-Plattform und deine Fotos mÃ¼ssen unseren Richtlinien entsprechen. Bitte verÃ¶ffentliche keine Fotos die deinen Intimbereich in Nahaufnahme zeigen. Stelle sicher, dass die Fotos in guter AuflÃ¶sung, scharf und gut belichtet sind. Du benÃ¶tigst zumindest 3 Fotos.",
    imageupload_long_instructions_no_sex: "Wir sind eine neue Art von Escort Plattform, die den Markt revolutioniert. Auf PEPPR soll jeder ein gutes GefÃ¼hl haben, auf ein bezahltes Date zu gehen.<br/><br/>Daher mÃ¼ssen Bilder auf unserer Seite anderen Kriterien entsprechen als du vielleicht von anderen Plattformen gewohnt bist. Wir mÃ¶chten, dass du dein wahres â€žIchâ€œ zeigst! NatÃ¼rlich dÃ¼rfen die Fotos ein wenig sexy sein, aber du solltest dabei angezogen sein!<br/><br/>Als einfache Richtschur gilt: WÃ¤hle Bilder aus, die du so auch auf deinem privaten Facebook posten wÃ¼rdest.",
    imageupload_agency_instructions: "Die Bilder dÃ¼rfen keine Informationen Ã¼ber die Agentur enthalten",
    imageupload_admin_do_you_really_want_to_delete_cannot_be_undone: "Das Bild wird unwiderruflich gelÃ¶scht. Fortfahren?",
    imageupload_cannot_delete_too_few_reviewed_images: "Du kannst dieses Bild nicht lÃ¶schen. Du benÃ¶tigst zumindest {{numReviewed}} freigegebene Bilder",
    profilepictures_missing: "Fotos fehlen (zumindest 3)",
    provider_price_discount_instructions: "Wenn ein Kunde genau oder mehr als die angegebene Anzahl an Stunden bucht, wird der angegebene Stundenpreis verwendet um das Honorar zu berechnen. Beispiel Rabattregeln: ab 2h 180â‚¬/h, ab 4h 160â‚¬/h. Buchung mit 2h: 360â‚¬ gesamt, 3h 540â‚¬, 5h 800â‚¬",
    successfully_created_your_account: "Dein Profil wurde erfolgreich erstellt!",
    successfully_published_your_profile: "Dein Profil wurde erfolgreich verÃ¶ffentlicht!",
    successfully_disabled_your_profile: "Dein Profil wurde erfolgreich deaktiviert!",
    provider_thank_you_for_signing_up_with_peppr: "Danke fÃ¼r deine Anmeldung bei Peppr. Dein Konto wurde erfolgreich erstellt!",
    creating_provider_successful: "Das neue peppr Profil wurde erfolgreich angelegt!",
    successfully_enabled_instant_booking: "Jetzt VerfÃ¼gbar wurde erfolgreich aktiviert!",
    successfully_disabled_instant_booking: "Jetzt VerfÃ¼gbar wurde deaktiviert!",
    provider_editing_successful: "Deine Ã„nderungen wurden erfolgreich gespeichert.",
    saving_changes_successful: "Deine Ã„nderungen wurden erfolgreich gespeichert.",
    agency_thank_you_for_signing_up_with_peppr: "Danke fÃ¼r deine Anmeldung bei Peppr. Dein Konto wurde erfolgreich erstellt!",
    successfully_sent_message: "Deine Nachricht wurde verschickt.",
    successfully_sent_review: "Deine Bewertung wurde gespeichert.",
    successfully_confirmed_your_phone: "Deine Telefonnummer wurde erfolgreich bestÃ¤tigt!",
    successfully_confirmed_your_email: "Deine E-Mail-Adresse wurde erfolgreich bestÃ¤tigt!",
    successfully_logged_in: "Du bist eingelogged.",
    successfully_created_an_enquiry: "Deine Buchungsanfrage wurde erfolgreich gestellt",
    successfully_signed_you_up: "Vielen Dank, wir haben deine Anmeldung gespeichert",
    successfully_reset_password: "Wir haben dir ein neues Passwort per E-Mail zugeschickt",
    successfully_updated_profile: "Dein Benutzerprofil wurde erfolgreich geÃ¤ndert",
    success: "Erfolgreich ausgefÃ¼hrt",
    create_new_profile_action: "Erstelle",
    create_new_profile_rest: "ein neues Profil auf PEPPR fÃ¼r dich oder deine Agentur.",
    provider_type: "Profiltyp",
    provider_type_indiependent: "Independent",
    provider_type_agency: "Agentur",
    forename: "Vorname",
    claim: "Typ",
    email_address: "Email-Addresse",
    email: "E-mail",
    login_username: "Email oder Telefon (+49 ...)",
    phone_number: "Telefonnummer",
    sex: "Geschlecht",
    your_sex: "Dein Geschlecht",
    we_only_accept_professional_hetero_male_escorts: "Achtung: Derzeit akzeptieren wir Anmeldungen mÃ¤nnlicher hetero-Escorts nur wenn schon ausreichend Erfahrung vorhanden ist.",
    age: "Alter",
    date_of_birth: "Geburtstag",
    height: "GrÃ¶ÃŸe",
    height_cm: "GrÃ¶ÃŸe (cm)",
    confection_size: "KonfektionsgrÃ¶ÃŸe",
    hair_colour: "Haarfarbe",
    hair_length: "HaarlÃ¤nge",
    figure: "Figur",
    bust_size: "KÃ¶rbchengrÃ¶ÃŸe",
    body_hair: "KÃ¶rperbehaarung",
    pubic_hair: "Intimbehaarung",
    sexuality: "SexualitÃ¤t",
    ethnicity: "EthnizitÃ¤t",
    nationality: "NationalitÃ¤t",
    location: "Ort",
    locations: "Orte",
    travel_types: "Reisen",
    for_travels: "fÃ¼r Reisen",
    provider_attributes: "Eigenschaften",
    tattooed: "tÃ¤towiert",
    smoker: "Raucher",
    pierced: "gepierced",
    service_fee: "Honorarnote (wenn nicht inkludiert)",
    fee: "Honorar",
    hours: "Std",
    booking_fee: "BuchungsgebÃ¼hr",
    pricing_booking_fee_now: "GebÃ¼hr (jetzt)",
    service: "Service",
    language: "Sprache",
    speaks_language: "Spricht",
    distance_km: "Distanz (km)",
    price: "Preis",
    price_h: "Preis (h)",
    response_rate: "Antwortrate",
    created: "Angemeldet",
    created_on: "Angemeldet am",
    profile_visits: "Profilaufrufe",
    profile_reviews: "Bewertungen",
    profile_review: "Bewertungsystem",
    profile_review_count: "1-5 Flammen",
    profile_num_reviews: "Anzahl",
    create_provider: "Anlegen",
    create_client: "Anlegen",
    create_not_published_now: "Noch nicht Ã¶ffentlich",
    instant_booking_available: "Jetzt VerfÃ¼gbar",
    service_included: "Inkludiert",
    app_language: "App Sprache",
    provider_app_usage: "App Benutzung",
    provider_uses_smartphone: "Ich benutze mein Smartphone fÃ¼r diese App",
    provider_languages: "Sprachen",
    provider_price_per_hour: "Preis (pro Stunde)",
    provider_location_types: "Orte",
    provider_location: "Dein Ort",
    provider_travel_types: "Anreise",
    provider_interests: "Interessen",
    provider_food_preferences: "Essensvorlieben",
    provider_drink_preferences: "GetrÃ¤nkevorlieben",
    provider_occupation: "Beruf",
    provider_perfume: "Duft",
    provider_dress_style: "Kleiderstil",
    provider_booking_upfront_hours: "Vorlaufzeit Buchung (h)",
    provider_booking_min_hours: "Min. Buchungsdauer (h)",
    provider_travel_confirmation_threshold_km: "AbklÃ¤rung Reisekosten ab (km)",
    provider_description: "Beschreibung",
    provider_booking_notes: "Buchungshinweise",
    provider_booking_notes_placeholder: "Z.B. eine bestimmte Hotelkategorie, was du gerne Ã¼ber deinen Kunden wissen mÃ¶chtest...",
    provider_booking_notes_prefix: "Hinweise von {{name}}:",
    provider_booking_notes_prefix_agency: "Hinweise {{name}}s Agentur:",
    provider_available_services: "VerfÃ¼gbare Services (Aufschlag auf Honorar)",
    provider_notes_placeholder: "Was du Ã¼ber mich wissen solltest ...",
    provider_autodescription: "{{sex}}, {{heightCm}}cm groÃŸ, {{age}} Jahre, Figur: {{figure}}",
    provider_update_location: "Lokalisieren",
    profile_url: "Profillink",
    show_more: "Mehr",
    show_more_attributes: "Mehr Angaben",
    show_more_services: "Mehr Services",
    add_price_discount: "Neue Rabattregel",
    provider_price_discount: "Preis Rabatt",
    min_booked_hours: "Min. gebuchte Stunden",
    agency_name: "Name",
    agency_location: "Adresse (ca.)",
    price_to_professional: "{{price}} â‚¬ an {{name}}",
    service_requires_phone_call: "Bitte ruf an",
    eur_per_hour: "â‚¬ / h",
    cashout_type: "Auszahlung",
    cashout_type_cash: "Bar (nur in Berlin)",
    cashout_type_bank: "Ãœberweisung",
    bank_account: "Bankkonto",
    password: "Passwort",
    password_confirm: "BestÃ¤tige das Passwort",
    forgot_password: "vergessen?",
    reset_password: "Passwort zurÃ¼cksetzen",
    update_profile: "Profil speichern",
    username: "Username",
    newsletter_subsribed: "PEPPR Info Mail abonnieren",
    login: "Anmelden",
    logout: "Abmelden",
    click_to_show_profile: "Klicken fÃ¼r Details",
    click_here: "Hier klicken",
    enquire: "Weiter",
    book: "Buchen",
    book_now: "Buche Jetzt",
    next_availability: "Frei",
    availability_upon_request: "Auf Anfrage",
    availability_upon_request_long: "Auf Anfrage",
    availability_now: "Sofort",
    availability_minutes: "m",
    availability_hours: "h",
    availability_days: "t",
    availability_minutes_long: "in {{minutes}} min",
    availability_hours_long: "in {{hours}} h",
    availability_days_long: "in {{days}} t",
    availability_in: "in",
    availability: "VerfÃ¼gbarkeit",
    available_extra_services: "Mehr Services",
    booking_booking_heading: "Buchung",
    booking_in_n_hours: "in {{hours}} h",
    booking_in_other: "Tag und Zeit festlegen",
    booking_all_night_long: "Die ganze Nacht (12h)",
    booking_duration_other: "Andere Dauer",
    min_booking_duration: "Mindestbuchung",
    booking_in_advance: "Vorlaufzeit",
    search_map: "Karte durchsuchen...",
    services: "Services",
    free_services: "Inkludiert",
    extras: "Extras",
    please_choose_extras: "Suche dir Extras aus",
    please_call_after_booking_to_discuss_details: "Du wirst nach der Buchung um ein Telefonat gebeten, um die Details zu besprechen",
    service_info_call: "(tel)",
    please_validate_your_phone_number: "Bitte bestÃ¤tige deine Telefonnummer!",
    phone_confirmation_code: "BestÃ¤tigungscode",
    email_confirmation_code: "BestÃ¤tigungscode",
    resend_confirmation_code: "Code anfordern",
    login_to_resend_code: "Einloggen fÃ¼r neuen Code",
    email_confirmation_prefilled_just_press_confirm: "Wir haben den Code vorausgefÃ¼llt - einfach auf bestÃ¤tigen drÃ¼cken",
    show_profile: "Profil ansehen",
    profile: "Profil",
    set_card: "Sed Card",
    pricing: "Preis",
    pricing_and_extras: "Preis & Service",
    profile_state: "Profil",
    stats_and_reviews: "Statistik & Bewertung",
    show_in_maps: "Karte anzeigen",
    pay_now: "Jetzt bezahlen",
    booking_beware_not_launched: "Wir sind noch nicht online! Du kannst daher noch keine Buchung durchfÃ¼hren.",
    booking_shortlist_state: "Shortlist Status",
    booking_shortlist_expiration: "Antworte bis",
    booking_state: "Status",
    booking_provider: "Gebucht",
    booking_travel_confirmation_required: "Das ist ein wenig weiter. {{name}} wird dich nach der Buchung Ã¼ber die genauen Bedingungen fÃ¼r die Anreise informieren und du dann kannst entscheiden ob du sie akzeptierst. Bitte beachte, dass die Planung und die Anreise selbst mehr Zeit in Anspruch nimmt und buche daher bitte mit genÃ¼gend Vorlaufzeit.",
    booking_notes_placeholder: "Bitte gib dein Hotel und deine Zimmernummer an. Ebenso SpezialwÃ¼nsche, Reiseinformationen etc.",
    booking_notes_placeholder_provider: "Bitte im Namen des gebuchten peppr schreiben. Z.B. Reiseinformationen etc.",
    booking_notes: "Anmerkungen",
    booking_payment_peppr_is_anonymous: "Peppr ist anonym",
    booking_shortlist: "Shortlist Buchung",
    booking_tracking: "Tracking",
    booking_tracking_explanation: "Um deine Buchung anzunehmen, bereite dich vor und aktiviere hier das Tracking sobald du dich auf den Weg gemacht hast. Falls du unsere Tracking app noch nicht installiert hast, klicke jetzt hier.",
    start_tracking: "Tracking aktivieren",
    we_do_not_share_phone_number_if_like_call_type_in_message: "Wir geben deine Telefonnummer nicht an deine Kunden weiter. Wenn du mit deinem Kunden telefonieren mÃ¶chtest, schreibe deine Telefonnummer in die Nachricht und bitte um RÃ¼ckruf.",
    booking_payment_intro_now: "Jetzt",
    booking_payment_intro_now_info: "{{fee}}â‚¬ BuchungsgebÃ¼hr",
    booking_payment_intro_later: "Beim Treffen",
    booking_payment_intro_later_info: "{{servicefee}}â‚¬ in <strong>bar</strong> einem offenen Briefumschlag",
    booking_payment_creditcard_text: "Auf deiner <strong>Kreditkartenabrechnung</strong> wird nur eine <strong>diskrete</strong> Abbuchung mit <em>{{companyName}}</em> aufscheinen, die nicht den Service aufzeigt, den du gebucht hast.",
    booking_payment_debitcard_text: "Auf deinem <strong>Kontoauszug</strong> wird nur eine <strong>diskrete</strong> Abbuchung mit <em>{{companyName}}</em> aufscheinen, die nicht den Service aufzeigt, den du gebucht hast.",
    booking_payment_transaction_security_text: "Deine Transaktion wird sicher, mit SSL verschlÃ¼sselt Ã¼bertragen, bitte stelle sicher, dass die Adresszeile deines Browsers das Schloss anzeigt.",
    booking_payment_privacy_text: "Wir speichern die hier eingegebenen Daten nicht auf unseren Systemen. Wir geben diese direkt an unseren Zahlungsdienstleister weiter.",
    booking_payment_credit_card_cancel_info: "Wir werden den Betrag nur abbuchen, wenn deine Anfrage von <em>{{name}}</em> innerhalb der nÃ¤chsten 24 Stunden angenommen wird.",
    booking_payment_debit_cancel_charge: "Bei Bezahlung mit Lastschrift wird der Betrag sofort abgebucht. Bei einer Ablehnung der Buchung erstatten wir den abgebuchten Betrag wieder zurÃ¼ck auf das angegebene Konto.",
    booking_payment_refund_info: "Unsere BuchungsgebÃ¼hr wird nicht zurÃ¼ckerstattet, wenn du nicht erscheinst. Laut Gesetz kann {{name}} die AusfÃ¼hrung der Leistung verweigern. In diesem Fall erhÃ¤ltst du die BuchungsgebÃ¼hr auf Anfrage zurÃ¼ck.",
    booking_payment_free_ride: "Bei dieser Buchung fallen fÃ¼r dich keine BuchungsgebÃ¼hren an, du bezahlst nur die Leistung vor-Ort",
    booking_payment_method_rebill: "Letztes Zahlungsmittel verwenden",
    booking_payment_method_rebill_title: "Letzte Zahlung",
    booking_payment_method_rebill_explanation: "Du hast vor kurzem bereits einmal auf PEPPR bezahlt. Unser Zahlungsanbieter hat deine Zahlungsdetails noch verfÃ¼gbar und du musst diese nicht neu eingeben. Wir speichern deine Zahlungsdetails nicht auf unseren Systemen.",
    booking_payment_card_number: "Kreditkartennummer",
    booking_payment_card_cvv: "CVV",
    booking_payment_card_holdername: "Karteninhaber",
    booking_payment_card_expiry: "Ablaufdatum",
    booking_payment_iban: "IBAN",
    booking_payment_bic: "BIC",
    booking_payment_card_address: "StraÃŸe und Hausnummer",
    booking_payment_zip_city: "PLZ und Stadt",
    payment_method: "Zahlungsmittel",
    privacy_privacy_text: "Die persÃ¶nlichen Daten und Zahlungsdaten die du bei der Bezahlung der BuchungsgebÃ¼hr angibst reichen wir direkt an unseren Zahlungsdienstleister weiter. Du bleibst auf PEPPR vollstÃ¤ndig anonym",
    privacy_peppr_is_secure: "PEPPR ist sicher",
    privacy_peppr_is_secure_text: "Deine Transaktion wird sicher, mit SSL verschlÃ¼sselt, Ã¼bertragen. Das heisst alle Informationen die du an uns Ã¼bermittelst bleiben wÃ¤hrend der Ãœbertragung geheim. Alle unsere Systeme sind PCI zertifiziert. Das heisst wir Ã¼berprÃ¼fen sie regelmÃ¤ÃŸig, damit sie sicher bleiben.",
    privacy_peppr_is_discreet: "PEPPR ist diskret",
    privacy_peppr_is_discreet_text_1: "Zwei Wochen nach deinem Date lÃ¶schen wir alle Informationen die in Zusammenhang mit deiner Buchung stehen. PEPPR vermittelt die Nachrichten zwischen dir und deinem Date Ã¼ber einen SMS Anbieter. Das hat folgende Vorteile:",
    privacy_peppr_is_discreet_text_bullet_1: 'pepprs kÃ¶nnen ihre Privatnummer bei uns hinterlegen, da wir sie nicht weitergeben. Daher bekommst du schneller RÃ¼ckmeldung, als wenn die pepprs ein "Zweithandy" benutzen wÃ¼rden.',
    privacy_peppr_is_discreet_text_bullet_2: "pepprs haben die MÃ¶glichkeit die Buchungen in der App zu verwalten, den Nachrichtenverlauf zu lesen und auf die Nachrichten zu reagieren. Das ist notwendig da sonst bei mehreren Anfragen schnell Chaos entstehen wÃ¼rde.",
    privacy_peppr_is_discreet_text_bullet_3: "Wir kÃ¶nnen sicherstellen, dass die pepprs zeitnah auf die Anfragen antworten und gegebenenfalls reagieren, wenn die Reaktionszeit zu lange ist.",
    privacy_peppr_is_discreet_text_2: "Wir sehen diese Nachrichten nur ein, wenn wir eine Kundendienst Anfrage von dir oder dem gebuchten peppr bekommen.",
    not_what_you_want: "Unzufrieden?",
    not_satisfied_with_payment_options: "Kein Zahlunsmittel dabei das du verwenden mÃ¶chtest? Oder hÃ¤lt etwas anderes davon ab die Buchung abzuschicken?",
    tell_us_to_we_can_fix_it: "Lass deiner Wut freien Lauf und sags uns! Wir lÃ¶sen das fÃ¼r dich!",
    instant_booking_duration: "Jetzt VerfÃ¼gbar fÃ¼r",
    enable_instant_booking: "Jetzt VerfÃ¼gbar aktivieren",
    disable_instant_booking: "Jetzt VerfÃ¼gbar deaktivieren",
    instant_booking_ends_at: "Endet {{endDate}}",
    thankYouForBookingYouWillShortlyReceiveAReplyFromViaSms: "Danke, dass du Ã¼ber PEPPR gebucht hast. Du wirst in KÃ¼rze eine Antwort von <em>{{name}}</em> per SMS bekommen.",
    weHaveBlockedAmountWeWillChargeOnConfirmationFrom: "Wenn du eine Kreditkarte oder PayPal verwendet hast, werden wir dir die {{amount}} â‚¬ BuchungsgebÃ¼hr erst belasten, wenn <em>{{name}}</em> deine Buchung angenommen hat.",
    client_shortlist_notice_title: "ErhÃ¶he deine Chancen auf eine erfolgreiche Buchung!",
    client_shortlist_notice_text: "Wir wÃ¼rden gerne folgenden Ã¤hnlichen Escorts zu deiner Shortlist fÃ¼r diese Buchung hinzufÃ¼gen. Eine Shortlist zu haben, bedeutet dass auch diese Escorts dir fÃ¼r deine Buchungsanfrage ein Angebot machen kÃ¶nnen",
    shortlist_add: "HinzufÃ¼gen ({{numChecked}})",
    successfully_saved_shortlist: "Shortlist erfolgreich gespeichert",
    shortlist_max_num_reached: "Es kÃ¶nnen maximal {{maxNum}} escorts zur Shortlist hinzugefÃ¼gt werden",
    provider_account_status: "Kontostand",
    upload_profile_pictures: "Profilfotos hochladen",
    no_images_at_the_moment: "Ich habe gerade keines",
    im_done_with_uploading_num_pictures: "Ich bin fertig mit dem Upload der Bilder",
    click_to_upload_an_image: "Hier klicken um Fotos hinzuzufÃ¼gen",
    drop_images_here_to_upload: "Hier klicken oder Bilder herziehen um Fotos hinzuzufÃ¼gen",
    login_username_error: "Bitte gib deine Email und deinen Username an",
    login_password_error: "Bitte gib dein Passwort an",
    provider_name_error: "Wir mÃ¶chten dich persÃ¶nlich ansprechen. Bitte nur den ersten Buchstaben groÃŸ.",
    provider_username_error: "Dieser Username ist entweder vergeben oder ungÃ¼ltig. Bitte entscheide dich fÃ¼r einen anderen und benutze nur Buchstaben und Zahlen",
    provider_claim_error: "Entscheide dich fÃ¼r den Typ der dir am Ã¤hnlichsten ist",
    provider_email_error: "Wir mÃ¼ssen dich via E-mail erreichen kÃ¶nnen. Diese E-mail ist ungÃ¼ltig oder schon vergeben.",
    provider_phone_error: "Wir brauchen deine Telefonnummern um dir Buchungen weiterleiten zu kÃ¶nnen. Bitte wie folgt eingeben: 176 1234 5678",
    provider_birthdate_error: "Aus rechtlichen GrÃ¼nden, benÃ¶tigen wir dein Alter. Bitte im folgenden Format eingeben: YYYY-MM-DD, falls dein Browser den Kalender nicht Ã¶ffnet",
    provider_height_error: "Bitte gib uns ein paar Infos Ã¼ber dich",
    provider_figure_error: "Bitte gib uns ein paar Infos Ã¼ber dich",
    provider_price_per_hour_error: "Bitte gib deinen Stundensatz an",
    provider_sex_error: "Du musst dein Geschlecht angeben",
    provider_bank_account_error: "Dein IBAN und/oder BIC ist ungÃ¼ltig",
    provider_availability_time_error: "Du musst eine von und bis Uhrzeit im 24h Format eingeben, z.B. 14:00",
    agency_failed_to_respond_to_booking: "Antwort speichern fehlgeschlagen. Bitte probiere es spÃ¤ter nocheinmal.",
    agency_failed_to_modify_booking: "Ã„ndern der Buchung fehlgeschlagen",
    agency_name_error: "Der Agenturname ist verpflichtend",
    booking_date: "Datum",
    booking_time: "Zeit",
    booking_duration: "Dauer",
    booking_duration_hours: "Dauer (h)",
    booking_location_type: "Ort",
    you_have_to_sign_the_agency_contract: "Dein Agenturprofil ist noch nicht aktiv. Bitte unterschreibe den Agenturvertrag, damit wir deine Agentur auf PEPPR aktivieren kÃ¶nnen.",
    successfully_signed_contract: "Der Vertrag wurde erfolgreich unterschrieben.",
    show_contract: "Vertrag anzeigen",
    hide_contract: "Vertrag ausblenden",
    agency_details: "Agenturinformationen",
    contract_company_name: "Firmenname",
    contract_register_number: "Handelsregisternummer",
    contract_full_address: "Adresse",
    contract_director_name: "GeschÃ¤ftsfÃ¼hrer",
    contract_signature: "Unterschrift",
    contract_signed_by: "vertreten durch",
    contract_sign: "Unterschreiben (rechtsgÃ¼ltig)",
    agency_contact: "AnsprechpartnerIn der Agentur",
    contract_contact_name: "Name",
    contract_contact_email: "Email",
    contract_contact_phonenumber: "Telefon",
    rating_high: "Ausgezeichnet",
    rating_low: "Mangelhaft",
    review_title: "Bitte bewerte deinen peppr",
    review_text: "Bewertungstext",
    review_text_placeholder: "Gibt es etwas das du uns mitteilen mÃ¶chtest? Dieser Text ist privat zwischen dir und den PEPPR Mitarbeitern.",
    review_send: "Bewertung senden",
    review_category_1: "PÃ¼nktlichkeit",
    review_category_2: "Profilgenauigkeit",
    review_category_3: "Generelle Zufriedenheit",
    last_position_update: "Letzte position",
    messages_deleted_for_privacy: "Alle Nachrichten dieser Buchung wurden aus GrÃ¼nden der PrivatsphÃ¤re gelÃ¶scht.",
    message: "Nachricht",
    messages_header: "Nachrichten",
    message_from: "Von",
    message_to: "An",
    message_date: "Datum",
    message_send: "Nachricht senden",
    booking_date_error: "Bitte gib den Tag der Buchung an",
    booking_time_error: "Bitte gib die Zeit an, zu der die Buchung starten soll",
    booking_availability_warning: "Die Zeit und das Datum stehen nicht zur VerfÃ¼gung. Du kannst trotzdem eine Buchungsanfrage schicken, diese wird aber wahrscheinlich abgelehnt.",
    booking_availability_ondemand_warning: "{{name}} hat keine fixen VerfÃ¼gbarkeitszeiten und beantwortet gerne deine Anfrage fÃ¼r deinen Wunschzeitpunkt.",
    booking_instant_profile_info: "{{name}} ist momentan online und fÃ¼r kurzfristige Buchungen verfÃ¼gbar. Schicke jetzt eine Anfrage und du erhÃ¤ltst eine rasche Antwort mit der Zeit fÃ¼r euer Date.",
    booking_instant_info: 'Du hast "Jetzt VerfÃ¼gbar" ausgewÃ¤hlt. {{name}} wird versuchen dich so bald wie mÃ¶glich zu treffen und schickt dir die Zeit fÃ¼r euer Date per SMS. Du kannst dann entscheiden ob das ok fÃ¼r dich ist',
    booking_duration_hours_error: "Bitte gib die Dauer deiner Buchung an",
    booking_constraints_error: "Bitte prÃ¼fe den Zeitpunkt und die Dauer deiner Buchung.",
    booking_constraints_error_hint_advance: "Zumindest {{advanceHours}} h im Voraus.",
    booking_constraints_error_hint_duration: "FÃ¼r zumindest {{durationHours}} h.",
    booking_constraints_error_hint_travel: "Da diese Buchung eine Reise beinhaltet.",
    booking_location_error: "Bitte gib den Ort des Treffens an",
    booking_payment_card_number_error: "Bitte gib deine Kartennummer an",
    booking_payment_card_cvc_error: "Der CVC code sind die letzten 3 Zahlen auf der RÃ¼ckseite deiner Kreditkarte Ã¼ber dem Unterschriftenfeld",
    booking_payment_card_holdername_error: "Bitte gib den Namen an wie er auf der Kreditkarte angegeben ist",
    booking_payment_card_expiry_month_error: "Bitte gib das Ablaufdatum der Kreditkarte an",
    booking_payment_card_expiry_year_error: "Bitte gib das Ablaufdatum in 4 Zahlen an",
    booking_payment_address_error: "Bitte gib deine StraÃŸe und Hausnummer an",
    booking_payment_zip_error: "Bitte gib deine Postleitzahl an",
    booking_payment_city_error: "Bitte gib deine Stadt an",
    booking_payment_country_error: "Bitte gib dein Land an",
    booking_payment_wrong_state_error: "Diese Buchung wurde bereits bezahlt oder storniert",
    booking_payment_paypal_cancelled: "Der PayPal Bezahlvorgang wurde abgebrochen. Bitte versuche es erneut, oder wÃ¤hle eine andere Zahlungsmethode aus.",
    instant_booking_duration_hours_error: 'Bitte gib an wie lange "Jetzt VerfÃ¼gbar" aktiv sein soll',
    please_enter_your_access_code: "Bitte gib deinen Zugangscode ein",
    wrong_access_code_try_again: "Falscher Zugangscode. Bitte nocheinmal versuchen.",
    access_denied: "Zugriff verweigert",
    password_error: "Es muss mindestens 6-stellig sein und darf nicht mit einem Leerzeichen anfangen und aufhÃ¶ren",
    password_confirm_error: "Die PasswÃ¶rter stimmen nicht Ã¼berein",
    please_fill_out_the_field_error: "Bitte fÃ¼llen Sie das Feld aus",
    login_error: "Einloggen hat nicht geklappt, bitte Ã¼berprÃ¼fe deinen Usernamen und Passwort",
    auto_login_error: "Einloggen hat nicht geklappt, bitte gib deinen Usernamen und Passwort erneut ein",
    main_geocoding_error: "Aktuelle Position konnte nicht ermittelt werden, bitte versuche es erneut",
    main_invalid_postcode_error: "UngÃ¼ltige Postleitzahl",
    we_havent_launched_in_your_country_yet: "Wir sind in einem Land noch nicht gestartet!",
    would_you_use_peppr_when_we_launch: "WÃ¼rdest du PEPPR benutzen wenn wir in {{country}} starten?",
    we_would_like_notify_launch: "Wir informieren dich gerne sobald wir bei dir online sind!",
    email_required_error: "Bitte eine gÃ¼ltige Email Adresse angeben",
    retrieving_booking_please_try_again_error: "Konnte die Buchung nicht abrufen, bitte versuche es erneut zu einem spÃ¤teren Zeitpunkt",
    creating_boooking_failed_please_check_and_try_again: "Buchung hat nicht funktioniert, bitte kontrolliere deine Eingaben und versuche es erneut",
    please_create_an_account_or_login_to_book: "Bitte erstelle ein Konto oder logge dich ein",
    access_denied_please_login_error: "Zugang verweigert, bitte logge dich zuerst ein",
    access_denied_you_are_registered_as_a_client_error: "Zugang verweigert. Du bist als Kunde nicht als Professional eingeloggt",
    access_denied_please_verify_your_phone_number: "Zugang verweigert. Bitte bestÃ¤tige zuerst deine Telefonnummer",
    phone_confirmation_code_error: "Bitte gib den SMS code an",
    email_confirmation_code_error: "Bitte gib den Email code an",
    failed_to_load_providers_error: "Die Liste der Pepprs konnte nicht geladen werden",
    failed_to_upload_your_picture_error: "Die Fotos konnten nicht hochgeladen werden, versuche es erneut zu einem spÃ¤teren Zeitpunkt",
    failed_to_reorder_your_picture_error: "Anordnen der Fotos ist fehlgeschlagen, versuche es erneut zu einem spÃ¤teren Zeitpunkt",
    invalid_confirmation_code_error: "UngÃ¼ltiger BestÃ¤titungscode",
    save_shortlist_error: "Speichern der shortlist fehlgeschlagen, versuche es erneut zu einem spÃ¤teren Zeitpunkt",
    unknown_error: "Ein unbekannter Fehler ist aufgetreten",
    server_error_msg: "Ein Fehler ist aufgetreten: {{errormsg}}",
    signup_server_error: "Ein Server-Fehler ist aufgetreten, bitte versuche es spÃ¤ter erneut",
    username_changed_please_login_again: "Du hast deinen Benutzernamen geÃ¤ndert, bitte logge dich neu ein",
    acquisition_error: "Bitte sag uns wie du von PEPPR erfahren hast",
    dropzone_your_browser_is_not_supported: "Dein Browser wir nicht unterstÃ¼tzt. Bitte Ã¶ffne die Seite mit einem aktuellen Browser.",
    dropzone_please_use_the_form_below_to_upload: "Please use the form below",
    dropzone_invalid_file_type: "UngÃ¼ltiger Dateityp",
    dropzone_file_is_too_big: "Datei ist zu groÃŸ",
    dropzone_failed_to_upload_please_try_later: "Upload funktioniert nicht, bitte versuche es zu einem spÃ¤teren Zeitpunkt ",
    dropzone_cancel_upload: "Unterbreche Upload",
    dropzone_are_you_sure_you_want_to_cancel_the_upload: "Bist du sicher, du mÃ¶chtest den Upload stoppen?",
    dropzone_remove_upload: "Upload entfernen",
    dropzone_you_cant_add_more_files: "Do kannst keine weiteren Dateien hochladen",
    payment_country: "Land",
    draw_pattern: "Zeichne ein Muster",
    wrong_pattern_try_again: "Falsches Muster, erneut versuchen",
    confirm_pattern: "Zeichne das Muster nocheinmal",
    send_sms: "SMS senden",
    bust_size_small: "Klein",
    bust_size_medium: "Medium",
    bust_size_large: "GroÃŸ",
    bust_size_xlarge: "Ganz groÃŸ",
    height_small: "Klein",
    height_medium: "MittelgroÃŸ",
    height_tall: "GroÃŸ",
    ENUM_PhoneNumberCountry_49: "49 Deutschland",
    ENUM_PhoneNumberCountry_43: "43 Ã–sterreich",
    ENUM_PhoneNumberCountry_41: "41 Schweiz",
    ENUM_PhoneNumberCountry_39: "39 Italien",
    ENUM_PhoneNumberCountry_30: "30 Griechenland",
    ENUM_PhoneNumberCountry_31: "31 Niederlande",
    ENUM_PhoneNumberCountry_32: "32 Belgien",
    ENUM_PhoneNumberCountry_33: "33 Frankreich",
    ENUM_PhoneNumberCountry_34: "34 Spanien",
    ENUM_PhoneNumberCountry_350: "350 Gibraltar",
    ENUM_PhoneNumberCountry_351: "351 Portugal",
    ENUM_PhoneNumberCountry_352: "352 Luxemburg",
    ENUM_PhoneNumberCountry_353: "353 Irland",
    ENUM_PhoneNumberCountry_354: "354 Island",
    ENUM_PhoneNumberCountry_355: "355 Albanien",
    ENUM_PhoneNumberCountry_356: "356 Malta",
    ENUM_PhoneNumberCountry_357: "357 Zypern",
    ENUM_PhoneNumberCountry_358: "358 Finnland",
    ENUM_PhoneNumberCountry_359: "359 Bulgarien",
    ENUM_PhoneNumberCountry_36: "36 Ungarn",
    ENUM_PhoneNumberCountry_370: "370 Litauen",
    ENUM_PhoneNumberCountry_371: "371 Lettland",
    ENUM_PhoneNumberCountry_372: "372 Estland",
    ENUM_PhoneNumberCountry_373: "373 Moldawien",
    ENUM_PhoneNumberCountry_374: "374 Armenien",
    ENUM_PhoneNumberCountry_375: "375 WeiÃŸrussland",
    ENUM_PhoneNumberCountry_376: "376 Andorra",
    ENUM_PhoneNumberCountry_377: "377 Monaco",
    ENUM_PhoneNumberCountry_378: "378 San Marino",
    ENUM_PhoneNumberCountry_380: "380 Ukraine",
    ENUM_PhoneNumberCountry_381: "381 Serbien",
    ENUM_PhoneNumberCountry_382: "382 Montenegro",
    ENUM_PhoneNumberCountry_385: "385 Kroatien",
    ENUM_PhoneNumberCountry_386: "386 Slowenien",
    ENUM_PhoneNumberCountry_387: "387 Bosnien und Herzegowina",
    ENUM_PhoneNumberCountry_389: "389 Mazedonien",
    ENUM_PhoneNumberCountry_40: "40 RumÃ¤nien",
    ENUM_PhoneNumberCountry_420: "420 Tschechien",
    ENUM_PhoneNumberCountry_421: "421 Slowakei",
    ENUM_PhoneNumberCountry_423: "423 Liechtenstein",
    ENUM_PhoneNumberCountry_44: "44 UK Vereinigtes KÃ¶nigreich",
    ENUM_PhoneNumberCountry_45: "45 DÃ¤nemark",
    ENUM_PhoneNumberCountry_46: "46 Schweden",
    ENUM_PhoneNumberCountry_47: "47 Norwegen",
    ENUM_PhoneNumberCountry_48: "48 Polen",
    ENUM_PhoneNumberCountry_65: "65 Singapur",
    ENUM_PhoneNumberCountry_972: "972 Isreal",
    ENUM_PhoneNumberCountry_974: "974 Katar",
    ENUM_PhoneNumberCountry_1: "1 USA Vereinigte Staaten",
    ENUM_PhoneNumberCountry_7: "7 Russland",
    ENUM_Ethnicity_MIXED: "Mischling",
    ENUM_Ethnicity_WESTERN: "Westlich",
    ENUM_Ethnicity_ASIAN: "Asiatisch",
    ENUM_Ethnicity_AFRICAN: "Afrikanisch",
    ENUM_Ethnicity_CARRIBEAN: "Karibisch",
    ENUM_Ethnicity_ARAB: "Arabisch",
    ENUM_Sex_MALE: "Mann",
    ENUM_Sex_FEMALE: "Frau",
    ENUM_Sex_TRANS: "Trans",
    ENUM_Sexuality_HETERO: "Hetero",
    ENUM_Sexuality_BI: "Bi",
    ENUM_Sexuality_HOMO: "Homo",
    ENUM_Sexuality_TRANS: "Trans",
    ENUM_HairLength_SHAVED: "Rasiert",
    ENUM_HairLength_SHORT: "Kurz",
    ENUM_HairLength_SHOULDER_LONG: "Schulterlang",
    ENUM_HairLength_LONG: "Lang",
    ENUM_HairColor_blonde: "Blond",
    ENUM_HairColor_brunette: "BrÃ¼nett",
    ENUM_HairColor_red: "Rot",
    ENUM_HairColor_black: "Schwarz",
    ENUM_Figure_THIN: "Zart",
    ENUM_Figure_SLIM: "Schlank",
    ENUM_Figure_FEMININE: "Feminin",
    ENUM_Figure_CUSHY: "Kurvig",
    ENUM_Figure_RUBENESQUE: "Rubensfigur",
    ENUM_Figure_MUSCULAR: "MuskulÃ¶s",
    ENUM_Figure_SPORTY: "Sportlich",
    ENUM_Figure_EASYGOING: "Bequem",
    ENUM_BustSize_A: "A",
    ENUM_BustSize_B: "B",
    ENUM_BustSize_C: "C",
    ENUM_BustSize_D: "D",
    ENUM_BustSize_Dplus: "D+",
    ENUM_BodyHair_LIGHT: "Leicht",
    ENUM_BodyHair_MEDIUM: "Mittel",
    ENUM_BodyHair_FULL: "Voll",
    ENUM_PubicHair_SHAVED: "Rasiert",
    ENUM_PubicHair_GROOMED: "Getrimmt",
    ENUM_PubicHair_FULL: "Voll",
    ENUM_Languages_de: "Deutsch",
    ENUM_Languages_en: "Englisch",
    ENUM_Languages_pl: "Polnisch",
    ENUM_Languages_fr: "FranzÃ¶sisch",
    ENUM_Languages_bg: "Bulgarisch",
    ENUM_Languages_es: "Spanisch",
    ENUM_Languages_cs: "Tschechisch",
    ENUM_Languages_da: "DÃ¤nisch",
    ENUM_Languages_et: "Estonisch",
    ENUM_Languages_el: "Griechisch",
    ENUM_Languages_ga: "Irisch",
    ENUM_Languages_hr: "Kroatisch",
    ENUM_Languages_it: "Italienisch",
    ENUM_Languages_lv: "Lettisch",
    ENUM_Languages_lt: "Litauisch",
    ENUM_Languages_hu: "Ungarisch",
    ENUM_Languages_mt: "Maltesisch",
    ENUM_Languages_nl: "NiederlÃ¤ndisch",
    ENUM_Languages_pt: "Portugiesisch",
    ENUM_Languages_ro: "RumÃ¤nisch",
    ENUM_Languages_sk: "Slovakisch",
    ENUM_Languages_sl: "Slovenisch",
    ENUM_Languages_fi: "Finnisch",
    ENUM_Languages_sv: "Schwedisch",
    ENUM_Languages_ru: "Russisch",
    ENUM_LocationType_INCALL: "Bei {{name}} (Zuhause)",
    ENUM_LocationType_INCALL_BROTHEL: "Bei {{name}} (Bordell)",
    ENUM_LocationType_HOTEL: "In deinem Hotel",
    ENUM_LocationType_HOME: "Bei dir Zuhause",
    ENUM_LocationType_ESCORT: "Escort",
    ENUM_Description_LocationType_INCALL: "Du triffst {{name}} in Ihrem/Seinem Appartment.",
    ENUM_Description_LocationType_INCALL_BROTHEL: "Du triffst {{name}} in einem Bordell.",
    ENUM_Description_LocationType_HOTEL: "{{name}} besucht dich in deinem Hotelzimmer. Normalerweise werden nur 4 und 5 Stern Hotels akzeptiert. Bitte schreibe Informationen zu deinem Hotel in die Nachricht weiter unten.",
    ENUM_Description_LocationType_HOME: "{{name}} besucht dich in deiner Wohnung.",
    ENUM_Description_LocationType_ESCORT: "Du triffst {{name}} an einem Ã¶ffentlichen Platz und ihr entscheidet gemeinsam wo ihr hingeht.",
    ENUM_SignUp_LocationType_INCALL: "Bei mir",
    ENUM_SignUp_LocationType_INCALL_BROTHEL: "Mein Arbeitsplatz",
    ENUM_SignUp_LocationType_HOTEL: "Bei Kunde im Hotel",
    ENUM_SignUp_LocationType_HOME: "Bei Kunde zu Hause",
    ENUM_SignUp_LocationType_ESCORT: "Escort",
    ENUM_Agency_LocationType_INCALL: "Bei Escort zu Hause",
    ENUM_Agency_LocationType_INCALL_BROTHEL: "Bei Escort Arbeitsplatz",
    ENUM_Agency_LocationType_HOTEL: "Bei Kunde im Hotel",
    ENUM_Agency_LocationType_HOME: "Bei Kunde zu Hause",
    ENUM_Agency_LocationType_ESCORT: "Escort",
    ENUM_PAYMENT_ERROR_MSG_KEYS_ccvInvalid: "CVV code ist ungÃ¼ltig",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryMonthInvalid: "Ablaufmonat ist ungÃ¼ltig",
    ENUM_PAYMENT_ERROR_MSG_KEYS_expiryYearInvalid: "Ablaufdatum ist ungÃ¼ltig",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardNumberInvalid: "Kreditkartenummer ist ungÃ¼ltig",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeInvalid: "Kreditkartentyp ist ungÃ¼ltig",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeDoesNotMatchNumber: "Kreditkartentyp stimmt nicht mit Nummer Ã¼berein",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditExceedsLimit: "Kredit Ã¼berschreitet Kartenlimit",
    ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardExpired: "Kreditkarte ist abgelaufen",
    ENUM_Weekday_MO: "Montag",
    ENUM_Weekday_TU: "Dienstag",
    ENUM_Weekday_WE: "Mittwoch",
    ENUM_Weekday_TH: "Donnerstag",
    ENUM_Weekday_FR: "Freitag",
    ENUM_Weekday_SA: "Samstag",
    ENUM_Weekday_SU: "Sonntag",
    ENUM_ProviderState_ACTIVE: "Aktiv",
    ENUM_ProviderState_INACTIVE: "Inaktiv",
    ENUM_ProviderState_DELETED: "GelÃ¶scht",
    ENUM_ProviderState_BETA: "Beta",
    ENUM_ProviderState_REVIEWED: "GeprÃ¼ft",
    ENUM_ShortLinkUsage_EMAIL: "eMail",
    ENUM_ShortLinkUsage_SMS: "SMS",
    ENUM_ShortLinkUsage_WEBFORM: "Formular",
    ENUM_ShortLinkUsage_SOCIAL: "Soziales Netzwerk",
    ENUM_TravelType_CITY: "Stadt",
    ENUM_TravelType_CITY_SURROUNDINGS: "Umland",
    ENUM_TravelType_NATIONAL: "National",
    ENUM_TravelType_INTERNATIONAL: "International",
    ENUM_BookingState_ENQUIRY: "Anfrage",
    ENUM_BookingState_PAYMENT_AUTH: "Zahlung autorisiert",
    ENUM_BookingState_PAID: "Bezahlt",
    ENUM_BookingState_PROVIDER_ACCEPTED: "Akzeptiert vom Anbieter",
    ENUM_BookingState_ACCEPTED: "Akzeptiert",
    ENUM_BookingState_DECLINED: "Abgelehnt",
    ENUM_BookingState_COMPLETED: "Abgeschlossen",
    ENUM_BookingState_ARCHIVED: "Archiviert",
    ENUM_Agency_BookingState_ENQUIRY: "Anfrage",
    ENUM_Agency_BookingState_PAYMENT_AUTH: "Anfrage",
    ENUM_Agency_BookingState_PAID: "Anfrage",
    ENUM_Agency_BookingState_PROVIDER_ACCEPTED: "Akzeptiert vom Anbieter",
    ENUM_Agency_BookingState_ACCEPTED: "Akzeptiert",
    ENUM_Agency_BookingState_DECLINED: "Abgelehnt",
    ENUM_Agency_BookingState_SHORTLIST: "Shortlist",
    ENUM_Agency_BookingState_COMPLETED: "Abgeschlossen",
    ENUM_Agency_BookingState_ARCHIVED: "Archiviert",
    ENUM_ShortlistState_CONTACTED: "Kontaktiert",
    ENUM_ShortlistState_PROVIDER_ACCEPTED: "Akzeptiert vom Anbieter",
    ENUM_ShortlistState_PROVIDER_DECLINED: "Abgelehnt vom Anbieter",
    ENUM_ShortlistState_CLIENT_DECLINED: "Abgelehnt vom Kunden",
    ENUM_ShortlistState_ACCEPTED: "Akzeptiert",
    ENUM_ShortlistState_EXPIRED: "Abgelaufen",
    booking_shortlist_state_contacted_soon: "Wird bald kontaktiert",
    booking_shortlist_state_waiting_for_reply: "Warte auf Antwort",
    booking_shortlist_state_declined: "Abgelehnt",
    booking_shortlist_state_expired: "Abgelaufen",
    ENUM_PaymentMethod_CREDIT_CARD: "Kreditkarte",
    ENUM_PaymentMethod_PAYPAL: "PayPal",
    ENUM_PaymentMethod_DEBIT_CARD: "Lastschrift",
    ENUM_AcquisitionChannel_PRESSE: "Presse",
    ENUM_AcquisitionChannel_BLOG: "Blogs",
    ENUM_AcquisitionChannel_FREUNDE: "Freunden",
    ENUM_AcquisitionChannel_WORK: "Arbeitskollegen",
    ENUM_AcquisitionChannel_ADVERTISEMENT: "Werbung",
    ENUM_AcquisitionChannel_CLASSIFIED: "Tip Berlin / Zitty Anzeige",
    ENUM_AcquisitionChannel_OTHER: "Anderes",
    ENUM_SignupType_ITALY: "Kunde",
    ENUM_SignupType_ITALY_PROVIDER: "Anbieter",
    Insterest_cooking: "Kochen",
    Insterest_travelling: "Reisen",
    Insterest_sports: "Sport",
    Insterest_sailing: "Segeln",
    Insterest_shopping: "Shopping",
    Insterest_arts_culture: "Kunst & Kultur",
    Insterest_music: "Musik",
    Insterest_soccer: "FuÃŸball",
    Insterest_dancing: "Tanzen",
    Insterest_politics: "Politik",
    Insterest_cars: "Autos",
    Insterest_dinner: "Dinner",
    Insterest_fashion: "Mode",
    Insterest_literature: "Literatur",
    Insterest_musical_theater: "Musical & Theater",
    Insterest_wellness: "Wellness",
    FoodPref_italian: "Italienisch",
    FoodPref_french: "FranzÃ¶sisch",
    FoodPref_fast_food: "Fast food",
    FoodPref_asian: "Asiatisch",
    FoodPref_healthy_food: "Gesundes Essen",
    FoodPref_mediterranean: "Mediterran",
    FoodPref_vegetarian: "Vegetarisch",
    FoodPref_gourmet: "HaubenkÃ¼che",
    FoodPref_mexican: "Mexikanisch",
    FoodPref_no_preference: "Keine Vorlieben",
    DrinkPref_champagne: "Champagner",
    DrinkPref_long_drinks: "Long drinks",
    DrinkPref_beer: "Bier",
    DrinkPref_white_wine: "WeiÃŸwein",
    DrinkPref_red_wine: "Rotwein",
    DrinkPref_shots: "Shots",
    DrinkPref_no_preference: "Keine Vorlieben",
    DrinkPref_no_alcohol: "Ich trinke nicht",
    Occupation_student: "StudentIn",
    Occupation_bar_tender: "BarkeeperIn",
    Occupation_journalist: "JournalistIn",
    Occupation_dancer: "TÃ¤nzerIn",
    Occupation_assistent: "AssistentIn",
    Occupation_manager: "ManagerIn",
    Occupation_nurse: "Krankenschwester",
    Occupation_actress: "SchauspielerIn",
    Occupation_lawyer: "AnwÃ¤ltIn",
    Occupation_cook: "Koch / KÃ¶chin",
    Occupation_artist: "KÃ¼nstlerIn",
    Occupation_designer: "DesignerIn",
    Occupation_stylist: "StylistIn",
    Occupation_consultant: "BeraterIn",
    Occupation_pilot: "PilotIn",
    Occupation_sales_manager: "VerkaufsleiterIn",
    Occupation_project_manager: "ProjektmanagerIn",
    Occupation_secretary: "SekretÃ¤rIn",
    Occupation_self_employed: "SelbststÃ¤ndig",
    Occupation_model: "Model",
    Occupation_secret: "Ist geheim ;)",
    Service_oral: "FranzÃ¶sisch",
    Service_roleplay: "Rollenspiele",
    Service_anal: "Griechisch",
    Service_urolagnia: "Golden Shower",
    Service_bondage: "Bondage",
    Service_fetish: "Fetisch",
    Service_blowjob: "Blowjob",
    Service_handicapped: "For handicapped",
    Service_handjob: "Handentspannung",
    Service_tongueAnal: "Zungenanal",
    Service_tittyFuck: "Spanisch",
    Service_tongueKisses: "ZungenkÃ¼sse",
    Service_nipplePlay: "Brustwarzenspiele",
    Service_leather: "Lack & Leder",
    Service_comeInMouth: "Come in mouth",
    Service_kaviar: "Kaviar",
    Service_dildoPlay: "Dildospiele",
    Service_ballLicking: "Eierlecken",
    Service_fingerAnal: "Finger anal",
    Service_footFuck: "FuÃŸerotik",
    Service_faceSitting: "Face Sitting",
    Service_comeInFace: "Gesichtsbesamung",
    Service_girlfriendSex: "Girlfriend experience",
    Service_eroticMassage: "Erotikmassage",
    Service_massage: "Massage",
    Service_striptease: "Striptease",
    Service_showerPlay: "Dusch & Badespiele",
    Service_domination: "Dominante Spiele",
    Service_dirtyTalk: "Verbalerotik",
    Service_kissesSympathy: "KÃ¼ssen in meinem Ermessen",
    Service_coupleService: "Paarservice",
    Service_dinnerDate: "Dinner Date",
    ProviderClaim_slimBeauty: "Schlanke SchÃ¶nheit",
    ProviderClaim_wildCat: "Wilde Katze",
    ProviderClaim_playfulAngel: "Verspielter Engel",
    ProviderClaim_girlNextDoor: "Girl next door",
    ProviderClaim_hotBloodedLolita: "Rassige Lolita",
    ProviderClaim_femmeFatale: "Femme fatale",
    ProviderClaim_domina: "Domina",
    ProviderClaim_wildTiger: "Wilder Tiger",
    ProviderClaim_sexyWorker: "Sexy Arbeiter",
    ProviderClaim_hotGentleman: "HeiÃŸer Gentleman",
    ProviderClaim_reliable: "VerlÃ¤sslich",
    ProviderClaim_adventurous: "Abenteuerlich",
    ProviderClaim_calm: "Ruhig",
    ProviderClaim_welcoming: "Offen",
    ProviderClaim_sporty: "Sportlich",
    ProviderClaim_generous: "GroÃŸzÃ¼gig",
    ProviderClaim_proud: "Stolz",
    ProviderClaim_courteous: "Zuvorkommend"
  },
  pepprBaseUrl = "https://peppr-app.com",
  pepprRestBaseUrl = pepprBaseUrl + "/rest/pepprit",
  gpsRestBaseUrl = pepprBaseUrl + "/rest/gps",
  pepprCometUrl = "https://ws.peppr-app.com/cometd",
  shareTrackUrlPrefix = "https://share-my-track.acoveo.com/app/track/create/sharewith/com.peppr-app.booking-",
  accessCode = "lovePEPPR",
  pepprFeatures = {
    showAvailability: !0,
    showServices: !0,
    showPrices: !0,
    showSexRelatedAttributes: !0,
    showFreeText: !0,
    enableAgencies: !0,
    enableRatings: !0,
    enableTracking: !1
  },
  pepprFeaturesItaly = {
    showAvailability: !1,
    showServices: !1,
    showPrices: !1,
    showSexRelatedAttributes: !1,
    showFreeText: !1,
    enableAgencies: !1,
    enableRatings: !0,
    enableTracking: !1
  },
  pepprFeaturesBrasil = {
    showAvailability: !0,
    showServices: !1,
    showPrices: !1,
    showSexRelatedAttributes: !1,
    showFreeText: !0,
    enableAgencies: !1,
    enableRatings: !0,
    enableTracking: !1
  },
  pepprFeaturesUs = {
    showAvailability: !0,
    showServices: !1,
    showPrices: !1,
    showSexRelatedAttributes: !1,
    showFreeText: !0,
    enableAgencies: !1,
    enableRatings: !0,
    enableTracking: !0
  },
  pepprSupportedLangMap = {
    en: window.peppritLang_en,
    de: window.peppritLang_de,
    it: window.peppritLang_it
  },
  fallbackLang = "en",
  isItaly = "italy.peppr.it" === location.host,
  isBrasil = "brasil.peppr.it" === location.host,
  isUs = "us.peppr-app.com" === location.host,
  checkAccess = isBrasil;
isItaly && (pepprFeatures = pepprFeaturesItaly), isBrasil && (pepprFeatures = pepprFeaturesBrasil), isUs && (pepprFeatures = pepprFeaturesUs);
var pepprCurrency = "EUR",
  BACKEND_DATE_FORMAT = "ddd, D MMM YYYY HH:mm:ss ZZ",
  BACKEND_DATE_LANG = "en",
  GOOGLE_API_KEY = "AIzaSyDc-kHC2Ikko2uaKruZwW-annPsx_uKn6Q",
  GOOGLE_GEOCODE_REGION = "de";
Dropzone.autoDiscover = !1;
var usePaymill = !0,
  pepprCompanyName = "peppr IT GmbH",
  pepprStreetAndNumber = "Unter den Linden 40",
  pepprPostcodeAndCity = "10117 Berlin",
  pepprCountry = "Germany",
  pepprRegisterCourt = "Charlottenburg",
  pepprRegisterNr = "HRB 156736 B",
  pepprContactPhone = "+49 176 5963 2855",
  pepprTechContactPhone = "+49 176 5963 2855",
  pepprCompanyWebsite = "https://peppr-app.com",
  pepprFacebookPage = "https://www.facebook.com/lovepeppr",
  pepprTwitterPage = "https://twitter.com/lovepeppr",
  pepprGPlusPage = "https://plus.google.com/u/0/105887239905313923105",
  pepprCompanyLogo = "https://peppr-app.com/peppr-icon.jpg",
  pepprCEO = "Florian Hackenberger",
  pepprServiceEmail = "service@peppr.it",
  pepprLocation = {
    lat: 52.51632532607162,
    lon: 13.37857961654663,
    address: {
      postcode: "10117",
      country_code: "DE",
      country: "Germany",
      city: "Berlin"
    }
  },
  pepprProviderShortLinkPrefix = "https://peppr.it/",
  pepprShortLinkPrefix = "https://peppr.it/s/",
  momentDayIdxToName = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WE",
    4: "TH",
    5: "FR",
    6: "SA",
    7: "SU"
  },
  momentDayNameToIdx = {
    SU: 0,
    MO: 1,
    TU: 2,
    WE: 3,
    TH: 4,
    FR: 5,
    SA: 6
  },
  pepprStrgKeyProviderList = "pepprProviderList";
location.hash.length > 1 && "#" === location.hash[0] && "!" !== location.hash[1] && (location.hash = "#!" + location.hash.substring(1)),
  function() {
    if (location.hash.length >= 3 && "/" === location.hash[2]) {
      var e = determineLanguageFromBrowserOnly(),
        i = "";
      location.hash.length >= 5 && (5 === location.hash.length || "/" === location.hash[5]) && (i = location.hash.substring(3, 5)), pepprSupportedLangMap[i] || (location.hash = "#!/" + e + location.hash.substring(2))
    }
  }(), angular.module("peppritAngularApp", ["ngRaven", "ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "restangular", "pascalprecht.translate", "uiGmapgoogle-maps", "LocalStorageModule", "angular-markdown-editable", "ui.router", "ui.router.state", "rt.debounce"]).config(function() {}).factory("BackendRest", ["Restangular", function(e) {
    return e.withConfig(function(e) {
      e.setBaseUrl(pepprRestBaseUrl), e.setDefaultHeaders({
        "X-Requested-With": "XMLHttpRequest"
      }), e.setRequestInterceptor(function(e, i) {
        return "remove" === i ? void 0 : e
      })
    })
  }]).factory("GpsRest", ["Restangular", function(e) {
    return e.withConfig(function(e) {
      e.setBaseUrl(gpsRestBaseUrl), e.setDefaultHeaders({
        "X-Requested-With": "XMLHttpRequest"
      }), e.setRequestInterceptor(function(e, i) {
        return "remove" === i ? void 0 : e
      })
    })
  }]).factory("RestFullResponse", ["BackendRest", function(e) {
    return e.withConfig(function(e) {
      e.setFullResponse(!0)
    })
  }]).config(["RavenProvider", function(e) {
    isProductionServer() || e.development(!0)
  }]).config(["$locationProvider", function(e) {
    e.hashPrefix("!"), e.html5Mode(!0)
  }]).config(["$translateProvider", function(e) {
    window.jQuery.each(pepprSupportedLangMap, function(i, n) {
      e.translations(i, n)
    });
    var i = determineLanguage();
    e.preferredLanguage(i), e.fallbackLanguage(fallbackLang), moment.lang(i)
  }]).config(["uiGmapGoogleMapApiProvider", function(e) {
    e.configure({
      key: GOOGLE_API_KEY,
      v: "3.19.20",
      libraries: "weather,geometry,places,visualization"
    })
  }]).factory("GeoTools", ["$rootScope", "$q", "Restangular", "$translate", function(e, i, n, t) {
    function a(e, i) {
      var n;
      return s.each(e.address_components, function() {
        return this.types.indexOf(i) >= 0 ? (n = this, !0) : void 0
      }), n
    }

    function o(e) {
      if (!e) return null;
      var i = {
          lat: null,
          lon: null,
          zip: null,
          countryCode: null,
          country: null,
          city: null,
          addrShort: null
        },
        n = a(e, "postal_code");
      i.zip = n ? n.short_name : null;
      var t = a(e, "street_number");
      i.streetNr = t ? t.short_name : null;
      var o = a(e, "route");
      i.street = o ? o.short_name : null;
      var r = a(e, "country");
      i.countryCode = r ? r.short_name : null, i.country = r ? r.long_name : null;
      var s = a(e, "administrative_area_level_1");
      i.state = s ? s.short_name : null, i.state && i.state.length <= 2 && s.long_name.length < 10 && (i.state = s.long_name);
      var l = a(e, "locality");
      i.city = l ? l.short_name : null, i.city && i.city.length <= 2 && l.long_name.length < 10 && (i.city = l.long_name);
      var c = a(e, "sublocality"),
        d = a(e, "sublocality_level_2"),
        p = d ? d.short_name : null;
      return p = p ? p : c ? c.short_name : "", i.district = p, null === i.city && d && (i.city = d.short_name), i.lat = e.geometry.location.lat, i.lon = e.geometry.location.lng, i.addrShort = e.formatted_address, i
    }
    var r = 6371,
      s = window.jQuery,
      l = n.withConfig(function(e) {
        e.setBaseUrl("https://maps.googleapis.com/maps/api/geocode"), e.setDefaultHeaders(s.extend(n.defaultHeaders, {}))
      });
    return {
      reverseGeocode: function(e, i) {
        var n = {
          latlng: e + "," + i
        };
        return l.one("json").customGET(null, n)
      },
      encodeAddressQuery: function(e) {
        var i = {
          address: e,
          region: GOOGLE_GEOCODE_REGION
        };
        return l.one("json").customGET(null, i)
      },
      getAllResults: function(e) {
        return e && e.results ? e.results : []
      },
      getAllResultsWithPostcode: function(e) {
        var i = e && e.results ? e.results : [];
        return s.grep(i, function(e) {
          return a(e, "postal_code") ? !0 : !1
        })
      },
      getAllResultsWithStreetAddress: function(e) {
        var i = e && e.results ? e.results : [];
        return s.grep(i, function(e) {
          return e.types && e.types.indexOf("street_address") >= 0
        })
      },
      getFirstResult: function(e) {
        var i = e && e.results ? e.results : [];
        return i.length > 0 ? i[0] : null
      },
      getFirstResultWithPostcode: function(e) {
        var i = e && e.results ? e.results : [];
        if (0 === i.length) return null;
        var n;
        return s.each(i, function() {
          var e = a(this, "postal_code");
          return e ? (n = this, !0) : void 0
        }), n
      },
      resultToLocation: function(e) {
        return o(e)
      },
      resultsToLocations: function(e) {
        return e ? s.map(e, o) : []
      },
      resultToCoords: function(e) {
        var i = {
          lat: null,
          lon: null
        };
        return i.lat = e.geometry.location.lat, i.lon = e.geometry.location.lng, i
      },
      locationToStr: function(e) {
        return e.addrShort ? e.addrShort : t.instant("main_invalid_postcode_error")
      },
      locationToCityStr: function(e) {
        if (!e) return t.instant("main_invalid_postcode_error");
        var i = "";
        return e.district && (i += e.district), (e.city || e.county) && (i += (i ? ", " : "") + (e.city || e.county)), e.state && e.state !== (e.city || e.county) && (i += (i ? ", " : "") + e.state), i
      },
      distanceKm: function(e, i, n, t) {
        var a = Math.PI / 180,
          o = (n - e) * a,
          s = (t - i) * a,
          l = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(e * a) * Math.cos(n * a) * Math.sin(s / 2) * Math.sin(s / 2),
          c = 2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)),
          d = r * c;
        return d
      },
      requestGeoLocation: function() {
        var e = i.defer();
        return window.Modernizr.geolocation ? navigator.geolocation.getCurrentPosition(function(i) {
          e.resolve(i)
        }, function() {
          e.reject(!1)
        }) : e.reject(!1), e.promise
      }
    }
  }]).factory("FullHeightPage", ["$rootScope", function(e) {
    var i = null;
    return {
      enableFullHeight: function(n) {
        i = e.fullHeight, e.fullHeight = !0, n.$on("$destroy", function() {
          e.fullHeight = i
        })
      }
    }
  }]).factory("FilterMenu", ["$rootScope", function(e) {
    var i = null;
    return {
      enableFilterMenu: function(n) {
        i = e.filterMenuAvailable, e.filterMenuAvailable = !0, n.$on("$destroy", function() {
          e.filterMenuAvailable = i
        })
      }
    }
  }]).factory("SEO", ["$rootScope", "$translate", function(e, i) {
    return e.seo || (e.seo = {
      defaultTitle: "",
      title: "",
      defaultDescription: "",
      description: "",
      defaultKeywords: "",
      keywords: ""
    }), e.$on("$stateChangeStart", function() {
      e.seo.title = e.seo.defaultTitle, e.seo.description = e.seo.defaultDescription, e.seo.keywords = e.seo.defaultKeywords
    }), {
      setDefaultTitle: function(i) {
        e.seo.defaultTitle = i
      },
      setTitle: function(i) {
        e.seo.title = i
      },
      setDefaultDescription: function(i) {
        e.seo.defaultDescription = i
      },
      setDescription: function(i) {
        e.seo.description = i
      },
      setDefaultKeywords: function(i) {
        e.seo.defaultKeywords = i
      },
      setKeywords: function(i) {
        e.seo.keywords = i
      },
      setProviderTitle: function(n) {
        e.seo.title = n.name + " - " + i.instant("ProviderClaim_" + n.claim.nameId), e.peppr.features.showPrices && (e.seo.title += " - " + n.pricePerHour + "â‚¬/h")
      },
      setProviderDescription: function(n) {
        var t = i.instant("ENUM_Sex_" + n.sex),
          a = i.instant("ENUM_Figure_" + n.figure),
          o = i.instant("provider_autodescription", {
            sex: t,
            age: n.age,
            heightCm: n.heightCm,
            figure: a
          }),
          r = 156 - o.length;
        if (!n.description) return void(e.seo.description = o);
        if (r >= n.description.length) o += ". " + n.description;
        else {
          var s = n.description.indexOf(".", r - 10 > 0 ? r - 10 : r),
            l = n.description.indexOf(" ", r - 10 > 0 ? r - 10 : r);
          o += s > 0 ? ". " + n.description.substring(0, s + 1) : l > 0 ? ". " + n.description.substring(0, l) : ". " + n.description.substring(0, r) + "..."
        }
        e.seo.description = o
      }
    }
  }]).factory("Messages", ["$rootScope", "$timeout", function(e, i) {
    function n() {
      void 0 === e.messages && (e.messages = [])
    }

    function t() {
      o(".messages-container").foundation({
        bindings: "events"
      })
    }

    function a(a, r, s) {
      n();
      var l = !1;
      if (o.each(e.messages, function() {
          return this.text === a.text ? (l = !0, !1) : void 0
        }), !l) {
        var c = "msg-" + (new Date).getTime();
        a = o.extend(a, {
          cssClasses: s,
          id: c
        }), e.messages.push(a), r = r ? r : "alert" === a.level ? 1e4 : "warning" === a.level ? 4e3 : 2500, i(function() {
          t();
          var n = o(".messages-container #" + c);
          n.one("close.fndtn.alert", function() {
            var i = e.messages.indexOf(a);
            i >= 0 && e.messages.splice(i, 1)
          }), i(function() {
            if (0 === n.length) {
              var i = e.messages.indexOf(a);
              return void(i >= 0 && e.messages.splice(i, 1))
            }
            o("a.close", n).trigger("click.fndtn.alert")
          }, r)
        }, 0);
        var d = o(".messages-container")[0];
        d && d.scrollIntoView()
      }
    }
    var o = window.jQuery;
    return {
      success: function(e, i, n) {
        a({
          level: "success",
          text: e
        }, i, n)
      },
      info: function(e, i, n) {
        a({
          level: "info",
          text: e
        }, i, n)
      },
      warning: function(e, i, n) {
        a({
          level: "warning",
          text: e
        }, i, n)
      },
      error: function(e, i, n) {
        a({
          level: "alert",
          text: e
        }, i, n)
      }
    }
  }]).factory("PepprFormInfo", ["$rootScope", "BackendRest", "$q", function(e, i, n) {
    function t() {
      var t = n.defer();
      return i.all("provider").get("forminfo").then(function(i) {
        e.peppr.formInfo = i, t.resolve(i)
      }, function(e) {
        console.log("Error while retrieving formInfo: ", e), t.reject(!1)
      }), a = t.promise
    }
    var a = null;
    return e.peppr || (e.peppr = {}), e.peppr.formInfo = {}, {
      getFormInfo: function() {
        return e.peppr ? e.peppr.formInfo : null
      },
      getFormInfoPromise: function() {
        return a || (a = t()), a
      }
    }
  }]).factory("PepprRestCache", ["localStorageService", function(e) {
    return {
      notifyUserChanged: function() {
        e.remove(window.pepprStrgKeyProviderList)
      },
      getProviderList: function() {
        return e.get(window.pepprStrgKeyProviderList)
      },
      storeProviderList: function(i) {
        e.add(window.pepprStrgKeyProviderList, i)
      },
      clearProviderList: function() {
        e.remove(window.pepprStrgKeyProviderList)
      }
    }
  }]).factory("Login", ["PepprFormInfo", "PepprRestCache", "$rootScope", "$location", "$state", "$timeout", "Messages", "BackendRest", "GpsRest", "localStorageService", "$q", function(e, i, n, t, a, o, r, s, l, c, d) {
    function p(e) {
      var i = d.defer();
      return f = !0, s.setDefaultHeaders(h.extend(s.defaultHeaders, {
        Authorization: "Basic " + e
      })), l.setDefaultHeaders(h.extend(l.defaultHeaders, {
        Authorization: "Basic " + e
      })), s.one("user").get().then(function(t) {
        c.add(v, e), k = e, u(t), n.loggedIn = !0, i.resolve(t.user), f = !1, n.$emit(w.postLogin)
      }, function(e) {
        m(), !e || 401 !== e.status && 403 !== e.status || g(), i.reject(!1), f = !1
      }), _ = i.promise
    }

    function u(e) {
      if (n.user = e.user, n.userRoles = e.roles, n.userProviders = e.providers, n.userProvider = e.providers && e.providers.length > 0 ? e.providers[0] : null, n.userAgencies = e.agencies, e.agencies && e.agencies.length > 0 ? (n.userAgency = e.agencies[0], n.isAgency = !0) : n.userAgency = null, n.isAdmin = e.roles && h.inArray("ROLE_ADMIN", e.roles) > -1, n.isAdmin && !gaIsOptedOut() ? r.error('You are still being tracked in Analytics, <a href="' + a.href("app.notrack") + '">CLICK HERE</a> to disable that if you are using this computer regularly.') : gaIsOptedOut() && r.info("You are excluded from Analytics tracking"), e.user) {
        y && (o.cancel(y), y = null);
        var i = function() {
          if (!Tawk_API || !Tawk_API.setAttributes) return console.log("Tawk API unavailable, continue waiting"), void(y = o(i, 1e3));
          try {
            console.log("Now setting the tawk userId attribute"), Tawk_API.setAttributes({
              userId: e.user.id
            }, function(e) {
              e && console.log("Failed to set tawk user id", e)
            })
          } catch (n) {
            Raven && Raven.captureException(n), console.log(n)
          }
          y = null
        };
        y = o(i, 2e3)
      }
    }

    function m() {
      n.loggedIn = !1, n.isAdmin = !1, n.isAgency = !1, n.user = null, n.userProvider = null, n.userProviders = null, n.userAgency = null, n.userAgencies = null, _ = null;
      var e = s.defaultHeaders;
      delete e.Authorization, s.setDefaultHeaders(e), e = l.defaultHeaders, delete e.Authorization, l.setDefaultHeaders(e)
    }

    function g() {
      c.remove(v)
    }
    var h = window.jQuery,
      v = "authHash",
      _ = null,
      f = !1,
      b = null,
      y = null;
    n.loggedIn = !1, n.isAdmin = !1, n.isAgency = !1, n.user = null, n.userRoles = null, n.userProvider = null, n.userProviders = null, n.userAgency = null, n.userAgencies = null;
    var w = {
        postLogin: "peppr.service.login.postLogin",
        postLogout: "peppr.service.login.postLogout"
      },
      k = c.get(v);
    return k && "null" !== k ? p(k) : c.remove(v), s.setErrorInterceptor(function(e) {
      if (e && e.meta) switch (e.meta.code) {
        case 401:
        case 403:
          return m(), b = t.path(), a.go("^.login"), !1
      }
    }), {
      isLoggedIn: function() {
        return n.loggedIn
      },
      isAdmin: function() {
        return n.isAdmin
      },
      isAgency: function() {
        return n.isAgency
      },
      setRedirectPath: function(e) {
        b = e
      },
      getRedirectPath: function() {
        return b
      },
      getAndResetRedirectPath: function() {
        var e = b;
        return b = null, e
      },
      getLoginPromise: function(e) {
        if (_) return !e || f ? _ : k ? p(k) : (console.log("Error, logged in, but no stored hash!???"), _);
        var i = d.defer();
        return i.reject(!1), i.promise
      },
      getUserName: function() {
        return n.user.username
      },
      getUser: function() {
        return n.user
      },
      getUserProvider: function() {
        return n.userProvider
      },
      getUserProviders: function() {
        return n.userProviders
      },
      getUserAgency: function() {
        return n.userAgency
      },
      getAuthBasicToken: function() {
        return c.get(v)
      },
      login: function(e, n) {
        var t = window.btoa(window.unescape(encodeURIComponent(e + ":" + n)));
        return i.notifyUserChanged(), p(t)
      },
      setUpdatedUserData: function(e) {
        u(e)
      },
      logout: function() {
        i.notifyUserChanged(), m(), g(), n.$emit(w.postLogout)
      },
      events: w
    }
  }]).factory("Comet", ["Login", "$rootScope", "$q", function(e, i, n) {
    function t() {
      a = n.defer(), l.ext["it.peppr.credentials"].basicToken = e.getAuthBasicToken(), o.cometd.handshake(l, function(e) {
        e.successful ? (console.log("Successfully connected to CometD"), a.resolve(o.cometd)) : (console.error("Failed to connect to CometD", e.error), a.reject())
      })
    }
    var a, o = window.jQuery,
      r = [],
      s = {};
    o.cometd.configure({
      url: pepprCometUrl
    });
    var l = {
      ext: {
        "it.peppr.credentials": {
          basicToken: e.getAuthBasicToken()
        }
      }
    };
    return t(), i.$on(e.events.postLogin, t), o.cometd.addListener("/meta/handshake", function(e) {
      e.successful && o.cometd.batch(function() {
        o.each(r, function() {
          var e = o.cometd.resubscribe(this);
          s[this] = e
        })
      })
    }), {
      getPromise: function() {
        if (a) return a.promise;
        var e = n.defer();
        return e.reject(!1), e.promise
      },
      subscribe: function(e, i) {
        var t = n.defer(),
          a = o.cometd.subscribe(e, i, null, function(i) {
            console.log("channel " + e + " subscription result: ", i), i.successful ? (r.push(a), s[a] = a, t.resolve(a)) : t.reject(i)
          });
        return t.promise
      },
      unsubscribe: function(e) {
        var i = s[e],
          t = n.defer();
        return i ? (o.cometd.unsubscribe(e), r = o.grep(r, function() {
          return this !== e
        }), delete s[e], t.resolve(!0)) : t.reject(!1), t.promise
      },
      publish: function(e, i) {
        var t = n.defer();
        return o.cometd.publish(e, i, function(e) {
          e.successful ? t.resolve(!0) : t.reject(!1)
        }), t.promise
      }
    }
  }]).factory("ClientLocation", ["$rootScope", "Messages", "GeoTools", "localStorageService", "$translate", "$timeout", function(e, i, n, t, a, o) {
    function r(e, i, n, t) {
      e.lat = i || t.lat, e.lon = n || t.lon, e.zip = t.zip, e.countryCode = t.countryCode, e.country = t.country, e.addrShort = t.addrShort
    }

    function s(i, n, t, a) {
      i = i ? i : Number(t.lat), n = n ? n : Number(t.lon), r(e.peppr.clientLocation.tmpLocation, i, n, t), a && (e.peppr.clientLocation.zipCode = t.zip), e.peppr.clientLocation.geocodedAddress = t.addrShort, e.peppr.clientLocation.isValid = !0
    }

    function l(i, n, a, o) {
      r(e.peppr.clientLocation.location, n, a, o), e.peppr.clientLocation.geocodedAddress = e.peppr.clientLocation.location.addrShort, e.peppr.clientLocation.isValid = !0, i && t.add(g, JSON.stringify(e.peppr.clientLocation.location))
    }

    function c(e, i, t, a, o, r, s, c) {
      var d = {
        lat: i ? Number(i) : pepprLocation.lat,
        lon: t ? Number(t) : pepprLocation.lat,
        zip: a ? a : pepprLocation.address.postcode,
        countryCode: o ? o : pepprLocation.address.country_code,
        country: r ? r : pepprLocation.address.country,
        city: s ? s : pepprLocation.address.city,
        addrShort: c ? c : n.locationToStr(pepprLocation)
      };
      l(e, i, t, d)
    }

    function d(t, o, r, c) {
      e.peppr.clientLocation.working = !0, n.reverseGeocode(t, o).then(function(i) {
        var l = n.getFirstResultWithPostcode(i),
          c = n.resultToLocation(l);
        v = !0, c ? s(t, o, c, r) : (e.peppr.clientLocation.addrShort = a.instant("main_invalid_postcode_error"), e.peppr.clientLocation.isValid = !1), e.peppr.clientLocation.working = !1
      }, function() {
        i.error(a.instant("main_geocoding_error")), e.peppr.clientLocation.working = !1, c && (c = pepprLocation, l(!0, c.lat, c.lon, pepprLocation))
      })
    }

    function p(i) {
      if (!i || i.length < 1) return e.peppr.clientLocation.working = !1, void(e.peppr.clientLocation.geocodedAddress = a.instant("main_invalid_postcode_error"));
      i.sort(function(i, t) {
        var a = n.resultToCoords(i),
          o = n.resultToCoords(t),
          r = n.distanceKm(e.peppr.clientLocation.searchFocusLocation.lat, e.peppr.clientLocation.searchFocusLocation.lon, a.lat, a.lon),
          s = n.distanceKm(e.peppr.clientLocation.searchFocusLocation.lat, e.peppr.clientLocation.searchFocusLocation.lon, o.lat, o.lon);
        return r - s
      });
      var t = n.resultToLocation(i[0]);
      return t.addrShort && t.country ? (r(e.peppr.clientLocation.tmpLocation, null, null, t), e.peppr.clientLocation.geocodedAddress = e.peppr.clientLocation.tmpLocation.addrShort, e.peppr.clientLocation.isValid = !0, void(e.peppr.clientLocation.working = !1)) : (e.peppr.clientLocation.working = !1, void(e.peppr.clientLocation.geocodedAddress = a.instant("main_invalid_postcode_error")))
    }

    function u(t) {
      return function(r, s) {
        return v || !r ? void(v = !1) : void(r !== s && (e.peppr.clientLocation.working = !0, e.peppr.clientLocation.isValid = !1, _ && (o.cancel(_), _ = !1), _ = o(function() {
          n.encodeAddressQuery(r).then(function(e) {
            var i = t(e);
            p(i)
          }, function() {
            i.error(a.instant("main_geocoding_error")), e.peppr.clientLocation.working = !1;
            var n = pepprLocation;
            l(!0, n.lat, n.lon, n)
          })
        }, 1e3)))
      }
    }
    var m = window.jQuery,
      g = "clientLocation",
      h = t.get(g),
      v = !1,
      _ = !1,
      f = {
        lat: null,
        lon: null,
        zip: null,
        countryCode: null,
        country: null,
        city: null,
        addrShort: null
      };
    return e.peppr || (e.peppr = {}), e.peppr.clientLocation = {
      zipCode: "",
      cityName: "",
      searchFocusLocation: {
        lat: pepprLocation.lat,
        lon: pepprLocation.lon
      },
      geocodedAddress: "",
      working: !1,
      isValid: !1,
      tmpLocation: m.extend({}, f),
      location: m.extend({}, f)
    }, h && (m.extend(e.peppr.clientLocation.location, h), m.extend(e.peppr.clientLocation.tmpLocation, h), e.peppr.clientLocation.isValid = !0, h.zip && (e.peppr.clientLocation.zipCode = h.zip), h.city && (e.peppr.clientLocation.cityName = h.city), h.addrShort && (e.peppr.clientLocation.geocodedAddress = h.addrShort)), e.$watch("peppr.clientLocation.zipCode", u(function(e) {
      return n.getAllResultsWithPostcode(e)
    })), e.$watch("peppr.clientLocation.cityName", u(function(e) {
      return n.getAllResults(e)
    })), e.$on("$stateChangeStart", function() {
      e.peppr.clientLocation.searchFocusLocation = {
        lat: pepprLocation.lat,
        lon: pepprLocation.lon
      }
    }), {
      getClientLocation: function() {
        return {
          latitude: e.peppr.clientLocation.location.lat,
          longitude: e.peppr.clientLocation.location.lon
        }
      },
      updateAddress: function() {
        var i = e.peppr.clientLocation.location;
        i.lat && i.lon && d(i.lat, i.lon, !0)
      },
      setFakeClientLocation: function(e, i, n, t, a, o, r, s) {
        c(e, i, n, t, a, o, r, s)
      },
      requestGeocoding: function(t) {
        e.peppr.clientLocation.working = !0, e.peppr.clientLocation.isValid = !1, n.requestGeoLocation().then(function(e) {
          d(e.coords.latitude, e.coords.longitude, !0, t)
        }, function() {
          i.error(a.instant("main_geocoding_error")), e.peppr.clientLocation.working = !1
        })
      },
      setClientLocation: function() {
        return e.peppr.clientLocation.isValid ? (m.extend(!0, e.peppr.clientLocation.location, e.peppr.clientLocation.tmpLocation), t.add(g, JSON.stringify(e.peppr.clientLocation.location)), !0) : !1
      }
    }
  }]).factory("PepprSearchFilter", ["PepprFormInfo", "PepprTools", "PepprRestCache", "ClientLocation", "$rootScope", "$q", "$location", "$state", "localStorageService", "BackendRest", function(e, i, n, t, a, o, r, s, l, c) {
    function d(e) {
      var i = a.providerRestSearchFilter;
      i.instantOnly = e.instantOnly, i.ageMin = e.ageMin, i.ageMax = e.ageMax;
      var n = [];
      e.bustSizeA && n.push("A"), e.bustSizeB && n.push("B"), e.bustSizeC && n.push("C"), e.bustSizeD && n.push("D"), e.bustSizeDPlus && n.push("Dplus"), i.bustSizes = n;
      var o = t.getClientLocation();
      i.clientLocation = {
        latitude: o.latitude,
        longitude: o.longitude
      }, i.distanceKmMin = e.distanceKmMin, i.distanceKmMax = e.distanceKmMax;
      var r = [];
      e.figureThin && r.push("THIN"), e.figureSlim && r.push("SLIM"), e.figure && r.push("SLIM"), e.figureFeminine && r.push("FEMININE"), e.figureCushy && r.push("CUSHY"), e.figureRubenesque && r.push("RUBENESQUE"), e.figureMuscular && r.push("MUSCULAR"), e.figureSporty && r.push("SPORTY"), e.figureEasygoing && r.push("EASYGOING"), i.figureTypes = r;
      var s = [];
      e.hairLengthShaved && s.push("SHAVED"), e.hairLengthShort && s.push("SHORT"), e.hairLengthShoulderLong && s.push("SHOULDER_LONG"), e.hairLengthLong && s.push("LONG"), i.hairLengths = s, i.heightCmMin = a.peppr.formInfo.providerSearchFilter.heightCmMin, i.heightCmMax = a.peppr.formInfo.providerSearchFilter.heightCmMax, !e.heightSmall || e.heightMedium || e.heightTall ? e.heightSmall || !e.heightMedium || e.heightTall ? e.heightSmall || e.heightMedium || !e.heightTall ? e.heightSmall && e.heightMedium && !e.heightTall ? (i.heightCmMin = a.peppr.formInfo.providerSearchFilter.heightCmMin, i.heightCmMax = 170) : !e.heightSmall && e.heightMedium && e.heightTall ? (i.heightCmMin = 160, i.heightCmMax = a.peppr.formInfo.providerSearchFilter.heightCmMax) : (i.heightCmMin = a.peppr.formInfo.providerSearchFilter.heightCmMin, i.heightCmMax = a.peppr.formInfo.providerSearchFilter.heightCmMax) : (i.heightCmMin = 170, i.heightCmMax = a.peppr.formInfo.providerSearchFilter.heightCmMax) : (i.heightCmMin = 160, i.heightCmMax = 170) : (i.heightCmMin = a.peppr.formInfo.providerSearchFilter.heightCmMin, i.heightCmMax = 160), e.heightTall || (i.heightCmMax = 180), e.language && e.language.length > 0 && (i.languages = [e.language]), i.priceMin = e.priceMin, i.priceMax = e.priceMax === v.priceMax ? Number.MAX_VALUE : e.priceMax, i.sexes = [], i.sexualities = [], e.sexMale && i.sexes.push("MALE"), e.sexFemale && i.sexes.push("FEMALE"), e.sexTrans && i.sexes.push("TRANS"), e.sexualityHetero && i.sexualities.push("HETERO"), e.sexualityHomo && i.sexualities.push("HOMO"), e.sexualityBi && i.sexualities.push("BI");
      var l = [];
      e.services && m.each(e.services, function() {
        this.checked && this.filterable && l.push({
          id: this.id
        })
      }), i.services = l
    }

    function p() {
      a.providerFilterWatchEnabled && (n.clearProviderList(), l.add(g, JSON.stringify(a.providerFilter)), d(a.providerFilter))
    }

    function u() {
      var n = o.defer(),
        t = window.jQuery;
      return e.getFormInfoPromise().then(function(e) {
        e.betaSignupEnabled && a.peppr.checkForLaunchRedirect && s.go("^.launch"), a.providerRestSearchFilter = t.extend(!0, {}, c.stripRestangular(e.providerSearchFilter)), a.providerFilter.services = t.grep(i.optionsToAssociationArray("Service_", e.serviceOptions), function(e) {
          return e.filterable
        }), t.each(a.providerFilter.services, function(e) {
          a.$watch("providerFilter.services[" + e + "].checked", p)
        }), a.providerFilterWatchEnabled = !0, p(), n.resolve(a.providerRestSearchFilter)
      }, function() {
        a.providerFilterWatchEnabled = !0, n.reject(!1)
      }), h = n.promise
    }
    var m = window.jQuery,
      g = "providerFilter",
      h = !1,
      v = {
        ageMin: 18,
        ageMax: 99,
        bustSizeA: !0,
        bustSizeB: !0,
        bustSizeC: !0,
        bustSizeD: !0,
        bustSizeDPlus: !0,
        distanceKmMin: 0,
        distanceKmMax: 99,
        figureThin: !0,
        figureSlim: !0,
        figureFeminine: !0,
        figureCushy: !0,
        figureRubenesque: !0,
        figureMuscular: !0,
        figureSporty: !0,
        figureEasygoing: !0,
        heightSmall: !0,
        heightMedium: !0,
        heightMediumDisabled: !1,
        heightTall: !0,
        hairLengthShaved: !0,
        hairLengthShort: !0,
        hairLengthShoulderLong: !0,
        hairLengthLong: !0,
        language: "",
        priceMin: 0,
        priceMax: 300,
        sexFemale: !0,
        sexMale: !0,
        sexTrans: !0,
        sexualityHetero: !0,
        sexualityHomo: !0,
        sexualityBi: !0,
        services: []
      };
    a.providerFilter = m.extend(a.providerFilter || {}, v), a.providerFilterWatchEnabled = !1, a.resetProviderFilter = function() {
      var e = m.extend({}, v);
      e.services = a.providerFilter.services, m.each(e.services, function() {
        this.checked = !1
      }), a.providerFilter = e, i.trackEvent("reset_provider_filter")
    };
    var _ = [a.providerFilter.heightSmall, a.providerFilter.heightMedium, a.providerFilter.heightTall];
    a.$watchCollection("[providerFilter.heightSmall, providerFilter.heightMedium, providerFilter.heightTall]", function() {
      a.providerFilter.heightSmall && a.providerFilter.heightMedium && a.providerFilter.heightTall ? a.providerFilter.heightMediumDisabled = !0 : a.providerFilter.heightSmall && !a.providerFilter.heightMedium && a.providerFilter.heightTall ? (a.providerFilter.heightMedium = !0, a.providerFilter.heightMediumDisabled = !0) : a.providerFilter.heightSmall || a.providerFilter.heightMedium || a.providerFilter.heightTall ? a.providerFilter.heightMediumDisabled = !1 : (a.providerFilter.heightSmall = _[0], a.providerFilter.heightMedium = _[1], a.providerFilter.heightTall = _[2]), _ = [a.providerFilter.heightSmall, a.providerFilter.heightMedium, a.providerFilter.heightTall]
    }), a.providerRestSearchFilter = {};
    var f = null;
    try {
      f = l.get(g)
    } catch (b) {}
    return m.isPlainObject(f) ? m.extend(a.providerFilter, f) : l.remove(g), a.$watchCollection("providerFilter", p), {
      getProviderFilterPromise: function() {
        return h || (h = u()), h
      }
    }
  }]).factory("PepprTools", ["uiGmapGoogleMapApi", "$rootScope", "$stateParams", "$translate", "$location", "$state", "$timeout", "$q", function(e, i, n, t, a, o, r, s) {
    function l() {
      var e = g(".view-container"),
        n = e.offset();
      e.css("min-height", g(window).height() - (n ? n.top : 0)), i.peppr.isScreenSmall = window.matchMedia(window.Foundation.media_queries.small).matches, i.peppr.isScreenMedium = window.matchMedia(window.Foundation.media_queries.medium).matches, i.peppr.isScreenLarge = window.matchMedia(window.Foundation.media_queries.large).matches, i.peppr.isScreenXLarge = window.matchMedia(window.Foundation.media_queries.xlarge).matches, i.peppr.isScreenXXLarge = window.matchMedia(window.Foundation.media_queries.xxlarge).matches, i.peppr.screenWidth = g(window).width(), i.peppr.screenHeight = g(window).height(), i.peppr.isScreenXXLarge ? i.peppr.screenSize = "xxlarge" : i.peppr.isScreenXLarge ? i.peppr.screenSize = "xlarge" : i.peppr.isScreenLarge ? i.peppr.screenSize = "large" : i.peppr.isScreenMedium ? i.peppr.screenSize = "medium" : i.peppr.isScreenSmall && (i.peppr.screenSize = "small")
    }

    function c() {
      window.FastClick.attach(document.body), g(document).foundation(b), window.Foundation.libs.reveal.events(g(document)), g.extend(!0, window.Foundation.libs.abide.settings, b.abide);
      var e = o.$current.toString();
      i.showNav = g.inArray(e, ["app.root", "app.root_slash", "app.launch", "app.beta", "app.italy"]) < 0 ? !0 : !1, g(window).off(".peppr-tools").on("resize.peppr-tools", function() {
        l(), i.$$phase || i.$digest()
      }), r(function() {
        l()
      }), _.resolve(!0)
    }

    function d(e) {
      var i = g(new Image);
      i.on("load.trackingPixel error.trackingPixel", function() {
        i.off("load.trackingPixel error.trackingPixel")
      }), i.attr("src", e)
    }

    function p(e, i) {
      return h(e.format("YYYY-MM-DD") + " " + i, "YYYY-MM-DD HH:mm:ss")
    }

    function u(e, i, n) {
      var t = h(e.format("YYYY-MM-DD") + " " + n, "YYYY-MM-DD HH:mm:ss");
      return t.isBefore(i) && t.add("days", 1), t
    }

    function m(e) {
      if (!e || !e.instantBookingStart || !e.instantBookingMaxHours) return !1;
      var i = h(e.instantBookingStart),
        n = h(i).add("hours", e.instantBookingMaxHours),
        t = h();
      return t.isAfter(i) && t.isBefore(n)
    }
    var g = window.jQuery,
      h = window.moment,
      v = !1,
      _ = s.defer(),
      f = null;
    i.peppr || (i.peppr = {}), i.peppr.scrollPos = {}, i.peppr.okSaveScroll = !1, i.peppr.forceDisplayMain = !1, i.peppr.isScreenSmall = !1, i.peppr.isScreenMedium = !1, i.peppr.isScreenLarge = !1, i.peppr.isScreenXLarge = !1, i.peppr.isScreenXXLarge = !1, i.peppr.screenSize = "small", i.peppr.screenWidth = g(window).width(), i.peppr.screenHeight = g(window).height(), i.peppr.prevRoute = null, i.peppr.prevState = null, i.peppr.currRoute = null, i.peppr.validators = {}, i.hideSitename = !1;
    var b = {
      abide: {
        live_validate: !0,
        patterns: {
          anything: /.*/,
          relaxed_password: /^[^\s].{4,}[^\s]$/,
          phone_number_noprefix: /^[1-9][0-9 ]{3,}$/,
          date_future: {
            test: function(e) {
              var i = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/.test(e);
              if (!i) return !1;
              var n = new Date(e),
                t = new Date;
              return t.setHours(0, 0, 0, 0), n.getTime() > t.getTime()
            }
          },
          time_hm: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){1,2}/,
          cstm_iban: {
            test: function(e) {
              return window.IBAN.isValid(e)
            }
          },
          cstm_bic: /^[a-z]{6}[0-9a-z]{2}([0-9a-z]{3})?$/i,
          username: /([a-z0-9\-_]){4,}/,
          forename: /^([a-zA-Z][a-z0-9\-_]+\s*)+$/,
          always_valid: {
            test: function() {
              return !0
            }
          },
          always_invalid: {
            test: function() {
              return !1
            }
          }
        }
      }
    };
    g.extend(i.peppr.validators, Foundation.libs.abide.settings.patterns, b.abide.patterns);
    var y = !1;
    return function(e) {
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (y = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), l(), i.$on("$viewContentLoaded", function() {
      v || c(), v = !1
    }), i.$on("$stateChangeStart", function() {
      i.hideSitename = !1, i.title = !1, i.peppr.okSaveScroll = !1, _ = s.defer()
    }), i.$on("$stateChangeSuccess", function(e, o, r, s) {
      i.peppr.prevState = s, i.peppr.prevRoute = i.peppr.currRoute, i.peppr.currRoute = a.$$path, void 0 !== n.lang && (i.activeLang = n.lang, g.each(pepprSupportedLangMap, function(e) {
        i["otherLangURL" + e] = e !== i.activeLang ? a.absUrl().replace("/" + i.activeLang, "/" + e) : null
      }), i.otherLangURLdefault = a.absUrl().replace("/" + i.activeLang, "/" + fallbackLang), t.preferredLanguage(n.lang), t.use(n.lang))
    }), {
      ignoreInitChange: function(e) {
        return function(i, n) {
          i !== n && e(i, n)
        }
      },
      optionsToScopeArray: function(e, i, n) {
        var a = [];
        return g.each(i, function() {
          a.push({
            name: t.instant(e + this, n),
            value: this
          })
        }), a
      },
      optionsToAssociationArray: function(e, i, n) {
        var a = [];
        return g.each(i, function() {
          var i = n ? this[n].nameId : this.nameId;
          this.name = t.instant(e + i), a.push(this)
        }), a
      },
      findSelected: function(e, i) {
        var n = null;
        if (i && e) return g.each(e, function() {
          return this.id === (i.id || i) ? (n = this, !1) : void 0
        }), n
      },
      combineDateAndTime: function(e, i) {
        return h(e.format("YYYY-MM-DD") + " " + i.format("HH:mm:ss"), "YYYY-MM-DD HH:mm:ss")
      },
      timeStrToHHmm: function(e) {
        return h("2015-10-20 " + e).format("HH:mm")
      },
      calcStartTime: function(e, i) {
        return p(e, i)
      },
      calcEndTime: function(e, i, n) {
        return u(e, i, n)
      },
      availabilityToAssociationArray: function(e) {
        var i = [];
        return e ? (g.each(e, function() {
          this.name = t.instant("ENUM_Weekday_" + this.day), this.checked = !0, this.fromTimeDate = h(h().format("YYYY-MM-DD") + " " + this.fromTime).toDate(), this.toTimeDate = h(h().format("YYYY-MM-DD") + " " + this.toTime).toDate(), i.push(this)
        }), i) : i
      },
      findNextAvailability: function(e, i) {
        function n(e, i, n) {
          e.nextAvailableDate = i.toDate(), e.nextAvailableDateStr = i.format(t.instant("short_weekday_time_format"));
          var a = i.diff(n, "hours");
          if (e.nextAvailable = t.instant("availability_in") + " " + a, e.nextAvailableUnit = t.instant("availability_hours"), e.nextAvailableLong = t.instant("availability_hours_long", {
              hours: a
            }), e.nextAvailable < 1) {
            var o = i.diff(n, "minutes");
            e.nextAvailable = t.instant("availability_in") + " " + o, e.nextAvailableUnit = t.instant("availability_minutes"), e.nextAvailableLong = t.instant("availability_minutes_long", {
              minutes: o
            })
          } else if (e.nextAvailable >= 24) {
            var r = i.diff(n, "days");
            e.nextAvailable = t.instant("availability_in") + " " + r, e.nextAvailableUnit = t.instant("availability_days"), e.nextAvailableLong = t.instant("availability_days_long", {
              days: r
            })
          }
        }
        var a = {
          dayMap: {},
          nextAvailableNow: !1,
          nextAvailable: t.instant("availability_upon_request"),
          nextAvailableLong: t.instant("availability_upon_request_long"),
          nextAvailableUnit: "",
          nextAvailableDateStr: "",
          nextAvailableDate: null,
          instantAvailable: !1
        };
        if (i = i || h(), a.instantAvailable = m(e), g.each(e.availability, function() {
            a.dayMap[this.day] = this
          }), 0 === e.availability.length) return a;
        var o = h(i);
        e.bookingUpfrontHours > 0 && o.add("hours", e.bookingUpfrontHours);
        var r = momentDayIdxToName[o.day()],
          s = a.dayMap[r],
          l = null,
          c = null;
        if (s && (l = p(o, s.fromTime), c = u(o, o, s.toTime), o.isAfter(l) && o.isBefore(c))) return e.bookingUpfrontHours > 0 ? n(a, o, i) : (a.nextAvailableNow = !0, a.nextAvailable = t.instant("availability_now"), a.nextAvailableLong = a.nextAvailable, a.nextAvailableDate = o.toDate(), a.nextAvailableDateStr = o.format(t.instant("short_weekday_time_format"))), a;
        for (var d = 0; 8 > d; d++) {
          if (r = momentDayIdxToName[o.day()], s = a.dayMap[r], s && (l = p(o, s.fromTime), i.isBefore(l))) return n(a, l, i), a;
          o.add("days", 1)
        }
        return a
      },
      isInstantBookingAvailable: m,
      calcPriceAndFee: function(e, i, n) {
        i = i || {};
        var t = null !== e ? e : 0,
          a = {
            basePrice: Math.round(t * (i.pricePerHour || 0)),
            price: 0,
            extrasPrice: 0,
            numExtras: 0,
            fee: 0
          };
        return i.discounts && (i.discounts.sort(function(e, i) {
          return i.minHours - e.minHours
        }), g.each(i.discounts || [], function() {
          return t >= this.minHours ? (a.basePrice = Math.round(t * this.pricePerHour), !1) : void 0
        })), a.price = a.basePrice, n = n || [], g.each(n, function() {
          this.checked && (a.extrasPrice += this.fee, a.numExtras++)
        }), a.extrasPrice = Math.round(a.extrasPrice), a.price += a.extrasPrice, a.fee = 10, a
      },
      phoneNumberToCountryAndNumber: function(e, i) {
        var n = e && e.length > 3 ? e.substring(1, 3) : "";
        n && "1" === n[0] && (n = "1");
        var t = null;
        return g.each(i, function() {
          return this.value === n ? (t = this, !1) : void 0
        }), e = e && e.length > 3 ? e.substring("1" === n ? 2 : 3) : "", {
          country: t,
          number: e
        }
      },
      matchesAnyProvider: function(e, i) {
        var n = !1;
        return e && i && g.each(i, function() {
          return this.provider.id === e ? (n = !0, !1) : void 0
        }), n
      },
      setRedirectPath: function(e) {
        f = e
      },
      getAndResetRedirectPath: function() {
        var e = f;
        return f = null, e
      },
      setForceDisplayMain: function() {
        i.peppr.forceDisplayMain = !0
      },
      getAndResetForceDisplayMain: function() {
        var e = i.peppr.forceDisplayMain;
        return i.peppr.forceDisplayMain = !1, e
      },
      getPrevRoute: function() {
        return i.peppr.prevRoute
      },
      getPrevState: function() {
        return i.peppr.prevState
      },
      hideSitename: function() {
        i.hideSitename = !0
      },
      disableStoreScrollPosition: function() {
        i.peppr.okSaveScroll = !1
      },
      enableStoreScrollPosition: function() {
        i.peppr.okSaveScroll = !0
      },
      restoreScrollPosition: function() {
        g(window).scrollTop(i.peppr.scrollPos[a.path()] ? i.peppr.scrollPos[a.path()] : 0), i.peppr.okSaveScroll = !0
      },
      refreshFormValidation: function(e) {
        r(function() {
          e.foundation(g.extend({
            bindings: "events"
          }, b))
        }, 0)
      },
      getShareTrackUrl: function(e) {
        return shareTrackUrlPrefix + e
      },
      getDefaultMapObj: function(e, i, n) {
        return {
          map: {
            center: i,
            zoom: n,
            bounds: {
              northeast: {
                latitude: i.latitude - 1,
                longitude: i.longitude + 1
              },
              southwest: {
                latitude: i.latitude + 1,
                longitude: i.longitude - 1
              }
            },
            events: {
              tilesloaded: function(i) {
                c(), e.then(function(e) {
                  e.event.trigger(i, "resize")
                })
              }
            },
            mapOptions: {
              streetViewControl: !1
            },
            clusterType: "cluster",
            clusterOptions: {
              maxZoom: 14,
              minimumClusterSize: 3
            },
            infoWindow: {
              show: !1,
              coords: {},
              options: {
                disableAutoPan: !1
              }
            }
          }
        }
      },
      isMobile: function() {
        return y
      },
      trackEvent: function(e, i, n, t) {
        isProductionServer() && ("view_profile" !== e && window.ga("send", "event", e, i, n, t), "view_profile" === e && d("https://www.facebook.com/tr?ev=6015909411332&cd[value]=0.01&cd[currency]=EUR&noscript=1"))
      },
      trackPurchase: function(e) {
        if (isProductionServer()) try {
          window.ga("ecommerce:addTransaction", {
            id: e.id,
            revenue: e.bookingFee
          }), window.ga("ecommerce:addItem", {
            id: e.id,
            name: e.provider.name,
            sku: e.provider.id,
            price: e.servicePrice,
            quantity: e.durationHours
          }), window.ga("ecommerce:send")
        } catch (i) {
          Raven && Raven.captureException(i), console.log("Failed to track e-commerce transaction", i)
        }
      },
      hackImageUrls: function(e) {
        g(e).each(function() {
          var e = g(this),
            i = e.attr("src");
          i && e.attr("src", "assets/images/" + i.substr(i.indexOf("/") + 1))
        })
      },
      getFoundationInitObj: function() {
        return b
      },
      isViewContentLoaded: function() {
        return _.promise
      },
      defaultViewContentLoadedFunc: c,
      setUseCustomViewContentLoadedFunc: function(e) {
        v = e
      }
    }
  }]).filter("translateEnum", ["$translate", function(e) {
    return function(i, n, t) {
      return e.instant("ENUM_" + n + "_" + i, t)
    }
  }]).filter("langCodes", ["$translate", function(e) {
    var i = window.jQuery;
    return function(n) {
      var t = "";
      if (!n) return t;
      var a = n.split(",");
      return i.each(a, function(i, n) {
        t += e.instant("ENUM_Languages_" + n.trim()) + (i < a.length - 1 ? ", " : "")
      }), t
    }
  }]).filter("countryCodes", function() {
    var e = window.jQuery,
      i = {};
    return e.each(window.geoNamesCountries.geonames, function() {
        i[this.countryCode] = this
      }),
      function(n) {
        var t = "";
        if (!n) return t;
        var a = n.split(",");
        return e.each(a, function(e, n) {
          var o = i[n];
          o && (t += o.countryName + (e < a.length - 1 ? ", " : ""))
        }), t
      }
  }).filter("allButN", function() {
    return function(e, i) {
      if (!e || i >= e.length) return e;
      var n = e.slice();
      return n.splice(i, 1), n
    }
  }).filter("makeRange", function() {
    return function(e) {
      var i, n;
      switch (e.length) {
        case 1:
          i = 0, n = parseInt(e[0]) - 1;
          break;
        case 2:
          i = parseInt(e[0]), n = parseInt(e[1]);
          break;
        default:
          return e
      }
      for (var t = [], a = i; n >= a; a++) t.push(a);
      return t
    }
  }).directive("ngModel", function() {
    return {
      require: "?ngModel",
      link: function(e, i, n, t) {
        t && "time" === n.type && t.$formatters.unshift(function(e) {
          return e.replace(/:00\.000$/, "")
        })
      }
    }
  }).directive("ppHasError", function() {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function(e, i, n, t) {
        if (t) {
          var a = i.parents("form[name]").attr("name");
          if (!a) throw "Wrap your input in a form with a name attribute";
          if (!t.$name || "" === t.$name) throw "Make sure the input has a name attribute";
          var o = i.parent();
          o.is("label") && (o = o.parent());
          var r = o.find(".error");
          e.$watchGroup([a + "." + t.$name + ".$invalid", a + "." + t.$name + ".$touched"], function(e, i) {
            var n = void 0 === e[0] ? i[0] : e[0],
              t = e[1],
              a = n && t;
            o.toggleClass("error", a), r.toggleClass("ng-hide", !a)
          })
        }
      }
    }
  }).directive("acvValidSubmit", ["PepprTools", function(e) {
    return {
      restrict: "A",
      link: function(i, n, t) {
        e.isViewContentLoaded().then(function() {
          window.jQuery(n).on("valid.fndtn.abide", function(e) {
            "valid" === e.type && i.$eval(t.acvValidSubmit)
          })
        })
      }
    }
  }]).directive("ppHideOnImgLoaded", ["debounce", function(e) {
    function i(e) {
      return e ? (e.fn && e.fn.cancel(), e.img && (e.img.off("load.hideOnImgLoaded error.hideOnImgLoaded"), e.img.removeAttr("src"), e.img = null, e.fn = null), null) : e
    }

    function n(n, a, o) {
      if (null === o || o.src !== n) {
        o && (a.show(), o = i(o));
        var r = t(new Image),
          s = e(0, function() {
            r.on("load.hideOnImgLoaded error.hideOnImgLoaded", function() {
              a.hide()
            }), r.attr("src", n)
          });
        return s(), {
          src: n,
          img: r,
          fn: s
        }
      }
    }
    var t = window.jQuery;
    return {
      restrict: "A",
      link: function(e, t, a) {
        if (a.ppHideOnImgLoaded) {
          var o = n(a.ppHideOnImgLoaded, t, null);
          a.$observe("ppHideOnImgLoaded", function() {
            n(a.ppHideOnImgLoaded, t, o)
          }), t.on("$destroy", function() {
            o = i(o)
          })
        }
      }
    }
  }]).directive("ppSlider", function() {
    function e(e, i, n) {
      var t = Math.round((e - n.ppRangeMin) / n.ppStep);
      return e = Number(Number(n.ppRangeMin) + t * n.ppStep), e < n.ppRangeMin ? e = n.ppRangeMin : e > n.ppRangeMax && (e = n.ppRangeMax), e
    }
    var i = window.jQuery,
      n = window.Modernizr;
    return {
      restrict: "A",
      link: function(t, a, o) {
        t.$watch(o.ppVal, function(n) {
          var r = e(n, t, o);
          r !== n && t.$eval(o.ppVal + "=" + r);
          var s = (r - o.ppRangeMin) / (o.ppRangeMax - o.ppRangeMin) * 100;
          i(".ui-slider-handle:nth-of-type(1)", a).css("left", s + "%"), i(".ui-slider-range", a).css("width", s + "%")
        });
        var r = !1,
          s = 0,
          l = null,
          c = null;
        i(".ui-slider-handle", a).on((n.touch ? "touchstart" : "mousedown") + ".ppSlider", function(d) {
          s = a.width();
          var p = n.touch ? d.originalEvent.touches[0] : d;
          l = {
            x: p.screenX,
            y: p.screenY
          }, c = t.$eval(o.ppVal), d.preventDefault(), i(window).on((n.touch ? "touchmove" : "mousemove") + ".ppSlider", function(i) {
            r = !0;
            var a = n.touch ? i.originalEvent.touches[0] : i,
              d = (a.screenX - l.x) / s,
              p = e(c + d * (o.ppRangeMax - o.ppRangeMin), t, o);
            t.$eval(o.ppVal + "=" + p), t.$digest()
          }).on((n.touch ? "touchend" : "mouseup") + ".ppSlider", function() {
            r = !1, i(window).off(".ppSlider")
          })
        }), a.on("$destroy", function() {
          i(".ui-slider-handle", a).off(".ppSlider")
        })
      }
    }
  }).directive("ppSplitScreen", ["$timeout", function(e) {
    var i = window.jQuery;
    return {
      link: function(n, t) {
        function a() {
          window.matchMedia(window.Foundation.media_queries.large).matches ? (r = i(window).height(), i(".visual-content, .info-content", t).height(r - o)) : i(".visual-content, .info-content", t).height("auto")
        }
        t.addClass("split-screen");
        var o = 0,
          r = i(window).height(),
          s = i(".scroll-down-bar .scroll-down-btn", t).on("click.ppSplitScreen", function() {
            i("html, body").animate({
              scrollTop: r
            }, 400)
          });
        i(window).on("resize.ppSplitScreen", a), e(function() {
          o = i(".view-container").offset().top, a()
        }, 0), n.$on("$destroy", function() {
          i(window).off("ppSplitScreen"), s.off("ppSplitScreen")
        })
      }
    }
  }]).directive("ppDoubleSlider", function() {
    function e(e, i, n, t) {
      var a = Math.round((e - t.ppRangeMin) / t.ppStep);
      if (e = Number(Number(t.ppRangeMin) + a * t.ppStep), i) {
        var o = n.$eval(t.ppMax);
        e < t.ppRangeMin ? e = t.ppRangeMin : e > t.ppRangeMax ? e = o : e > o && (e = o)
      } else {
        var r = n.$eval(t.ppMin);
        e < t.ppRangeMin ? e = r : e > t.ppRangeMax ? e = t.ppRangeMax : r > e && (e = r)
      }
      return e
    }
    var i = window.jQuery,
      n = window.Modernizr;
    return {
      restrict: "A",
      link: function(t, a, o) {
        t.$watch(o.ppMin, function(n) {
          var r = e(n, !0, t, o),
            s = t.$eval(o.ppMax);
          r !== n && t.$eval(o.ppMin + "=" + r);
          var l = (r - o.ppRangeMin) / (o.ppRangeMax - o.ppRangeMin) * 100,
            c = (s - r) / (o.ppRangeMax - o.ppRangeMin) * 100;
          i(".ui-slider-handle:nth-of-type(1)", a).css("left", l + "%"), i(".ui-slider-range", a).css("left", l + "%").css("width", c + "%")
        }), t.$watch(o.ppMax, function(n) {
          var r = e(n, !1, t, o),
            s = t.$eval(o.ppMin);
          r !== n && t.$eval(o.ppMax + "=" + r);
          var l = (r - o.ppRangeMin) / (o.ppRangeMax - o.ppRangeMin) * 100,
            c = (s - o.ppRangeMin) / (o.ppRangeMax - o.ppRangeMin) * 100,
            d = (r - s) / (o.ppRangeMax - o.ppRangeMin) * 100;
          i(".ui-slider-handle:nth-of-type(2)", a).css("left", l + "%"), i(".ui-slider-range", a).css("left", c + "%").css("width", d + "%")
        });
        var r = !1,
          s = 0,
          l = null,
          c = null,
          d = !0;
        i(".ui-slider-handle", a).on((n.touch ? "touchstart" : "mousedown") + ".ppDoubleSlider", function(p) {
          s = a.width(), d = i(".ui-slider-handle:nth-of-type(1)", a).is(p.currentTarget);
          var u = n.touch ? p.originalEvent.touches[0] : p;
          l = {
            x: u.screenX,
            y: u.screenY
          }, c = t.$eval(d ? o.ppMin : o.ppMax), p.preventDefault(), i(window).on((n.touch ? "touchmove" : "mousemove") + ".ppDoubleSlider", function(i) {
            r = !0;
            var a = n.touch ? i.originalEvent.touches[0] : i,
              p = (a.screenX - l.x) / s,
              u = e(c + p * (o.ppRangeMax - o.ppRangeMin), d, t, o);
            t.$eval((d ? o.ppMin : o.ppMax) + "=" + u), t.$digest()
          }).on((n.touch ? "touchend" : "mouseup") + ".ppDoubleSlider", function() {
            r = !1, i(window).off(".ppDoubleSlider")
          })
        }), a.on("$destroy", function() {
          i(".ui-slider-handle", a).off(".ppDoubleSlider")
        })
      }
    }
  }).directive("ppDraggable", function() {
    return {
      scope: {
        item: "@"
      },
      link: function(e, i) {
        var n = i[0];
        n.draggable = !0, n.addEventListener("dragstart", function(i) {
          return i.dataTransfer.effectAllowed = "move", this.id && "" !== this.id || (this.id = "pDraggable-" + Date.now()), i.dataTransfer.setData("Text", this.id), i.dataTransfer.setData("Item", e.item), this.classList.add("drag"), !1
        }, !1), n.addEventListener("dragend", function() {
          return this.classList.remove("drag"), !1
        }, !1)
      }
    }
  }).directive("ppDroppable", function() {
    return {
      scope: {
        drop: "&",
        bin: "=",
        noAppend: "=?"
      },
      link: function(e, i) {
        var n = i[0];
        n.addEventListener("dragover", function(e) {
          return e.dataTransfer.dropEffect = "move", e.preventDefault && e.preventDefault(), this.classList.add("over"), !1
        }, !1), n.addEventListener("dragenter", function() {
          return this.classList.add("over"), !1
        }, !1), n.addEventListener("dragleave", function() {
          return this.classList.remove("over"), !1
        }, !1), n.addEventListener("drop", function(i) {
          i.stopPropagation && i.stopPropagation(), this.classList.remove("over");
          var n = this.id,
            t = i.dataTransfer.getData("Text"),
            a = document.getElementById(t);
          0 === a.id.indexOf("pDraggable-") && (a.id = null);
          var o = angular.element(a).scope().$eval(i.dataTransfer.getData("Item"));
          try {
            !e.noAppend && a && this.appendChild(a)
          } catch (r) {
            return void i.preventDefault()
          }
          return e.$apply(function(e) {
            var t = e.drop();
            "undefined" != typeof t && t(a ? a.id : null, n, o, e.bin, i)
          }), !1
        }, !1)
      }
    }
  }).run(["$rootScope", "BackendRest", "PepprRestCache", "Login", "ClientIntro", "ClientIntroNoPrice", "ProviderIntro", "ProviderIntroNoPrice", "PepprTools", "SEO", "ClientLocation", "PepprFormInfo", "Messages", "localStorageService", "$route", "$location", "$state", "$translate", "$interval", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g, h, v, _, f) {
    var b = window.jQuery,
      y = h.path();
    e.peppr || (e.peppr = {}), e.$state = v, e.peppr.checkForLaunchRedirect = "" === h.path() && "app.peppr.it" !== h.host(), e.peppr.isPrerenderProxy = (navigator.userAgent || navigator.vendor || window.opera).match(/.*Prerender.*/), e.peppr.features = pepprFeatures, e.peppr.isItaly = isItaly, e.peppr.agbModalId = isItaly ? "agbItModal" : "agbModal", e.peppr.privacyModalId = isItaly ? "privacyItModal" : "privacyModal", e.pepprRestBaseUrl = pepprRestBaseUrl, e.pepprCompanyName = pepprCompanyName, e.pepprStreetAndNumber = pepprStreetAndNumber, e.pepprPostcodeAndCity = pepprPostcodeAndCity, e.pepprCountry = pepprCountry, e.pepprRegisterCourt = pepprRegisterCourt, e.pepprRegisterNr = pepprRegisterNr, e.pepprContactPhone = pepprContactPhone, e.pepprTechContactPhone = pepprTechContactPhone, e.pepprCEO = pepprCEO, e.pepprServiceEmail = pepprServiceEmail, e.fullHeight = !1, e.showNav = !0, e.title = !1, e.filterMenuAvailable = !1, e.clientIntroService = a, e.clientIntroNoPriceService = o, e.providerIntroService = r, e.providerIntroNoPriceService = s, e.providerFilter = {}, "/secret" === y && m.add("secretPageVisited", "true");
    var w = "true" === m.get("secretPageVisited");
    if (e.peppr.isPrerenderProxy && d.setFakeClientLocation(), checkAccess)
      for (var k = !1, C = 3; !k;) {
        var N = moment(),
          P = window.prompt(_.instant("please_enter_your_access_code"));
        if (C--, P === accessCode) k = !0;
        else if (window.alert(_.instant("wrong_access_code_try_again")), moment().diff(N) < 500) throw "Popup blocked";
        if (0 >= C) throw window.alert(_.instant("access_denied")), "Access denied"
      }
    c.setDefaultTitle(isItaly ? _.instant("site_title_it") : _.instant("site_title")), c.setDefaultDescription(_.instant("site_description")), c.setDefaultKeywords(_.instant("site_keywords")), e.$on("$translateChangeSuccess", function() {
      e.activeLang = _.proposedLanguage() || _.preferredLanguage()
    }), e.$on("$locationChangeSuccess", function() {
      window.ga("send", "pageview", getPathWithoutContextAndLang())
    }), b(window).on("scroll", function() {
      e.peppr.okSaveScroll && (e.peppr.scrollPos[h.path()] = b(window).scrollTop())
    }), e.clickTitle = function(e) {
      l.setForceDisplayMain(), v.go("app.root"), e.preventDefault()
    }, isItaly && !v.is("app.italy") && p.getFormInfoPromise().then(function(i) {
      i.launchDate && f(function() {
        e.launchDate || (e.launchDate = {});
        var n = moment.duration(moment(i.launchDate).valueOf() - moment().valueOf());
        e.launchDate.days = Math.floor(n.asDays()), e.launchDate.hours = ("00" + n.hours()).slice(-2), e.launchDate.minutes = ("00" + n.minutes()).slice(-2), e.launchDate.seconds = ("00" + n.seconds()).slice(-2)
      }, 1e3)
    }), n.clearProviderList(), p.getFormInfoPromise().then(function(e) {
      window.PAYMILL_PUBLIC_KEY = e.paymillPublicKey, b("<script>").attr("type", "text/javascript").attr("src", "https://bridge.paymill.com/").appendTo("body")
    });
    var S = !1,
      A = null;
    b.each(v.get(), function() {
      return y === v.href(this) && "app" !== this.name ? (A = this, !1) : void 0
    });
    var E = "/" === y || A && ("app.root" === A.name || "app.root_slash" === A.name),
      I = "/" === y;
    return E && I && h.path(v.href("app.root")), y && A && (S = A.skipLocationCheck === !0), E || d.getClientLocation().latitude || e.peppr.isPrerenderProxy || S ? isBrasil && !d.getClientLocation().latitude ? (d.setFakeClientLocation(!0, -23.583965, -46.643708, "04102-001", "BR", "Brazil", "SÃ£o Paulo", "04102-001, SÃ£o Paulo, Brazil"), void h.path(v.href("app.signup_peppr"))) : isItaly && E && "/secret" !== y && !w ? void h.path(v.href("app.italy")) : (isItaly && "/secret" === y && (d.getClientLocation().latitude || d.setFakeClientLocation(!0, 41.89021, 12.49223, "00184", "IT", "Italy", "Rome", "00184, Rome, Italy")), "/secret" === y ? void h.path(v.href("app.signup_peppr")) : void 0) : (l.setRedirectPath(h.path()), void h.path(v.href("app.root")))
  }]).factory("ClientIntro", ["$rootScope", "PepprTools", "localStorageService", "$timeout", createIntroService(".view-intro-client", "#introClientModal", "introClientSeen")]).factory("ClientIntroNoPrice", ["$rootScope", "PepprTools", "localStorageService", "$timeout", createIntroService(".view-intro-client-no-price", "#introClientNoPriceModal", "introClientSeen")]).factory("ProviderIntro", ["$rootScope", "PepprTools", "localStorageService", "$timeout", createIntroService(".view-intro-provider", "#introProviderModal", "introProviderSeen")]).factory("ProviderIntroNoPrice", ["$rootScope", "PepprTools", "localStorageService", "$timeout", createIntroService(".view-intro-provider-no-price", "#introProviderNoPriceModal", "introProviderSeen")]), angular.module("peppritAngularApp").directive("ppDateFuture", function() {
    return {
      require: "?ngModel",
      link: function(e, i, n, t) {
        t.$validators.ppDateFuture = function(e, i) {
          if (t.$isEmpty(e)) return !0;
          if (!/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/.test(i)) return !1;
          var n = new Date;
          return n.setHours(0, 0, 0, 0), e.getTime() > n.getTime()
        }
      }
    }
  }).directive("ppValidIban", function() {
    return {
      require: "?ngModel",
      link: function(e, i, n, t) {
        t.$validators.ppValidIban = function(e) {
          return t.$isEmpty(e) ? !0 : window.IBAN.isValid(e)
        }
      }
    }
  }).directive("ppEqualTo", function() {
    return {
      require: "?ngModel",
      link: function(e, i, n, t) {
        var a = n.ppEqualTo;
        t.$validators.ppEqualTo = function(i) {
          return t.$isEmpty(i) ? !0 : i === e.$eval(a)
        }
      }
    }
  }).directive("ppValidProviderUsername", ["PepprTools", "$rootScope", "BackendRest", "$q", function(e, i, n, t) {
    return {
      require: "?ngModel",
      scope: {
        ppProviderId: "=?"
      },
      link: function(a, o, r, s) {
        s.$asyncValidators.ppValidProviderUsername = function(o) {
          var r = o;
          return !r || r.length < 4 ? i.peppr.validators.username.test(r) || t.reject("invalid") : n.all("provider/search").getList({
            userName: r
          }).then(function(n) {
            return n && n.length > 0 && !e.matchesAnyProvider(a.ppProviderId, n) ? t.reject("invalid") : i.peppr.validators.username.test(r) || t.reject("exists")
          })
        }
      }
    }
  }]).directive("ppValidProviderEmail", ["PepprTools", "$rootScope", "BackendRest", "$q", function(e, i, n, t) {
    return {
      require: "?ngModel",
      scope: {
        ppProviderId: "=?"
      },
      link: function(a, o, r, s) {
        s.$asyncValidators.ppValidProviderEmail = function(o) {
          var r = o;
          return !r || r.length < 4 ? i.peppr.validators.email.test(r) ? !0 : t.reject("invalid") : n.all("provider/search").getList({
            emailAddress: r
          }).then(function(n) {
            return n && n.length > 0 && !e.matchesAnyProvider(a.ppProviderId, n) ? t.reject("invalid") : i.peppr.validators.email.test(r)
          })
        }
      }
    }
  }]), angular.module("peppritAngularApp").controller("ppPhoneConfirmCtrl", ["$scope", "BackendRest", "Login", "PepprTools", "Messages", "$translate", "$location", "$state", "$stateParams", function(e, i, n, t, a, o, r, s, l) {
    function c(t) {
      i.one("confirmtoken", t).get().then(function() {
        a.success(o.instant("successfully_confirmed_your_phone")), e.user ? i.one("user").get().then(function(i) {
          n.setUpdatedUserData(i), e.onPhoneConfirmed()
        }) : e.onPhoneConfirmed()
      }, function() {
        a.error(o.instant("invalid_confirmation_code_error"))
      })
    }
    e.code = l.code, e.user = null, n.getLoginPromise().then(function() {
      e.user = n.getUser()
    }), e.clickLoginToResend = function(e) {
      n.setRedirectPath("/user/showEdit"), e.preventDefault(), s.go("^.login")
    }, e.clickPhoneConfirmForm = function() {
      c(e.code)
    }, e.sendNewCode = function() {
      i.all("token").getList({
        type: "phone"
      }).then(function() {
        a.success(o.instant("phone_confirm_short_instructions")), t.trackEvent("phone_confirmationtoken", "requested")
      }, function(e) {
        a.error(e.data && e.data.length < 120 ? o.instant("server_error_msg", {
          errormsg: e.data
        }) : o.instant("unknown_error"))
      })
    }, e.code && c(e.code)
  }]).directive("ppPhoneConfirm", function() {
    return {
      scope: {
        onPhoneConfirmed: "="
      },
      templateUrl: "app/components/pp_phone_confirm.html",
      replace: !0,
      controller: "ppPhoneConfirmCtrl"
    }
  }), angular.module("peppritAngularApp").directive("ppEnterSite", function() {
    var e = ["ClientLocation", "PepprTools", "PepprSearchFilter", "Messages", "BackendRest", "$scope", "$sce", "$translate", "$rootScope", "$location", "$state", "$timeout", function(e, i, n, t, a, o, r, s, l, c, d, p) {
      function u() {
        o.showOutsideMarket = !1, o.enterPressed && l.peppr.clientLocation.isValid && l.peppr.clientLocation.location.countryCode && l.peppr.clientLocation.location.countryCode.length > 0 && "de" !== l.peppr.clientLocation.location.countryCode.toLowerCase() && (o.showOutsideMarket = !0)
      }
      o.locateFailed = l.peppr.clientLocation.isValid, o.enterPressed = !1, o.showOutsideMarket = !1, o.showLaunchSignup = !1, o.signup = {
        type: "PUBLIC",
        email: "",
        name: "",
        homeLocation: {
          latitude: 0,
          longitude: 0
        }
      }, o.tacPpText = r.trustAsHtml(s.instant("terms_and_conditions_privacy_policy_agreement", {
        tac: '<a data-reveal-id="' + l.peppr.agbModalId + '">' + s.instant("terms_and_conditions") + "</a>",
        pp: '<a data-reveal-id="' + l.peppr.privacyModalId + '">' + s.instant("privacy_policy") + "</a>"
      })), o.firstMobileWebappText = r.trustAsHtml(l.peppr.isItaly ? s.instant("main_first_mobile_app_it") : s.instant("main_first_mobile_app")), i.hackImageUrls(".component-enter-site img.peppr-logo"), e.updateAddress(), l.$watch("peppr.clientLocation.isValid", u), o.clickLocateMe = function() {
        o.locateFailed = !0, e.requestGeocoding(!0)
      }, o.clickEnterForm = function() {
        if (e.setClientLocation()) {
          var n = i.getAndResetRedirectPath();
          if (n) return void c.path(n);
          o.enterPressed = !0, u(), !o.showOutsideMarket && o.professionalSignupClicked && d.go("^.login+action", {
            action: "showSignup"
          })
        }
      }, o.clickUseYes = function() {
        o.showLaunchSignup = !0, i.trackEvent("would_use_peppr", "yes", l.peppr.clientLocation.location.countryCode)
      }, o.clickUseNo = function() {
        o.showOutsideMarket = !1, i.trackEvent("would_use_peppr", "no", l.peppr.clientLocation.location.countryCode)
      }, o.clickSignupEnter = function() {
        if (o.signup.email && o.signup.email.length > 0) {
          var n = e.getClientLocation();
          o.signup.homeLocation = {
            latitude: n.latitude,
            longitude: n.longitude
          }, a.all("signup").post(o.signup).then(function() {
            t.success(s.instant("successfully_signed_you_up")), i.trackEvent("public_signup", "completed")
          }, function() {
            t.error(s.instant("signup_server_error"))
          })
        }
        o.showOutsideMarket = !1, o.showLaunchSignup = !1
      }, o.clickShowFemale = function() {
        n.getProviderFilterPromise().then(function() {
          l.providerFilter.sexFemale = !0, l.providerFilter.sexMale = !1, l.providerFilter.sexTrans = !1, p(function() {
            d.go("^.provider_list")
          }), i.trackEvent("choose_sex", "female")
        })
      }, o.clickShowMale = function() {
        n.getProviderFilterPromise().then(function() {
          l.providerFilter.sexFemale = !1, l.providerFilter.sexMale = !0, l.providerFilter.sexTrans = !1, p(function() {
            d.go("^.provider_list")
          }), i.trackEvent("choose_sex", "male")
        })
      }, o.clickShowTrans = function() {
        n.getProviderFilterPromise().then(function() {
          l.providerFilter.sexFemale = !1, l.providerFilter.sexMale = !1, l.providerFilter.sexTrans = !0, p(function() {
            d.go("^.provider_list")
          }), i.trackEvent("choose_sex", "trans")
        })
      }
    }];
    return {
      restrict: "E",
      scope: {
        professionalSignupClicked: "="
      },
      templateUrl: "app/components/pp_enter_site.html",
      controller: e
    }
  }), angular.module("peppritAngularApp").directive("ppAppear", function() {
    var e = window.jQuery;
    return {
      restrict: "A",
      scope: {
        method: "&ppAppear"
      },
      link: function(i, n) {
        var t = i.method();
        e(n).appear(), n.off("appear.ppAppear").on("appear.ppAppear", function(e) {
          t(e, n)
        }), n.on("$destroy", function() {
          n.off("appear.ppAppear")
        })
      }
    }
  }), angular.module("peppritAngularApp").directive("patternSetter", function() {
    var e = window.jQuery,
      i = ["Messages", "$translate", "$scope", function(i, n, t) {
        var a = null;
        t.patternOpts = e.extend({}, t.options), t.showConfirm = !1, t.lock = {
          value: null
        }, t.onShowConfirm = function() {
          a = t.lock.pattern, t.lock.pattern = null, t.showConfirm = !0
        }, t.onCancel = function() {
          a = null, t.lock.pattern = null, t.showConfirm = !1, t.onCancelCb()
        }, t.onFinishPattern = function(e) {
          t.showConfirm && (e === a ? (t.callback({
            $pattern: a
          }), a = null, t.lock.pattern = null, t.showConfirm = !1) : (i.warning(n.instant("wrong_pattern_try_again")), t.lock.pattern = null))
        }
      }];
    return {
      restrict: "A",
      scope: {
        callback: "&patternSetter",
        onCancelCb: "&patternSetterCancel",
        options: "@patternSetterOpts"
      },
      templateUrl: "app/components/pattern_setter.html",
      controller: i
    }
  }), angular.module("peppritAngularApp").directive("patternLock", function() {
    var e = window.jQuery;
    return {
      restrict: "A",
      scope: {
        patternLock: "=",
        onFinish: "&patternLockOnFinish",
        options: "@patternLockOpts"
      },
      link: function(i, n) {
        var t, a = !1,
          o = {
            onDraw: function(e) {
              i.patternLock.pattern !== e && (i.patternLock.pattern = e, a = e), i.$digest(), i.onFinish({
                $pattern: e,
                $lock: t
              })
            }
          };
        t = new PatternLock(n, e.extend(i.options, o)), i.$watch("patternLock.pattern", function(e, i) {
          if (e !== i) {
            if (a === e) return void(a = !1);
            a = !1, e ? t.setPattern(e) : t.reset()
          }
        }), i.$on("$destroy", function() {
          t.disable()
        })
      }
    }
  }), angular.module("peppritAngularApp").controller("UserCtrl", ["BackendRest", "PepprTools", "ClientLocation", "Login", "PepprFormInfo", "Messages", "$scope", "$rootScope", "$translate", "$timeout", "$state", "$stateParams", function(e, i, n, t, a, o, r, s, l, c, d, p) {
    function u() {
      r.user && (r.user.phoneNumber = "+" + (r.phoneNumberCountry || "") + (r.phoneNumber || ""))
    }

    function m(e) {
      r.user = e;
      var n = i.phoneNumberToCountryAndNumber(r.user.phoneNumber, r.chkPhoneNumberCountryOptions);
      n.country && (r.phoneNumberCountry = n.country.value), r.phoneNumber = n.number, r.chkShowEditProfile = "showEdit" === p.action || !e.phoneValid
    }
    var g = window.jQuery;
    r.user = null, r.email = null, r.password = null, r.password_confirm = null, r.phoneNumberCountry = null, r.phoneNumber = null, r.chkShowEditProfile = "showEdit" === p.action, r.$watch("phoneNumberCountry", u), r.$watch("phoneNumber", u), i.setUseCustomViewContentLoadedFunc(!0), c(function() {
      i.defaultViewContentLoadedFunc()
    }), n.updateAddress(), a.getFormInfoPromise().then(function(e) {
      r.chkPhoneNumberCountryOptions = i.optionsToScopeArray("ENUM_PhoneNumberCountry_", e.phoneNumberCountryOptions), r.chkAppLangOptions = i.optionsToScopeArray("ENUM_Languages_", e.supportedLangCodes), t.getLoginPromise(!0).then(function() {
        var e = t.getUser();
        return e && e.signupIncomplete ? (t.setRedirectPath(d.href(d.current.name)), void d.go("^.signup_client.2")) : void m(e)
      }, function() {
        o.error(l.instant("access_denied_please_login_error")), t.setRedirectPath("/user"), d.go("^.login")
      })
    }), r.clickLocateMe = function() {
      n.requestGeocoding()
    }, r.clickEnterLocation = function() {
      n.setClientLocation() && (o.success(l.instant("saving_changes_successful")), c(function() {
        d.go("^.provider_list")
      }))
    }, r.clickEditProfile = function() {
      var i = g.parseJSON(angular.toJson(r.user)),
        n = null;
      r.password && r.password === r.password_confirm && (n = i.passwordHash = r.password), e.restangularizeElement(null, i, "user").put().then(function(e) {
        n ? t.login(r.user.email, r.password, function() {
          m(t.getUser())
        }, function() {
          o.warning(l.instant("auto_login_error")), d.go("^.login")
        }) : (t.setUpdatedUserData(e), m(t.getUser())), o.success(l.instant("successfully_updated_profile"))
      }, function() {
        o.error(l.instant("unknown_error"))
      })
    }, r.deleteAccount = function() {
      window.confirm(l.instant("delete_profile_do_you_really_want_to_delete_cannot_be_undone")) && t.getLoginPromise(!0).then(function() {
        r.user = t.getUser(), e.one("client", r.user.id).remove().then(function() {
          o.success(l.instant("success")), t.logout(), d.go("^.login")
        }, function() {
          o.error(l.instant("signup_server_error"))
        })
      })
    }
  }]), angular.module("peppritAngularApp").controller("SignupProfessionalCtrl", ["ProviderIntro", "ProviderIntroNoPrice", "BackendRest", "PepprTools", "GeoTools", "PepprFormInfo", "Login", "Messages", "uiGmapGoogleMapApi", "$scope", "$rootScope", "$translate", "$state", "$stateParams", "$timeout", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g) {
    function h() {
      c.provider.phoneNumber = c.hack.phoneNumber ? "+" + ((c.hack.phoneNumberCountry || {}).value || "") + (c.hack.phoneNumber || "") : null
    }

    function v(e) {
      c.providerId && e && e.length > 0 ? k('.view-signup-professional input[type="password"]').attr("pattern", "relaxed_password") : c.providerId && k('.view-signup-professional input[type="password"]').attr("pattern", "always_valid")
    }

    function _() {
      a.requestGeoLocation().then(function(e) {
        c.mapCenter.latitude = e.coords.latitude, c.mapCenter.longitude = e.coords.longitude, f()
      })
    }

    function f() {
      l.then(function(e) {
        I && e.event.trigger(I, "resize")
      })
    }

    function b() {
      var e = [];
      if (k.each(c.chkLocationTypeOptions, function() {
          !this.checked || "INCALL" !== this.value && "INCALL_BROTHEL" !== this.value || e.push(this.value)
        }), k.inArray("INCALL", e) > -1 && k.inArray("INCALL_BROTHEL", e) > -1) {
        var i = k.inArray("INCALL", S) > -1 ? "INCALL" : "INCALL_BROTHEL";
        k.each(c.chkLocationTypeOptions, function() {
          this.value === i && (this.checked = !1)
        })
      }
      S = e
    }

    function y(e) {
      var i = "";
      return k.each(e, function() {
        this.checked && (i += this.name + ", ")
      }), "" === i ? null : i.substring(0, i.length - 2)
    }

    function w(e, i) {
      if (e && i) {
        var n = {};
        k.each(i, function() {
          n[this.name] = this
        }), k.each(e.split(", "), function() {
          n[this] && (n[this].checked = !0)
        })
      }
    }
    var k = window.jQuery,
      C = window.moment,
      N = k("#pForm"),
      P = p.preferredLanguage();
    ("en" === P || p.instant("ENUM_Languages_" + P) === "ENUM_Languages_" + P) && (P = "de");
    var S = [];
    t.setUseCustomViewContentLoadedFunc(!0), c.providerId = Number(m.providerId), c.provider = {}, c.providerId && (c.provider.agency = {
      id: !0
    });
    var A = {},
      E = !1;
    c.hack = {}, c.locationSearchInput = null, c.locationSearchResults = [], c.locationSearchActive = !1, c.chkServiceOptions = [], c.chkClaimOptions = [], c.chkSexOptions = [], c.chkPhoneNumberCountryOptions = [], c.chkEthnicityOptions = [], c.chkLanguageOptions = [{
      name: p.instant("ENUM_Languages_" + P),
      value: P
    }, {
      name: "English",
      value: "en"
    }], c.chkMoreLanguageOptions = [], c.chkShowMoreLanguages = !1, c.hack.chkShowAllServices = !1, c.hack.chkShowAllAttributes = !d.peppr.features.showSexRelatedAttributes, c.chkInterestsOptions = [{
      name: p.instant("Insterest_cooking"),
      value: "Insterest_cooking"
    }, {
      name: p.instant("Insterest_travelling"),
      value: "Insterest_travelling"
    }, {
      name: p.instant("Insterest_sports"),
      value: "Insterest_sports"
    }, {
      name: p.instant("Insterest_sailing"),
      value: "Insterest_sailing"
    }, {
      name: p.instant("Insterest_shopping"),
      value: "Insterest_shopping"
    }, {
      name: p.instant("Insterest_arts_culture"),
      value: "Insterest_arts_culture"
    }, {
      name: p.instant("Insterest_music"),
      value: "Insterest_music"
    }, {
      name: p.instant("Insterest_soccer"),
      value: "Insterest_soccer"
    }, {
      name: p.instant("Insterest_dancing"),
      value: "Insterest_dancing"
    }, {
      name: p.instant("Insterest_politics"),
      value: "Insterest_politics"
    }, {
      name: p.instant("Insterest_cars"),
      value: "Insterest_cars"
    }, {
      name: p.instant("Insterest_dinner"),
      value: "Insterest_dinner"
    }, {
      name: p.instant("Insterest_fashion"),
      value: "Insterest_fashion"
    }, {
      name: p.instant("Insterest_literature"),
      value: "Insterest_literature"
    }, {
      name: p.instant("Insterest_musical_theater"),
      value: "Insterest_musical_theater"
    }, {
      name: p.instant("Insterest_wellness"),
      value: "Insterest_wellness"
    }], c.chkFoodPrefOptions = [{
      name: p.instant("FoodPref_italian"),
      value: "FoodPref_italian"
    }, {
      name: p.instant("FoodPref_french"),
      value: "FoodPref_french"
    }, {
      name: p.instant("FoodPref_fast_food"),
      value: "FoodPref_fast_food"
    }, {
      name: p.instant("FoodPref_asian"),
      value: "FoodPref_asian"
    }, {
      name: p.instant("FoodPref_healthy_food"),
      value: "FoodPref_healthy_food"
    }, {
      name: p.instant("FoodPref_mediterranean"),
      value: "FoodPref_mediterranean"
    }, {
      name: p.instant("FoodPref_vegetarian"),
      value: "FoodPref_vegetarian"
    }, {
      name: p.instant("FoodPref_gourmet"),
      value: "FoodPref_gourmet"
    }, {
      name: p.instant("FoodPref_mexican"),
      value: "FoodPref_mexican"
    }, {
      name: p.instant("FoodPref_no_preference"),
      value: "FoodPref_no_preference"
    }], c.chkDrinkPrefOptions = [{
      name: p.instant("DrinkPref_champagne"),
      value: "DrinkPref_champagne"
    }, {
      name: p.instant("DrinkPref_long_drinks"),
      value: "DrinkPref_long_drinks"
    }, {
      name: p.instant("DrinkPref_beer"),
      value: "DrinkPref_beer"
    }, {
      name: p.instant("DrinkPref_white_wine"),
      value: "DrinkPref_white_wine"
    }, {
      name: p.instant("DrinkPref_red_wine"),
      value: "DrinkPref_red_wine"
    }, {
      name: p.instant("DrinkPref_shots"),
      value: "DrinkPref_shots"
    }, {
      name: p.instant("DrinkPref_no_preference"),
      value: "DrinkPref_no_preference"
    }, {
      name: p.instant("DrinkPref_no_alcohol"),
      value: "DrinkPref_no_alcohol"
    }], c.chkNationalityOptions = window.geoNamesCountries.geonames, c.chkSexualityOptions = [], c.chkHairLengthOptions = [], c.chkHairColourOptions = [], c.chkFigureOptions = [], c.chkBustSizeOptions = [], c.chkBodyHairOptions = [], c.chkPubicHairOptions = [], c.chkAppLangOptions = [], c.chkLocationTypeOptions = [], c.chkTravelTypeOptions = [], c.showMap = !1, c.submitInProgress = !1, c.hack = k.extend(c.hack, {
      cashoutType: "BANK",
      phoneNumberCountry: null,
      phoneNumber: null,
      cbConfirmChecked: !1
    }), c.$watch("hack.phoneNumberCountry", h), c.$watch("hack.phoneNumber", h), c.$watch("chkShowMoreLanguages", function() {
      t.refreshFormValidation(N)
    }), c.$watch("hack.cashoutType", function() {
      t.refreshFormValidation(N)
    }), c.$watch("chkLocationTypeOptions", b, !0), c.$watch("provider.admin.passwordHash", v), c.filterOtherLangs = function(e) {
      return e.value !== P && "en" !== e.value
    }, c.filterBasicServices = function(e) {
      return e.filterable === !0
    }, c.filterExtendedServices = function(e) {
      return !e.filterable
    };
    var I = null;
    angular.extend(c, {
      mapCenter: {
        latitude: 48.16,
        longitude: 14.01,
        zoom: 14
      },
      mapEvents: {
        tilesloaded: function(e) {
          I = e, f()
        }
      }
    }), d.peppr.isItaly && (c.mapCenter.latitude = 41.89021, c.mapCenter.longitude = 12.49223), c.providerId || _(), o.getFormInfoPromise().then(function(a) {
      function o(e, i) {
        if (e.value === P) return -10;
        if ("en" === e.value) return -5;
        var n = e.name.toLowerCase(),
          t = i.name.toLowerCase();
        return t > n ? -1 : n > t ? 1 : 0
      }
      c.provider = a.provider, c.provider.birthDate = C(c.provider.birthDate).toDate(), A = c.provider.discounts && c.provider.discounts.length > 0 ? c.provider.discounts[0] : {}, A.minHours = 0 === A.minHours ? void 0 : A.minHours, A.pricePerHour = 0 === A.pricePerHour ? void 0 : A.pricePerHour, c.provider.discounts = [], c.chkServiceOptions = t.optionsToAssociationArray("Service_", a.serviceOptions), c.chkAvailabilityOptions = t.availabilityToAssociationArray(a.provider.availability), c.chkClaimOptions = t.optionsToAssociationArray("ProviderClaim_", a.claimOptions), c.chkSexOptions = t.optionsToScopeArray("ENUM_Sex_", a.sexOptions), c.chkPhoneNumberCountryOptions = t.optionsToScopeArray("ENUM_PhoneNumberCountry_", a.phoneNumberCountryOptionsProvider), c.chkPhoneNumberAllCountryOptions = t.optionsToScopeArray("ENUM_PhoneNumberCountry_", a.phoneNumberCountryOptions), c.chkEthnicityOptions = t.optionsToScopeArray("ENUM_Ethnicity_", a.ethnicityOptions), c.chkSexualityOptions = t.optionsToScopeArray("ENUM_Sexuality_", a.sexualityOptions), c.chkHairLengthOptions = t.optionsToScopeArray("ENUM_HairLength_", a.hairLengthOptions), c.chkHairColourOptions = t.optionsToScopeArray("ENUM_HairColor_", a.hairColourOptions), c.chkFigureOptions = t.optionsToScopeArray("ENUM_Figure_", a.figureOptions), c.chkBustSizeOptions = t.optionsToScopeArray("ENUM_BustSize_", a.bustSizeOptions), c.chkBodyHairOptions = t.optionsToScopeArray("ENUM_BodyHair_", a.bodyHairOptions), c.chkPubicHairOptions = t.optionsToScopeArray("ENUM_PubicHair_", a.pubicHairOptions), c.chkAppLangOptions = t.optionsToScopeArray("ENUM_Languages_", a.supportedLangCodes), c.chkLocationTypeOptions = t.optionsToScopeArray("ENUM_SignUp_LocationType_", a.locationTypeOptions), c.chkTravelTypeOptions = t.optionsToScopeArray("ENUM_TravelType_", a.travelTypeOptions), k.each(c.chkAppLangOptions, function() {
        return this.value === p.preferredLanguage() ? (c.provider.admin && (c.provider.admin.langCode = this.value), !1) : void 0
      });
      var s = t.optionsToScopeArray("ENUM_Languages_", a.languageOptions).sort(o);
      c.chkLanguageOptions = k.grep(s, c.filterOtherLangs, !0), c.chkMoreLanguageOptions = k.grep(s, c.filterOtherLangs);
      var l = 0;
      k.each(c.chkPhoneNumberCountryOptions, function(e) {
        return "it" === P && "39" === this.value ? (l = e, !1) : void 0
      }), c.hack.phoneNumberCountry = c.chkPhoneNumberCountryOptions[l], k.each(c.chkServiceOptions, function() {
        this.included = !0
      }), r.getLoginPromise().then(function() {
        var e = r.getUserAgency();
        e && (c.provider.agency = {
          id: e.id
        })
      }), c.providerId && (k('.view-signup-professional input[type="password"]').removeAttr("required").trigger("blur"), n.one("provider/update", c.providerId).get().then(function(e) {
        var i = e.provider;
        i.admin.passwordHash = null, i.admin.password_confirm = null;
        var n = {};
        k.each(c.chkServiceOptions, function() {
          n[this.id] = this
        }), k.each(i.services, function() {
          var e = n[this.service.id];
          e.checked = !0, e.fee = this.fee, e.included = 0 === this.fee ? !0 : !1, e.requiresPhoneCall = this.requiresPhoneCall
        }), k.each(c.chkClaimOptions, function() {
          return this.id === i.claim.id ? (i.claim = this, !1) : void 0
        }), w(i.interests, c.chkInterestsOptions), w(i.foodPreferences, c.chkFoodPrefOptions), w(i.drinkPreferences, c.chkDrinkPrefOptions);
        var a = t.phoneNumberToCountryAndNumber(i.phoneNumber, c.chkPhoneNumberAllCountryOptions),
          o = t.phoneNumberToCountryAndNumber(i.phoneNumber, c.chkPhoneNumberCountryOptions);
        !o.country && a.country && (c.chkPhoneNumberCountryOptions = k.merge([a.country], c.chkPhoneNumberCountryOptions), o = a), o.country && (c.hack.phoneNumberCountry = o.country), c.hack.phoneNumber = o.number, i.birthDate = C(i.birthDate).toDate();
        var r = {};
        k.each(c.chkLanguageOptions, function() {
          r[this.value] = this
        }), k.each(c.chkMoreLanguageOptions, function() {
          r[this.value] = this
        }), k.each((i.languages || "").split(","), function() {
          this && this.length > 0 && (r[this.trim()].checked = !0)
        });
        var s = {};
        k.each(c.chkLocationTypeOptions, function() {
          s[this.value] = this
        }), k.each(i.locationTypes, function() {
          var e = s[this];
          e.checked = !0
        });
        var l = {};
        k.each(c.chkTravelTypeOptions, function() {
          l[this.value] = this
        }), k.each(i.travelTypes, function() {
          var e = l[this];
          e.checked = !0
        }), i.homeLocation && i.homeLocation.latitude && i.homeLocation.longitude && (c.mapCenter.latitude = i.homeLocation.latitude, c.mapCenter.longitude = i.homeLocation.longitude);
        var d = {};
        k.each(c.chkAvailabilityOptions, function() {
          d[this.day] = this, this.checked = !1
        }), k.each(i.availability, function() {
          var e = d[this.day];
          e.checked = !0, e.fromTime = t.timeStrToHHmm(this.fromTime), e.toTime = t.timeStrToHHmm(this.toTime), e.fromTimeDate = C(C().format("YYYY-MM-DD") + " " + e.fromTime).toDate(), e.toTimeDate = C(C().format("YYYY-MM-DD") + " " + e.toTime).toDate()
        }), c.hack.cashoutType = "CASH", i.iban && i.bic && (c.hack.cashoutType = "BANK"), c.provider = i
      })), t.defaultViewContentLoadedFunc(), d.peppr.features.showPrices ? e.showIntro() : i.showIntro()
    }), c.locationResultDisplayStr = function(e) {
      return a.locationToStr(e)
    }, c.chooseLocationResult = function(e) {
      c.clientLocation = e.address, c.showMap = !1, c.mapCenter.latitude = parseFloat(e.lat), c.mapCenter.longitude = parseFloat(e.lon), c.locationSearchInput = null, c.locationSearchResults = [], f()
    }, c.locationSearchInputUpdated = function() {
      c.locationSearchInput && (c.locationSearchResults = [], c.locationSearchActive = !0, c.showMap = !1, E && (g.cancel(E), E = !1), E = g(function() {
        c.locationSearchResults = null, a.encodeAddressQuery(c.locationSearchInput).then(function(e) {
          var i = a.getAllResultsWithStreetAddress(e);
          c.locationSearchActive = !1, c.locationSearchResults = a.resultsToLocations(i)
        }, function() {
          c.locationSearchActive = !1, c.locationSearchResults = null
        }), E = !1
      }, 600))
    }, c.addPriceDiscount = function() {
      c.provider.discounts.push(k.parseJSON(angular.toJson(A)))
    }, c.deleteDiscount = function(e) {
      c.provider.discounts.splice(k.inArray(e, c.provider.discounts), 1)
    }, c.clickSubmitProviderForm = function() {
      c.submitInProgress = !0;
      var e = k.parseJSON(angular.toJson(c.provider));
      e.services = [], delete e.admin.password_confirm, delete e.claim.name, k.each(c.chkServiceOptions, function() {
        this.checked && e.services.push({
          service: {
            id: this.id
          },
          fee: this.included ? 0 : this.fee,
          requiresPhoneCall: this.requiresPhoneCall
        })
      }), e.languages = "", k.each(c.chkLanguageOptions, function() {
        this.checked && (e.languages += this.value + ",")
      }), k.each(c.chkMoreLanguageOptions, function() {
        this.checked && (e.languages += this.value + ",")
      }), e.languages = "" === e.languages ? null : e.languages.substring(0, e.languages.length - 1), d.peppr.features.showFreeText || (e.interests = y(c.chkInterestsOptions), e.foodPreferences = y(c.chkFoodPrefOptions), e.drinkPreferences = y(c.chkDrinkPrefOptions)), e.availability = [], k.each(c.chkAvailabilityOptions, function() {
        if (this.checked) {
          var i = k.parseJSON(angular.toJson(this));
          delete i.name, delete i.checked, i.fromTime = C(i.fromTimeDate).format("HH:mm:ss"), i.toTime = C(i.toTimeDate).format("HH:mm:ss"), e.availability.push(i)
        }
      }), e.locationTypes = [], k.each(c.chkLocationTypeOptions, function() {
        this.checked && e.locationTypes.push(this.value)
      }), e.travelTypes = [], k.each(c.chkTravelTypeOptions, function() {
        this.checked && e.travelTypes.push(this.value)
      }), e.homeLocation = {
        latitude: c.mapCenter.latitude,
        longitude: c.mapCenter.longitude
      }, n.all("provider").post(n.stripRestangular(e)).then(function(i) {
        return c.submitInProgress = !1, c.providerId ? (t.trackEvent("signup_provider", "completed", e.sex), s.success(p.instant("provider_editing_successful")), void(i.agency && i.agency.id ? u.go("^.agency_admin", {
          agencyId: i.agency.id
        }) : r.isAdmin() || e.email === r.getUser().email ? u.go("^.provider_admin", {
          providerId: c.providerId
        }) : (s.warning(p.instant("username_changed_please_login_again")), r.logout(), r.setRedirectPath("/provider/admin/" + c.providerId), u.go("^.login")))) : i.agency && i.agency.id ? (t.trackEvent("signup_provider_agency", "completed", e.sex), s.success(p.instant("creating_provider_successful")), void r.getLoginPromise(!0).then(function() {
          u.go("^.agency_admin", {
            agencyId: i.agency.id
          })
        }, function() {
          s.warning(p.instant("auto_login_error")), r.setRedirectPath("/agency/admin/" + i.agency.id), u.go("^.login")
        })) : (s.success(p.instant("provider_thank_you_for_signing_up_with_peppr")), void(r.isLoggedIn() ? r.getLoginPromise(!0).then(function() {
          u.go("^.provider_imageupload", {
            providerId: i.id
          })
        }, function() {
          console.log("Creating the provider worked, but updating the login info failed."), s.warning(p.instant("auto_login_error")), t.setRedirectPath("/provider/imageupload/" + i.id), r.setRedirectPath("/phone/confirm"), u.go("^.login")
        }) : r.login(e.admin.username, e.admin.passwordHash).then(function() {
          t.setRedirectPath("/provider/imageupload/" + i.id), u.go("^.phone_confirm")
        }, function() {
          console.log("Creating the provider worked, but logging in failed."), s.warning(p.instant("auto_login_error")), t.setRedirectPath("/provider/imageupload/" + i.id), r.setRedirectPath("/phone/confirm"), u.go("^.login")
        })))
      }, function() {
        c.submitInProgress = !1, s.error(p.instant("signup_server_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("SignupClientCtrl", ["Comet", "BackendRest", "PepprTools", "PepprFormInfo", "Messages", "Login", "$timeout", "$interval", "$scope", "$rootScope", "$translate", "$state", "$location", "$sce", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    var g = window.jQuery,
      h = "app.signup_client",
      v = "app.signup_client.1",
      _ = "app.signup_client.1_confirm",
      f = "app.signup_client.2",
      b = "app.signup_client.3";
    l.client = {}, l.currScreen = p.current.name, l.pepprHeardOf = null, l.phoneNumberCountry = null, l.phoneNumber = null, l.phoneConfirmed = !1, l.temporaryPassword = "", l.continueCountdown = 3, l.showPhoneConfirmation = !1, l.freeRideAvailable = !1, l.showBookingSteps = n.getPrevState() && "app.provider" === n.getPrevState().name, l.showAppLang = !1, l.showDiscount = !1, l.tacPpText = m.trustAsHtml(d.instant("terms_and_conditions_privacy_policy_agreement", {
      tac: '<a data-reveal-id="' + c.peppr.agbModalId + '">' + d.instant("terms_and_conditions") + "</a>",
      pp: '<a data-reveal-id="' + c.peppr.privacyModalId + '">' + d.instant("privacy_policy") + "</a>"
    }));
    var y = function() {
        l.client.phoneNumber = "+" + ((l.phoneNumberCountry || {}).value || "") + (l.phoneNumber || "")
      },
      w = function(e) {
        e && (e.signupIncomplete && l.currScreen === h || l.currScreen === f || l.currScreen === b) && (l.client = g.parseJSON(angular.toJson(e)), delete l.client.password, delete l.client.password_confirm, l.showBookingSteps = !1)
      };
    l.$watch("phoneNumberCountry", y), l.$watch("phoneNumber", y);
    var k = c.$on("$stateChangeSuccess", function() {
      l.currScreen = p.current.name, w(o.getUser())
    });
    l.$on("$destroy", k), n.hackImageUrls(".view-signup-client .screenshot img"), o.getLoginPromise().then(function(e) {
      w(e), l.currScreen === h && p.go(e.signupIncomplete ? ".2" : ".1")
    }, function() {
      l.currScreen !== v && p.go(v)
    }), r(n.defaultViewContentLoadedFunc, 1), l.chkPhoneNumberCountryOptions = [], t.getFormInfoPromise().then(function(e) {
      l.chkPhoneNumberCountryOptions = n.optionsToScopeArray("ENUM_PhoneNumberCountry_", e.phoneNumberCountryOptions), l.chkAppLangOptions = n.optionsToScopeArray("ENUM_Languages_", e.supportedLangCodes), l.chkAcquisitionChannelOptions = n.optionsToScopeArray("ENUM_AcquisitionChannel_", e.acquistionChannels), l.phoneNumberCountry = l.chkPhoneNumberCountryOptions[0];
      var i = d.preferredLanguage();
      g.each(l.chkAppLangOptions, function() {
        return this.value === i ? (l.client.langCode = this.value, !1) : void 0
      }), l.freeRideAvailable = e.numInitialFreeRides > 0
    }), l.onHaveAccount = function(e) {
      e.preventDefault(), p.go("app.login")
    }, l.onClickSubmitClientForm = function() {
      if (l.currScreen === f || l.currScreen === b) return void l.submitClientCompletion();
      var e = g.parseJSON(angular.toJson(l.client));
      delete e.password_confirm;
      var t = l.client.email || l.client.phoneNumber;
      e.password || (e.password = Math.random().toString(36).substr(2, 8), l.temporaryPassword = e.password), i.all("client").post(e).then(function() {
        n.trackEvent("signup_client", "completed"), a.success(d.instant("successfully_created_your_account"));
        var i = o.getRedirectPath();
        o.login(t, e.password).then(function() {
          l.client = o.getUser(), l.client.phoneValid && (l.phoneConfirmed = !0), l.phoneConfirmed && i ? (o.getAndResetRedirectPath(), u.path(i)) : p.go(_)
        }, function() {
          a.warning(d.instant("auto_login_error")), o.setRedirectPath(i), p.go("app.login")
        })
      }, function(i) {
        e.password_confirm = e.password, a.error(i.data && i.data.length < 120 ? d.instant("server_error_msg", {
          errormsg: i.data
        }) : d.instant("signup_server_error"))
      })
    }, l.submitClientCompletion = function() {
      var e = g.parseJSON(angular.toJson(l.client));
      e.passwordHash = e.password, delete e.password_confirm, delete e.password, i.all("client/completion").post(e).then(function() {
        if (l.currScreen === f) o.login(l.client.email, l.client.password).then(function() {
          l.client = o.getUser(), p.go("^.3")
        });
        else if (l.currScreen === b) {
          a.success(d.instant("successfully_created_your_account"));
          var e = o.getAndResetRedirectPath();
          e ? u.path(e) : p.go("app.provider_list")
        }
      }, function(e) {
        a.error(e.data && e.data.length < 120 ? d.instant("server_error_msg", {
          errormsg: e.data
        }) : d.instant("signup_server_error"))
      })
    }
  }]).controller("SignupClientConfirmCtrl", ["Comet", "BackendRest", "PepprTools", "PepprFormInfo", "Messages", "Login", "$timeout", "$interval", "$scope", "$rootScope", "$translate", "$state", "$location", function(e, i, n, t, a, o, r, s, l, c, d, p, u) {
    function m() {
      g && (e.unsubscribe(g), g = null);
      var i = o.getUser();
      i && i.id && e.subscribe("/user/" + o.getUser().id, function(e) {
        var i = e.data;
        if (console.log("user listener called with data: ", i), "tokenConfirmed" === i.action) {
          if (l.showPhoneConfirmation) return;
          l.phoneConfirmed = !0, l.$digest(), s(function() {
            --l.continueCountdown, l.continueCountdown < 0 && (l.continueCountdown = 0)
          }, 1e3, 3), r(l.onContinueAfterConfirmation, 3e3)
        }
      }).then(function(i) {
        g = i, l.$on("$destroy", function() {
          e.unsubscribe(i)
        }), l.showPhoneConfirmation = !1
      })["catch"](function() {
        console.log("Subscription failed"), l.showPhoneConfirmation = !0
      })
    }
    var g;
    l.phoneConfirmed = !1, l.showPhoneConfirmation = !1, o.getLoginPromise().then(e.getPromise()).then(m), l.onShowPhoneConfirmation = function() {
      l.showPhoneConfirmation = !0
    }, l.onContinueAfterConfirmation = function() {
      var e = o.getAndResetRedirectPath();
      e ? u.path(e) : p.go("^.2")
    }, l.onPhoneManuallyConfirmed = function() {
      l.onContinueAfterConfirmation()
    }
  }]), angular.module("peppritAngularApp").controller("SignupAgencyCtrl", ["$scope", "BackendRest", "PepprTools", "GeoTools", "PepprFormInfo", "Messages", "Login", "uiGmapGoogleMapApi", "$rootScope", "$translate", "$state", "$sce", function(e, i, n, t, a, o, r, s, l, c, d, p) {
    function u() {
      s.then(function(e) {
        h && e.event.trigger(h, "resize")
      })
    }
    var m = window.jQuery;
    e.agency = {
      admin: {}
    }, e.phoneNumberCountry = null, e.phoneNumber = null, e.tacPpText = p.trustAsHtml(c.instant("terms_and_conditions_privacy_policy_agreement", {
      tac: '<a data-reveal-id="' + l.peppr.agbModalId + '">' + c.instant("terms_and_conditions") + "</a>",
      pp: '<a data-reveal-id="' + l.peppr.privacyModalId + '">' + c.instant("privacy_policy") + "</a>"
    }));
    var g = function() {
      e.agency.phoneNumber = "+" + ((e.phoneNumberCountry || {}).value || "") + (e.phoneNumber || "")
    };
    e.$watch("phoneNumberCountry", g), e.$watch("phoneNumber", g), n.setUseCustomViewContentLoadedFunc(!0), e.chkPhoneNumberCountryOptions = [], a.getFormInfoPromise().then(function(i) {
      e.chkPhoneNumberCountryOptions = n.optionsToScopeArray("ENUM_PhoneNumberCountry_", i.phoneNumberCountryOptions), e.chkAppLangOptions = n.optionsToScopeArray("ENUM_Languages_", i.supportedLangCodes), e.phoneNumberCountry = e.chkPhoneNumberCountryOptions[0];
      var t = c.preferredLanguage();
      m.each(e.chkAppLangOptions, function() {
        return this.value === t ? (e.agency.admin.langCode = this.value, !1) : void 0
      }), n.defaultViewContentLoadedFunc()
    });
    var h = null;
    angular.extend(e, {
      mapCenter: {
        latitude: 48.16,
        longitude: 14.01,
        zoom: 14
      },
      mapEvents: {
        tilesloaded: function(e) {
          h = e, u()
        }
      }
    }), t.requestGeoLocation().then(function(i) {
      e.mapCenter.latitude = i.coords.latitude, e.mapCenter.longitude = i.coords.longitude, u()
    }), e.clickSubmitAgencyForm = function() {
      var t = m.parseJSON(angular.toJson(e.agency));
      delete t.admin.password_confirm, t.homeLocation = {
        latitude: e.mapCenter.latitude,
        longitude: e.mapCenter.longitude
      }, i.all("agency").post(e.agency).then(function(e) {
        o.success(c.instant("agency_thank_you_for_signing_up_with_peppr")), n.trackEvent("signup_agency", "completed"), r.logout(), r.login(t.email, t.admin.passwordHash).then(function() {
          n.setRedirectPath("/agency/admin/" + e.id), d.go("^.phone_confirm")
        }, function() {
          console.log("Creating the agency worked, but logging in failed."), o.warning(c.instant("auto_login_error")), n.setRedirectPath("/agency/admin/" + e.id), r.setRedirectPath("/phone/confirm"), d.go("^.login")
        })
      }, function() {
        o.error(c.instant("signup_server_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("SignupAdminCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.moment;
    e.signupEntries = [], e.isAdmin = !1, e.formatDate = function(e) {
      return s(e).format("YYYY-MM-DD HH:mm")
    }, n.getLoginPromise().then(function() {
      return e.isAdmin = n.isAdmin(), e.isAdmin ? void t.all("signupuser").getList().then(function(i) {
        e.signupEntries = i
      }, function() {
        i.error(a.instant("unknown_error"))
      }) : void r.go("^.provider_list")
    })
  }]), angular.module("peppritAngularApp").controller("ShortlinkAdminCtrl", ["$scope", "PepprFormInfo", "PepprTools", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r, s, l) {
    var c = window.jQuery;
    e.newEntry = {}, e.shortLinks = [], e.isAdmin = !1, e.pepprShortLinkPrefix = window.pepprShortLinkPrefix, a.getLoginPromise().then(function() {
      return a.isAdmin() ? (e.isAdmin = a.isAdmin(), o.all("shorturl").getList({
        maxResults: 15
      }).then(function(i) {
        e.shortLinks = i
      }, function() {
        t.error(r.instant("unknown_error"))
      }), void s(function() {
        c(".view-shortlink-admin").foundation()
      }, 0)) : (t.error(r.instant("access_denied_please_login_error")), void l.go("^.provider_list"))
    }, function() {
      t.error(r.instant("access_denied_please_login_error")), a.setRedirectPath("/shortlink/admin/"), l.go("^.login")
    }), i.getFormInfoPromise().then(function(i) {
      e.selShortLinkUsageOptions = n.optionsToScopeArray("ENUM_ShortLinkUsage_", i.shortLinkUsage), e.newEntry.type = e.selShortLinkUsageOptions[0].value
    }), e.clickNewShortlinkForm = function() {
      o.all("shorturl").post(e.newEntry).then(function(e) {
        t.success("Saved successfully. Your shortlink is: " + e), l.reload()
      }, function() {
        t.error(r.instant("unknown_error"))
      })
    }, e.clickShortlink = function(e) {
      window.alert("Don't visit the link yourself, that would mess up with the statistics."), e.preventDefault()
    }
  }]), angular.module("peppritAngularApp").controller("ProviderStatusCtrl", ["$scope", "BackendRest", "$translate", "$stateParams", function(e, i, n, t) {
    e.providerId = t.providerId
  }]), angular.module("peppritAngularApp").controller("ProviderServicesCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.jQuery;
    e.servicesEntries = [], e.newEntry = {}, e.isAdmin = !1, t.all("service/search").getList().then(function(i) {
      e.servicesEntries = i
    }, function() {
      i.error(a.instant("unknown_error"))
    }), n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), o(function() {
        s(".view-provider-services").foundation()
      }, 0)
    }), e.clickNewServiceForm = function() {
      t.all("service").post(e.newEntry).then(function() {
        i.success("Saved successfully"), r.reload()
      }, function() {
        i.error(a.instant("unknown_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("ProviderMapGoogleCtrl", ["$scope", "PepprTools", "PepprRestCache", "PepprSearchFilter", "FilterMenu", "FullHeightPage", "Messages", "localStorageService", "uiGmapGoogleMapApi", "$rootScope", "$state", "BackendRest", "$translate", function(e, i, n, t, a, o, r, s, l, c, d, p, u) {
    function m(i) {
      e.providers = i;
      var n = [];
      v.each(e.providers, function() {
        var e = null;
        this.profilePictures && this.profilePictures.length > 0 && (e = window.pepprRestBaseUrl + "/mapmarkerimage/" + this.profilePictures[0].uploadUUID), n.push({
          id: this.provider.id,
          profileURL: d.href("app.provider", {
            providerId: this.provider.id,
            lang: c.activeLang
          }),
          providerInfo: this,
          instantAvailDisplayStyleVal: this.provider.instantAvailable ? "inline-block" : "none",
          pepprRestBaseUrl: c.pepprRestBaseUrl,
          latitude: this.provider.homeLocation.latitude,
          longitude: this.provider.homeLocation.longitude,
          show: !1,
          icon: {
            url: e,
            size: new window.google.maps.Size(h, h),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(h / 2, h)
          },
          draggable: !1,
          infoWindowOptions: {
            maxWidth: Math.min(.75 * c.peppr.screenWidth, 400)
          }
        })
      }), e.mapMarkers = n
    }

    function g() {
      t.getProviderFilterPromise().then(function(i) {
        var t = n.getProviderList();
        return t ? void m(t) : (e.providers = null, void p.all("provider/search").post(i).then(function(e) {
          n.storeProviderList(e), m(e)
        }, function() {
          r.error(u.instant("failed_to_load_providers_error")), e.providers = []
        }))
      })
    }
    var h = 42,
      v = window.jQuery,
      _ = "providerMapGoogleCenter",
      f = "providerMapZoom",
      b = {
        latitude: 50.98609893339354,
        longitude: 10.601806640625
      },
      y = 7,
      w = s.get(_);
    w && w.latitude && w.longitude && (b = w);
    var k = s.get(f);
    k && (y = Number(k)), i.setUseCustomViewContentLoadedFunc(!0), o.enableFullHeight(e), a.enableFilterMenu(e), e.mapMarkers = [], angular.extend(e, {
      map: {
        center: b,
        zoom: y,
        events: {
          tilesloaded: function(e) {
            i.defaultViewContentLoadedFunc(), l.then(function(i) {
              i.event.trigger(e, "resize")
            })
          }
        },
        mapOptions: {
          streetViewControl: !1
        },
        clusterOptions: {
          maxZoom: 14,
          minimumClusterSize: 3
        }
      }
    }), l.then(function() {
      g()
    }), e.clickMarker = function(i) {
      e.$apply(function() {
        i.show = !0
      })
    }, e.$on("$destroy", function() {
      s.add(_, JSON.stringify(e.map.center)), s.add(f, JSON.stringify(e.map.zoom))
    })
  }]), angular.module("peppritAngularApp").controller("ProviderListCtrl", ["$scope", "FilterMenu", "BackendRest", "PepprRestCache", "PepprSearchFilter", "PepprTools", "GeoTools", "ClientLocation", "SEO", "Messages", "localStorageService", "$rootScope", "$translate", "$state", "$timeout", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g) {
    function h(i) {
      var n = s.getClientLocation(),
        t = b();
      n && n.latitude && n.longitude && f.each(i, function() {
        this.provider.homeLocation && (this.distanceKm = r.distanceKm(n.latitude, n.longitude, this.provider.homeLocation.latitude, this.provider.homeLocation.longitude), this.distanceKm < 1 && (this.distanceKm = 1)), f.extend(this, o.findNextAvailability(this.provider, t))
      }), i = i.sort(function(e, i) {
        return e.instantAvailable && e.distanceKm < k && (!i.instantAvailable || i.distanceKm >= k) ? -1 : (!e.instantAvailable || e.distanceKm >= k) && i.instantAvailable && i.distanceKm < k ? 1 : e.distanceKm - i.distanceKm
      }), p.peppr.isPrerenderProxy && f.each(i, function() {
        this.isInView = !0
      }), e.providers = i, e.firstProviderId = e.providers && e.providers.length > 0 ? e.providers[0].provider.id : 0, g(function() {
        var e = f(".view-provider-list");
        P = {
          top: e.offset().top
        }, M = !0, p.peppr.isPrerenderProxy && f(".showcase-image-wrapper.inactive", e).removeClass("inactive")
      }, 0)
    }

    function v() {
      a.getProviderFilterPromise().then(function(i) {
        var a = t.getProviderList();
        return a ? void h(a) : (e.providers = null, void n.all("provider/search").post(i).then(function(e) {
          t.storeProviderList(e), h(e)
        }, function() {
          c.error(u.instant("failed_to_load_providers_error")), e.providers = []
        }))
      })
    }

    function _(e) {
      return Math.floor(e / (p.peppr.isScreenXXLarge ? K : p.peppr.isScreenXLarge ? H : p.peppr.isScreenLarge ? O : p.peppr.isScreenMedium ? q : p.peppr.isScreenSmall ? B : 1))
    }
    var f = window.jQuery,
      b = window.moment,
      y = window.Modernizr.prefixed("requestAnimationFrame", window),
      w = window.Modernizr.prefixed("performance", window);
    w = w && w.now ? w : {
      now: Date.now
    }, i.enableFilterMenu(e), l.setTitle(u.instant("provider_list_title")), e.showUpBar = !1, e.providers = null, e.firstProviderId = null, e.beforeViewportFillerHeight = "0px", e.afterViewportFillerHeight = "0px";
    var k = 30,
      C = "becomeAPepprMsgSeen";
    "seen" !== d.get(C) && (c.success('<i class="peppr-icon-join"></i> <span class="message-with-icon">' + u.instant("we_are_looking_for_new_pepprs") + ' <a href="' + m.href("^.login+action", {
      action: "showSignup"
    }) + '">' + u.instant("click_here_to_apply") + "</a></span>", 1e4, "become-a-peppr"), d.add(C, "seen")), e.scrollUp = function() {
      f("html, body").animate({
        scrollTop: 0
      }, 500)
    }, e.filterProviders = function(e) {
      return e.isInView
    }, e.pricePer = function(e) {
      return e.pricePerHour
    }, e.pricePerNumHours = function() {
      return ""
    };
    var N = 300,
      P = null,
      S = !1,
      A = !0,
      E = f(window).height(),
      I = null,
      M = !0;
    f(window).on("resize", function() {
      E = f(window).height()
    }), a.getProviderFilterPromise().then(function() {
      e.$watchCollection("providerRestSearchFilter", function() {
        return A ? void(A = !1) : (S && (g.cancel(S), S = !1), void(S = g(v, 1e3)))
      }), v()
    }), f(window).on("scroll.peppr-provider_list", function() {
      e.showUpBar = f(window).scrollTop() > 3 * N ? !0 : !1
    });
    var L, U, x = 0,
      T = {},
      z = -1,
      R = -1,
      D = -1,
      F = -1,
      B = 1,
      q = 2,
      O = 3,
      H = 4,
      K = 6,
      $ = !1;
    ! function G() {
      var i = 0;
      if (L || (L = w.now(), U = 0), 0 === x || x++ > 50) {
        if (x = 1, !m.is("app.provider_list")) return;
        if (p.peppr.isPrerenderProxy) return
      }
      if (y(G), e.providers && P) {
        var n = p.peppr.isScreenLarge;
        if (n !== I || n && M) {
          var t = 0;
          for (i = 0; i < e.providers.length; i++) {
            var a = f("#plSc" + e.providers[i].provider.id);
            n && a.removeClass("inactive"), t += a.length > 0 ? 1 : 0
          }
          M = !0, t > 0 && (M = !1), I = n
        }
        var r = f(window).scrollTop(),
          s = r + E,
          l = !1,
          c = -1,
          d = -1,
          u = {},
          h = null;
        for (i = 0; i < e.providers.length; i++) {
          var v = {
              height: N
            },
            b = _(i);
          v.top = P.top + b * v.height, v.bottom = P.top + (b + 1) * v.height;
          var k = Math.max(v.top, r),
            C = Math.min(v.bottom, s),
            S = (C - k) / v.height;
          if (S > .5 && (u[i] = !0), e.providers && e.providers.length > i) {
            var A = S >= -2;
            c = 0 > c && A ? i : c, d = A ? i : d, A !== e.providers[i].isInView && (l = !0, e.providers[i].isInView = A)
          }
        }
        1 === x && console.log("min: " + c + " max: " + d);
        var B = _(c),
          q = _(d),
          O = e.providers ? _(e.providers.length - 1) + 1 : 0;
        if ((B !== z || q !== D) && (z = B, D = q, e.beforeViewportFillerHeight = z > 0 ? 300 * z + "px" : "0px", e.afterViewportFillerHeight = D > 0 ? 300 * (O - D - 1) + "px" : "0px", l = !0), !n) {
          for (var H in T)
            if (!u[H] && e.providers.length > H) {
              var K = f("#plSc" + e.providers[H].provider.id);
              K.hasClass("inactive") || K.addClass("inactive")
            }
          for (H in u) e.providers.length > H && f("#plSc" + e.providers[H].provider.id).removeClass("inactive")
        }
        T = u, R = c, F = d, l && (M = !0, h || (h = g(function() {
          h = null, e.$digest(), $ || (o.restoreScrollPosition(), $ = !0)
        }, 0)))
      }
    }(), f(document).on("opened", "#providerImagesModal[data-reveal]", function() {
      f("#providerImagesModal[data-orbit]").css("height", ""), f(window).trigger("resize.fndtn.orbit"), g(function() {
        f(window).trigger("resize")
      }, 100)
    })
  }]), angular.module("peppritAngularApp").controller("ProviderImageUploadCtrl", ["$scope", "BackendRest", "Login", "PepprTools", "Messages", "$translate", "$state", "$stateParams", function(e, i, n, t, a, o, r, s) {
    function l(n, t) {
      var r = e.provider.profilePictures[n],
        s = e.provider.profilePictures[t],
        l = e.provider.profilePictures[0];
      e.provider.profilePictures[t] = r, e.provider.profilePictures[n] = s, e.firstPic = null, i.all("provider/profile-picture/reorder/" + e.providerId).post(e.provider.profilePictures).then(function() {
        e.firstPic = e.provider.profilePictures[0]
      }, function() {
        a.error(o.instant("failed_to_reorder_your_picture_error")), e.provider.profilePictures[n] = r, e.provider.profilePictures[t] = s, e.firstPic = l
      })
    }

    function c() {
      var t = n.getUserProvider(),
        s = n.isAdmin();
      if (!e.showMockup) {
        var l = !1;
        if (p.each(n.getUserProviders() || [], function() {
            return this.id === e.providerId ? (l = !0, t = this, !1) : void 0
          }), !(t || l || s)) return a.error(o.instant("access_denied_you_are_registered_as_a_client_error")), void r.go("^.provider_list");
        if (!s && t.id !== e.providerId) return void r.go("^.provider_imageupload", {
          providerId: t.id
        });
        i.one("provider/update", e.providerId).get().then(function(i) {
          e.provider = i.provider, e.firstPic = e.provider.profilePictures.length > 0 ? e.provider.profilePictures[0] : null
        })
      }
    }

    function d() {
      Dropzone.options.providerImageuploadDropzone = {
        url: e.uploadURL,
        headers: {
          Authorization: "Basic " + n.getAuthBasicToken()
        },
        acceptedFiles: e.inputFileAccept,
        uploadMultiple: !1,
        dictDefaultMessage: '<span class="show-for-small-only needsclick">' + o.instant("click_to_upload_an_image") + '</span><span class="hide-for-small-only needsclick">' + o.instant("drop_images_here_to_upload") + "</span>",
        dictFallbackMessage: o.instant("dropzone_your_browser_is_not_supported"),
        dictInvalidFileType: o.instant("dropzone_invalid_file_type"),
        dictFileTooBig: o.instant("dropzone_file_is_too_big"),
        dictResponseError: o.instant("dropzone_failed_to_upload_please_try_later"),
        dictCancelUpload: o.instant("dropzone_cancel_upload"),
        dictCancelUploadConfirmation: o.instant("dropzone_are_you_sure_you_want_to_cancel_the_upload"),
        dictRemoveFile: o.instant("dropzone_remove_upload"),
        dictMaxFilesExceeded: o.instant("dropzone_you_cant_add_more_files"),
        fallback: function() {},
        init: function() {
          this.on("error", function() {
            e.$apply(function() {
              a.error(o.instant("failed_to_upload_your_picture_error"))
            })
          }), this.on("success", function() {
            e.$apply(function() {
              e.numSuccessfulUploads++, c(), t.trackEvent("provider_imageupload", "completed")
            })
          })
        }
      };
      var i = "#provider-imageupload-dropzone",
        r = p(i);
      r.length > 0 && !r[0].dropzone && new Dropzone(i, Dropzone.options.providerImageuploadDropzone), p(".dropzone .dz-default.dz-message").addClass("needsclick")
    }
    var p = window.jQuery,
      u = 3;
    e.providerId = Number(s.providerId), e.showMockup = "fake" === e.providerId, e.provider = {}, e.firstPic = null, e.numSuccessfulUploads = 0, e.buttonData = {
      num: e.numSuccessfulUploads
    }, e.inputFileAccept = "image/png,image/jpeg", e.uploadURL = i.configuration.baseUrl + "/provider/profile-picture/" + e.providerId, e.$watch("numSuccessfulUploads", function(i) {
      e.buttonData.num = i
    }), e.deletePicture = function(n) {
      var t = 0;
      return p.each(e.provider.profilePictures, function() {
        t += this.reviewedOn ? 1 : 0
      }), u >= t && n.reviewedOn ? void window.alert(o.instant("imageupload_cannot_delete_too_few_reviewed_images", {
        numReviewed: u
      })) : void(window.confirm(o.instant("imageupload_admin_do_you_really_want_to_delete_cannot_be_undone")) && i.one("provider/profile-picture", e.providerId).remove({
        uploadUUID: n.uploadUUID
      }).then(function() {
        e.provider.profilePictures = p.grep(e.provider.profilePictures, function(e) {
          return e.uploadUUID === n.uploadUUID ? !1 : !0
        }), e.firstPic = e.provider.profilePictures.length > 0 ? e.provider.profilePictures[0] : null
      }))
    }, e.handleDrop = function(e, i, n, t, a) {
      l(n, t), a.preventDefault()
    }, e.moveLeft = function(e) {
      e > 0 && l(e, e - 1)
    }, e.moveRight = function(i) {
      i < e.provider.profilePictures.length && l(i, i + 1)
    }, e.doneUploading = function() {
      n.isAgency() ? r.go("^.agency_admin", {
        agencyId: n.getUserAgency().id
      }) : r.go("^.provider_admin", {
        providerId: e.providerId
      })
    }, e.approvePicture = function(n, t) {
      i.all("image/review/" + n.uploadUUID).post({
        approved: !0
      }).then(function() {
        e.provider.profilePictures[t].reviewedOn = new Date
      }, function() {
        a.error(o.instant("unknown_error"))
      })
    }, n.isLoggedIn() || e.showMockup ? (c(), d()) : n.getLoginPromise().then(function() {
      c(), d()
    }, function() {
      a.error(o.instant("access_denied_please_login_error")), n.setRedirectPath("/provider/imageupload/" + e.providerId), r.go("^.login")
    })
  }]), angular.module("peppritAngularApp").controller("ProviderFaqCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.jQuery;
    e.faqEntries = [], e.newEntry = {
      section: "PROVIDER"
    }, e.isAdmin = !1;
    var l = a.preferredLanguage();
    e.faqLangFilter = function(i) {
      return e.isAdmin ? !0 : i.langCode === l
    }, t.all("faq/search").getList({
      section: "PROVIDER"
    }).then(function(i) {
      e.faqEntries = i
    }, function() {
      i.error(a.instant("unknown_error"))
    }), n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), o(function() {
        s(".view-provider-faq").foundation()
      }, 0)
    }), e.clickTopic = function(i) {
      e.newEntry = s.extend({}, i)
    }, e.clickNewTopicForm = function() {
      t.all("faq").post(e.newEntry).then(function() {
        i.success("Saved successfully"), r.reload()
      }, function() {
        i.error(a.instant("unknown_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("ProviderClaimsCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.jQuery;
    e.claimEntries = [], e.newEntry = {}, e.isAdmin = !1, t.all("provider/claim/search").getList().then(function(i) {
      e.claimEntries = i
    }, function() {
      i.error(a.instant("unknown_error"))
    }), n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), o(function() {
        s(".view-provider-claims").foundation()
      }, 0)
    }), e.clickNewClaimForm = function() {
      t.all("provider/claim").post(e.newEntry).then(function() {
        i.success("Saved successfully"), r.reload()
      }, function() {
        i.error(a.instant("unknown_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("ProviderAdminAllCtrl", ["BackendRest", "RestFullResponse", "PepprTools", "PepprFormInfo", "GeoTools", "ClientLocation", "Login", "Messages", "$scope", "$rootScope", "$translate", "$timeout", "$state", "$location", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    function g() {
      s.error(d.instant("access_denied_please_login_error")), r.setRedirectPath(m.path()), u.go("^.login")
    }

    function h() {
      if (l.isNextPageAvailable) {
        var e = {
          states: l.adminProviderStates,
          page: l.adminProviderPages.length,
          size: y
        };
        i.all("provider/search/admin").getList(e).then(function(i) {
          l.adminProviderPages[e.page] = i.data;
          var n = [];
          l.adminProviders = n.concat.apply(n, l.adminProviderPages), l.isNextPageAvailable = Number(i.headers("X-Pagination-Total-Pages")) >= e.page
        }).then(function() {
          n.restoreScrollPosition()
        })
      }
    }

    function v() {
      l.adminProviders = null, l.adminProviderPages = [], l.isNextPageAvailable = !0;
      var e = {
        states: l.adminProviderStates,
        page: 0,
        size: y
      };
      i.all("provider/search/admin").getList(e).then(function(e) {
        l.adminProviders = e.data, l.adminProviderPages[0] = e.data, l.isNextPageAvailable = Number(e.headers("X-Pagination-Total-Pages")) > 1
      }).then(function() {
        n.restoreScrollPosition()
      })
    }
    var _ = window.jQuery,
      f = window.moment,
      b = o.getClientLocation(),
      y = 20;
    l.isNextPageAvailable = !0, l.adminProviders = [], l.adminProviderPages = [], l.adminProviderStates = ["INACTIVE", "REVIEWED"], l.showActive = !1, l.showGoodCandidates = !1, l.$watch("showActive", function(e) {
      l.showActive !== e && (l.adminProviderStates = e ? ["ACTIVE", "BETA"] : ["INACTIVE", "REVIEWED"], v(!1))
    }), l.$watch("showGoodCandidates", function(e) {
      l.showGoodCandidates !== e && r.isAdmin() && v(!1)
    }), n.disableStoreScrollPosition(), n.setUseCustomViewContentLoadedFunc(!0), p(function() {
      n.defaultViewContentLoadedFunc()
    }), r.getLoginPromise().then(function() {
      return r.isAdmin() ? void v(!1) : void g()
    }, function() {
      g()
    }), l.adminSearchFilter = function(e) {
      return l.showGoodCandidates ? "FEMALE" === e.provider.sex && Number(e.provider.age) >= 20 && "REVIEWED" !== e.provider.state : !0
    }, l.distance = function(e) {
      var i = -1;
      return e.provider.homeLocation && (i = a.distanceKm(b.latitude, b.longitude, e.provider.homeLocation.latitude, e.provider.homeLocation.longitude)), i
    }, l.createdOnTime = function(e) {
      return f(e.createdOn).fromNow()
    }, l.numReviewedPics = function(e) {
      var i = 0;
      return _.each(e.profilePictures, function() {
        i += this.reviewedOn ? 1 : 0
      }), i
    }, l.updateProviderInternal = function(i) {
      e.all("provider/internal").post(e.stripRestangular(i.provider)).then(function(e) {
        var n = -1;
        _.each(l.adminProviders, function(e) {
          return this.provider.id === i.provider.id ? (n = e, !1) : void 0
        }), n >= 0 && l.adminProviders.splice(n, 1, e), e.showInternalNotes = "preview"
      })
    }, l.reviewProfile = function(i) {
      e.one("provider/review", i).get().then(function() {
        s.success("Successfully reviewed profile"), v(!0)
      }, function() {
        s.error(d.instant("signup_server_error") + " Need at least 1 reviewed images")
      })
    }, l.makeProfileBeta = function(i) {
      e.one("provider/updatestate", i).customPUT({
        value: "BETA"
      }).then(function() {
        s.success("Successfully put profile into BETA"), v(!0)
      }, function() {
        s.error(d.instant("signup_server_error") + " Need at least 1 reviewed images")
      })
    }, l.publishProfile = function(i) {
      e.one("provider/publish", i).get().then(function() {
        s.success(d.instant("successfully_published_your_profile")), v(!0)
      }, function() {
        s.error(d.instant("signup_server_error"))
      })
    }, l.deactivateProfile = function(i) {
      e.one("provider/updatestate", i).customPUT({
        value: "INACTIVE"
      }).then(function() {
        s.success(d.instant("success")), v(!0)
      }, function() {
        s.error(d.instant("signup_server_error"))
      })
    }, l.archiveProfile = function(i) {
      e.one("provider/updatestate", i).customPUT({
        value: "DELETED"
      }).then(function() {
        s.success(d.instant("success")), v(!0)
      }, function() {
        s.error(d.instant("signup_server_error"))
      })
    }, l.showMore = function() {
      h()
    }
  }]), angular.module("peppritAngularApp").controller("ProviderAdminCtrl", ["BackendRest", "PepprTools", "PepprFormInfo", "GeoTools", "ClientLocation", "Login", "Messages", "$scope", "$rootScope", "$translate", "$timeout", "$state", "$stateParams", "$sce", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    function g() {
      if (s.provider) {
        var e = o.isAdmin() ? s.provider.admin.username : o.getUserName();
        s.providerUrl = window.pepprProviderShortLinkPrefix + e, s.providerUrlText = s.providerUrl.replace(/^https?:\/\//, ""), t.reverseGeocode(s.provider.homeLocation.latitude, s.provider.homeLocation.longitude).then(function(e) {
          s.providerLocation = t.locationToCityStr(t.resultToLocation(t.getFirstResult(e)))
        })
      }
    }

    function h(n) {
      s.provider = null, s.adminProviders = null;
      var t = !1;
      if (!o.isAdmin()) {
        o.isLoggedIn() && o.getUserProvider() || p.go("^.provider_list");
        var a = o.getUserProvider();
        Number(a.id) === Number(s.providerId) && (s.provider = a)
      }
      e.one("provider/update", s.providerId).get().then(function(e) {
        s.provider = e.provider, g()
      }), n && e.one("user").get().then(function(e) {
        o.setUpdatedUserData(e), g()
      }), t || i.enableStoreScrollPosition()
    }
    var v = window.moment;
    s.providerId = u.providerId, s.provider = null, s.providerUrl = null, s.providerUrlText = null, s.providerLocation = null, s.showMockup = "fake" === s.providerId, s.instantBookingHours = null, s.isInstantBookingActive = !1, s.instantBookingEndStr = null, s.tacPpText = m.trustAsHtml(c.instant("professional_contract_terms_and_conditions_privacy_policy_agreement", {
      contract: '<a data-reveal-id="contractIndependentModal">' + c.instant("professional_contract") + "</a>",
      tac: '<a data-reveal-id="' + l.peppr.agbModalId + '">' + c.instant("terms_and_conditions") + "</a>",
      pp: '<a data-reveal-id="' + l.peppr.privacyModalId + '">' + c.instant("privacy_policy") + "</a>"
    })), s.$watch("provider", function(e) {
      s.isInstantBookingActive = !1, s.instantBookingEndStr = null, e && e.instantBookingStart && e.instantBookingMaxHours && (s.instantBookingHours = e.instantBookingMaxHours, s.isInstantBookingActive = i.isInstantBookingAvailable(e), s.isInstantBookingActive && (s.instantBookingEndStr = v(e.instantBookingStart).add("hours", e.instantBookingMaxHours).format(c.instant("short_weekday_time_format"))))
    }), i.disableStoreScrollPosition(), i.setUseCustomViewContentLoadedFunc(!0), d(function() {
      i.defaultViewContentLoadedFunc()
    }), o.getLoginPromise().then(function() {
      h(!1)
    }, function() {
      r.error(c.instant("access_denied_please_login_error")), o.setRedirectPath("/provider/admin/" + s.providerId), p.go("^.login")
    }), n.getFormInfoPromise().then(function() {}), s.publishProfile = function(i) {
      e.one("provider/publish", i).get().then(function() {
        r.success(c.instant("successfully_published_your_profile")), h(!0)
      }, function() {
        r.error(c.instant("signup_server_error"))
      })
    }, s.disableProfile = function(i) {
      e.one("provider/disable", i).get().then(function() {
        r.success(c.instant("successfully_disabled_your_profile")), h(!0)
      }, function() {
        r.error(c.instant("signup_server_error"))
      })
    }, s.deleteProfile = function(i) {
      window.confirm(c.instant("delete_profile_do_you_really_want_to_delete_cannot_be_undone")) && e.one("provider", i).remove().then(function() {
        r.success(c.instant("success")), o.isAdmin() || (o.logout(), p.go("^.login"))
      }, function() {
        r.error(c.instant("signup_server_error"))
      })
    }, s.updateLocation = function() {
      t.requestGeoLocation().then(function(i) {
        e.one("provider/update", s.providerId).get().then(function(n) {
          var t = .0054;
          n.provider.homeLocation = n.provider.homeLocation || {}, n.provider.homeLocation.latitude = i.coords.latitude + (2 * Math.random() - 1) * t, n.provider.homeLocation.longitude = i.coords.longitude + (2 * Math.random() - 1) * t, e.all("provider").post(n.provider).then(function() {
            r.success(c.instant("provider_editing_successful")), h(!0)
          })
        })
      })
    }, s.enableInstantBooking = function(n) {
      if (!(s.instantBookingHours < .5)) {
        var t = {
          instantBookingMaxHours: s.instantBookingHours,
          instantBookingStart: new Date
        };
        e.restangularizeElement(null, t, "provider/instantbooking/" + n).put().then(function() {
          r.success(c.instant("successfully_enabled_instant_booking")), h(!0), i.trackEvent("instant_booking", "enabled", null, s.instantBookingHours)
        }, function() {
          r.error(c.instant("signup_server_error"))
        })
      }
    }, s.disableInstantBooking = function(n) {
      var t = {
        instantBookingMaxHours: 0,
        instantBookingStart: null
      };
      e.restangularizeElement(null, t, "provider/instantbooking/" + n).put().then(function() {
        r.success(c.instant("successfully_disabled_instant_booking")), h(!0), i.trackEvent("instant_booking", "disabled")
      }, function() {
        r.error(c.instant("signup_server_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("ProviderCtrl", ["PepprTools", "ClientLocation", "PepprFormInfo", "GeoTools", "SEO", "FullHeightPage", "BackendRest", "Messages", "Login", "$translate", "$state", "$stateParams", "$timeout", "$scope", "$rootScope", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g) {
    function h() {
      console.log("Triggering orbit resize"), b(".provider-orbit.orbit-slides-container").css("height", "100%"), b(window).trigger("resize")
    }

    function v() {
      m.imageWidth = Math.round(m.picturesFullscreen ? g.peppr.screenWidth : C), m.imageHeight = Math.round(m.picturesFullscreen ? g.peppr.screenHeight : C)
    }

    function _() {
      m.imageWidth = Math.round(m.picturesFullscreen ? g.peppr.screenWidth : Math.round(b(window).width() / 2)), m.imageHeight = Math.round(m.picturesFullscreen ? g.peppr.screenHeight : A - E)
    }

    function f() {
      if (E = b(".view-provider").offset().top, g.peppr.isScreenLarge) {
        var e = b(window).height();
        S = !0, I = b(".view-provider .toggle-accordion").height() + b(".view-provider .button-wrapper .columns").height(), m.showProfile = !0, m.desktopProfileInfoFillerHeight = e - E - I, m.desktopProfileHeight = m.profilePicturesHeight = e - E, u(function() {
          _(), h()
        })
      } else m.desktopProfileInfoFillerHeight = "auto", m.desktopProfileHeight = "auto", m.profilePicturesHeight = k
    }
    var b = window.jQuery,
      y = window.Modernizr,
      w = window.moment,
      k = "250px",
      C = 300,
      N = 0;
    document.body.requestFullscreen = y.prefixed("requestFullscreen", document.body), document.body.exitFullscreen = y.prefixed("exitFullscreen", document) || y.prefixed("cancelFullscreen", document), m.providerId = p.providerId, m.showMockup = "fake" === m.providerId, m.isInstantBookingActive = !1, m.provider = null, m.profilePictures = [];
    var P = ["showProfile", "showSetCard", "showPriceAndExtras", "showAvailability", "showStatsAndReviews"];
    b.each(P, function(e, i) {
      m[i] = !1
    }), m.picturesFullscreen = !1, m.profilePicturesHeight = 0, m.desktopProfileInfoFillerHeight = 0, m.desktopProfileHeight = "auto", m.imageWidth = C, m.imageHeight = N, m.fee = 0, m.freeServicesAvailable = !1, m.review = null, m.filterPaidServices = function(e) {
      return e.fee > 0
    }, m.filterFreeServices = function(e) {
      return !e.fee || 0 === e.fee
    }, m.priceLocalised = function(e) {
      if (!e) return "";
      var i = e.bookingMinHours > 0 ? (e.bookingMinHours * e.pricePerHour).toLocaleString() : e.pricePerHour.toLocaleString();
      return i + (e.bookingMinHours > 0 ? "/" + e.bookingMinHours + "h" : "")
    }, m.toggleAccordion = function(e, i) {
      if (m[e] = !m[e], g.peppr.isScreenLarge && m[e]) b.each(P, function() {
        e !== this && (m[this] = !1)
      });
      else {
        if (g.peppr.isScreenLarge && !m[e]) return void(m[e] = !0);
        m[e] && u(function() {
          var e = b(window).scrollTop(),
            n = b(window).height(),
            t = b(i.currentTarget).siblings(".toggle-accordion-content"),
            a = t.height(),
            o = t.offset().top;
          o - (e + n) > -a && b("html, body").animate({
            scrollTop: o + a - n + "px"
          })
        })
      }
    }, m.toggleFullscreen = function() {
      m.picturesFullscreen = !m.picturesFullscreen, u(function() {
        g.peppr.isScreenLarge ? _() : v(), u(function() {
          h()
        })
      })
    }, m.clickBookProvider = function(e) {
      return g.peppr.formInfo.inBeta ? void u(function() {
        b("#pepprShowcaseInfoModal").foundation("reveal", "open"), window.scrollTo(0, 1)
      }) : (l.getLoginPromise().then(function() {
        d.go("^.booking", {
          providerId: m.providerId
        })
      }, function() {
        l.setRedirectPath(d.href("^.booking", {
          providerId: m.providerId
        })), d.go("^.signup_client.1")
      }), void e.preventDefault())
    }, m.onClickBack = function(e) {
      window.history.length <= 1 ? d.go("^.provider_list") : window.history.back(), e.stopPropagation()
    };
    var S = !1;
    m.$watch("peppr.screenSize", function(e, i) {
      if (e !== i) {
        if (g.peppr.isScreenLarge && !S) {
          var n = !1;
          b.each(P, function() {
            m[this] && !n && (n = this), m[this] = !1
          }), n ? m[n] = !0 : m.showProfile = !0, _(), S = !0
        } else g.peppr.isScreenLarge ? _() : (v(), S = !1);
        h(), u(function() {
          h()
        })
      }
    });
    var A = b(window).height(),
      E = 0,
      I = 0;
    b(window).on("resize", function() {
      g.peppr.isScreenLarge ? (A = b(window).height(), I = b(".view-provider .toggle-accordion").height() + b(".view-provider .button-wrapper .columns").height(), m.desktopProfileInfoFillerHeight = A - E - I, m.desktopProfileHeight = m.profilePicturesHeight = A - E) : (m.desktopProfileInfoFillerHeight = "auto", m.desktopProfileHeight = "auto", m.profilePicturesHeight = k)
    }), f(), e.setUseCustomViewContentLoadedFunc(!0), m.showMockup ? (m.provider = {
      name: "Stacey",
      state: "ACTIVE",
      createdOn: 1391450339347,
      claim: {
        nameId: "slimBeauty"
      },
      sex: "FEMALE",
      birthDate: 4425408e5,
      heightCm: 168,
      hairColour: "blonde",
      hairLength: "SHOULDER_LONG",
      figure: "SLIM",
      bustSize: "B",
      bodyHair: "LIGHT",
      pubicHair: "SHAVED",
      sexuality: "HETERO",
      ethnicity: "WESTERN",
      pierced: !1,
      tattooed: !1,
      smoker: !1,
      languages: "de,en",
      nationality: "DE",
      pricePerHour: 100,
      description: "Ihr hÃ¼bsches Gesicht wird von einem sÃ¼ÃŸen Kussmund geprÃ¤gt und von schulterlangen, blonden Haaren umrahmt. Auf Wunsch kommt sie auf High Heels zu Dir, welche ihre hÃ¼bschen Beine zur Geltung bringen und die ganze Figur so richtig zur Escort Lady macht. Mit ihrem Temperament bringt sie ihre erotischen Erfahrungen voll zum Einsatz. Stacey besucht Dich in Berlin und Umland.",
      homeLocation: {
        latitude: 52.51622086393074,
        longitude: 13.4197998046875
      },
      services: [{
        service: {
          nameId: "fetish"
        },
        fee: 25
      }, {
        service: {
          nameId: "bondage"
        },
        fee: 15
      }],
      profilePictures: [{
        uploadUUID: "246c60b1-303f-4fe4-abbf-68523c35f52a.jpg",
        width: 335,
        height: 500
      }, {
        uploadUUID: "9519c218-6445-4548-92ac-f061de626fa0.jpg",
        width: 589,
        height: 500
      }, {
        uploadUUID: "b3ed9bf0-3b15-4ed5-8681-57afb702771f.jpg",
        width: 2592,
        height: 1936
      }],
      availability: [{
        day: "FR",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }, {
        day: "MO",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }, {
        day: "SA",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }, {
        day: "TH",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }, {
        day: "TU",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }, {
        day: "WE",
        fromTime: "09:00:00",
        toTime: "22:00:00"
      }],
      locationTypes: ["ESCORT", "INCALL"],
      age: 30
    }, m.fee = 5, u(e.defaultViewContentLoadedFunc, 0)) : (n.getFormInfoPromise().then(function() {}), r.one("provider", p.providerId).get().then(function(n) {
      if (a.setProviderDescription(n.provider), a.setProviderTitle(n.provider), e.trackEvent("view_profile", "created"), m.provider = n.provider, m.isInstantBookingActive = e.isInstantBookingAvailable(n.provider), m.profilePictures = n.profilePictures, m.htmlDescription = n.htmlDescription, b.extend(m.provider, e.findNextAvailability(m.provider, w())), m.provider.homeLocation) {
        var o = i.getClientLocation();
        o && o.latitude && o.longitude && (m.provider.distanceKm = t.distanceKm(o.latitude, o.longitude, m.provider.homeLocation.latitude, m.provider.homeLocation.longitude), m.provider.distanceKm < 1 && (m.provider.distanceKm = 1)), t.reverseGeocode(m.provider.homeLocation.latitude, m.provider.homeLocation.longitude).then(function(e) {
          m.provider.homeLocationStr = t.locationToCityStr(t.resultToLocation(t.getFirstResult(e)))
        })
      }
      n.reviews && n.reviews.length > 0 && (m.review = {
        num: n.reviews.length,
        ratingCategory1: 0,
        ratingCategory2: 0,
        ratingCategory3: 0
      }, b.each(n.reviews, function() {
        m.review.ratingCategory1 += this.ratingCategory1, m.review.ratingCategory2 += this.ratingCategory2, m.review.ratingCategory3 += this.ratingCategory3
      }), m.review.ratingCategory1 = Math.round(m.review.ratingCategory1 / n.reviews.length), m.review.ratingCategory2 = Math.round(m.review.ratingCategory2 / n.reviews.length), m.review.ratingCategory3 = Math.round(m.review.ratingCategory3 / n.reviews.length));
      var r = b.grep(m.provider.services, m.filterFreeServices);
      m.freeServicesAvailable = r && r.length > 0;
      var s = e.calcPriceAndFee(m.provider.bookingMinHours > 0 ? m.provider.bookingMinHours : 1, m.provider, []);
      m.fee = s.fee, u(function() {
        e.defaultViewContentLoadedFunc(), f(), u(function() {
          b(window).trigger("resize.fndtn.orbit"), b(window).trigger("resize")
        }, 100)
      }, 0)
    }, function() {
      d.go("^.provider_list")
    }))
  }]), angular.module("peppritAngularApp").controller("PrivacyCtrl", ["SEO", "Login", "$translate", function(e, i, n) {
    e.setTitle(n.instant("privacy_title")), i.getLoginPromise().then(function() {})
  }]), angular.module("peppritAngularApp").controller("PlatformSettingsAdminCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", function(e, i, n, t, a, o) {
    function r() {
      t.all("platformsettings").getList().then(function(i) {
        e.settingsEntries = i
      })
    }
    var s = window.jQuery;
    e.settingsEntries = [], e.newEntry = {
      key: "",
      data: ""
    }, e.isAdmin = !1, n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), e.isAdmin && r(), o(function() {
        s(".view-platformsettings-admin").foundation()
      }, 0)
    }), e.clickSetting = function(i) {
      e.newEntry.key = i.key, e.newEntry.data = i.data
    }, e.clickSetPlatformSettingForm = function() {
      t.all("platformsettings").post(e.newEntry).then(function() {
        i.success("Set successfully"), r()
      }, function() {
        i.error("Failed to reach the server")
      })
    }
  }]), angular.module("peppritAngularApp").controller("PhoneConfirmCtrl", ["$scope", "BackendRest", "Login", "PepprTools", "Messages", "$translate", "$location", "$state", function(e, i, n, t, a, o, r, s) {
    e.redirect = function() {
      var e = t.getAndResetRedirectPath();
      e ? r.path(e) : s.go("^.provider_list")
    }
  }]), angular.module("peppritAngularApp").controller("OutboundSms", ["$scope", "BackendRest", "PepprTools", "PepprFormInfo", "Messages", "Login", "$rootScope", "$translate", "$state", "$q", function(e, i, n, t, a, o, r, s, l, c) {
    var d = window.jQuery;
    e.sms = {
      from: "+491761231234",
      fromcountrycode: "DE",
      to: "",
      unicode: !1,
      smscount: 1,
      body: "Yes Thanks for your booking",
      numchars: 0,
      escapenumchars: 0,
      cost: "0.010"
    }, e.phoneNumberCountry = "49", e.phoneNumber = "", e.recvPhoneNumberCountry = "49", e.recvPhoneNumber = "", e.chkPhoneNumberCountryOptions = [{
      name: "49 Deutschland",
      value: "49"
    }];
    var p = function() {
        e.sms.from = "+" + (e.phoneNumberCountry || "") + (e.phoneNumber || "")
      },
      u = function() {
        e.sms.to = "+" + (e.recvPhoneNumberCountry || "") + (e.recvPhoneNumber || "")
      };
    e.$watch("phoneNumberCountry", p), e.$watch("phoneNumber", p), e.$watch("recvPhoneNumberCountry", u), e.$watch("recvPhoneNumber", u), c.all([o.getLoginPromise(), t.getFormInfoPromise()]).then(function(i) {
      var t = i[1];
      o.isAdmin() || (l.go("^.root"), a.error("Unauthorised access")), e.chkPhoneNumberCountryOptions = n.optionsToScopeArray("ENUM_PhoneNumberCountry_", t.phoneNumberCountryOptions);
      var r = o.getUser();
      r.phoneNumber && r.phoneNumber.length > 3 && (e.phoneNumberCountry = r.phoneNumber.substring(1, 3), e.phoneNumber = r.phoneNumber.substring(3));
      var s = l.params.recipient;
      if (s.length > 3 && "+" === s[0]) {
        var c = !1;
        d.each(e.chkPhoneNumberCountryOptions, function() {
          0 === s.indexOf("+" + this.value) && (!c || this.value.length > c.value.length) && (c = this)
        }), c && (e.recvPhoneNumberCountry = c.value, e.recvPhoneNumber = s.substring(1 + c.value.length))
      }
      var p = n.findSelected(e.chkPhoneNumberCountryOptions, e.phoneNumberCountry);
      p || (e.phoneNumberCountry = e.chkPhoneNumberCountryOptions[0].value)
    }, function() {
      l.go("^.root"), a.error("Unauthorised access")
    }), e.clickSubmitSms = function() {
      var n = {
        sender: e.sms.from,
        recipient: e.sms.to,
        messageText: e.sms.body
      };
      i.all("sms").post(n).then(function(e) {
        e.sender === n.sender ? a.success("Successfully sent SMS from: " + e.sender) : a.warning("Successfully sent SMS BUT from: " + e.sender)
      }, function(e) {
        a.error("Error while sending SMS: " + (e ? e.data : ""))
      })
    }
  }]), angular.module("peppritAngularApp").controller("NoTrackCtrl", ["Messages", "$window", function(e, i) {
    gaIsOptedOut() || (window.gaOptout(), e.success("Successfully opted you out of analytics")), i.history.back()
  }]), angular.module("peppritAngularApp").controller("MainCtrl", ["ClientIntro", "ClientIntroNoPrice", "FullHeightPage", "SEO", "PepprTools", "VideoTools", "PepprSearchFilter", "ClientLocation", "BackendRest", "Messages", "$translate", "$timeout", "$state", "$location", "$rootScope", "$scope", "$sce", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g, h, v) {
    function _() {}

    function f(e) {
      e.data === window.YT.PlayerState.ENDED ? (h.hideVideo(), o.destroyPlayer(y)) : e.data === window.YT.PlayerState.PAUSED ? (N && (p.cancel(N), N = !1), N = p(function() {
        h.hideVideo(), N = !1
      }, 500)) : e.data === window.YT.PlayerState.PLAYING && N && (p.cancel(N), N = !1)
    }
    var b = window.jQuery;
    h.isLandingPage = !u.is("app.root") && !u.is("app.root_slash");
    var y = "pepprVideo",
      w = ".view-main";
    t.setTitle(d.instant("main_title")), t.setDescription(d.instant("main_description"));
    var k = s.getClientLocation(),
      C = a.getAndResetForceDisplayMain() || h.isLandingPage || g.peppr.isPrerenderProxy;
    if (!C && k && k.latitude && k.longitude) return void u.go("^.provider_list");
    h.firstMobileWebappText = v.trustAsHtml(g.peppr.isItaly ? d.instant("main_first_mobile_app_it") : d.instant("main_first_mobile_app")), h.showCity = function(e) {
      u.go("^." + e)
    }, h.desktopShowApp = g.peppr.isItaly ? !0 : !1, h.desktopShowVideo = !1, h.professionalSignupClicked = !1, h.showVideo = function() {
      o.initPlayer(y, _, f), h.desktopShowVideo = !0, b(w + " #pepprVideoWrapper").css({
        opacity: "",
        "pointer-events": ""
      }).show()
    }, h.hideVideo = function() {
      o.pausePlayer(y), b(w + " #pepprVideoWrapper").css({
        opacity: "0",
        "pointer-events": "none"
      }), p(function() {
        b(w + " #pepprVideoWrapper").hide()
      }, 500)
    }, h.clickProfessionalSignup = function() {
      h.professionalSignupClicked = !0, h.desktopShowApp = !0
    }, a.hackImageUrls(w + " img.peppr-logo"), a.hideSitename();
    var N = !1;
    o.initPlayer(y, _, f);
    var P = b("<script />", {
      id: "jsonLDOrg",
      type: "application/ld+json"
    });
    P[0].innerHTML = '{"@context" : "http://schema.org","@type" : "Organization","name" : "' + pepprCompanyName + '","url" : "' + pepprCompanyWebsite + '","logo": "' + pepprCompanyLogo + '","sameAs" : ["' + pepprFacebookPage + '","' + pepprTwitterPage + '","' + pepprGPlusPage + '"]}', b("head").append(P), h.$on("$destroy", function() {
      P.remove()
    })
  }]), angular.module("peppritAngularApp").controller("LoginCtrl", ["BackendRest", "SEO", "PepprTools", "Login", "ProviderIntro", "ProviderIntroNoPrice", "PepprFormInfo", "Messages", "$scope", "$rootScope", "$translate", "$timeout", "$location", "$state", "$stateParams", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m, g) {
    function h() {
      l.user && (l.user.phoneNumber = "+" + (l.phoneNumberCountry || "") + (l.phoneNumber || ""))
    }

    function v(e) {
      i.setTitle(e ? d.instant("logout_title") : d.instant("login_title"))
    }
    var _ = window.jQuery;
    i.setTitle(d.instant("login_title"));
    var f = "showSignup" === g.action;
    return f && !c.peppr.features.enableAgencies ? void m.go("^.signup_peppr") : (l.professionalSignupClicked = f, l.showResetPassword = !1, l.user = null, l.email = null, l.password = null, l.password_confirm = null, l.phoneNumberCountry = null, l.phoneNumber = null, l.$watch("phoneNumberCountry", h), l.$watch("phoneNumber", h), l.$watch("loggedIn", v), n.setUseCustomViewContentLoadedFunc(!0), p(function() {
      n.defaultViewContentLoadedFunc(), l.professionalSignupClicked && (c.peppr.features.showPrices ? a.showIntro() : o.showIntro())
    }), r.getFormInfoPromise().then(function(e) {
      l.chkPhoneNumberCountryOptions = n.optionsToScopeArray("ENUM_PhoneNumberCountry_", e.phoneNumberCountryOptions), l.chkAppLangOptions = n.optionsToScopeArray("ENUM_Languages_", e.supportedLangCodes), t.getLoginPromise().then(function() {
        l.user = t.getUser();
        var e = n.phoneNumberToCountryAndNumber(l.user.phoneNumber, l.chkPhoneNumberCountryOptions);
        e.country && (l.phoneNumberCountry = e.country.value), l.phoneNumber = e.number
      })
    }), l.clickLoginForm = function() {
      t.login(l.email, l.password).then(function() {
        s.success(d.instant("successfully_logged_in"));
        var e = t.getAndResetRedirectPath(),
          i = t.getUserProvider(),
          n = t.getUserAgency();
        e ? u.path(e) : i ? n ? m.go("^.agency_admin", {
          agencyId: n.id
        }) : m.go("^.provider_admin", {
          providerId: i.id
        }) : m.go("^.provider_list")
      }, function() {
        s.error(d.instant("login_error"))
      })
    }, l.clickLogoutForm = function() {
      t.logout(), m.reload()
    }, l.clickResetPasswordForm = function() {
      e.one("user/resetpassword", l.email).get().then(function() {
        s.success(d.instant("successfully_reset_password")), l.showResetPassword = !1
      }, function() {
        s.error(d.instant("login_username_error"))
      })
    }, void(l.clickEditProfile = function() {
      var i = _.parseJSON(angular.toJson(l.user));
      l.password && l.password === l.password_confirm && (i.passwordHash = l.password), e.restangularizeElement(null, i, "user").put().then(function(e) {
        t.setUpdatedUserData(e), s.success(d.instant("successfully_updated_profile"))
      }, function() {
        s.error(d.instant("unknown_error"))
      })
    }))
  }]), angular.module("peppritAngularApp").controller("LaunchCtrl", ["ClientIntro", "FullHeightPage", "PepprTools", "ClientLocation", "BackendRest", "Messages", "$translate", "$timeout", "$state", "$rootScope", "$scope", function(e, i, n, t, a, o, r, s, l, c, d) {
    var p = window.jQuery;
    d.signup = {
      type: "PUBLIC",
      email: "",
      homeLocation: null
    };
    var u = p(".view-launch img.peppr-logo"),
      m = u.attr("src");
    u.attr("src", "images/" + m.substr(m.indexOf("/") + 1)), n.setUseCustomViewContentLoadedFunc(!0), t.updateAddress(), n.hideSitename(), i.enableFullHeight(d), s(function() {
      n.defaultViewContentLoadedFunc()
    }), d.clickLocateMe = function() {
      t.requestGeocoding(!0)
    }, d.clickEnterForm = function() {
      if (t.setClientLocation()) {
        var e = t.getClientLocation();
        d.signup.homeLocation = {
          latitude: e.latitude,
          longitude: e.longitude
        }, a.all("signup").post(d.signup).then(function() {
          o.success(r.instant("successfully_signed_you_up")), d.signup.email = "", n.trackEvent("public_signup", "completed")
        }, function() {
          o.error(r.instant("signup_server_error"))
        })
      }
    }
  }]), angular.module("peppritAngularApp").controller("ItalyCtrl", ["ClientIntro", "FullHeightPage", "PepprTools", "ClientLocation", "BackendRest", "Messages", "$translate", "$timeout", "$state", "$rootScope", "$scope", function(e, i, n, t, a, o, r, s, l, c, d) {
    function p() {
      _ || g(u), _ = !0
    }

    function u() {
      var e = m(window).scrollTop(),
        i = e / 1.3;
      i > 250 && (i = 250), c.peppr.isScreenMedium || (i = 0), d.translateString = "translate3d(0px, " + i + "px, 0px)", d.opacity = 1 - .5 * i / 250, d.$digest(), _ = !1
    }
    var m = window.jQuery,
      g = window.Modernizr.prefixed("requestAnimationFrame", window);
    d.backgroundHeight = c.peppr.isScreenMedium ? c.peppr.screenHeight : "auto", d.translateString = "translate3d(0px, 0px, 0px)", d.opacity = 1, d.signup = {
      type: "ITALY",
      email: "",
      homeLocation: null
    }, c.peppr.clientLocation.searchFocusLocation = {
      lat: 42.583359,
      lon: 12.898512
    };
    var h = ".view-italy";
    n.hackImageUrls(h + " img.peppr-logo"), n.setUseCustomViewContentLoadedFunc(!0), t.updateAddress(), n.hideSitename(), s(function() {
      n.defaultViewContentLoadedFunc()
    }), d.clickLocateMe = function() {
      t.requestGeocoding()
    }, d.clickEnterForm = function() {
      if (t.setClientLocation()) {
        var e = t.getClientLocation();
        d.signup.homeLocation = {
          latitude: e.latitude,
          longitude: e.longitude
        }, a.all("signup").post(d.signup).then(function() {
          o.success(r.instant("successfully_signed_you_up")), d.signup.email = "", n.trackEvent("public_signup", "completed")
        }, function() {
          o.error(r.instant("signup_server_error"))
        })
      }
    }, d.scrollDown = function() {
      m("html, body").animate({
        scrollTop: m(document).height()
      }, 1e3)
    };
    var v = m(window).scrollTop(),
      _ = !1;
    m(window).on("scroll.peppr-italy", function() {
      v = m(window).scrollTop(), p()
    })
  }]), angular.module("peppritAngularApp").controller("ImageUploadAdminCtrl", ["$scope", "BackendRest", "Login", "PepprTools", "Messages", "$timeout", "$translate", "$state", function(e, i, n, t, a, o, r, s) {
    function l() {
      var l = n.isAdmin();
      return l ? (e.pictures = [], void("REVIEW" === e.mode ? i.all("image/review").getList().then(function(i) {
        e.pictures = i.sort(function(i, n) {
          var t = i.provider[0],
            a = n.provider[0];
          return e.isActive(t) && !e.isActive(a) ? -1 : !e.isActive(t) && e.isActive(a) ? 1 : n.lastModified - i.lastModified
        }), o(t.defaultViewContentLoadedFunc)
      }) : "RATING" === e.mode && i.all("image/rate").getList().then(function(i) {
        e.pictures = i, o(t.defaultViewContentLoadedFunc)
      }))) : (a.error(r.instant("access_denied_please_login_error")), void s.go("^.login"))
    }
    var c = window.jQuery;
    e.pictures = [], e.modes = [{
      mode: "REVIEW",
      title: "Review"
    }, {
      mode: "RATING",
      title: "Rating"
    }], e.mode = e.modes[0].mode, t.setUseCustomViewContentLoadedFunc(!0), e.$watch("mode", function(e, i) {
      e !== i && l()
    }), e.isActive = function(e) {
      return "ACTIVE" === e.state || "REVIEWED" === e.state
    }, e.imageTitle = function(e) {
      return e.provider[0].name + " " + e.width + " x " + e.height + " " + e.mimeType
    }, e.isWarningImage = function(e) {
      return e.width < 720 && e.height < 720 || e.width > 4096 || e.height > 4096 || "image/jpeg" !== e.mimeType
    }, e.deletePicture = function(n) {
      window.confirm(r.instant("imageupload_admin_do_you_really_want_to_delete_cannot_be_undone")) && i.one("provider/profile-picture", n.provider[0].id).remove({
        uploadUUID: n.uploadUUID
      }).then(function() {
        e.pictures = c.grep(e.pictures, function(e) {
          return e.uploadUUID === n.uploadUUID ? !1 : !0
        })
      }, function() {
        a.error(r.instant("unknown_error"))
      })
    }, e.rejectPicture = function(n, t) {
      i.all("image/review/" + n.uploadUUID).post({
        approved: !1
      }).then(function() {
        e.pictures.splice(t, 1)
      }, function() {
        a.error(r.instant("unknown_error"))
      })
    }, e.approvePicture = function(n, t) {
      i.all("image/review/" + n.uploadUUID).post({
        approved: !0
      }).then(function() {
        e.pictures.splice(t, 1)
      }, function() {
        a.error(r.instant("unknown_error"))
      })
    }, e.ratePicture = function(n, t, o) {
      i.all("image/rate/" + n.uploadUUID).post({
        contentRating: o
      }).then(function() {
        e.pictures.splice(t, 1)
      }, function() {
        a.error(r.instant("unknown_error"))
      })
    }, n.isLoggedIn() || e.showMockup ? l() : n.getLoginPromise().then(function() {
      l()
    }, function() {
      a.error(r.instant("access_denied_please_login_error")), n.setRedirectPath("/imageupload/admin"), s.go("^.login")
    })
  }]), angular.module("peppritAngularApp").controller("FakeInboundSms", ["$scope", "BackendRest", "PepprTools", "PepprFormInfo", "Messages", "Login", "$rootScope", "$translate", "$state", function(e, i, n, t, a, o, r, s, l) {
    var c = window.moment;
    e.sms = {
      from: "+491761231234",
      fromcountrycode: "DE",
      to: "",
      unicode: !1,
      smscount: 1,
      body: "Yes Thanks for your booking",
      numchars: 0,
      escapenumchars: 0,
      cost: "0.010"
    }, e.provider = "SMSTRADE", e.phoneNumberCountry = null, e.phoneNumber = null, e.recvPhoneNumberCountry = "49", e.recvPhoneNumber = "1771781299", e.chkPhoneNumberCountryOptions = [{
      name: "49 Deutschland",
      value: "49"
    }];
    var d = function() {
        e.sms.from = "+" + (e.phoneNumberCountry || "") + (e.phoneNumber || "")
      },
      p = function() {
        e.sms.to = "+" + (e.recvPhoneNumberCountry || "") + (e.recvPhoneNumber || "")
      };
    e.$watch("phoneNumberCountry", d), e.$watch("phoneNumber", d), e.$watch("recvPhoneNumberCountry", p), e.$watch("recvPhoneNumber", p), o.getLoginPromise().then(function() {
      o.isAdmin() || (l.go("^.root"), a.error("Unauthorised access"))
    }, function() {
      l.go("^.root"), a.error("Unauthorised access")
    }), t.getFormInfoPromise().then(function(i) {
      e.chkPhoneNumberCountryOptions = n.optionsToScopeArray("ENUM_PhoneNumberCountry_", i.phoneNumberCountryOptions), e.phoneNumberCountry = e.chkPhoneNumberCountryOptions[0].value
    }), e.clickSubmitSms = function() {
      var n = {};
      if ("MYCOOL" === e.provider) {
        var t = i.withConfig(function(e) {
          e.setBaseUrl(r.pepprRestBaseUrl.replace(/\/pepprit$/, "/mycoolsms"))
        });
        e.sms.numchars = e.sms.body.length, t.all("pushincomingsms").post(e.sms).then(function() {
          a.success("Successfully sent fake SMS")
        }, function() {
          a.error("Error while sending fake SMS")
        })
      } else if ("SMSTRADE" === e.provider) {
        var o = i.withConfig(function(e) {
          e.setBaseUrl(r.pepprRestBaseUrl.replace(/\/pepprit$/, "/smstrade"))
        });
        n = {
          message_id: (Math.random() + 1).toString(36).substring(7),
          message: e.sms.body,
          from: e.sms.from,
          to: e.sms.to
        }, o.one("pushincomingsms").get(n).then(function() {
          a.success("Successfully sent fake SMS")
        }, function() {
          a.error("Error while sending fake SMS")
        })
      } else if ("NEXMO" === e.provider) {
        var s = i.withConfig(function(e) {
          e.setBaseUrl(r.pepprRestBaseUrl.replace(/\/pepprit$/, "/nexmo"))
        });
        n = {
          type: "text",
          messageId: (Math.random() + 1).toString(36).substring(7),
          text: e.sms.body,
          msisdn: e.sms.from.replace(/^\+/, ""),
          to: e.sms.to.replace(/^\+/, ""),
          "message-timestamp": c().format("YYYY-MM-DD HH:mm:ss")
        }, s.one("pushincomingsms").get(n).then(function() {
          a.success("Successfully sent fake SMS")
        }, function() {
          a.error("Error while sending fake SMS")
        })
      }
    }
  }]), angular.module("peppritAngularApp").controller("EmailConfirmCtrl", ["$scope", "BackendRest", "PepprTools", "Messages", "$translate", "$location", "$state", "$stateParams", function(e, i, n, t, a, o, r, s) {
    e.code = s.code, e.code && t.info(a.instant("email_confirmation_prefilled_just_press_confirm")), e.clickEmailConfirmForm = function() {
      i.one("confirmtoken", e.code).get().then(function() {
        t.success(a.instant("successfully_confirmed_your_email"));
        var e = n.getAndResetRedirectPath();
        e ? o.path(e) : r.go("^.provider_list")
      }, function() {
        t.error(a.instant("invalid_confirmation_code_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("ConceptCtrl", ["PepprTools", "SEO", "FullHeightPage", "Messages", "$translate", "$timeout", "$scope", "$rootScope", function(e, i, n, t, a, o, r, s) {
    function l() {
      console.log("Triggering orbit resize"), u(".provider-orbit.orbit-slides-container").css("height", "100%"), u(window).trigger("resize")
    }

    function c() {
      r.imageWidth = r.picturesFullscreen ? s.peppr.screenWidth : g, r.imageHeight = r.picturesFullscreen ? s.peppr.screenHeight : g
    }

    function d() {
      r.imageWidth = r.picturesFullscreen ? s.peppr.screenWidth : Math.round(u(window).width() / 2), r.imageHeight = r.picturesFullscreen ? s.peppr.screenHeight : h - v
    }

    function p() {
      if (v = u(".view-concept").offset().top, s.peppr.isScreenLarge) {
        var e = u(window).height();
        m = !0, _ = u(".view-concept .toggle-accordion").height() + u(".view-concept .button-wrapper .columns").height(), r.showProfile = !0, r.desktopProfileInfoFillerHeight = e - v - _, r.desktopProfilePicturesHeight = e - v, o(function() {
          d(), l()
        })
      } else r.desktopProfileInfoFillerHeight = "auto", r.desktopProfilePicturesHeight = "auto"
    }
    var u = window.jQuery,
      m = !1,
      g = 300;
    r.$watch("peppr.screenSize", function(e, i) {
      e !== i && (s.peppr.isScreenLarge && !m ? (d(), m = !0) : s.peppr.isScreenLarge ? d() : (c(), m = !1), l(), o(function() {
        l()
      }))
    });
    var h = u(window).height(),
      v = 0,
      _ = 0;
    u(window).on("resize", function() {
      s.peppr.isScreenLarge ? (h = u(window).height(), _ = u(".view-concept .toggle-accordion").height() + u(".view-concept .button-wrapper .columns").height(), r.desktopProfileInfoFillerHeight = h - v - _, r.desktopProfilePicturesHeight = h - v) : (r.desktopProfileInfoFillerHeight = "auto", r.desktopProfilePicturesHeight = "auto")
    }), e.setUseCustomViewContentLoadedFunc(!0), o(function() {
      e.defaultViewContentLoadedFunc(), p(), o(function() {
        u(window).trigger("resize.fndtn.orbit"), u(window).trigger("resize")
      }, 100)
    }, 0)
  }]), angular.module("peppritAngularApp").controller("ComponentPhoneNumberCtrl", ["PepprTools", "PepprFormInfo", "$translate", "$scope", "$rootScope", function(e, i, n, t, a) {
    t.peppr = a.peppr, t.chkPhoneNumberCountryOptions = [], t.phone = {
      phoneNumberCountry: null,
      phoneNumberLocal: null
    };
    var o = function() {
      null !== t.phone.phoneNumberCountry && null !== t.phone.phoneNumberLocal && (t.phoneNumber = "+" + ((t.phone.phoneNumberCountry || {}).value || "") + (t.phone.phoneNumberLocal || ""))
    };
    i.getFormInfoPromise().then(function(i) {
      if (t.chkPhoneNumberCountryOptions = e.optionsToScopeArray("ENUM_PhoneNumberCountry_", i.phoneNumberCountryOptions), t.phone.phoneNumberCountry = t.chkPhoneNumberCountryOptions[0], t.phoneNumber) {
        var n = e.phoneNumberToCountryAndNumber(t.phoneNumber, t.chkPhoneNumberCountryOptions);
        n && (t.phone.phoneNumberCountry = n.country, t.phone.phoneNumberLocal = n.number)
      }
      t.$watch("phone.phoneNumberCountry", o), t.$watch("phone.phoneNumberLocal", o)
    })
  }]).directive("ppPhoneNumber", function() {
    return {
      scope: {
        form: "=",
        name: "=",
        label: "=?",
        errMsg: "=?",
        description: "=?",
        phoneNumber: "="
      },
      templateUrl: "app/views/component_phonenumber.html",
      restrict: "E",
      controller: "ComponentPhoneNumberCtrl"
    }
  }), angular.module("peppritAngularApp").controller("ClientFaqCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.jQuery;
    e.faqEntries = [], e.newEntry = {
      section: "CLIENT"
    }, e.isAdmin = !1;
    var l = a.preferredLanguage();
    e.faqLangFilter = function(i) {
      return e.isAdmin ? !0 : i.langCode === l
    }, n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), o(function() {
        s(".view-client-faq").foundation()
      }, 0)
    }), t.all("faq/search").getList({
      section: "CLIENT"
    }).then(function(i) {
      e.faqEntries = i
    }, function() {
      i.error(a.instant("unknown_error"))
    }), e.clickTopic = function(i) {
      e.newEntry = s.extend({}, i)
    }, e.clickNewTopicForm = function() {
      t.all("faq").post(e.newEntry).then(function() {
        i.success("Saved successfully"), r.reload()
      }, function() {
        i.error(a.instant("unknown_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("CityCtrl", ["BackendRest", "PepprTools", "GeoTools", "SEO", "ClientLocation", "FullHeightPage", "Messages", "$state", "$translate", "$timeout", "$scope", "$rootScope", function(e, i, n, t, a, o, r, s, l, c, d, p) {
    function u() {
      a.setFakeClientLocation(!0, y.latitude, y.longitude, b.zipCode, b.countryCode, b.country, b.name, b.zipCode + ", " + b.name + ", " + b.country)
    }

    function m(e) {
      var t = a.getClientLocation(),
        o = k();
      t && t.latitude && t.longitude && w.each(e, function() {
        this.provider.homeLocation && (this.distanceKm = n.distanceKm(t.latitude, t.longitude, this.provider.homeLocation.latitude, this.provider.homeLocation.longitude), this.distanceKm < 1 && (this.distanceKm = 1)), w.extend(this, i.findNextAvailability(this.provider, o))
      }), e = e.sort(function(e, i) {
        return e.instantAvailable && e.distanceKm < C && (!i.instantAvailable || i.distanceKm >= C) ? -1 : (!e.instantAvailable || e.distanceKm >= C) && i.instantAvailable && i.distanceKm < C ? 1 : e.distanceKm - i.distanceKm
      }), d.providers = e, d.firstProviderId = d.providers && d.providers.length > 0 ? d.providers[0].provider.id : 0
    }

    function g() {
      var i = 8;
      d.providers = null;
      var n = {
        clientLocation: y,
        maxResults: i
      };
      e.all("provider/search").post(n).then(function(e) {
        m(e.slice(0, i > e.length ? e.length : i))
      }, function() {
        r.error(l.instant("failed_to_load_providers_error")), d.providers = []
      })
    }

    function h() {
      console.log("Triggering orbit resize"), w(".provider-orbit.orbit-slides-container").css("height", "100%"), w(window).trigger("resize")
    }

    function v() {
      d.imageWidth = d.picturesFullscreen ? p.peppr.screenWidth : S, d.imageHeight = d.picturesFullscreen ? p.peppr.screenHeight : S
    }

    function _() {
      d.imageWidth = d.picturesFullscreen ? p.peppr.screenWidth : Math.round(w(window).width() / 2), d.imageHeight = d.picturesFullscreen ? p.peppr.screenHeight : N - A
    }

    function f() {
      if (A = w(".view-concept").offset().top, p.peppr.isScreenLarge) {
        var e = w(window).height();
        P = !0, E = w(".view-concept .toggle-accordion").height() + w(".view-concept .button-wrapper .columns").height(), d.showProfile = !0, d.desktopProfileInfoFillerHeight = e - A - E, d.desktopProfilePicturesHeight = e - A, c(function() {
          _(), h()
        })
      } else d.desktopProfileInfoFillerHeight = "auto", d.desktopProfilePicturesHeight = "auto"
    }
    var b, y;
    "views/frankfurt.html" === s.current.templateUrl ? (b = {
      name: "Frankfurt",
      zipCode: 60313,
      countryCode: "DE",
      country: "Germany",
      seoTitle: l.instant("city_frankfurt_title"),
      seoKeywords: l.instant("city_frankfurt_keywords"),
      seoDescription: l.instant("city_frankfurt_description")
    }, y = {
      latitude: 50.112833,
      longitude: 8.679307
    }) : (b = {
      name: "Berlin",
      zipCode: 10117,
      countryCode: "DE",
      country: "Germany",
      seoTitle: l.instant("city_berlin_title"),
      seoKeywords: l.instant("city_berlin_keywords"),
      seoDescription: l.instant("city_berlin_description")
    }, y = {
      latitude: 52.516275,
      longitude: 13.377704
    }), t.setTitle(b.seoTitle), t.setKeywords(b.seoKeywords), t.setDescription(b.seoDescription), d.scrollDown = function() {
      w("html, body").animate({
        scrollTop: N
      }, 400)
    }, d.showMore = function(e) {
      u(), e.preventDefault(), s.go("^.provider_list")
    }, a.getClientLocation().latitude || u();
    var w = window.jQuery,
      k = window.moment;
    d.providers = null, d.firstProviderId = null;
    var C = 30;
    d.pricePer = function(e) {
      return e.pricePerHour
    }, d.pricePerNumHours = function() {
      return ""
    };
    var N = w(window).height();
    g();
    var P = !1,
      S = 300;
    d.$watch("peppr.screenSize", function(e, i) {
      e !== i && (p.peppr.isScreenLarge && !P ? (_(), P = !0) : p.peppr.isScreenLarge ? _() : (v(), P = !1), h(), c(function() {
        h()
      }))
    });
    var A = 0,
      E = 0;
    w(window).on("resize", function() {
      p.peppr.isScreenLarge ? (N = w(window).height(), E = w(".view-concept .toggle-accordion").height() + w(".view-concept .button-wrapper .columns").height(), d.desktopProfileInfoFillerHeight = N - A - E, d.desktopProfilePicturesHeight = N - A) : (d.desktopProfileInfoFillerHeight = "auto", d.desktopProfilePicturesHeight = "auto")
    }), i.setUseCustomViewContentLoadedFunc(!0), c(function() {
      i.defaultViewContentLoadedFunc(), f(), c(function() {
        w(window).trigger("resize.fndtn.orbit"), w(window).trigger("resize")
      }, 100)
    }, 0)
  }]), angular.module("peppritAngularApp").controller("BookingPaymentConfirmationCtrl", ["$scope", "PepprTools", "BackendRest", "Login", "PepprFormInfo", "Messages", "localStorageService", "$translate", "$location", "$state", "$stateParams", "$sce", function(e, i, n, t, a, o, r, s, l, c, d, p) {
    var u = window.jQuery,
      m = d.bookingId,
      g = .55,
      h = 6,
      v = "shortlistSuggestionsChecked";
    e.showMockup = "fake" === m, e.paymentInfo = {}, e.booking = {}, e.suggestions = [], e.numChecked = 0, e.selCountryOptions = window.geoNamesCountries.geonames, e.showMockup ? (e.paymentInfo.amount = 5, e.paymentInfo.servicePrice = 100, e.booking = {
      provider: {
        name: "Stacey"
      }
    }, e.bookingConfirmationIntroText = p.trustAsHtml(s.instant("thankYouForBookingYouWillShortlyReceiveAReplyFromViaSms", {
      name: e.booking.provider.name
    })), e.bookingConfirmationExplanationText = p.trustAsHtml(s.instant("weHaveBlockedAmountWeWillChargeOnConfirmationFrom", {
      amount: e.booking.bookingFee,
      name: e.booking.provider.name
    }))) : a.getFormInfoPromise().then(function(e) {
      h = e.maxShortlistLength
    }).then(t.getLoginPromise).then(function() {
      e.userProvider = t.getUserProvider(), n.one("booking", m).get().then(function(i) {
        e.paymentInfo.amount = i.bookingFee, e.paymentInfo.servicePrice = i.servicePrice, e.booking = i, e.bookingConfirmationIntroText = p.trustAsHtml(s.instant("thankYouForBookingYouWillShortlyReceiveAReplyFromViaSms", {
          name: i.provider.name
        })), e.bookingConfirmationExplanationText = p.trustAsHtml(s.instant("weHaveBlockedAmountWeWillChargeOnConfirmationFrom", {
          amount: i.bookingFee,
          name: i.provider.name
        }))
      }, function() {
        o.error(s.instant("retrieving_booking_please_try_again_error")), c.go("^.provider_list")
      }).then(), n.one("booking", m).one("shortlist/suggestions").get().then(function(n) {
        e.numChecked = 0;
        var t = r.get(v) || {};
        Number(t.bookingId) !== Number(m) && (t = {}), e.suggestions = u.grep(n, function(i) {
          i.checked = t[i.provider.id] ? t[i.provider.id].checked : !0;
          var n = i.rank >= g;
          return n && i.checked && e.numChecked++, n
        }), e.numChecked > h && (u.each(e.suggestions.reverse(), function() {
          return e.numChecked <= h ? !1 : void(this.checked && (this.checked = !1, e.numChecked--))
        }), e.suggestions.reverse()), i.trackEvent("shortlist", "loaded", null, e.suggestions.length)
      })
    }, function() {
      o.error(s.instant("access_denied_please_login_error")), t.setRedirectPath(l.path()), c.go("^.login")
    }), e.onSuggestionsCheckedChanged = function(n) {
      var t = 0,
        a = {
          bookingId: m
        };
      u.each(e.suggestions, function() {
        a[this.provider.id] = {
          checked: this.checked ? !0 : !1
        }, t += this.checked ? 1 : 0
      }), t > h && (n.checked = !1, a[n.provider.id].checked = !1, t--, o.warning(s.instant("shortlist_max_num_reached", {
        maxNum: h
      }))), r.add(v, a), e.numChecked = t, i.trackEvent("shortlist", "checked", null, t)
    }, e.onSaveShortlist = function() {
      var t = [];
      u.each(e.suggestions, function() {
        this.checked && t.push({
          id: this.provider.id
        })
      }), n.one("booking", m).all("shortlist").post(t).then(function() {
        o.success(s.instant("successfully_saved_shortlist")), e.suggestions = [], i.trackEvent("shortlist", "saved", null, t.length)
      }, function() {
        o.error(s.instant("save_shortlist_error"))
      })
    }, e.clickOk = function() {
      if (e.showMockup) return void c.go("^.booking_confirmation", {
        bookingId: "fake"
      });
      var i = t.getUser();
      i && i.signupIncomplete ? (t.setRedirectPath(c.href("^.booking_admin", {
        bookingId: m
      })), c.go("^.signup_client.2")) : c.go("^.booking_admin", {
        bookingId: m
      })
    }
  }]), angular.module("peppritAngularApp").controller("BookingPaymentCtrl", ["PepprTools", "PepprFormInfo", "Messages", "Login", "BackendRest", "$scope", "$rootScope", "$translate", "$timeout", "$location", "$sce", "$state", "$stateParams", "$window", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    function g(i, n) {
      e.trackEvent("booking_payment", "CREDIT_CARD" === i.method ? "authenticated" : "paid", null, n), e.trackPurchase(o.booking), p.go("^.booking_payment_confirmation", {
        bookingId: _
      })
    }

    function h() {
      var e = v.parseJSON(angular.toJson(o.paymentInfo));
      usePaymill && "CREDIT_CARD" === o.paymentInfo.method && !o.paymentInfo.useStoredTransaction && (e.creditcardNumber = null, e.creditcardExpiryMonth = null, e.creditcardExpiryYear = null, e.creditcardCvv = null), e.useStoredTransaction && (e.storedPaymentLogId = o.bookingRebill.paymentLogId), delete e.servicePrice, a.all("booking/authpayment/" + _).post(e).then(function(i) {
        var n = o.isFreeRideAvailable ? 0 : o.paymentInfo.amount;
        "PAYPAL" !== e.method ? (o.paymentInProgress = !1, g(e, n)) : m.location.href = i.redirectUrl
      }, function(e) {
        o.paymentInProgress = !1;
        var i = null;
        if (e.data && e.data.errorMsgKey) {
          var t = "ENUM_PAYMENT_ERROR_MSG_KEYS_" + e.data.errorMsgKey;
          i = s.instant(t), i === t && (i = null)
        }
        e.data && null === i && (i = e.data.origErrorMsg && e.data.origErrorMsg.length > 0 ? e.data.origErrorMsg : null), null === i && (i = s.instant("unknown_error")), n.error(i)
      })
    }
    var v = window.jQuery,
      _ = u.bookingId,
      f = s.preferredLanguage(),
      b = v("#bpForm");
    if (o.queryParams = c.search(), o.showMockup = "fake" === _, o.paymentInfo = {
        method: "CREDIT_CARD"
      }, o.bookingRebill = null, o.booking = {}, o.cbConfirmChecked = !1, o.paymentInProgress = !1, o.isFreeRideAvailable = !1, o.selCountryOptions = window.geoNamesCountries.geonames, o.debitCancelCharge = 2, o.bookingPaymentIntroNowInfo = o.bookingPaymentIntroLaterInfo = "", o.bookingPaymentCreditCardLineText = d.trustAsHtml(s.instant("booking_payment_creditcard_text", {
        companyName: window.pepprCompanyName
      })), o.bookingPaymentPayPalLineText = d.trustAsHtml(s.instant("booking_payment_paypal_text", {
        companyName: window.pepprCompanyName
      })), o.bookingPaymentDebitCardLineText = d.trustAsHtml(s.instant("booking_payment_debitcard_text", {
        companyName: window.pepprCompanyName
      })), o.bookingPaymentCreditCardRefundInfo = "", o.bookingPaymentDebitCardRefundInfo = "", o.bookingPaymentTacPpText = d.trustAsHtml(s.instant("terms_and_conditions_privacy_policy_agreement", {
        tac: '<a data-reveal-id="' + r.peppr.agbModalId + '">' + s.instant("terms_and_conditions") + "</a>",
        pp: '<a data-reveal-id="' + r.peppr.privacyModalId + '">' + s.instant("privacy_policy") + "</a>"
      })), o.$watch("paymentInfo.method", function() {
        e.refreshFormValidation(b)
      }), o.$watch("paymentInfo.useStoredTransaction", function(e) {
        e && (o.paymentInfo.method = o.bookingRebill.paymentMethod)
      }), i.getFormInfoPromise().then(function(e) {
        o.debitCancelCharge = Number(e.debitRefundServiceFeeEUR).toLocaleString(f, {
          maximumFractionDigits: 2
        }), e.inBeta && v("#pepprShowcaseInfoModal").foundation("reveal", "open")
      }), o.showMockup) {
      var y = o.booking;
      y.provider = {
        name: "Stacey"
      }, o.paymentInfo.amount = 5, o.paymentInfo.servicePrice = 100, o.bookingPaymentIntroNowInfo = d.trustAsHtml(s.instant("booking_payment_intro_now_info", {
        name: y.provider.name,
        fee: o.paymentInfo.amount
      })), o.bookingPaymentIntroLaterInfo = d.trustAsHtml(s.instant("booking_payment_intro_later_info", {
        name: y.provider.name,
        servicefee: o.paymentInfo.servicePrice.toLocaleString(f, {
          maximumFractionDigits: 2
        })
      })), o.bookingPaymentCreditCardRefundInfo = d.trustAsHtml(s.instant("booking_payment_credit_card_cancel_info", {
        name: y.provider.name
      })), o.bookingPaymentDebitCardRefundInfo = d.trustAsHtml(s.instant("booking_payment_debit_cancel_charge", {
        charge: o.debitCancelCharge
      })), o.bookingPaymentRefundText = d.trustAsHtml(s.instant("booking_payment_refund_info", {
        name: y.provider.name
      }))
    } else t.getLoginPromise(!0).then(function() {
      o.userProvider = t.getUserProvider();
      var e = t.getUser();
      a.one("booking/rebill", _).get().then(function(e) {
        e.paymentMethod && (o.bookingRebill = e, o.paymentInfo.useStoredTransaction = !0, o.paymentInfo.method = e.paymentMethod)
      }), a.one("booking", _).get().then(function(i) {
        return o.queryParams.token && o.queryParams.PayerID && "ENQUIRY" === i.state ? (o.paymentInfo = {
          method: "PAYPAL",
          paypalToken: o.queryParams.token,
          paypalPayerId: o.queryParams.PayerID
        }, o.paymentInProgress = !1, void a.one("booking/authpayment", _).customPUT(o.paymentInfo).then(function(e) {
          c.search("token", null), c.search("PayerID", null), o.paymentInProgress = !1, g(e, i.bookingFee)
        }, function() {
          n.error(s.instant("signup_server_error")), o.paymentInProgress = !1
        })) : o.queryParams.token && !o.queryParams.PayerID && "ENQUIRY" === i.state ? (c.search("token", null), void n.error(s.instant("booking_payment_paypal_cancelled"))) : "ENQUIRY" !== i.state ? (n.error(s.instant("booking_payment_wrong_state_error")), void p.go("^.provider", {
          providerId: i.provider.id
        })) : (o.booking = i, o.isFreeRideAvailable = e.freeRideCounter > 0, o.isFreeRideAvailable && i.provider && i.provider.agency && !i.provider.agency.acceptFreeRides && (o.isFreeRideAvailable = !1), o.paymentInfo.amount = i.bookingFee, o.isFreeRideAvailable && (o.paymentInfo.amount = 0), o.paymentInfo.servicePrice = i.servicePrice, o.bookingPaymentIntroNowInfo = d.trustAsHtml(s.instant("booking_payment_intro_now_info", {
          name: i.provider.name,
          fee: o.paymentInfo.amount
        })), o.bookingPaymentIntroLaterInfo = d.trustAsHtml(s.instant("booking_payment_intro_later_info", {
          name: i.provider.name,
          servicefee: o.paymentInfo.servicePrice.toLocaleString(f, {
            maximumFractionDigits: 2
          })
        })), o.bookingPaymentCreditCardRefundInfo = d.trustAsHtml(s.instant("booking_payment_credit_card_cancel_info", {
          name: i.provider.name
        })), o.bookingPaymentDebitCardRefundInfo = d.trustAsHtml(s.instant("booking_payment_debit_cancel_charge", {
          charge: o.debitCancelCharge
        })), o.bookingPaymentRefundText = d.trustAsHtml(s.instant("booking_payment_refund_info", {
          name: i.provider.name
        })), void window.scrollTo(0, 1))
      }, function() {
        n.error(s.instant("retrieving_booking_please_try_again_error")), p.go("^.provider_list")
      })
    }, function() {
      n.error(s.instant("access_denied_please_login_error")), t.setRedirectPath(c.path()), p.go("^.login")
    });
    e.setUseCustomViewContentLoadedFunc(!0), l(e.defaultViewContentLoadedFunc, 0), o.showChat = function() {
      "undefined" != typeof Tawk_API && Tawk_API.showWidget()
    }, o.submitPayment = function() {
      return o.showMockup ? void p.go("^.booking_payment_confirmation", {
        bookingId: "fake"
      }) : (o.paymentInProgress = !0, void(usePaymill && "CREDIT_CARD" === o.paymentInfo.method && !o.paymentInfo.useStoredTransaction ? paymill.createToken({
        number: o.paymentInfo.creditcardNumber,
        exp_month: o.paymentInfo.creditcardExpiryMonth,
        exp_year: o.paymentInfo.creditcardExpiryYear,
        cvc: o.paymentInfo.creditcardCvv,
        amount_int: Math.round(100 * o.booking.bookingFee),
        currency: pepprCurrency,
        cardholder: o.paymentInfo.firstName + o.paymentInfo.lastName
      }, function(e, i) {
        if (e) {
          o.paymentInProgress = !1;
          var t = e.apierror;
          paymillMsgs.codeToPepprMsgKey[e.apierror] ? t = s.instant(paymillMsgs.codeToPepprMsgKey[e.apierror]) || e.apierror : paymillMsgs.codeToMsg[e.apierror] && (t = paymillMsgs.codeToMsg[e.apierror]), n.error(t)
        } else o.paymentInfo.creditcardToken = i.token, h()
      }) : (o.paymentInfo.creditcardToken = null, h())))
    }
  }]), angular.module("peppritAngularApp").controller("BookingConfirmationCtrl", function() {}), angular.module("peppritAngularApp").controller("BookingCtrl", ["BackendRest", "Login", "GeoTools", "PepprTools", "PepprFormInfo", "Messages", "uiGmapGoogleMapApi", "$scope", "$rootScope", "$q", "$translate", "$state", "$timeout", "$stateParams", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    function g() {
      var e = null !== s.durationHours ? s.durationHours : 0;
      s.basePrice = 100 * e, s.extrasPrice = (s.deepThroatChecked ? 5 : 0) + (s.fetishesChecked ? 25 : 0) + (s.dominationChecked ? 15 : 0), s.numExtras = 0, s.deepThroatChecked && s.numExtras++, s.fetishesChecked && s.numExtras++, s.dominationChecked && s.numExtras++
    }

    function h() {
      var e = t.calcPriceAndFee(s.durationHours, s.provider, s.chkServiceOptions);
      s.fee = s.isFreeRideAvailable ? 0 : e.fee, s.numExtras = e.numExtras, s.extrasPrice = e.extrasPrice, s.basePrice = e.basePrice
    }

    function v(e) {
      s.isMapLocation(e) ? (s.showMap = !0, s.isClientLocation = !0, s.isProviderLocation = !1, Modernizr.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
        s.$apply(function() {
          s.mapCenter.latitude = e.coords.latitude, s.mapCenter.longitude = e.coords.longitude, console.log("Map center is now: ", s.mapCenter)
        })
      }) : s.showMap = !1, s.isLocationValid = !1) : (s.showMap = !1, s.isClientLocation = !1, e && e.length > 0 && (s.isProviderLocation = !1, s.isLocationValid = !0, s.providerLocation && (s.isProviderLocation = !0)))
    }

    function _() {
      function e(e, i, a) {
        var o = t.calcStartTime(i, a.fromTime),
          r = t.calcEndTime(e, o, a.toTime);
        if ("23:59:00" === a.toTime || "23:59:59" === a.toTime) {
          var l = moment(e).add("days", 1),
            c = s.dayToAvailability[l.day()];
          if (c && "00:00:00" === c.fromTime) {
            var d = t.calcStartTime(l, c.fromTime);
            r = t.calcEndTime(l, d, c.toTime)
          }
        }
        return e.isAfter(o) && e.isBefore(r) && n.isAfter(o) && n.isBefore(r) ? !0 : !1
      }
      if (s.provider) {
        s.isBookingTimeAvailable = !1, f(s.quickBookingDateTime);
        var i = t.combineDateAndTime(moment(s.bookingDate), moment(s.bookingTime)).add("seconds", 1);
        s.isBookingTimeConstraintSatisfied = !0, s.distanceRequiredTravelCostsConfirmation && s.provider.bookingUpfrontHoursTravel > 0 ? s.isBookingTimeConstraintSatisfied = i.isAfter(moment().seconds(0).add("hours", s.provider.bookingUpfrontHoursTravel)) : s.provider.bookingUpfrontHours > 0 && (s.isBookingTimeConstraintSatisfied = -2 === s.quickBookingDateTime || i.isAfter(moment().seconds(0).add("hours", s.provider.bookingUpfrontHours))), s.distanceRequiredTravelCostsConfirmation && s.provider.bookingMinHoursTravel > 0 && s.isBookingTimeConstraintSatisfied === !0 ? s.isBookingTimeConstraintSatisfied = s.durationHours >= s.provider.bookingMinHoursTravel : s.provider.bookingMinHours > 0 && s.isBookingTimeConstraintSatisfied === !0 && (s.isBookingTimeConstraintSatisfied = s.durationHours >= s.provider.bookingMinHours);
        var n = moment(i).add("hours", s.durationHours).subtract("seconds", 1);
        if (-2 === s.quickBookingDateTime) return void(s.isBookingTimeAvailable = !0);
        var a = s.dayToAvailability[i.day()];
        if (a && e(i, i, a)) s.isBookingTimeAvailable = !0;
        else {
          var o = moment(i).subtract("days", 1);
          a = s.dayToAvailability[o.day()], a && e(i, o, a) && (s.isBookingTimeAvailable = !0)
        }
      }
    }

    function f(e) {
      var i = null;
      e > 0 ? i = moment().add("hours", e).add("minutes", 5).seconds(0).millisecond(0).toDate() : -2 === e && (i = moment().add("minutes", 5).seconds(0).millisecond(0).toDate()), null === i || s.bookingDate && i.getTime() === s.bookingDate.getTime() || (s.bookingDate = i, s.bookingTime = new Date(i))
    }

    function b(e) {
      e > 0 ? s.durationHours = e : 0 > e && (s.durationHours = 12)
    }

    function y() {
      var e = s.distanceRequiredTravelCostsConfirmation;
      if (!s.provider || !s.provider.homeLocation || s.provider.travelConfirmationThresholdKm <= 0) s.distanceRequiredTravelCostsConfirmation = !1;
      else {
        var i = n.distanceKm(s.mapCenter.latitude, s.mapCenter.longitude, s.provider.homeLocation.latitude, s.provider.homeLocation.longitude);
        s.distanceRequiredTravelCostsConfirmation = i > s.provider.travelConfirmationThresholdKm ? !0 : !1
      }
      e !== s.distanceRequiredTravelCostsConfirmation && _()
    }

    function w() {
      r.then(function(e) {
        E && e.event.trigger(E, "resize")
      })
    }

    function k(e) {
      e && u(w)
    }
    var C = jQuery,
      N = !1,
      P = !1;
    s.providerId = m.providerId, s.showMockup = "fake" === s.providerId, s.bookingTime = new Date, s.bookingTime.setHours(0, 0, 0, 0), s.isBookingTimeAvailable = !0, s.isBookingTimeConstraintSatisfied = !0, s.distanceRequiredTravelCostsConfirmation = !1, s.isFreeRideAvailable = !1, s.provider = null, s.profilePicture = {}, s.providerLocation = null, s.clientLocation = null, s.clientPosition = {
      lat: null,
      lng: null
    }, s.locationSearchInput = null, s.locationSearchResults = [], s.locationSearchActive = !1, s.showMore = !1, s.showMap = !1, s.isClientLocation = !1, s.isProviderLocation = !1, s.isLocationValid = !1, s.inputHasFocus = !1, s.basePrice = 100, s.extrasPrice = 0, s.fee = 5, s.numExtras = 0, s.durationHours = 1, s.locationType = null, s.notes = null, s.availLocationTypes = {}, s.dayToAvailability = {}, s.confirmableServicesAvailable = !1, s.deepThroatChecked = !1, s.fetishesChecked = !1, s.dominationChecked = !1, s.chkServiceOptions = [], s.selLocationTypeOptions = [], s.selQuickBookingDateTimeOptions = [], s.quickBookingDateTime = 0;
    var S = d.instant("hours");
    s.selQuickDurationHoursOptions = [], s.quickDurationHours = 1, s.filterConfirmableServices = function(e) {
      return e.fee > 0 || e.requiresPhoneCall
    }, s.filterLocationTypes = function(e) {
      return s.availLocationTypes[e.value] === !0
    }, s.priceFraction = function(e) {
      return e ? (e = e.toFixed(2), e.substring(e.length - 2)) : "00"
    }, s.isMapLocation = function(e) {
      return e && "INCALL" !== e && "INCALL_BROTHEL" !== e
    }, s.locationResultDisplayStr = function(e) {
      return n.locationToStr(e)
    }, s.chooseLocationResult = function(e) {
      s.clientLocation = e, s.showMap = !1, s.clientPosition.lat = parseFloat(e.lat), s.clientPosition.lng = parseFloat(e.lon), s.mapCenter.latitude = s.clientPosition.lat, s.mapCenter.longitude = s.clientPosition.lng, s.locationSearchInput = null, s.locationSearchResults = [], s.isLocationValid = s.isClientLocation && s.clientPosition.lat && s.clientPosition.lng
    }, s.locationSearchInputUpdated = function() {
      return s.locationSearchInput ? (s.locationSearchResults = [], s.locationSearchActive = !0, s.showMap = !1, N && (u.cancel(N), N = !1), void(N = u(function() {
        s.locationSearchResults = null, n.encodeAddressQuery(s.locationSearchInput).then(function(e) {
          var i = n.getAllResultsWithStreetAddress(e);
          s.locationSearchActive = !1, s.locationSearchResults = n.resultsToLocations(i)
        }, function() {
          s.locationSearchActive = !1, s.locationSearchResults = null
        }), N = !1
      }, 600))) : void(s.isMapLocation(s.locationType) && (s.showMap = !0))
    }, s.inputGotFocus = function() {
      l.peppr.isScreenSmall && !l.peppr.isScreenMedium && (s.inputHasFocus = !0, P && (u.cancel(P), P = !1))
    }, s.inputLostFocus = function() {
      s.inputHasFocus && (P = u(function() {
        s.inputHasFocus = !1, P = !1
      }, 600))
    }, s.$watch("deepThroatChecked", g), s.$watch("fetishesChecked", g), s.$watch("dominationChecked", g);
    var A = s.showMockup ? g : h;
    s.$watch("durationHours", A), s.$watch("provider", A), s.$watch("isFreeRideAvailable", A), s.$watch("chkServiceOptions", h, !0), s.$watch("quickBookingDateTime", f), s.$watch("quickDurationHours", b), s.$watch("locationType", v), s.$watch("bookingDate", _), s.$watch("bookingTime", _), s.$watch("durationHours", _), s.$watch("mapCenter.latitude", y), s.$watch("mapCenter.longitude", y), s.$watch("showMap", k), t.setUseCustomViewContentLoadedFunc(!0);
    var E = null;
    angular.extend(s, {
      mapCenter: {
        latitude: 52.5,
        longitude: 13.36,
        zoom: 14
      },
      mapEvents: {
        tilesloaded: function(e) {
          E = e, w()
        }
      }
    }), i.getLoginPromise(!0).then(function() {
      var e = i.getUser();
      s.isFreeRideAvailable = e.freeRideCounter > 0, s.isFreeRideAvailable && s.provider && s.provider.agency && !s.provider.agency.acceptFreeRides && (s.isFreeRideAvailable = !1), e.phoneValid || (o.error(d.instant("access_denied_please_verify_your_phone_number")), t.setRedirectPath("/booking/" + s.providerId), p.go("^.phone_confirm"))
    }, function() {
      o.error(d.instant("access_denied_please_login_error")), i.setRedirectPath("/booking/" + s.providerId), p.go("^.signup_client.1")
    });
    var I;
    if (s.showMockup) {
      var M = {
        id: 3,
        lastModified: 1387016610508,
        name: "Stacey",
        claim: null,
        email: "you3@example.com",
        phoneNumber: "+49176123123",
        sex: "FEMALE",
        birthDate: 13863744e5,
        heightCm: 168,
        hairColour: "brunette",
        hairLengthCm: 54,
        figure: "SLIM",
        bustSize: "B",
        bodyHair: "MEDIUM",
        pubicHair: "GROOMED",
        sexuality: "HOMO",
        ethnicity: "AFRICAN",
        pierced: !0,
        tattooed: !0,
        smoker: !0,
        languages: null,
        nationality: null,
        pricePerHour: 120,
        description: null,
        homeLocation: null,
        services: [{
          service: {
            id: 1,
            nameId: "fetish"
          },
          fee: 25,
          requiresPhoneCall: !0
        }, {
          service: {
            id: 2,
            nameId: "domination"
          },
          fee: 10,
          requiresPhoneCall: !1
        }]
      };
      M.claim = {
        name: "schlanke SchÃ¶nheit"
      }, s.provider = M, s.chkServiceOptions = t.optionsToAssociationArray("Service_", M.services, "service");
      var L = c.defer();
      L.resolve({
        provider: M
      }), I = L.promise, u(t.defaultViewContentLoadedFunc, 0)
    } else I = e.one("provider", s.providerId).get(), I.then(function(e) {
      var o = e.provider;
      o.claim && o.claim.nameId && (o.claim.name = d.instant(o.claim.nameId)), s.profilePicture = e.profilePictures && e.profilePictures.length > 0 ? e.profilePictures[0] : {}, s.dayToAvailability = {}, C.each(o.availability, function() {
        s.dayToAvailability[window.momentDayNameToIdx[this.day]] = this
      }), s.isFreeRideAvailable = i.isLoggedIn() ? i.getUser().freeRideCounter > 0 : !1, s.isFreeRideAvailable && o.agency && !o.agency.acceptFreeRides && (s.isFreeRideAvailable = !1), s.provider = o, s.chkServiceOptions = t.optionsToAssociationArray("Service_", o.services, "service"), s.confirmableServicesAvailable = !1, C.each(s.chkServiceOptions, function() {
        return s.filterConfirmableServices(this) ? (s.confirmableServicesAvailable = !0, !1) : void 0
      });
      var r = o.bookingMinHours;
      0 === r && (r = 1), s.selQuickDurationHoursOptions = [{
        value: r,
        name: r + " " + S
      }, {
        value: r + 1,
        name: r + 1 + " " + S
      }, {
        value: r + 3,
        name: r + 3 + " " + S
      }, {
        value: -1,
        name: d.instant("booking_all_night_long")
      }, {
        value: 0,
        name: d.instant("booking_duration_other")
      }], s.quickDurationHours = r, s.selQuickBookingDateTimeOptions = [];
      var l = o.bookingUpfrontHours > 0 ? o.bookingUpfrontHours : 1;
      s.quickBookingDateTime = l;
      for (var c = 0; 4 > c; c++) s.selQuickBookingDateTimeOptions.push({
        value: l,
        name: d.instant("booking_in_n_hours", {
          hours: l
        })
      }), l = 2 * l;
      s.selQuickBookingDateTimeOptions.push({
        value: 0,
        name: d.instant("booking_in_other")
      }), t.isInstantBookingAvailable(o) && (s.selQuickBookingDateTimeOptions = [{
        value: -2,
        name: d.instant("instant_booking")
      }].concat(s.selQuickBookingDateTimeOptions), s.quickBookingDateTime = -2), C.each(o.locationTypes, function() {
        s.availLocationTypes[this] = !0
      }), u(t.defaultViewContentLoadedFunc, 0), n.reverseGeocode(o.homeLocation.latitude, o.homeLocation.longitude).then(function(e) {
        var i = n.getFirstResult(e);
        i && (s.providerLocation = n.resultToLocation(i))
      }), a.getFormInfoPromise().then(function(e) {
        e.inBeta && u(function() {
          C("#pepprShowcaseInfoModal").foundation("reveal", "open"), window.scrollTo(0, 1)
        })
      })
    });
    a.getFormInfoPromise().then(function(e) {
      I.then(function() {
        s.selLocationTypeOptions = t.optionsToScopeArray("ENUM_LocationType_", e.locationTypeOptions, {
          name: s.provider.name
        }), l.peppr.features.showPrices || (s.locationType = "ESCORT")
      })
    }), s.acceptPosition = function() {
      s.showMap = !1, s.clientPosition.lat = s.mapCenter.latitude, s.clientPosition.lng = s.mapCenter.longitude, n.reverseGeocode(s.mapCenter.latitude, s.mapCenter.longitude).then(function(e) {
        var i = n.getFirstResult(e);
        i && (s.clientLocation = n.resultToLocation(i), s.isLocationValid = s.isClientLocation)
      })
    }, s.clickSubmitBookingForm = function() {
      if (!s.bookingform.$invalid) {
        if (s.showMockup) return void p.go("^.booking_payment", {
          bookingId: "fake"
        });
        var n = {
          client: {
            username: i.getUserName()
          },
          provider: {
            id: s.providerId
          },
          instantBooking: -2 === s.quickBookingDateTime,
          dateAndTime: t.combineDateAndTime(moment(s.bookingDate), moment(s.bookingTime)).toDate(),
          durationHours: s.durationHours,
          locationType: s.locationType,
          notes: s.notes
        };
        n.services = [], C.each(s.chkServiceOptions, function() {
          this.checked && n.services.push({
            service: {
              id: this.id
            }
          })
        }), n.location = {
          latitude: s.clientPosition.lat,
          longitude: s.clientPosition.lng
        }, e.all("booking/enquiry").post(n).then(function(e) {
          t.trackEvent("enquiry", "created"), p.go("^.booking_payment", {
            bookingId: e.id
          })
        }, function() {
          o.error(d.instant("creating_boooking_failed_please_check_and_try_again"))
        })
      }
    }
  }]), angular.module("peppritAngularApp").controller("BetaCtrl", ["ClientIntro", "FullHeightPage", "PepprTools", "PepprFormInfo", "Messages", "BackendRest", "$translate", "$timeout", "$state", "$rootScope", "$scope", function(e, i, n, t, a, o, r, s, l, c, d) {
    d.signup = {
      type: "BETA",
      email: "",
      name: "",
      homeLocation: {
        latitude: 52.5170365,
        longitude: 13.3888599
      }
    }, t.getFormInfoPromise().then(function(e) {
      e.betaSignupEnabled || (a.warning("Unsere Beta Aktion is bereits beendet. Aber du kannst nun bereits Ã¼ber PEPPR buchen!"), l.go("^.root"))
    }), n.hackImageUrls(".view-beta img.peppr-logo"), n.setUseCustomViewContentLoadedFunc(!0), n.hideSitename(), i.enableFullHeight(d), s(function() {
      n.defaultViewContentLoadedFunc()
    }), d.clickEnterForm = function() {
      o.all("signup").post(d.signup).then(function() {
        a.success(r.instant("successfully_signed_you_up")), d.signup.email = "", d.signup.name = ""
      }, function() {
        a.error(r.instant("signup_server_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("AlarmCtrl", ["GeoTools", "Messages", "localStorageService", "BackendRest", "$translate", "$interval", "$state", "$scope", function(e, i, n, t, a, o, r, s) {
    function l() {
      var e = s.settings;
      return e.forename.length > 0 && e.phoneNumber.length > 4 && e.emergencyNumber.length > 4 && e.pattern.length > 0
    }

    function c() {
      if (s.currAlarm) {
        s.durationRemainingMs = moment.duration(moment(s.currAlarm.alarmTime).diff(moment())).asMilliseconds(), s.durationRemainingMs = s.durationRemainingMs < 0 ? 0 : s.durationRemainingMs;
        var e = moment.duration(moment(s.currAlarm.alarmTime).diff(s.currAlarm.createdOn)).asMilliseconds();
        s.currAlarmPercentage = e > 0 ? 100 * (1 - s.durationRemainingMs / e) : 0, s.currAlarmPercentage = s.currAlarmPercentage < 0 ? 0 : s.currAlarmPercentage
      }
    }

    function d() {
      n.add(m, s.currAlarm), n.add(g, s.newAlarm), n.add(h, s.settings)
    }

    function p(e) {
      return e.disabledOn || e.expiredOn
    }

    function u(e) {
      e ? (s.currAlarm = jQuery.extend(s.currAlarm, e), p(s.currAlarm) && (s.currAlarm = null), c()) : s.currAlarm = null, d()
    }
    var m = "currAlarm",
      g = "newAlarm",
      h = "alarmSettings";
    s.showSettings = !0, s.showStop = !1, s.geocodingWorking = !1, s.alarmDurationMinutes = 120, s.durationRemainingMs = 0, s.stop = {
      pattern: null
    }, s.settings = {
      forename: "",
      phoneNumber: "",
      emergencyNumber: "",
      pattern: ""
    }, jQuery.extend(s.settings, n.get(h) || null);
    var v = {
      forename: "",
      phoneNumber: "",
      emergencyNumber: "",
      pattern: "",
      address: "",
      alarmTime: moment(),
      latitude: 0,
      longitude: 0
    };
    s.newAlarm = jQuery.extend({}, v, n.get(g) || null), s.currAlarm = n.get(m) || null, s.currAlarmPercentage = 0, s.$watch("alarmDurationMinutes", function() {
      s.newAlarm.alarmTime = moment().add(Number(s.alarmDurationMinutes), "minutes")
    });
    var _ = o(c, 1e3);
    null !== s.currAlarm && (p(s.currAlarm) ? s.currAlarm = null : (c(), t.one("alarm", s.currAlarm.uuid).get().then(function(e) {
      u(e)
    }, function() {
      s.currAlarm = null
    })));
    var f = window.Modernizr.prefixed("requestAnimationFrame", window),
      b = 0,
      y = 0;
    ! function w() {
      if (r.is("app.alarm")) {
        if (f(w), 100 >= y) return void y++;
        var e = jQuery(".view-alarm .clock"),
          i = jQuery(".pie.spinner", e).css("transform");
        if (i && "none" !== i) {
          var n = Number(/matrix\(([-0-9.]*),.*/.exec(i)[1]),
            t = Number(/matrix\(([-0-9.]*, ){2}([-0-9.]*),.*/.exec(i)[2]),
            a = Math.atan2(t, n),
            o = 0 >= a ? -(a / Math.PI * 180) : 360 - a / Math.PI * 180,
            l = o / 360 * 100,
            c = l > b ? l - b : 1;
          0 === b && (c = 0), y % 60 === 0 && console.log("percent: " + l + " prev: " + b + " animDiff: " + c + " target: " + s.currAlarmPercentage), l + 1.1 * c >= s.currAlarmPercentage && l - 1.2 * c < s.currAlarmPercentage ? jQuery(".pie.spinner, .pie.filler, .mask", e).css("animationPlayState", "paused") : jQuery(".pie.spinner, .pie.filler, .mask", e).css("animationPlayState", "running"), b = l, y++
        }
      }
    }(), s.onSaveSettings = function(e) {
      s.settings.pattern = e, d(), s.showSettings = !l()
    }, s.onLocateMe = function() {
      s.geocodingWorking = !0, e.requestGeoLocation().then(function(i) {
        return e.reverseGeocode(i.coords.latitude, i.coords.longitude)
      }, function() {
        i.error(a.instant("main_geocoding_error")), s.geocodingWorking = !1
      }).then(function(i) {
        s.geocodingWorking = !1;
        var n = e.getFirstResult(i);
        n && (s.newAlarm.address = n.formatted_address)
      }, function() {
        i.error(a.instant("main_geocoding_error")), s.geocodingWorking = !1
      })
    }, s.onCreateAlarm = function(n) {
      return n !== s.settings.pattern ? (i.error(a.instant("wrong_pattern_try_again")), s.showConfirmPattern = !1, void(s.newAlarm.pattern = null)) : void e.requestGeoLocation().then(function(e) {
        return jQuery.extend(s.newAlarm, s.settings), s.newAlarm.latitude = e.coords.latitude, s.newAlarm.latitude = e.coords.longitude, t.all("alarm").post(s.newAlarm)
      }, function() {
        s.showConfirmPattern = !1, s.newAlarm.pattern = null, i.error(a.instant("main_geocoding_error"))
      }).then(function(e) {
        s.newAlarm.latitude = null, s.newAlarm.longitude = null, s.newAlarm.address = null, s.newAlarm.pattern = null, s.showConfirmPattern = !1, u(e)
      }, function() {
        s.showConfirmPattern = !1, s.newAlarm.pattern = null, i.error("Failed to create alarm")
      })
    }, s.onStopAlarm = function() {
      if (null !== s.stop.pattern) {
        var e = {
          pattern: s.stop.pattern
        };
        t.one("alarm/" + s.currAlarm.uuid + "/disable").get(e).then(function(e) {
          i.success("Successfully disabled alarm"), u(e), s.stop.pattern = null, s.showStop = !1
        }, function(e) {
          404 === e.status ? s.currAlarm = null : i.error("Wrong PIN, try again"), s.stop.pattern = "", s.showStop = !1
        })
      } else s.stop.pattern = ""
    }, s.onFinishPattern = function(e, i) {
      console.log("pattern", e), i.reset()
    }, s.showSettings = !l(), s.$on("$destroy", function() {
      o.cancel(_)
    })
  }]), angular.module("peppritAngularApp").controller("AgencyListCtrl", ["$scope", "BackendRest", "Login", "Messages", "$translate", "$state", function(e, i, n, t, a, o) {
    var r = window.jQuery;
    e.agencies = [], e.editAgency = function(e) {
      o.go("^.agency_admin", {
        agencyId: e.id
      })
    }, e.numActiveProviders = function(e) {
      var i = 0;
      return r.each(e.providers, function() {
        i += "ACTIVE" === this.state ? 1 : 0
      }), i
    }, e.numProviders = function(e) {
      var i = 0;
      return r.each(e.providers, function() {
        i += "DELETED" !== this.state ? 1 : 0
      }), i
    }, n.getLoginPromise().then(function() {
      return n.isLoggedIn() && e.isAdmin ? void i.all("agency").getList().then(function(i) {
        e.agencies = i
      }) : void o.go("^.provider_list")
    })
  }]), angular.module("peppritAngularApp").controller("AgencyFaqCtrl", ["$scope", "Messages", "Login", "BackendRest", "$translate", "$timeout", "$state", function(e, i, n, t, a, o, r) {
    var s = window.jQuery;
    e.faqEntries = [], e.newEntry = {
      section: "AGENCY"
    }, e.isAdmin = !1;
    var l = a.preferredLanguage();
    e.faqLangFilter = function(i) {
      return e.isAdmin ? !0 : i.langCode === l
    }, t.all("faq/search").getList({
      section: "AGENCY"
    }).then(function(i) {
      e.faqEntries = i
    }, function() {
      i.error(a.instant("unknown_error"))
    }), n.getLoginPromise().then(function() {
      e.isAdmin = n.isAdmin(), o(function() {
        s(".view-agency-faq").foundation()
      }, 0)
    }), e.clickTopic = function(i) {
      e.newEntry = s.extend({}, i)
    }, e.clickNewTopicForm = function() {
      t.all("faq").post(e.newEntry).then(function() {
        i.success("Saved successfully"), r.reload()
      }, function() {
        i.error(a.instant("unknown_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("AgencyBookingListCtrl", ["$scope", "BackendRest", "Login", "Messages", "$translate", "$state", "$stateParams", function(e, i, n, t, a, o, r) {
    function s() {
      i.all("booking").getList(e.showArchived ? {
        archivedOnly: !0
      } : void 0).then(function(i) {
        e.bookings = i
      })
    }
    var l = window.moment,
      c = r.agencyId,
      d = r.providerId,
      p = r.userId;
    e.isClient = p && !d && !c, e.isAgency = !!c, e.showArchived = !1, e.bookings = [], e.$watch("showArchived", function() {
      s()
    }), e.bookingDateTime = function(e) {
      return l(e.dateAndTime).format(a.instant("short_date_time_format"))
    }, e.showBooking = function(i, n) {
      e.isClient ? o.go("^.booking_admin", {
        bookingId: n.id
      }) : c ? o.go("^.agency_booking", {
        bookingId: n.id
      }) : o.go("^.provider_booking", {
        bookingId: n.id
      }), i.preventDefault()
    }, e.deleteBooking = function(e) {
      window.confirm(a.instant("delete_booking_do_you_really_want_to_delete")) && i.one("booking", e.id).remove().then(function() {
        t.success(a.instant("success")), s()
      }, function() {
        t.error(a.instant("signup_server_error"))
      })
    }, n.getLoginPromise().then(function() {
      return e.userAgency = n.getUserAgency(), e.userProvider = n.getUserProvider(), n.isLoggedIn() ? void s() : void o.go("^.provider_list")
    })
  }]), angular.module("peppritAngularApp").controller("AgencyBookingCtrl", ["$scope", "PepprTools", "GpsRest", "BackendRest", "Login", "Messages", "Comet", "uiGmapIsReady", "uiGmapGoogleMapApi", "$timeout", "$translate", "$location", "$state", "$stateParams", function(e, i, n, t, a, o, r, s, l, c, d, p, u, m) {
    function g() {
      t.one(e.isClient ? "booking/admin" : "agency/booking", P).get().then(function(i) {
        i.booking.travelUuid && b(i.booking.travelUuid, !0), e.booking = i.booking, e.messages = i.pushMessages, e.review = i.reviews && 0 !== i.reviews.length ? null : {
          reviewedPerson: "PROVIDER",
          reviewText: null,
          ratingCategory1: 0,
          ratingCategory2: 0,
          ratingCategory3: 0
        }, window.setTimeout(function() {
          N(".view-agency-booking .panel").css("width", "100px"), c(function() {
            N(".view-agency-booking .panel").css("width", "")
          })
        }, 1)
      })
    }

    function h(e, i, n, t, a) {
      t = t || "lat", a = a || "lon", n = n || 5;
      var o;
      return N.grep(i, function(i) {
        var r = new e.LatLng(i[t], i[a]);
        return o && e.geometry.spherical.computeDistanceBetween(o, r) < n ? !1 : !0
      })
    }

    function v(e) {
      var i = null;
      return N.each(e, function() {
        i = null === i || moment(this[0]).isAfter(i) ? moment(this[0]) : i
      }), i
    }

    function _(e, i, n, t, a, o) {
      return {
        id: e,
        info: i,
        coords: {
          latitude: n.lat(),
          longitude: n.lng()
        },
        showWindow: !1,
        icon: t ? {
          url: t,
          size: new window.google.maps.Size(a, o),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(a / 2, o / 2)
        } : null,
        draggable: !1
      }
    }

    function f(e, i, n, t) {
      var a = {
        id: n,
        visible: !0,
        "static": !0,
        draggable: !1,
        geodesic: !0,
        stroke: {
          weight: 3,
          color: "#6060FB"
        },
        path: [],
        bounds: t
      };
      return N.each(i, function() {
        var i = new e.LatLng(this[1], this[2]);
        t.extend(i), a.path.push(i)
      }), a
    }

    function b(i, t) {
      l.then(function(a) {
        var o = {};
        t && e.travelLastUpdate && (o.since = moment(e.travelLastUpdate).lang(BACKEND_DATE_LANG).format(BACKEND_DATE_FORMAT));
        var r = new Date;
        e.travelLastPosition = t ? e.travelLastPosition : null, n.one("travel", i).getList("positions", o).then(function(i) {
          var n = "travel_" + P;
          e.travelLastPosition = v(i) || e.travelLastPosition;
          var t = new a.LatLngBounds;
          if (o.since && 0 !== e.travelPositions.length) {
            i = h(a, i, 5, 1, 2);
            var s = e.travelPositions[0];
            N.each(i, function() {
              var e = new a.LatLng(this[1], this[2]);
              s.bounds.extend(e), s.path.push(e)
            })
          } else i = h(a, i, 5, 1, 2), e.travelPositions = [f(a, i, n, t)];
          if (e.showMap = pepprFeatures.enableTracking && ("PROVIDER_ACCEPTED" === e.booking.state || "ACCEPTED" === e.booking.state), i.length > 0) {
            var l = i[i.length - 1];
            e.mapMarkers = [_("marker_" + n, {}, new a.LatLng(l[1], l[2]))]
          }
          e.showMap && (t = e.travelPositions[0].bounds, t = new a.LatLngBounds(t.getSouthWest(), t.getNorthEast()), t.extend(new a.LatLng(t.getCenter().lat() + .004, t.getCenter().lng() + .004)), t.extend(new a.LatLng(t.getCenter().lat() - .004, t.getCenter().lng() - .004)), w(t)), e.travelLastUpdate = r
        }, function() {
          e.travelLastUpdate = !1
        })
      })
    }

    function y() {
      s.promise(1).then(function(e) {
        e.forEach(function(e) {
          google.maps.event.trigger(e.map, "resize")
        })
      })
    }

    function w(i) {
      s.promise(1).then(function() {
        var n = i.getNorthEast(),
          t = i.getSouthWest();
        e.map.bounds = {
          northeast: {
            latitude: n.lat(),
            longitude: n.lng()
          },
          southwest: {
            latitude: t.lat(),
            longitude: t.lng()
          }
        }
      })
    }

    function k() {
      C && (r.unsubscribe(C), C = null), r.subscribe("/booking/" + P + "/actions", function(i) {
        var n = i.data;
        console.log("comet listener called with data: ", n), "newPositions" === n.action ? (b(e.booking.travelUuid, !0), e.$digest()) : "entityUpdated" === n.action && g()
      }).then(function(i) {
        C = i, e.$on("$destroy", function() {
          r.unsubscribe(i)
        })
      })["catch"](function() {
        console.log("Subscription failed")
      })
    }
    var C, N = window.jQuery,
      P = m.bookingId,
      S = {
        latitude: pepprLocation.lat,
        longitude: pepprLocation.lon
      },
      A = 9;
    e.isClient = u.is("app.booking_admin"), e.isAdmin = !1, e.showMockup = "fake" === P, e.bookingNotesPlaceholder = e.isClient ? "" : d.instant("booking_notes_placeholder_provider"), e.booking = {}, e.bookingDate = !1, e.bookingTime = !1, e.showMap = !1, e.showStartTracking = !1, e.mapMarkers = [], e.travelPositions = [], e.travelLastPosition = null, e.travelLastUpdate = !1, e.messages = [], e.notes = null, e.review = null, angular.extend(e, i.getDefaultMapObj(l, S, A)), a.getLoginPromise().then(function() {
      return a.isLoggedIn() ? (e.isAdmin = a.isAdmin(), void g()) : (o.error(d.instant("access_denied_please_login_error")), a.setRedirectPath(p.path()), void u.go("^.login"))
    }, function() {
      o.error(d.instant("access_denied_please_login_error")), a.setRedirectPath(p.path()), u.go("^.login")
    }).then(r.getPromise()).then(k), e.doesAcceptChatMessage = function() {
      return e.isClient && e.booking.doesAcceptClientChat || !e.isClient && e.booking.doesAcceptProviderChat
    }, e.acceptBooking = function(i, n, a) {
      if (pepprFeatures.enableTracking) return void(e.showStartTracking = !0);
      a = a || e.booking.id;
      var r = {
        acceptBooking: !0,
        notes: e.notes,
        suppressNotify: i === !0
      };
      t.all((n ? "booking/response/" : "agency/booking/response/") + a).post(r).then(function(i) {
        o.success(d.instant("agency_successfully_accepted_the_booking")), e.notes = null, Number(a) === Number(e.booking.id) ? e.booking = i : "SHORTLIST" === e.booking.state && n && u.go("^.app.provider_booking", {
          bookingId: a
        }), g()
      }, function() {
        o.error(d.instant("agency_failed_to_respond_to_booking"))
      })
    }, e.declineBooking = function(i, n, a) {
      a = a || e.booking.id;
      var r = {
        acceptBooking: !1,
        notes: e.notes,
        suppressNotify: i === !0
      };
      t.all((n ? "booking/response/" : "agency/booking/response/") + a).post(r).then(function(i) {
        o.success(d.instant("agency_successfully_declined_the_booking")), e.notes = null, Number(a) === Number(e.booking.id) && (e.booking = i), g()
      }, function() {
        o.error(d.instant("agency_failed_to_respond_to_booking"))
      })
    }, e.onStartModifyBooking = function() {
      e.bookingDate = new Date(e.booking.dateAndTime), e.bookingTime = new Date(e.booking.dateAndTime), e.showModifyBooking = !0
    }, e.onSubmitModifyBooking = function() {
      if (e.modifyBookingForm.$valid) {
        var n = JSON.parse(JSON.stringify(e.booking));
        n.dateAndTime = i.combineDateAndTime(moment(e.bookingDate), moment(e.bookingTime)), t.one("booking", n.id).customPUT(n).then(function(i) {
          e.booking = i, o.success(d.instant("agency_successfully_modified_the_booking")), e.showModifyBooking = !1
        }, function() {
          o.error(d.instant("agency_failed_to_modify_booking"))
        })
      }
    }, e.acceptShortlistOffer = function(i) {
      e.acceptBooking(!1, !0, i.id)
    }, e.declineShortlistOffer = function(i) {
      e.declineBooking(!1, !0, i.id)
    }, e.startTracking = function() {
      window.open(i.getShareTrackUrl(P))
    }, e.refundBooking = function() {
      t.all("booking/refund/" + P).post().then(function(i) {
        o.success(d.instant("successfully_refunded_the_booking")), e.notes = null, e.booking = i, g()
      }, function() {
        o.error(d.instant("unknown_error"))
      })
    }, e.sendChatMessage = function() {
      e.notes && 0 !== e.notes.trim().length && t.all((e.isClient ? "booking/chat/" : "agency/booking/chat/") + P).post(e.notes).then(function(i) {
        o.success(d.instant("successfully_sent_message")), e.notes = null, e.booking = i, g()
      }, function() {
        o.error(d.instant("unknown_error"))
      })
    }, e.sendChatMessageAsCustomer = function() {
      e.notes && 0 !== e.notes.trim().length && t.all("booking/chat/" + P).post(e.notes).then(function(i) {
        o.success(d.instant("successfully_sent_message")), e.notes = null, e.booking = i, g()
      }, function() {
        o.error(d.instant("unknown_error"))
      })
    }, e.sendRating = function() {
      0 !== e.review.ratingCategory1 && 0 !== e.review.ratingCategory2 && 0 !== e.review.ratingCategory3 && t.all("booking/review/" + P).post(e.review).then(function() {
        o.success(d.instant("successfully_sent_review")), e.review.ratingCategory1 = e.review.ratingCategory2 = e.review.ratingCategory3 = 0, e.review.reviewText = null, g()
      }, function() {
        o.error(d.instant("unknown_error"))
      })
    }, e.$watch("showMap", y)
  }]), angular.module("peppritAngularApp").controller("AgencyAdminCtrl", ["$scope", "BackendRest", "Login", "Messages", "$translate", "$state", "$stateParams", function(e, i, n, t, a, o, r) {
    function s(t) {
      e.agency = null, e.providers = null, !e.userAgency && n.isAdmin() ? i.one("agency", c).get().then(function(i) {
        e.agency = i.agency, e.providers = i.providers
      }) : t ? i.one("user").get().then(function(i) {
        n.setUpdatedUserData(i), e.agency = n.getUserAgency(), e.providers = n.getUserProviders()
      }) : (e.agency = n.getUserAgency(), e.providers = n.getUserProviders())
    }
    var l = window.jQuery,
      c = r.agencyId;
    e.agency = null, e.providers = null, e.showContract = !1, e.agencyContractHtml = null, e.responseRate = 0, e.contractSignatureInfo = {
      companyName: "",
      registerNumber: "",
      fullAddress: "",
      directorName: "",
      signedBy: "",
      contactName: "",
      contactEmail: "",
      contactPhoneNumber: ""
    }, e.$watch("agency", function(n) {
      n && "REVIEWED" === n.state && !n.contractSignedOn ? i.one("agency/contract", c).get().then(function(i) {
        e.agencyContractHtml = i.htmlText
      }) : e.agencyContractHtml = null
    }), e.$watch("providers", function(i) {
      i && l.each(i, function() {
        return this.responseRate > 0 ? (e.responseRate = this.responseRate, !1) : void 0
      })
    }), n.getLoginPromise().then(function() {
      s(), n.isLoggedIn() && (e.agency || n.isAdmin()) || o.go("^.provider_list")
    }), e.numReviewedPics = function(e) {
      var i = 0;
      return l.each(e.profilePictures || [], function() {
        i += this.reviewedOn ? 1 : 0
      }), i
    }, e.clickSubmitContractSignatureForm = function() {
      i.all("agency/contract/" + c).post(e.contractSignatureInfo).then(function() {
        t.success(a.instant("successfully_signed_contract")), e.showContract = !1, s(!0)
      }, function() {
        t.error(a.instant("unknown_error"))
      })
    }, e.clickShowContract = function() {
      e.showContract = !0
    }, e.clickHideContract = function() {
      e.showContract = !1
    }, e.reviewProfile = function(e) {
      i.one("provider/review", e).get().then(function() {
        t.success("Successfully reviewed profile"), s(!0)
      }, function() {
        t.error(a.instant("signup_server_error") + " Need at least 2 reviewed images")
      })
    }, e.publishProfile = function(e) {
      i.one("provider/publish", e).get().then(function() {
        t.success(a.instant("successfully_published_your_profile")), s(!0)
      }, function() {
        t.error(a.instant("signup_server_error"))
      })
    }, e.disableProfile = function(e) {
      i.one("provider/disable", e).get().then(function() {
        t.success(a.instant("successfully_disabled_your_profile")), s(!0)
      }, function() {
        t.error(a.instant("signup_server_error"))
      })
    }, e.archiveProfile = function(e) {
      window.confirm(a.instant("archive_profile_agency_confirmation")) && i.one("provider/updatestate", e).customPUT({
        value: "DELETED"
      }).then(function() {
        t.success(a.instant("success")), s(!0)
      }, function() {
        t.error(a.instant("signup_server_error"))
      })
    }
  }]), angular.module("peppritAngularApp").controller("AboutCtrl", ["PepprTools", "SEO", "$translate", "$scope", function(e, i, n, t) {
    i.setTitle(n.instant("about_title")), e.hackImageUrls(".view-about img.peppr-logo"), t.showChat = function() {
      "undefined" != typeof Tawk_API && Tawk_API.showWidget()
    }
  }]), angular.module("peppritAngularApp").factory("VideoTools", function() {
    function e() {
      if (void 0 === window.YT) {
        var e = document.createElement("script");
        e.src = "https://www.youtube.com/iframe_api", o("head").append(e)
      }
    }

    function i(e, i, n) {
      var t = o("#" + e),
        a = t.data("ytPlayer");
      return a ? a : (a = new window.YT.Player(e, {
        height: "100%",
        width: "100%",
        videoId: "ZIDkDwKS_70",
        controls: 2,
        events: {
          onReady: i,
          onStateChange: n
        }
      }), o("#" + e).data("ytPlayer", a), a)
    }

    function n(e) {
      var i = t(e);
      i && i.destroy()
    }

    function t(e) {
      return o("#" + e).data("ytPlayer")
    }

    function a(e, n, t) {
      return void 0 !== window.YT ? void i(e, n, t) : void(window.onYouTubeIframeAPIReady = function() {
        i(e, n, t)
      })
    }
    var o = window.$;
    return {
      initPlayer: function(i, n, t) {
        e(), a(i, n, t)
      },
      destroyPlayer: function(e) {
        n(e)
      },
      pausePlayer: function(e) {
        var i = t(e);
        i && i.pauseVideo()
      }
    }
  }), angular.module("peppritAngularApp").config(["$stateProvider", "$urlRouterProvider", function(e, i) {
    var n = determineLanguage();
    i.otherwise(isItaly ? "/" + n + "/italy" : "/" + n), e.state("app", {
      url: "/{lang:" + Object.keys(pepprSupportedLangMap).join("|") + "}",
      params: {
        lang: {
          value: n
        }
      },
      "abstract": !0,
      template: "<ui-view/>"
    }).state("app.root", {
      url: "",
      templateUrl: "app/views/main.html",
      controller: "MainCtrl"
    }).state("app.root_slash", {
      url: "/",
      templateUrl: "app/views/main.html",
      controller: "MainCtrl"
    }).state("app.landingpage-1", {
      url: "/landingpage-1",
      templateUrl: "app/views/main.html",
      controller: "MainCtrl"
    }).state("app.tnc", {
      url: "/tnc",
      templateUrl: "app/views/tnc.html",
      skipLocationCheck: !0
    }).state("app.privacy-policy", {
      url: "/privacy-policy",
      templateUrl: "app/views/privacy_policy.html",
      skipLocationCheck: !0
    }).state("app.italy", {
      url: "/italy",
      templateUrl: "app/views/italy.html",
      controller: "ItalyCtrl",
      skipLocationCheck: !0
    }).state("app.launch", {
      url: "/launch",
      templateUrl: "app/views/launch.html",
      controller: "LaunchCtrl"
    }).state("app.beta", {
      url: "/beta",
      templateUrl: "app/views/beta.html",
      controller: "BetaCtrl"
    }).state("app.about", {
      url: "/about",
      templateUrl: "app/views/about.html",
      controller: "AboutCtrl"
    }).state("app.partners", {
      url: "/partners",
      templateUrl: "app/views/partners.html"
    }).state("app.concept", {
      url: "/concept",
      templateUrl: "app/views/concept.html",
      controller: "ConceptCtrl"
    }).state("app.frankfurt", {
      url: "/frankfurt",
      templateUrl: "app/views/frankfurt.html",
      controller: "CityCtrl",
      skipLocationCheck: !0
    }).state("app.berlin", {
      url: "/berlin",
      templateUrl: "app/views/berlin.html",
      controller: "CityCtrl",
      skipLocationCheck: !0
    }).state("app.privacy", {
      url: "/privacy",
      templateUrl: "app/views/privacy.html",
      controller: "PrivacyCtrl"
    }).state("app.login+action", {
      url: "/login/:action",
      templateUrl: "app/views/login.html",
      controller: "LoginCtrl"
    }).state("app.login", {
      url: "/login",
      templateUrl: "app/views/login.html",
      controller: "LoginCtrl"
    }).state("app.user+action", {
      url: "/user/:action",
      templateUrl: "app/views/user.html",
      controller: "UserCtrl"
    }).state("app.user", {
      url: "/user",
      templateUrl: "app/views/user.html",
      controller: "UserCtrl"
    }).state("app.client_faq", {
      url: "/client/faq",
      templateUrl: "app/views/client_faq.html",
      controller: "ClientFaqCtrl"
    }).state("app.signup_professional", {
      url: "/signup/professional/:providerId",
      templateUrl: "app/views/signup_professional.html",
      controller: "SignupProfessionalCtrl"
    }).state("app.signup_peppr", {
      url: "/signup/peppr/:providerId",
      templateUrl: "app/views/signup_professional.html",
      controller: "SignupProfessionalCtrl"
    }).state("app.signup_client", {
      url: "/signup/client",
      templateUrl: "app/views/signup_client.html",
      controller: "SignupClientCtrl"
    }).state("app.signup_client.1", {
      url: "/1",
      templateUrl: "app/views/signup_client_1.html"
    }).state("app.signup_client.1_confirm", {
      url: "/1_confirm",
      templateUrl: "app/views/signup_client_1_confirm.html",
      controller: "SignupClientConfirmCtrl"
    }).state("app.signup_client.2", {
      url: "/2",
      templateUrl: "app/views/signup_client_2.html"
    }).state("app.signup_client.3", {
      url: "/3",
      templateUrl: "app/views/signup_client_3.html"
    }).state("app.signup_agency", {
      url: "/signup/agency",
      templateUrl: "app/views/signup_agency.html",
      controller: "SignupAgencyCtrl"
    }).state("app.signup_admin", {
      url: "/signup/admin",
      templateUrl: "app/views/signup_admin.html",
      controller: "SignupAdminCtrl"
    }).state("app.provider_list", {
      url: "/provider/list",
      templateUrl: "app/views/provider_list.html",
      controller: "ProviderListCtrl"
    }).state("app.provider_map", {
      url: "/provider/map",
      templateUrl: "app/views/provider_map_google.html",
      controller: "ProviderMapGoogleCtrl"
    }).state("app.provider_faq", {
      url: "/provider/faq",
      templateUrl: "app/views/provider_faq.html",
      controller: "ProviderFaqCtrl"
    }).state("app.provider_claims", {
      url: "/provider/claims",
      templateUrl: "app/views/provider_claims.html",
      controller: "ProviderClaimsCtrl"
    }).state("app.provider_services", {
      url: "/provider/services",
      templateUrl: "app/views/provider_services.html",
      controller: "ProviderServicesCtrl"
    }).state("app.provider_edit", {
      url: "/provider/edit/:providerId",
      templateUrl: "app/views/signup_professional.html",
      controller: "SignupProfessionalCtrl"
    }).state("app.provider_booking_list", {
      url: "/provider/booking/list/:providerId",
      templateUrl: "app/views/agency_booking_list.html",
      controller: "AgencyBookingListCtrl"
    }).state("app.provider_booking", {
      url: "/provider/booking/:bookingId",
      templateUrl: "app/views/agency_booking.html",
      controller: "AgencyBookingCtrl"
    }).state("app.provider", {
      url: "/provider/:providerId",
      templateUrl: "app/views/provider.html",
      controller: "ProviderCtrl"
    }).state("app.provider_imageupload", {
      url: "/provider/imageupload/:providerId",
      templateUrl: "app/views/provider_imageupload.html",
      controller: "ProviderImageUploadCtrl"
    }).state("app.provider_status", {
      url: "/provider/status/:providerId",
      templateUrl: "app/views/provider_status.html",
      controller: "ProviderStatusCtrl"
    }).state("app.provider_admin_all", {
      url: "/provider/admin/all",
      templateUrl: "app/views/provider_admin_all.html",
      controller: "ProviderAdminAllCtrl"
    }).state("app.provider_admin", {
      url: "/provider/admin/:providerId",
      templateUrl: "app/views/provider_admin.html",
      controller: "ProviderAdminCtrl"
    }).state("app.booking_payment_confirmation", {
      url: "/booking/payment/confirmation/:bookingId",
      templateUrl: "app/views/booking_payment_confirmation.html",
      controller: "BookingPaymentConfirmationCtrl"
    }).state("app.booking_confirmation", {
      url: "/booking/confirmation/:bookingId",
      templateUrl: "app/views/booking_confirmation.html",
      controller: "BookingConfirmationCtrl"
    }).state("app.booking_payment", {
      url: "/booking/payment/:bookingId",
      templateUrl: "app/views/booking_payment.html",
      controller: "BookingPaymentCtrl"
    }).state("app.booking", {
      url: "/booking/:providerId",
      templateUrl: "app/views/booking.html",
      controller: "BookingCtrl"
    }).state("app.booking_admin", {
      url: "/booking/admin/:bookingId",
      templateUrl: "app/views/agency_booking.html",
      controller: "AgencyBookingCtrl"
    }).state("app.booking_list", {
      url: "/booking/list/:userId",
      templateUrl: "app/views/agency_booking_list.html",
      controller: "AgencyBookingListCtrl"
    }).state("app.agency_faq", {
      url: "/agency/faq",
      templateUrl: "app/views/agency_faq.html",
      controller: "AgencyFaqCtrl"
    }).state("app.agency_admin_list_all", {
      url: "/agency/admin/list/all",
      templateUrl: "app/views/agency_list.html",
      controller: "AgencyListCtrl"
    }).state("app.agency_admin", {
      url: "/agency/admin/:agencyId",
      templateUrl: "app/views/agency_admin.html",
      controller: "AgencyAdminCtrl"
    }).state("app.agency_booking_list", {
      url: "/agency/booking/list/:agencyId",
      templateUrl: "app/views/agency_booking_list.html",
      controller: "AgencyBookingListCtrl"
    }).state("app.agency_booking", {
      url: "/agency/booking/:bookingId",
      templateUrl: "app/views/agency_booking.html",
      controller: "AgencyBookingCtrl"
    }).state("app.phone_confirm", {
      url: "/phone/confirm/:code",
      templateUrl: "app/views/phone_confirm.html",
      controller: "PhoneConfirmCtrl"
    }).state("app.email_confirm+code", {
      url: "/email/confirm/:code",
      templateUrl: "app/views/email_confirm.html",
      controller: "EmailConfirmCtrl"
    }).state("app.imageupload_admin", {
      url: "/imageupload/admin",
      templateUrl: "app/views/imageupload_admin.html",
      controller: "ImageUploadAdminCtrl"
    }).state("app.shortlink_admin", {
      url: "/shortlink/admin",
      templateUrl: "app/views/shortlink_admin.html",
      controller: "ShortlinkAdminCtrl"
    }).state("app.platformsettings_admin", {
      url: "/platformsettings/admin",
      templateUrl: "app/views/platformsettings_admin.html",
      controller: "PlatformSettingsAdminCtrl"
    }).state("app.fakeinboundsms", {
      url: "/fakeinboundsms",
      templateUrl: "app/views/fake_inbound_sms.html",
      controller: "FakeInboundSms"
    }).state("app.outboundsms", {
      url: "/outboundsms/:recipient",
      templateUrl: "app/views/outbound_sms.html",
      controller: "OutboundSms"
    }).state("app.notrack", {
      url: "/notrack",
      templateUrl: "app/views/empty.html",
      controller: "NoTrackCtrl"
    })
  }]);
var paymillMsgs = {};
paymillMsgs.codeToMsg = {
  internal_server_error: "Communication with PSP failed",
  invalid_public_key: "Invalid Public Key",
  invalid_payment_data: "not permitted for this method of payment, credit card type, currency or country",
  unknown_error: "Unknown Error",
  "3ds_cancelled": "Password Entry of 3-D Secure password was cancelled by the user",
  field_invalid_card_number: "Missing or invalid creditcard number",
  field_invalid_card_exp_year: "Missing or invalid expiry year",
  field_invalid_card_exp_month: "Missing or invalid expiry month",
  field_invalid_card_exp: "Card is no longer valid or has expired",
  field_invalid_card_cvc: "Invalid checking number",
  field_invalid_card_holder: "Invalid cardholder",
  field_invalid_amount_int: "Invalid or missing amount for 3-D Secure",
  field_invalid_amount: "Invalid or missing amount for 3-D Secure deprecated , see blog post",
  field_invalid_currency: "Invalid or missing currency code for 3-D Secure",
  field_invalid_account_number: "Missing or invalid bank account number",
  field_invalid_account_holder: "Missing or invalid bank account holder",
  field_invalid_bank_code: "Missing or invalid bank code",
  field_invalid_iban: "Missing or invalid IBAN",
  field_invalid_bic: "Missing or invalid BIC",
  field_invalid_country: "Missing or unsupported country (with IBAN)",
  field_invalid_bank_data: "Missing or invalid bank data combination"
}, paymillMsgs.codeToPepprMsgKey = {
  field_invalid_card_cvc: "ENUM_PAYMENT_ERROR_MSG_KEYS_ccvInvalid",
  field_invalid_card_exp_month: "ENUM_PAYMENT_ERROR_MSG_KEYS_expiryMonthInvalid",
  field_invalid_card_exp_year: "ENUM_PAYMENT_ERROR_MSG_KEYS_expiryYearInvalid",
  field_invalid_card_number: "ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardNumberInvalid",
  invalid_payment_data: "ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardTypeInvalid",
  field_invalid_card_exp: "ENUM_PAYMENT_ERROR_MSG_KEYS_creditCardExpired"
};
var geoNamesCountries = {
  geonames: [{
    countryName: "Andorra",
    currencyCode: "EUR",
    fipsCode: "AN",
    countryCode: "AD",
    isoNumeric: "020",
    north: 42.65604389629997,
    capital: "Andorra la Vella",
    continentName: "Europe",
    areaInSqKm: "468.0",
    languages: "ca",
    isoAlpha3: "AND",
    continent: "EU",
    south: 42.42849259876837,
    east: 1.7865427778319827,
    geonameId: 3041565,
    west: 1.4071867141112762,
    population: "84000"
  }, {
    countryName: "United Arab Emirates",
    currencyCode: "AED",
    fipsCode: "AE",
    countryCode: "AE",
    isoNumeric: "784",
    north: 26.08415985107422,
    capital: "Abu Dhabi",
    continentName: "Asia",
    areaInSqKm: "82880.0",
    languages: "ar-AE,fa,en,hi,ur",
    isoAlpha3: "ARE",
    continent: "AS",
    south: 22.633329391479492,
    east: 56.38166046142578,
    geonameId: 290557,
    west: 51.58332824707031,
    population: "4975593"
  }, {
    countryName: "Afghanistan",
    currencyCode: "AFN",
    fipsCode: "AF",
    countryCode: "AF",
    isoNumeric: "004",
    north: 38.483418,
    capital: "Kabul",
    continentName: "Asia",
    areaInSqKm: "647500.0",
    languages: "fa-AF,ps,uz-AF,tk",
    isoAlpha3: "AFG",
    continent: "AS",
    south: 29.377472,
    east: 74.879448,
    geonameId: 1149361,
    west: 60.478443,
    population: "29121286"
  }, {
    countryName: "Antigua and Barbuda",
    currencyCode: "XCD",
    fipsCode: "AC",
    countryCode: "AG",
    isoNumeric: "028",
    north: 17.729387,
    capital: "St. John's",
    continentName: "North America",
    areaInSqKm: "443.0",
    languages: "en-AG",
    isoAlpha3: "ATG",
    continent: "NA",
    south: 16.996979,
    east: -61.672421,
    geonameId: 3576396,
    west: -61.906425,
    population: "86754"
  }, {
    countryName: "Anguilla",
    currencyCode: "XCD",
    fipsCode: "AV",
    countryCode: "AI",
    isoNumeric: "660",
    north: 18.283424,
    capital: "The Valley",
    continentName: "North America",
    areaInSqKm: "102.0",
    languages: "en-AI",
    isoAlpha3: "AIA",
    continent: "NA",
    south: 18.166815,
    east: -62.971359,
    geonameId: 3573511,
    west: -63.172901,
    population: "13254"
  }, {
    countryName: "Albania",
    currencyCode: "ALL",
    fipsCode: "AL",
    countryCode: "AL",
    isoNumeric: "008",
    north: 42.665611,
    capital: "Tirana",
    continentName: "Europe",
    areaInSqKm: "28748.0",
    languages: "sq,el",
    isoAlpha3: "ALB",
    continent: "EU",
    south: 39.648361,
    east: 21.068472,
    geonameId: 783754,
    west: 19.293972,
    population: "2986952"
  }, {
    countryName: "Armenia",
    currencyCode: "AMD",
    fipsCode: "AM",
    countryCode: "AM",
    isoNumeric: "051",
    north: 41.301834,
    capital: "Yerevan",
    continentName: "Asia",
    areaInSqKm: "29800.0",
    languages: "hy",
    isoAlpha3: "ARM",
    continent: "AS",
    south: 38.830528,
    east: 46.772435045159995,
    geonameId: 174982,
    west: 43.44978,
    population: "2968000"
  }, {
    countryName: "Angola",
    currencyCode: "AOA",
    fipsCode: "AO",
    countryCode: "AO",
    isoNumeric: "024",
    north: -4.376826,
    capital: "Luanda",
    continentName: "Africa",
    areaInSqKm: "1246700.0",
    languages: "pt-AO",
    isoAlpha3: "AGO",
    continent: "AF",
    south: -18.042076,
    east: 24.082119,
    geonameId: 3351879,
    west: 11.679219,
    population: "13068161"
  }, {
    countryName: "Antarctica",
    currencyCode: "",
    fipsCode: "AY",
    countryCode: "AQ",
    isoNumeric: "010",
    north: -60.515533,
    capital: "",
    continentName: "Antarctica",
    areaInSqKm: "1.4E7",
    languages: "",
    isoAlpha3: "ATA",
    continent: "AN",
    south: -89.9999,
    east: 179.9999,
    geonameId: 6697173,
    west: -179.9999,
    population: "0"
  }, {
    countryName: "Argentina",
    currencyCode: "ARS",
    fipsCode: "AR",
    countryCode: "AR",
    isoNumeric: "032",
    north: -21.781277,
    capital: "Buenos Aires",
    continentName: "South America",
    areaInSqKm: "2766890.0",
    languages: "es-AR,en,it,de,fr,gn",
    isoAlpha3: "ARG",
    continent: "SA",
    south: -55.061314,
    east: -53.591835,
    geonameId: 3865483,
    west: -73.58297,
    population: "41343201"
  }, {
    countryName: "American Samoa",
    currencyCode: "USD",
    fipsCode: "AQ",
    countryCode: "AS",
    isoNumeric: "016",
    north: -11.0497,
    capital: "Pago Pago",
    continentName: "Oceania",
    areaInSqKm: "199.0",
    languages: "en-AS,sm,to",
    isoAlpha3: "ASM",
    continent: "OC",
    south: -14.382478,
    east: -169.416077,
    geonameId: 5880801,
    west: -171.091888,
    population: "57881"
  }, {
    countryName: "Austria",
    currencyCode: "EUR",
    fipsCode: "AU",
    countryCode: "AT",
    isoNumeric: "040",
    north: 49.017056,
    capital: "Vienna",
    continentName: "Europe",
    areaInSqKm: "83858.0",
    languages: "de-AT,hr,hu,sl",
    isoAlpha3: "AUT",
    continent: "EU",
    south: 46.378029,
    east: 17.162722,
    geonameId: 2782113,
    west: 9.535916,
    population: "8205000"
  }, {
    countryName: "Australia",
    currencyCode: "AUD",
    fipsCode: "AS",
    countryCode: "AU",
    isoNumeric: "036",
    north: -10.062805,
    capital: "Canberra",
    continentName: "Oceania",
    areaInSqKm: "7686850.0",
    languages: "en-AU",
    isoAlpha3: "AUS",
    continent: "OC",
    south: -43.64397,
    east: 153.639252,
    geonameId: 2077456,
    west: 112.911057,
    population: "21515754"
  }, {
    countryName: "Aruba",
    currencyCode: "AWG",
    fipsCode: "AA",
    countryCode: "AW",
    isoNumeric: "533",
    north: 12.623718127152925,
    capital: "Oranjestad",
    continentName: "North America",
    areaInSqKm: "193.0",
    languages: "nl-AW,es,en",
    isoAlpha3: "ABW",
    continent: "NA",
    south: 12.411707706190716,
    east: -69.86575120104982,
    geonameId: 3577279,
    west: -70.0644737196045,
    population: "71566"
  }, {
    countryName: "Ã…land",
    currencyCode: "EUR",
    fipsCode: "",
    countryCode: "AX",
    isoNumeric: "248",
    north: 60.488861,
    capital: "Mariehamn",
    continentName: "Europe",
    areaInSqKm: "",
    languages: "sv-AX",
    isoAlpha3: "ALA",
    continent: "EU",
    south: 59.90675,
    east: 21.011862,
    geonameId: 661882,
    west: 19.317694,
    population: "26711"
  }, {
    countryName: "Azerbaijan",
    currencyCode: "AZN",
    fipsCode: "AJ",
    countryCode: "AZ",
    isoNumeric: "031",
    north: 41.90564,
    capital: "Baku",
    continentName: "Asia",
    areaInSqKm: "86600.0",
    languages: "az,ru,hy",
    isoAlpha3: "AZE",
    continent: "AS",
    south: 38.38915252685547,
    east: 50.370083,
    geonameId: 587116,
    west: 44.774113,
    population: "8303512"
  }, {
    countryName: "Bosnia and Herzegovina",
    currencyCode: "BAM",
    fipsCode: "BK",
    countryCode: "BA",
    isoNumeric: "070",
    north: 45.239193,
    capital: "Sarajevo",
    continentName: "Europe",
    areaInSqKm: "51129.0",
    languages: "bs,hr-BA,sr-BA",
    isoAlpha3: "BIH",
    continent: "EU",
    south: 42.546112,
    east: 19.622223,
    geonameId: 3277605,
    west: 15.718945,
    population: "4590000"
  }, {
    countryName: "Barbados",
    currencyCode: "BBD",
    fipsCode: "BB",
    countryCode: "BB",
    isoNumeric: "052",
    north: 13.327257,
    capital: "Bridgetown",
    continentName: "North America",
    areaInSqKm: "431.0",
    languages: "en-BB",
    isoAlpha3: "BRB",
    continent: "NA",
    south: 13.039844,
    east: -59.420376,
    geonameId: 3374084,
    west: -59.648922,
    population: "285653"
  }, {
    countryName: "Bangladesh",
    currencyCode: "BDT",
    fipsCode: "BG",
    countryCode: "BD",
    isoNumeric: "050",
    north: 26.631945,
    capital: "Dhaka",
    continentName: "Asia",
    areaInSqKm: "144000.0",
    languages: "bn-BD,en",
    isoAlpha3: "BGD",
    continent: "AS",
    south: 20.743334,
    east: 92.673668,
    geonameId: 1210997,
    west: 88.028336,
    population: "156118464"
  }, {
    countryName: "Belgium",
    currencyCode: "EUR",
    fipsCode: "BE",
    countryCode: "BE",
    isoNumeric: "056",
    north: 51.505444,
    capital: "Brussels",
    continentName: "Europe",
    areaInSqKm: "30510.0",
    languages: "nl-BE,fr-BE,de-BE",
    isoAlpha3: "BEL",
    continent: "EU",
    south: 49.49361,
    east: 6.403861,
    geonameId: 2802361,
    west: 2.546944,
    population: "10403000"
  }, {
    countryName: "Burkina Faso",
    currencyCode: "XOF",
    fipsCode: "UV",
    countryCode: "BF",
    isoNumeric: "854",
    north: 15.082593,
    capital: "Ouagadougou",
    continentName: "Africa",
    areaInSqKm: "274200.0",
    languages: "fr-BF",
    isoAlpha3: "BFA",
    continent: "AF",
    south: 9.401108,
    east: 2.405395,
    geonameId: 2361809,
    west: -5.518916,
    population: "16241811"
  }, {
    countryName: "Bulgaria",
    currencyCode: "BGN",
    fipsCode: "BU",
    countryCode: "BG",
    isoNumeric: "100",
    north: 44.21764,
    capital: "Sofia",
    continentName: "Europe",
    areaInSqKm: "110910.0",
    languages: "bg,tr-BG",
    isoAlpha3: "BGR",
    continent: "EU",
    south: 41.242084,
    east: 28.612167,
    geonameId: 732800,
    west: 22.371166,
    population: "7148785"
  }, {
    countryName: "Bahrain",
    currencyCode: "BHD",
    fipsCode: "BA",
    countryCode: "BH",
    isoNumeric: "048",
    north: 26.282583,
    capital: "Manama",
    continentName: "Asia",
    areaInSqKm: "665.0",
    languages: "ar-BH,en,fa,ur",
    isoAlpha3: "BHR",
    continent: "AS",
    south: 25.796862,
    east: 50.664471,
    geonameId: 290291,
    west: 50.45414,
    population: "738004"
  }, {
    countryName: "Burundi",
    currencyCode: "BIF",
    fipsCode: "BY",
    countryCode: "BI",
    isoNumeric: "108",
    north: -2.310123,
    capital: "Bujumbura",
    continentName: "Africa",
    areaInSqKm: "27830.0",
    languages: "fr-BI,rn",
    isoAlpha3: "BDI",
    continent: "AF",
    south: -4.465713,
    east: 30.847729,
    geonameId: 433561,
    west: 28.993061,
    population: "9863117"
  }, {
    countryName: "Benin",
    currencyCode: "XOF",
    fipsCode: "BN",
    countryCode: "BJ",
    isoNumeric: "204",
    north: 12.418347,
    capital: "Porto-Novo",
    continentName: "Africa",
    areaInSqKm: "112620.0",
    languages: "fr-BJ",
    isoAlpha3: "BEN",
    continent: "AF",
    south: 6.225748,
    east: 3.851701,
    geonameId: 2395170,
    west: .774575,
    population: "9056010"
  }, {
    countryName: "Saint BarthÃ©lemy",
    currencyCode: "EUR",
    fipsCode: "TB",
    countryCode: "BL",
    isoNumeric: "652",
    north: 17.928808791949283,
    capital: "Gustavia",
    continentName: "North America",
    areaInSqKm: "21.0",
    languages: "fr",
    isoAlpha3: "BLM",
    continent: "NA",
    south: 17.878183227405575,
    east: -62.788983372985854,
    geonameId: 3578476,
    west: -62.8739118253784,
    population: "8450"
  }, {
    countryName: "Bermuda",
    currencyCode: "BMD",
    fipsCode: "BD",
    countryCode: "BM",
    isoNumeric: "060",
    north: 32.393833,
    capital: "Hamilton",
    continentName: "North America",
    areaInSqKm: "53.0",
    languages: "en-BM,pt",
    isoAlpha3: "BMU",
    continent: "NA",
    south: 32.246639,
    east: -64.651993,
    geonameId: 3573345,
    west: -64.89605,
    population: "65365"
  }, {
    countryName: "Brunei",
    currencyCode: "BND",
    fipsCode: "BX",
    countryCode: "BN",
    isoNumeric: "096",
    north: 5.047167,
    capital: "Bandar Seri Begawan",
    continentName: "Asia",
    areaInSqKm: "5770.0",
    languages: "ms-BN,en-BN",
    isoAlpha3: "BRN",
    continent: "AS",
    south: 4.003083,
    east: 115.359444,
    geonameId: 1820814,
    west: 114.071442,
    population: "395027"
  }, {
    countryName: "Bolivia",
    currencyCode: "BOB",
    fipsCode: "BL",
    countryCode: "BO",
    isoNumeric: "068",
    north: -9.680567,
    capital: "Sucre",
    continentName: "South America",
    areaInSqKm: "1098580.0",
    languages: "es-BO,qu,ay",
    isoAlpha3: "BOL",
    continent: "SA",
    south: -22.896133,
    east: -57.45809600000001,
    geonameId: 3923057,
    west: -69.640762,
    population: "9947418"
  }, {
    countryName: "Bonaire",
    currencyCode: "USD",
    fipsCode: "",
    countryCode: "BQ",
    isoNumeric: "535",
    north: 12.304535,
    capital: "",
    continentName: "North America",
    areaInSqKm: "",
    languages: "nl,pap,en",
    isoAlpha3: "BES",
    continent: "NA",
    south: 12.017149,
    east: -68.192307,
    geonameId: 7626844,
    west: -68.416458,
    population: "18012"
  }, {
    countryName: "Brazil",
    currencyCode: "BRL",
    fipsCode: "BR",
    countryCode: "BR",
    isoNumeric: "076",
    north: 5.264877,
    capital: "BrasÃ­lia",
    continentName: "South America",
    areaInSqKm: "8511965.0",
    languages: "pt-BR,es,en,fr",
    isoAlpha3: "BRA",
    continent: "SA",
    south: -33.750706,
    east: -32.392998,
    geonameId: 3469034,
    west: -73.985535,
    population: "201103330"
  }, {
    countryName: "Bahamas",
    currencyCode: "BSD",
    fipsCode: "BF",
    countryCode: "BS",
    isoNumeric: "044",
    north: 26.919243,
    capital: "Nassau",
    continentName: "North America",
    areaInSqKm: "13940.0",
    languages: "en-BS",
    isoAlpha3: "BHS",
    continent: "NA",
    south: 22.852743,
    east: -74.423874,
    geonameId: 3572887,
    west: -78.995911,
    population: "301790"
  }, {
    countryName: "Bhutan",
    currencyCode: "BTN",
    fipsCode: "BT",
    countryCode: "BT",
    isoNumeric: "064",
    north: 28.323778,
    capital: "Thimphu",
    continentName: "Asia",
    areaInSqKm: "47000.0",
    languages: "dz",
    isoAlpha3: "BTN",
    continent: "AS",
    south: 26.70764,
    east: 92.125191,
    geonameId: 1252634,
    west: 88.75972,
    population: "699847"
  }, {
    countryName: "Bouvet Island",
    currencyCode: "NOK",
    fipsCode: "BV",
    countryCode: "BV",
    isoNumeric: "074",
    north: -54.400322,
    capital: "",
    continentName: "Antarctica",
    areaInSqKm: "",
    languages: "",
    isoAlpha3: "BVT",
    continent: "AN",
    south: -54.462383,
    east: 3.487976,
    geonameId: 3371123,
    west: 3.335499,
    population: "0"
  }, {
    countryName: "Botswana",
    currencyCode: "BWP",
    fipsCode: "BC",
    countryCode: "BW",
    isoNumeric: "072",
    north: -17.780813,
    capital: "Gaborone",
    continentName: "Africa",
    areaInSqKm: "600370.0",
    languages: "en-BW,tn-BW",
    isoAlpha3: "BWA",
    continent: "AF",
    south: -26.907246,
    east: 29.360781,
    geonameId: 933860,
    west: 19.999535,
    population: "2029307"
  }, {
    countryName: "Belarus",
    currencyCode: "BYR",
    fipsCode: "BO",
    countryCode: "BY",
    isoNumeric: "112",
    north: 56.165806,
    capital: "Minsk",
    continentName: "Europe",
    areaInSqKm: "207600.0",
    languages: "be,ru",
    isoAlpha3: "BLR",
    continent: "EU",
    south: 51.256416,
    east: 32.770805,
    geonameId: 630336,
    west: 23.176889,
    population: "9685000"
  }, {
    countryName: "Belize",
    currencyCode: "BZD",
    fipsCode: "BH",
    countryCode: "BZ",
    isoNumeric: "084",
    north: 18.496557,
    capital: "Belmopan",
    continentName: "North America",
    areaInSqKm: "22966.0",
    languages: "en-BZ,es",
    isoAlpha3: "BLZ",
    continent: "NA",
    south: 15.8893,
    east: -87.776985,
    geonameId: 3582678,
    west: -89.224815,
    population: "314522"
  }, {
    countryName: "Canada",
    currencyCode: "CAD",
    fipsCode: "CA",
    countryCode: "CA",
    isoNumeric: "124",
    north: 83.110626,
    capital: "Ottawa",
    continentName: "North America",
    areaInSqKm: "9984670.0",
    languages: "en-CA,fr-CA,iu",
    isoAlpha3: "CAN",
    continent: "NA",
    south: 41.67598,
    east: -52.636291,
    geonameId: 6251999,
    west: -141,
    population: "33679000"
  }, {
    countryName: "Cocos [Keeling] Islands",
    currencyCode: "AUD",
    fipsCode: "CK",
    countryCode: "CC",
    isoNumeric: "166",
    north: -12.072459094,
    capital: "West Island",
    continentName: "Asia",
    areaInSqKm: "14.0",
    languages: "ms-CC,en",
    isoAlpha3: "CCK",
    continent: "AS",
    south: -12.208725839,
    east: 96.929489344,
    geonameId: 1547376,
    west: 96.816941408,
    population: "628"
  }, {
    countryName: "Democratic Republic of the Congo",
    currencyCode: "CDF",
    fipsCode: "CG",
    countryCode: "CD",
    isoNumeric: "180",
    north: 5.386098,
    capital: "Kinshasa",
    continentName: "Africa",
    areaInSqKm: "2345410.0",
    languages: "fr-CD,ln,kg",
    isoAlpha3: "COD",
    continent: "AF",
    south: -13.455675,
    east: 31.305912,
    geonameId: 203312,
    west: 12.204144,
    population: "70916439"
  }, {
    countryName: "Central African Republic",
    currencyCode: "XAF",
    fipsCode: "CT",
    countryCode: "CF",
    isoNumeric: "140",
    north: 11.007569,
    capital: "Bangui",
    continentName: "Africa",
    areaInSqKm: "622984.0",
    languages: "fr-CF,sg,ln,kg",
    isoAlpha3: "CAF",
    continent: "AF",
    south: 2.220514,
    east: 27.463421,
    geonameId: 239880,
    west: 14.420097,
    population: "4844927"
  }, {
    countryName: "Republic of the Congo",
    currencyCode: "XAF",
    fipsCode: "CF",
    countryCode: "CG",
    isoNumeric: "178",
    north: 3.703082,
    capital: "Brazzaville",
    continentName: "Africa",
    areaInSqKm: "342000.0",
    languages: "fr-CG,kg,ln-CG",
    isoAlpha3: "COG",
    continent: "AF",
    south: -5.027223,
    east: 18.649839,
    geonameId: 2260494,
    west: 11.205009,
    population: "3039126"
  }, {
    countryName: "Switzerland",
    currencyCode: "CHF",
    fipsCode: "SZ",
    countryCode: "CH",
    isoNumeric: "756",
    north: 47.805332,
    capital: "Berne",
    continentName: "Europe",
    areaInSqKm: "41290.0",
    languages: "de-CH,fr-CH,it-CH,rm",
    isoAlpha3: "CHE",
    continent: "EU",
    south: 45.825695,
    east: 10.491472,
    geonameId: 2658434,
    west: 5.957472,
    population: "7581000"
  }, {
    countryName: "Ivory Coast",
    currencyCode: "XOF",
    fipsCode: "IV",
    countryCode: "CI",
    isoNumeric: "384",
    north: 10.736642,
    capital: "Yamoussoukro",
    continentName: "Africa",
    areaInSqKm: "322460.0",
    languages: "fr-CI",
    isoAlpha3: "CIV",
    continent: "AF",
    south: 4.357067,
    east: -2.494897,
    geonameId: 2287781,
    west: -8.599302,
    population: "21058798"
  }, {
    countryName: "Cook Islands",
    currencyCode: "NZD",
    fipsCode: "CW",
    countryCode: "CK",
    isoNumeric: "184",
    north: -10.023114,
    capital: "Avarua",
    continentName: "Oceania",
    areaInSqKm: "240.0",
    languages: "en-CK,mi",
    isoAlpha3: "COK",
    continent: "OC",
    south: -21.944164,
    east: -157.312134,
    geonameId: 1899402,
    west: -161.093658,
    population: "21388"
  }, {
    countryName: "Chile",
    currencyCode: "CLP",
    fipsCode: "CI",
    countryCode: "CL",
    isoNumeric: "152",
    north: -17.507553,
    capital: "Santiago",
    continentName: "South America",
    areaInSqKm: "756950.0",
    languages: "es-CL",
    isoAlpha3: "CHL",
    continent: "SA",
    south: -55.916348,
    east: -66.417557,
    geonameId: 3895114,
    west: -80.785851,
    population: "16746491"
  }, {
    countryName: "Cameroon",
    currencyCode: "XAF",
    fipsCode: "CM",
    countryCode: "CM",
    isoNumeric: "120",
    north: 13.078056,
    capital: "YaoundÃ©",
    continentName: "Africa",
    areaInSqKm: "475440.0",
    languages: "en-CM,fr-CM",
    isoAlpha3: "CMR",
    continent: "AF",
    south: 1.652548,
    east: 16.192116,
    geonameId: 2233387,
    west: 8.494763,
    population: "19294149"
  }, {
    countryName: "China",
    currencyCode: "CNY",
    fipsCode: "CH",
    countryCode: "CN",
    isoNumeric: "156",
    north: 53.56086,
    capital: "Beijing",
    continentName: "Asia",
    areaInSqKm: "9596960.0",
    languages: "zh-CN,yue,wuu,dta,ug,za",
    isoAlpha3: "CHN",
    continent: "AS",
    south: 15.775416,
    east: 134.773911,
    geonameId: 1814991,
    west: 73.557693,
    population: "1330044000"
  }, {
    countryName: "Colombia",
    currencyCode: "COP",
    fipsCode: "CO",
    countryCode: "CO",
    isoNumeric: "170",
    north: 13.380502,
    capital: "BogotÃ¡",
    continentName: "South America",
    areaInSqKm: "1138910.0",
    languages: "es-CO",
    isoAlpha3: "COL",
    continent: "SA",
    south: -4.225869,
    east: -66.869835,
    geonameId: 3686110,
    west: -81.728111,
    population: "44205293"
  }, {
    countryName: "Costa Rica",
    currencyCode: "CRC",
    fipsCode: "CS",
    countryCode: "CR",
    isoNumeric: "188",
    north: 11.216819,
    capital: "San JosÃ©",
    continentName: "North America",
    areaInSqKm: "51100.0",
    languages: "es-CR,en",
    isoAlpha3: "CRI",
    continent: "NA",
    south: 8.032975,
    east: -82.555992,
    geonameId: 3624060,
    west: -85.950623,
    population: "4516220"
  }, {
    countryName: "Cuba",
    currencyCode: "CUP",
    fipsCode: "CU",
    countryCode: "CU",
    isoNumeric: "192",
    north: 23.226042,
    capital: "Havana",
    continentName: "North America",
    areaInSqKm: "110860.0",
    languages: "es-CU",
    isoAlpha3: "CUB",
    continent: "NA",
    south: 19.828083,
    east: -74.131775,
    geonameId: 3562981,
    west: -84.957428,
    population: "11423000"
  }, {
    countryName: "Cape Verde",
    currencyCode: "CVE",
    fipsCode: "CV",
    countryCode: "CV",
    isoNumeric: "132",
    north: 17.197178,
    capital: "Praia",
    continentName: "Africa",
    areaInSqKm: "4033.0",
    languages: "pt-CV",
    isoAlpha3: "CPV",
    continent: "AF",
    south: 14.808022,
    east: -22.669443,
    geonameId: 3374766,
    west: -25.358747,
    population: "508659"
  }, {
    countryName: "Curacao",
    currencyCode: "ANG",
    fipsCode: "UC",
    countryCode: "CW",
    isoNumeric: "531",
    north: 12.385672,
    capital: "Willemstad",
    continentName: "North America",
    areaInSqKm: "",
    languages: "nl,pap",
    isoAlpha3: "CUW",
    continent: "NA",
    south: 12.032745,
    east: -68.733948,
    geonameId: 7626836,
    west: -69.157204,
    population: "141766"
  }, {
    countryName: "Christmas Island",
    currencyCode: "AUD",
    fipsCode: "KT",
    countryCode: "CX",
    isoNumeric: "162",
    north: -10.412356007,
    capital: "The Settlement",
    continentName: "Asia",
    areaInSqKm: "135.0",
    languages: "en,zh,ms-CC",
    isoAlpha3: "CXR",
    continent: "AS",
    south: -10.5704829995,
    east: 105.712596992,
    geonameId: 2078138,
    west: 105.533276992,
    population: "1500"
  }, {
    countryName: "Cyprus",
    currencyCode: "EUR",
    fipsCode: "CY",
    countryCode: "CY",
    isoNumeric: "196",
    north: 35.701527,
    capital: "Nicosia",
    continentName: "Europe",
    areaInSqKm: "9250.0",
    languages: "el-CY,tr-CY,en",
    isoAlpha3: "CYP",
    continent: "EU",
    south: 34.6332846722908,
    east: 34.59791599999994,
    geonameId: 146669,
    west: 32.27308300000004,
    population: "1102677"
  }, {
    countryName: "Czechia",
    currencyCode: "CZK",
    fipsCode: "EZ",
    countryCode: "CZ",
    isoNumeric: "203",
    north: 51.058887,
    capital: "Prague",
    continentName: "Europe",
    areaInSqKm: "78866.0",
    languages: "cs,sk",
    isoAlpha3: "CZE",
    continent: "EU",
    south: 48.542915,
    east: 18.860111,
    geonameId: 3077311,
    west: 12.096194,
    population: "10476000"
  }, {
    countryName: "Germany",
    currencyCode: "EUR",
    fipsCode: "GM",
    countryCode: "DE",
    isoNumeric: "276",
    north: 55.055637,
    capital: "Berlin",
    continentName: "Europe",
    areaInSqKm: "357021.0",
    languages: "de",
    isoAlpha3: "DEU",
    continent: "EU",
    south: 47.275776,
    east: 15.039889,
    geonameId: 2921044,
    west: 5.865639,
    population: "81802257"
  }, {
    countryName: "Djibouti",
    currencyCode: "DJF",
    fipsCode: "DJ",
    countryCode: "DJ",
    isoNumeric: "262",
    north: 12.706833,
    capital: "Djibouti",
    continentName: "Africa",
    areaInSqKm: "23000.0",
    languages: "fr-DJ,ar,so-DJ,aa",
    isoAlpha3: "DJI",
    continent: "AF",
    south: 10.909917,
    east: 43.416973,
    geonameId: 223816,
    west: 41.773472,
    population: "740528"
  }, {
    countryName: "Denmark",
    currencyCode: "DKK",
    fipsCode: "DA",
    countryCode: "DK",
    isoNumeric: "208",
    north: 57.748417,
    capital: "Copenhagen",
    continentName: "Europe",
    areaInSqKm: "43094.0",
    languages: "da-DK,en,fo,de-DK",
    isoAlpha3: "DNK",
    continent: "EU",
    south: 54.562389,
    east: 15.158834,
    geonameId: 2623032,
    west: 8.075611,
    population: "5484000"
  }, {
    countryName: "Dominica",
    currencyCode: "XCD",
    fipsCode: "DO",
    countryCode: "DM",
    isoNumeric: "212",
    north: 15.631809,
    capital: "Roseau",
    continentName: "North America",
    areaInSqKm: "754.0",
    languages: "en-DM",
    isoAlpha3: "DMA",
    continent: "NA",
    south: 15.20169,
    east: -61.244152,
    geonameId: 3575830,
    west: -61.484108,
    population: "72813"
  }, {
    countryName: "Dominican Republic",
    currencyCode: "DOP",
    fipsCode: "DR",
    countryCode: "DO",
    isoNumeric: "214",
    north: 19.929859,
    capital: "Santo Domingo",
    continentName: "North America",
    areaInSqKm: "48730.0",
    languages: "es-DO",
    isoAlpha3: "DOM",
    continent: "NA",
    south: 17.543159,
    east: -68.32,
    geonameId: 3508796,
    west: -72.003487,
    population: "9823821"
  }, {
    countryName: "Algeria",
    currencyCode: "DZD",
    fipsCode: "AG",
    countryCode: "DZ",
    isoNumeric: "012",
    north: 37.093723,
    capital: "Algiers",
    continentName: "Africa",
    areaInSqKm: "2381740.0",
    languages: "ar-DZ",
    isoAlpha3: "DZA",
    continent: "AF",
    south: 18.960028,
    east: 11.979548,
    geonameId: 2589581,
    west: -8.673868,
    population: "34586184"
  }, {
    countryName: "Ecuador",
    currencyCode: "USD",
    fipsCode: "EC",
    countryCode: "EC",
    isoNumeric: "218",
    north: 1.43902,
    capital: "Quito",
    continentName: "South America",
    areaInSqKm: "283560.0",
    languages: "es-EC",
    isoAlpha3: "ECU",
    continent: "SA",
    south: -4.998823,
    east: -75.184586,
    geonameId: 3658394,
    west: -81.078598,
    population: "14790608"
  }, {
    countryName: "Estonia",
    currencyCode: "EUR",
    fipsCode: "EN",
    countryCode: "EE",
    isoNumeric: "233",
    north: 59.676224,
    capital: "Tallinn",
    continentName: "Europe",
    areaInSqKm: "45226.0",
    languages: "et,ru",
    isoAlpha3: "EST",
    continent: "EU",
    south: 57.516193,
    east: 28.209972,
    geonameId: 453733,
    west: 21.837584,
    population: "1291170"
  }, {
    countryName: "Egypt",
    currencyCode: "EGP",
    fipsCode: "EG",
    countryCode: "EG",
    isoNumeric: "818",
    north: 31.667334,
    capital: "Cairo",
    continentName: "Africa",
    areaInSqKm: "1001450.0",
    languages: "ar-EG,en,fr",
    isoAlpha3: "EGY",
    continent: "AF",
    south: 21.725389,
    east: 35.794861,
    geonameId: 357994,
    west: 24.698111,
    population: "80471869"
  }, {
    countryName: "Western Sahara",
    currencyCode: "MAD",
    fipsCode: "WI",
    countryCode: "EH",
    isoNumeric: "732",
    north: 27.669674,
    capital: "El AaiÃºn",
    continentName: "Africa",
    areaInSqKm: "266000.0",
    languages: "ar,mey",
    isoAlpha3: "ESH",
    continent: "AF",
    south: 20.774158,
    east: -8.670276,
    geonameId: 2461445,
    west: -17.103182,
    population: "273008"
  }, {
    countryName: "Eritrea",
    currencyCode: "ERN",
    fipsCode: "ER",
    countryCode: "ER",
    isoNumeric: "232",
    north: 18.003084,
    capital: "Asmara",
    continentName: "Africa",
    areaInSqKm: "121320.0",
    languages: "aa-ER,ar,tig,kun,ti-ER",
    isoAlpha3: "ERI",
    continent: "AF",
    south: 12.359555,
    east: 43.13464,
    geonameId: 338010,
    west: 36.438778,
    population: "5792984"
  }, {
    countryName: "Spain",
    currencyCode: "EUR",
    fipsCode: "SP",
    countryCode: "ES",
    isoNumeric: "724",
    north: 43.791721,
    capital: "Madrid",
    continentName: "Europe",
    areaInSqKm: "504782.0",
    languages: "es-ES,ca,gl,eu,oc",
    isoAlpha3: "ESP",
    continent: "EU",
    south: 36.000332,
    east: 4.315389,
    geonameId: 2510769,
    west: -9.290778,
    population: "46505963"
  }, {
    countryName: "Ethiopia",
    currencyCode: "ETB",
    fipsCode: "ET",
    countryCode: "ET",
    isoNumeric: "231",
    north: 14.89375,
    capital: "Addis Ababa",
    continentName: "Africa",
    areaInSqKm: "1127127.0",
    languages: "am,en-ET,om-ET,ti-ET,so-ET,sid",
    isoAlpha3: "ETH",
    continent: "AF",
    south: 3.402422,
    east: 47.986179,
    geonameId: 337996,
    west: 32.999939,
    population: "88013491"
  }, {
    countryName: "Finland",
    currencyCode: "EUR",
    fipsCode: "FI",
    countryCode: "FI",
    isoNumeric: "246",
    north: 70.096054,
    capital: "Helsinki",
    continentName: "Europe",
    areaInSqKm: "337030.0",
    languages: "fi-FI,sv-FI,smn",
    isoAlpha3: "FIN",
    continent: "EU",
    south: 59.808777,
    east: 31.580944,
    geonameId: 660013,
    west: 20.556944,
    population: "5244000"
  }, {
    countryName: "Fiji",
    currencyCode: "FJD",
    fipsCode: "FJ",
    countryCode: "FJ",
    isoNumeric: "242",
    north: -12.480111,
    capital: "Suva",
    continentName: "Oceania",
    areaInSqKm: "18270.0",
    languages: "en-FJ,fj",
    isoAlpha3: "FJI",
    continent: "OC",
    south: -20.67597,
    east: -178.424438,
    geonameId: 2205218,
    west: 177.129334,
    population: "875983"
  }, {
    countryName: "Falkland Islands",
    currencyCode: "FKP",
    fipsCode: "FK",
    countryCode: "FK",
    isoNumeric: "238",
    north: -51.24065,
    capital: "Stanley",
    continentName: "South America",
    areaInSqKm: "12173.0",
    languages: "en-FK",
    isoAlpha3: "FLK",
    continent: "SA",
    south: -52.360512,
    east: -57.712486,
    geonameId: 3474414,
    west: -61.345192,
    population: "2638"
  }, {
    countryName: "Micronesia",
    currencyCode: "USD",
    fipsCode: "FM",
    countryCode: "FM",
    isoNumeric: "583",
    north: 10.08904,
    capital: "Palikir",
    continentName: "Oceania",
    areaInSqKm: "702.0",
    languages: "en-FM,chk,pon,yap,kos,uli,woe,nkr,kpg",
    isoAlpha3: "FSM",
    continent: "OC",
    south: 1.02629,
    east: 163.03717,
    geonameId: 2081918,
    west: 137.33648,
    population: "107708"
  }, {
    countryName: "Faroe Islands",
    currencyCode: "DKK",
    fipsCode: "FO",
    countryCode: "FO",
    isoNumeric: "234",
    north: 62.400749,
    capital: "TÃ³rshavn",
    continentName: "Europe",
    areaInSqKm: "1399.0",
    languages: "fo,da-FO",
    isoAlpha3: "FRO",
    continent: "EU",
    south: 61.394943,
    east: -6.399583,
    geonameId: 2622320,
    west: -7.458,
    population: "48228"
  }, {
    countryName: "France",
    currencyCode: "EUR",
    fipsCode: "FR",
    countryCode: "FR",
    isoNumeric: "250",
    north: 51.092804,
    capital: "Paris",
    continentName: "Europe",
    areaInSqKm: "547030.0",
    languages: "fr-FR,frp,br,co,ca,eu,oc",
    isoAlpha3: "FRA",
    continent: "EU",
    south: 41.371582,
    east: 9.561556,
    geonameId: 3017382,
    west: -5.142222,
    population: "64768389"
  }, {
    countryName: "Gabon",
    currencyCode: "XAF",
    fipsCode: "GB",
    countryCode: "GA",
    isoNumeric: "266",
    north: 2.322612,
    capital: "Libreville",
    continentName: "Africa",
    areaInSqKm: "267667.0",
    languages: "fr-GA",
    isoAlpha3: "GAB",
    continent: "AF",
    south: -3.978806,
    east: 14.502347,
    geonameId: 2400553,
    west: 8.695471,
    population: "1545255"
  }, {
    countryName: "United Kingdom",
    currencyCode: "GBP",
    fipsCode: "UK",
    countryCode: "GB",
    isoNumeric: "826",
    north: 59.360249,
    capital: "London",
    continentName: "Europe",
    areaInSqKm: "244820.0",
    languages: "en-GB,cy-GB,gd",
    isoAlpha3: "GBR",
    continent: "EU",
    south: 49.906193,
    east: 1.759,
    geonameId: 2635167,
    west: -8.623555,
    population: "62348447"
  }, {
    countryName: "Grenada",
    currencyCode: "XCD",
    fipsCode: "GJ",
    countryCode: "GD",
    isoNumeric: "308",
    north: 12.318283928171299,
    capital: "St. George's",
    continentName: "North America",
    areaInSqKm: "344.0",
    languages: "en-GD",
    isoAlpha3: "GRD",
    continent: "NA",
    south: 11.986893,
    east: -61.57676970108031,
    geonameId: 3580239,
    west: -61.802344,
    population: "107818"
  }, {
    countryName: "Georgia",
    currencyCode: "GEL",
    fipsCode: "GG",
    countryCode: "GE",
    isoNumeric: "268",
    north: 43.586498,
    capital: "Tbilisi",
    continentName: "Asia",
    areaInSqKm: "69700.0",
    languages: "ka,ru,hy,az",
    isoAlpha3: "GEO",
    continent: "AS",
    south: 41.053196,
    east: 46.725971,
    geonameId: 614540,
    west: 40.010139,
    population: "4630000"
  }, {
    countryName: "French Guiana",
    currencyCode: "EUR",
    fipsCode: "FG",
    countryCode: "GF",
    isoNumeric: "254",
    north: 5.776496,
    capital: "Cayenne",
    continentName: "South America",
    areaInSqKm: "91000.0",
    languages: "fr-GF",
    isoAlpha3: "GUF",
    continent: "SA",
    south: 2.127094,
    east: -51.613949,
    geonameId: 3381670,
    west: -54.542511,
    population: "195506"
  }, {
    countryName: "Guernsey",
    currencyCode: "GBP",
    fipsCode: "GK",
    countryCode: "GG",
    isoNumeric: "831",
    north: 49.738609,
    capital: "St Peter Port",
    continentName: "Europe",
    areaInSqKm: "78.0",
    languages: "en,fr",
    isoAlpha3: "GGY",
    continent: "EU",
    south: 49.412777,
    east: -2.163889,
    geonameId: 3042362,
    west: -2.682472,
    population: "65228"
  }, {
    countryName: "Ghana",
    currencyCode: "GHS",
    fipsCode: "GH",
    countryCode: "GH",
    isoNumeric: "288",
    north: 11.173301,
    capital: "Accra",
    continentName: "Africa",
    areaInSqKm: "239460.0",
    languages: "en-GH,ak,ee,tw",
    isoAlpha3: "GHA",
    continent: "AF",
    south: 4.736723,
    east: 1.191781,
    geonameId: 2300660,
    west: -3.25542,
    population: "24339838"
  }, {
    countryName: "Gibraltar",
    currencyCode: "GIP",
    fipsCode: "GI",
    countryCode: "GI",
    isoNumeric: "292",
    north: 36.155439135670726,
    capital: "Gibraltar",
    continentName: "Europe",
    areaInSqKm: "6.5",
    languages: "en-GI,es,it,pt",
    isoAlpha3: "GIB",
    continent: "EU",
    south: 36.10903070140248,
    east: -5.338285164001491,
    geonameId: 2411586,
    west: -5.36626149743654,
    population: "27884"
  }, {
    countryName: "Greenland",
    currencyCode: "DKK",
    fipsCode: "GL",
    countryCode: "GL",
    isoNumeric: "304",
    north: 83.627357,
    capital: "Nuuk",
    continentName: "North America",
    areaInSqKm: "2166086.0",
    languages: "kl,da-GL,en",
    isoAlpha3: "GRL",
    continent: "NA",
    south: 59.777401,
    east: -11.312319,
    geonameId: 3425505,
    west: -73.04203,
    population: "56375"
  }, {
    countryName: "Gambia",
    currencyCode: "GMD",
    fipsCode: "GA",
    countryCode: "GM",
    isoNumeric: "270",
    north: 13.826571,
    capital: "Banjul",
    continentName: "Africa",
    areaInSqKm: "11300.0",
    languages: "en-GM,mnk,wof,wo,ff",
    isoAlpha3: "GMB",
    continent: "AF",
    south: 13.064252,
    east: -13.797793,
    geonameId: 2413451,
    west: -16.825079,
    population: "1593256"
  }, {
    countryName: "Guinea",
    currencyCode: "GNF",
    fipsCode: "GV",
    countryCode: "GN",
    isoNumeric: "324",
    north: 12.67622,
    capital: "Conakry",
    continentName: "Africa",
    areaInSqKm: "245857.0",
    languages: "fr-GN",
    isoAlpha3: "GIN",
    continent: "AF",
    south: 7.193553,
    east: -7.641071,
    geonameId: 2420477,
    west: -14.926619,
    population: "10324025"
  }, {
    countryName: "Guadeloupe",
    currencyCode: "EUR",
    fipsCode: "GP",
    countryCode: "GP",
    isoNumeric: "312",
    north: 16.516848,
    capital: "Basse-Terre",
    continentName: "North America",
    areaInSqKm: "1780.0",
    languages: "fr-GP",
    isoAlpha3: "GLP",
    continent: "NA",
    south: 15.867565,
    east: -61,
    geonameId: 3579143,
    west: -61.544765,
    population: "443000"
  }, {
    countryName: "Equatorial Guinea",
    currencyCode: "XAF",
    fipsCode: "EK",
    countryCode: "GQ",
    isoNumeric: "226",
    north: 2.346989,
    capital: "Malabo",
    continentName: "Africa",
    areaInSqKm: "28051.0",
    languages: "es-GQ,fr",
    isoAlpha3: "GNQ",
    continent: "AF",
    south: .92086,
    east: 11.335724,
    geonameId: 2309096,
    west: 9.346865,
    population: "1014999"
  }, {
    countryName: "Greece",
    currencyCode: "EUR",
    fipsCode: "GR",
    countryCode: "GR",
    isoNumeric: "300",
    north: 41.7484999849641,
    capital: "Athens",
    continentName: "Europe",
    areaInSqKm: "131940.0",
    languages: "el-GR,en,fr",
    isoAlpha3: "GRC",
    continent: "EU",
    south: 34.8020663391466,
    east: 28.2470831714347,
    geonameId: 390903,
    west: 19.3736035624134,
    population: "11000000"
  }, {
    countryName: "South Georgia and the South Sandwich Islands",
    currencyCode: "GBP",
    fipsCode: "SX",
    countryCode: "GS",
    isoNumeric: "239",
    north: -53.970467,
    capital: "Grytviken",
    continentName: "Antarctica",
    areaInSqKm: "3903.0",
    languages: "en",
    isoAlpha3: "SGS",
    continent: "AN",
    south: -59.479259,
    east: -26.229326,
    geonameId: 3474415,
    west: -38.021175,
    population: "30"
  }, {
    countryName: "Guatemala",
    currencyCode: "GTQ",
    fipsCode: "GT",
    countryCode: "GT",
    isoNumeric: "320",
    north: 17.81522,
    capital: "Guatemala City",
    continentName: "North America",
    areaInSqKm: "108890.0",
    languages: "es-GT",
    isoAlpha3: "GTM",
    continent: "NA",
    south: 13.737302,
    east: -88.223198,
    geonameId: 3595528,
    west: -92.23629,
    population: "13550440"
  }, {
    countryName: "Guam",
    currencyCode: "USD",
    fipsCode: "GQ",
    countryCode: "GU",
    isoNumeric: "316",
    north: 13.652333,
    capital: "HagÃ¥tÃ±a",
    continentName: "Oceania",
    areaInSqKm: "549.0",
    languages: "en-GU,ch-GU",
    isoAlpha3: "GUM",
    continent: "OC",
    south: 13.240611,
    east: 144.953979,
    geonameId: 4043988,
    west: 144.619247,
    population: "159358"
  }, {
    countryName: "Guinea-Bissau",
    currencyCode: "XOF",
    fipsCode: "PU",
    countryCode: "GW",
    isoNumeric: "624",
    north: 12.680789,
    capital: "Bissau",
    continentName: "Africa",
    areaInSqKm: "36120.0",
    languages: "pt-GW,pov",
    isoAlpha3: "GNB",
    continent: "AF",
    south: 10.924265,
    east: -13.636522,
    geonameId: 2372248,
    west: -16.717535,
    population: "1565126"
  }, {
    countryName: "Guyana",
    currencyCode: "GYD",
    fipsCode: "GY",
    countryCode: "GY",
    isoNumeric: "328",
    north: 8.557567,
    capital: "Georgetown",
    continentName: "South America",
    areaInSqKm: "214970.0",
    languages: "en-GY",
    isoAlpha3: "GUY",
    continent: "SA",
    south: 1.17508,
    east: -56.480251,
    geonameId: 3378535,
    west: -61.384762,
    population: "748486"
  }, {
    countryName: "Hong Kong",
    currencyCode: "HKD",
    fipsCode: "HK",
    countryCode: "HK",
    isoNumeric: "344",
    north: 22.559778,
    capital: "Hong Kong",
    continentName: "Asia",
    areaInSqKm: "1092.0",
    languages: "zh-HK,yue,zh,en",
    isoAlpha3: "HKG",
    continent: "AS",
    south: 22.15325,
    east: 114.434753,
    geonameId: 1819730,
    west: 113.837753,
    population: "6898686"
  }, {
    countryName: "Heard Island and McDonald Islands",
    currencyCode: "AUD",
    fipsCode: "HM",
    countryCode: "HM",
    isoNumeric: "334",
    north: -52.909416,
    capital: "",
    continentName: "Antarctica",
    areaInSqKm: "412.0",
    languages: "",
    isoAlpha3: "HMD",
    continent: "AN",
    south: -53.192001,
    east: 73.859146,
    geonameId: 1547314,
    west: 72.596535,
    population: "0"
  }, {
    countryName: "Honduras",
    currencyCode: "HNL",
    fipsCode: "HO",
    countryCode: "HN",
    isoNumeric: "340",
    north: 16.510256,
    capital: "Tegucigalpa",
    continentName: "North America",
    areaInSqKm: "112090.0",
    languages: "es-HN",
    isoAlpha3: "HND",
    continent: "NA",
    south: 12.982411,
    east: -83.155403,
    geonameId: 3608932,
    west: -89.350792,
    population: "7989415"
  }, {
    countryName: "Croatia",
    currencyCode: "HRK",
    fipsCode: "HR",
    countryCode: "HR",
    isoNumeric: "191",
    north: 46.53875,
    capital: "Zagreb",
    continentName: "Europe",
    areaInSqKm: "56542.0",
    languages: "hr-HR,sr",
    isoAlpha3: "HRV",
    continent: "EU",
    south: 42.43589,
    east: 19.427389,
    geonameId: 3202326,
    west: 13.493222,
    population: "4491000"
  }, {
    countryName: "Haiti",
    currencyCode: "HTG",
    fipsCode: "HA",
    countryCode: "HT",
    isoNumeric: "332",
    north: 20.08782,
    capital: "Port-au-Prince",
    continentName: "North America",
    areaInSqKm: "27750.0",
    languages: "ht,fr-HT",
    isoAlpha3: "HTI",
    continent: "NA",
    south: 18.021032,
    east: -71.613358,
    geonameId: 3723988,
    west: -74.478584,
    population: "9648924"
  }, {
    countryName: "Hungary",
    currencyCode: "HUF",
    fipsCode: "HU",
    countryCode: "HU",
    isoNumeric: "348",
    north: 48.585667,
    capital: "Budapest",
    continentName: "Europe",
    areaInSqKm: "93030.0",
    languages: "hu-HU",
    isoAlpha3: "HUN",
    continent: "EU",
    south: 45.74361,
    east: 22.906,
    geonameId: 719819,
    west: 16.111889,
    population: "9982000"
  }, {
    countryName: "Indonesia",
    currencyCode: "IDR",
    fipsCode: "ID",
    countryCode: "ID",
    isoNumeric: "360",
    north: 5.904417,
    capital: "Jakarta",
    continentName: "Asia",
    areaInSqKm: "1919440.0",
    languages: "id,en,nl,jv",
    isoAlpha3: "IDN",
    continent: "AS",
    south: -10.941861,
    east: 141.021805,
    geonameId: 1643084,
    west: 95.009331,
    population: "242968342"
  }, {
    countryName: "Ireland",
    currencyCode: "EUR",
    fipsCode: "EI",
    countryCode: "IE",
    isoNumeric: "372",
    north: 55.387917,
    capital: "Dublin",
    continentName: "Europe",
    areaInSqKm: "70280.0",
    languages: "en-IE,ga-IE",
    isoAlpha3: "IRL",
    continent: "EU",
    south: 51.451584,
    east: -6.002389,
    geonameId: 2963597,
    west: -10.478556,
    population: "4622917"
  }, {
    countryName: "Israel",
    currencyCode: "ILS",
    fipsCode: "IS",
    countryCode: "IL",
    isoNumeric: "376",
    north: 33.340137,
    capital: "",
    continentName: "Asia",
    areaInSqKm: "20770.0",
    languages: "he,ar-IL,en-IL,",
    isoAlpha3: "ISR",
    continent: "AS",
    south: 29.496639,
    east: 35.876804,
    geonameId: 294640,
    west: 34.270278754419145,
    population: "7353985"
  }, {
    countryName: "Isle of Man",
    currencyCode: "GBP",
    fipsCode: "IM",
    countryCode: "IM",
    isoNumeric: "833",
    north: 54.419724,
    capital: "Douglas",
    continentName: "Europe",
    areaInSqKm: "572.0",
    languages: "en,gv",
    isoAlpha3: "IMN",
    continent: "EU",
    south: 54.055916,
    east: -4.3115,
    geonameId: 3042225,
    west: -4.798722,
    population: "75049"
  }, {
    countryName: "India",
    currencyCode: "INR",
    fipsCode: "IN",
    countryCode: "IN",
    isoNumeric: "356",
    north: 35.504223,
    capital: "New Delhi",
    continentName: "Asia",
    areaInSqKm: "3287590.0",
    languages: "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
    isoAlpha3: "IND",
    continent: "AS",
    south: 6.747139,
    east: 97.403305,
    geonameId: 1269750,
    west: 68.186691,
    population: "1173108018"
  }, {
    countryName: "British Indian Ocean Territory",
    currencyCode: "USD",
    fipsCode: "IO",
    countryCode: "IO",
    isoNumeric: "086",
    north: -5.268333,
    capital: "",
    continentName: "Asia",
    areaInSqKm: "60.0",
    languages: "en-IO",
    isoAlpha3: "IOT",
    continent: "AS",
    south: -7.438028,
    east: 72.493164,
    geonameId: 1282588,
    west: 71.259972,
    population: "4000"
  }, {
    countryName: "Iraq",
    currencyCode: "IQD",
    fipsCode: "IZ",
    countryCode: "IQ",
    isoNumeric: "368",
    north: 37.378029,
    capital: "Baghdad",
    continentName: "Asia",
    areaInSqKm: "437072.0",
    languages: "ar-IQ,ku,hy",
    isoAlpha3: "IRQ",
    continent: "AS",
    south: 29.069445,
    east: 48.575916,
    geonameId: 99237,
    west: 38.795887,
    population: "29671605"
  }, {
    countryName: "Iran",
    currencyCode: "IRR",
    fipsCode: "IR",
    countryCode: "IR",
    isoNumeric: "364",
    north: 39.777222,
    capital: "Tehran",
    continentName: "Asia",
    areaInSqKm: "1648000.0",
    languages: "fa-IR,ku",
    isoAlpha3: "IRN",
    continent: "AS",
    south: 25.064083,
    east: 63.317471,
    geonameId: 130758,
    west: 44.047279,
    population: "76923300"
  }, {
    countryName: "Iceland",
    currencyCode: "ISK",
    fipsCode: "IC",
    countryCode: "IS",
    isoNumeric: "352",
    north: 66.53463,
    capital: "Reykjavik",
    continentName: "Europe",
    areaInSqKm: "103000.0",
    languages: "is,en,de,da,sv,no",
    isoAlpha3: "ISL",
    continent: "EU",
    south: 63.393253,
    east: -13.495815,
    geonameId: 2629691,
    west: -24.546524,
    population: "308910"
  }, {
    countryName: "Italy",
    currencyCode: "EUR",
    fipsCode: "IT",
    countryCode: "IT",
    isoNumeric: "380",
    north: 47.095196,
    capital: "Rome",
    continentName: "Europe",
    areaInSqKm: "301230.0",
    languages: "it-IT,de-IT,fr-IT,sc,ca,co,sl",
    isoAlpha3: "ITA",
    continent: "EU",
    south: 36.652779,
    east: 18.513445,
    geonameId: 3175395,
    west: 6.614889,
    population: "60340328"
  }, {
    countryName: "Jersey",
    currencyCode: "GBP",
    fipsCode: "JE",
    countryCode: "JE",
    isoNumeric: "832",
    north: 49.265057,
    capital: "Saint Helier",
    continentName: "Europe",
    areaInSqKm: "116.0",
    languages: "en,pt",
    isoAlpha3: "JEY",
    continent: "EU",
    south: 49.169834,
    east: -2.022083,
    geonameId: 3042142,
    west: -2.260028,
    population: "90812"
  }, {
    countryName: "Jamaica",
    currencyCode: "JMD",
    fipsCode: "JM",
    countryCode: "JM",
    isoNumeric: "388",
    north: 18.526976,
    capital: "Kingston",
    continentName: "North America",
    areaInSqKm: "10991.0",
    languages: "en-JM",
    isoAlpha3: "JAM",
    continent: "NA",
    south: 17.703554,
    east: -76.180321,
    geonameId: 3489940,
    west: -78.366638,
    population: "2847232"
  }, {
    countryName: "Jordan",
    currencyCode: "JOD",
    fipsCode: "JO",
    countryCode: "JO",
    isoNumeric: "400",
    north: 33.367668,
    capital: "Amman",
    continentName: "Asia",
    areaInSqKm: "92300.0",
    languages: "ar-JO,en",
    isoAlpha3: "JOR",
    continent: "AS",
    south: 29.185888,
    east: 39.301167,
    geonameId: 248816,
    west: 34.959999,
    population: "6407085"
  }, {
    countryName: "Japan",
    currencyCode: "JPY",
    fipsCode: "JA",
    countryCode: "JP",
    isoNumeric: "392",
    north: 45.52314,
    capital: "Tokyo",
    continentName: "Asia",
    areaInSqKm: "377835.0",
    languages: "ja",
    isoAlpha3: "JPN",
    continent: "AS",
    south: 24.249472,
    east: 145.820892,
    geonameId: 1861060,
    west: 122.93853,
    population: "127288000"
  }, {
    countryName: "Kenya",
    currencyCode: "KES",
    fipsCode: "KE",
    countryCode: "KE",
    isoNumeric: "404",
    north: 5.019938,
    capital: "Nairobi",
    continentName: "Africa",
    areaInSqKm: "582650.0",
    languages: "en-KE,sw-KE",
    isoAlpha3: "KEN",
    continent: "AF",
    south: -4.678047,
    east: 41.899078,
    geonameId: 192950,
    west: 33.908859,
    population: "40046566"
  }, {
    countryName: "Kyrgyzstan",
    currencyCode: "KGS",
    fipsCode: "KG",
    countryCode: "KG",
    isoNumeric: "417",
    north: 43.238224,
    capital: "Bishkek",
    continentName: "Asia",
    areaInSqKm: "198500.0",
    languages: "ky,uz,ru",
    isoAlpha3: "KGZ",
    continent: "AS",
    south: 39.172832,
    east: 80.283165,
    geonameId: 1527747,
    west: 69.276611,
    population: "5508626"
  }, {
    countryName: "Cambodia",
    currencyCode: "KHR",
    fipsCode: "CB",
    countryCode: "KH",
    isoNumeric: "116",
    north: 14.686417,
    capital: "Phnom Penh",
    continentName: "Asia",
    areaInSqKm: "181040.0",
    languages: "km,fr,en",
    isoAlpha3: "KHM",
    continent: "AS",
    south: 10.409083,
    east: 107.627724,
    geonameId: 1831722,
    west: 102.339996,
    population: "14453680"
  }, {
    countryName: "Kiribati",
    currencyCode: "AUD",
    fipsCode: "KR",
    countryCode: "KI",
    isoNumeric: "296",
    north: 4.71957,
    capital: "Tarawa",
    continentName: "Oceania",
    areaInSqKm: "811.0",
    languages: "en-KI,gil",
    isoAlpha3: "KIR",
    continent: "OC",
    south: -11.437038,
    east: -150.215347,
    geonameId: 4030945,
    west: 169.556137,
    population: "92533"
  }, {
    countryName: "Comoros",
    currencyCode: "KMF",
    fipsCode: "CN",
    countryCode: "KM",
    isoNumeric: "174",
    north: -11.362381,
    capital: "Moroni",
    continentName: "Africa",
    areaInSqKm: "2170.0",
    languages: "ar,fr-KM",
    isoAlpha3: "COM",
    continent: "AF",
    south: -12.387857,
    east: 44.538223,
    geonameId: 921929,
    west: 43.21579,
    population: "773407"
  }, {
    countryName: "Saint Kitts and Nevis",
    currencyCode: "XCD",
    fipsCode: "SC",
    countryCode: "KN",
    isoNumeric: "659",
    north: 17.420118,
    capital: "Basseterre",
    continentName: "North America",
    areaInSqKm: "261.0",
    languages: "en-KN",
    isoAlpha3: "KNA",
    continent: "NA",
    south: 17.095343,
    east: -62.543266,
    geonameId: 3575174,
    west: -62.86956,
    population: "49898"
  }, {
    countryName: "North Korea",
    currencyCode: "KPW",
    fipsCode: "KN",
    countryCode: "KP",
    isoNumeric: "408",
    north: 43.006054,
    capital: "Pyongyang",
    continentName: "Asia",
    areaInSqKm: "120540.0",
    languages: "ko-KP",
    isoAlpha3: "PRK",
    continent: "AS",
    south: 37.673332,
    east: 130.674866,
    geonameId: 1873107,
    west: 124.315887,
    population: "22912177"
  }, {
    countryName: "South Korea",
    currencyCode: "KRW",
    fipsCode: "KS",
    countryCode: "KR",
    isoNumeric: "410",
    north: 38.612446,
    capital: "Seoul",
    continentName: "Asia",
    areaInSqKm: "98480.0",
    languages: "ko-KR,en",
    isoAlpha3: "KOR",
    continent: "AS",
    south: 33.190945,
    east: 129.584671,
    geonameId: 1835841,
    west: 125.887108,
    population: "48422644"
  }, {
    countryName: "Kuwait",
    currencyCode: "KWD",
    fipsCode: "KU",
    countryCode: "KW",
    isoNumeric: "414",
    north: 30.095945,
    capital: "Kuwait City",
    continentName: "Asia",
    areaInSqKm: "17820.0",
    languages: "ar-KW,en",
    isoAlpha3: "KWT",
    continent: "AS",
    south: 28.524611,
    east: 48.431473,
    geonameId: 285570,
    west: 46.555557,
    population: "2789132"
  }, {
    countryName: "Cayman Islands",
    currencyCode: "KYD",
    fipsCode: "CJ",
    countryCode: "KY",
    isoNumeric: "136",
    north: 19.7617,
    capital: "George Town",
    continentName: "North America",
    areaInSqKm: "262.0",
    languages: "en-KY",
    isoAlpha3: "CYM",
    continent: "NA",
    south: 19.263029,
    east: -79.727272,
    geonameId: 3580718,
    west: -81.432777,
    population: "44270"
  }, {
    countryName: "Kazakhstan",
    currencyCode: "KZT",
    fipsCode: "KZ",
    countryCode: "KZ",
    isoNumeric: "398",
    north: 55.451195,
    capital: "Astana",
    continentName: "Asia",
    areaInSqKm: "2717300.0",
    languages: "kk,ru",
    isoAlpha3: "KAZ",
    continent: "AS",
    south: 40.936333,
    east: 87.312668,
    geonameId: 1522867,
    west: 46.491859,
    population: "15340000"
  }, {
    countryName: "Laos",
    currencyCode: "LAK",
    fipsCode: "LA",
    countryCode: "LA",
    isoNumeric: "418",
    north: 22.500389,
    capital: "Vientiane",
    continentName: "Asia",
    areaInSqKm: "236800.0",
    languages: "lo,fr,en",
    isoAlpha3: "LAO",
    continent: "AS",
    south: 13.910027,
    east: 107.697029,
    geonameId: 1655842,
    west: 100.093056,
    population: "6368162"
  }, {
    countryName: "Lebanon",
    currencyCode: "LBP",
    fipsCode: "LE",
    countryCode: "LB",
    isoNumeric: "422",
    north: 34.691418,
    capital: "Beirut",
    continentName: "Asia",
    areaInSqKm: "10400.0",
    languages: "ar-LB,fr-LB,en,hy",
    isoAlpha3: "LBN",
    continent: "AS",
    south: 33.05386,
    east: 36.639194,
    geonameId: 272103,
    west: 35.114277,
    population: "4125247"
  }, {
    countryName: "Saint Lucia",
    currencyCode: "XCD",
    fipsCode: "ST",
    countryCode: "LC",
    isoNumeric: "662",
    north: 14.103245,
    capital: "Castries",
    continentName: "North America",
    areaInSqKm: "616.0",
    languages: "en-LC",
    isoAlpha3: "LCA",
    continent: "NA",
    south: 13.704778,
    east: -60.874203,
    geonameId: 3576468,
    west: -61.07415,
    population: "160922"
  }, {
    countryName: "Liechtenstein",
    currencyCode: "CHF",
    fipsCode: "LS",
    countryCode: "LI",
    isoNumeric: "438",
    north: 47.273529,
    capital: "Vaduz",
    continentName: "Europe",
    areaInSqKm: "160.0",
    languages: "de-LI",
    isoAlpha3: "LIE",
    continent: "EU",
    south: 47.055862,
    east: 9.632195,
    geonameId: 3042058,
    west: 9.477805,
    population: "35000"
  }, {
    countryName: "Sri Lanka",
    currencyCode: "LKR",
    fipsCode: "CE",
    countryCode: "LK",
    isoNumeric: "144",
    north: 9.831361,
    capital: "Colombo",
    continentName: "Asia",
    areaInSqKm: "65610.0",
    languages: "si,ta,en",
    isoAlpha3: "LKA",
    continent: "AS",
    south: 5.916833,
    east: 81.881279,
    geonameId: 1227603,
    west: 79.652916,
    population: "21513990"
  }, {
    countryName: "Liberia",
    currencyCode: "LRD",
    fipsCode: "LI",
    countryCode: "LR",
    isoNumeric: "430",
    north: 8.551791,
    capital: "Monrovia",
    continentName: "Africa",
    areaInSqKm: "111370.0",
    languages: "en-LR",
    isoAlpha3: "LBR",
    continent: "AF",
    south: 4.353057,
    east: -7.365113,
    geonameId: 2275384,
    west: -11.492083,
    population: "3685076"
  }, {
    countryName: "Lesotho",
    currencyCode: "LSL",
    fipsCode: "LT",
    countryCode: "LS",
    isoNumeric: "426",
    north: -28.572058,
    capital: "Maseru",
    continentName: "Africa",
    areaInSqKm: "30355.0",
    languages: "en-LS,st,zu,xh",
    isoAlpha3: "LSO",
    continent: "AF",
    south: -30.668964,
    east: 29.465761,
    geonameId: 932692,
    west: 27.029068,
    population: "1919552"
  }, {
    countryName: "Lithuania",
    currencyCode: "LTL",
    fipsCode: "LH",
    countryCode: "LT",
    isoNumeric: "440",
    north: 56.446918,
    capital: "Vilnius",
    continentName: "Europe",
    areaInSqKm: "65200.0",
    languages: "lt,ru,pl",
    isoAlpha3: "LTU",
    continent: "EU",
    south: 53.901306,
    east: 26.871944,
    geonameId: 597427,
    west: 20.941528,
    population: "3565000"
  }, {
    countryName: "Luxembourg",
    currencyCode: "EUR",
    fipsCode: "LU",
    countryCode: "LU",
    isoNumeric: "442",
    north: 50.184944,
    capital: "Luxembourg",
    continentName: "Europe",
    areaInSqKm: "2586.0",
    languages: "lb,de-LU,fr-LU",
    isoAlpha3: "LUX",
    continent: "EU",
    south: 49.446583,
    east: 6.528472,
    geonameId: 2960313,
    west: 5.734556,
    population: "497538"
  }, {
    countryName: "Latvia",
    currencyCode: "LVL",
    fipsCode: "LG",
    countryCode: "LV",
    isoNumeric: "428",
    north: 58.082306,
    capital: "Riga",
    continentName: "Europe",
    areaInSqKm: "64589.0",
    languages: "lv,ru,lt",
    isoAlpha3: "LVA",
    continent: "EU",
    south: 55.668861,
    east: 28.241167,
    geonameId: 458258,
    west: 20.974277,
    population: "2217969"
  }, {
    countryName: "Libya",
    currencyCode: "LYD",
    fipsCode: "LY",
    countryCode: "LY",
    isoNumeric: "434",
    north: 33.168999,
    capital: "Tripoli",
    continentName: "Africa",
    areaInSqKm: "1759540.0",
    languages: "ar-LY,it,en",
    isoAlpha3: "LBY",
    continent: "AF",
    south: 19.508045,
    east: 25.150612,
    geonameId: 2215636,
    west: 9.38702,
    population: "6461454"
  }, {
    countryName: "Morocco",
    currencyCode: "MAD",
    fipsCode: "MO",
    countryCode: "MA",
    isoNumeric: "504",
    north: 35.9224966985384,
    capital: "Rabat",
    continentName: "Africa",
    areaInSqKm: "446550.0",
    languages: "ar-MA,fr",
    isoAlpha3: "MAR",
    continent: "AF",
    south: 27.662115,
    east: -.991750000000025,
    geonameId: 2542007,
    west: -13.168586,
    population: "31627428"
  }, {
    countryName: "Monaco",
    currencyCode: "EUR",
    fipsCode: "MN",
    countryCode: "MC",
    isoNumeric: "492",
    north: 43.75196717037228,
    capital: "Monaco",
    continentName: "Europe",
    areaInSqKm: "1.95",
    languages: "fr-MC,en,it",
    isoAlpha3: "MCO",
    continent: "EU",
    south: 43.72472839869377,
    east: 7.439939260482788,
    geonameId: 2993457,
    west: 7.408962249755859,
    population: "32965"
  }, {
    countryName: "Moldova",
    currencyCode: "MDL",
    fipsCode: "MD",
    countryCode: "MD",
    isoNumeric: "498",
    north: 48.490166,
    capital: "ChiÅŸinÄƒu",
    continentName: "Europe",
    areaInSqKm: "33843.0",
    languages: "ro,ru,gag,tr",
    isoAlpha3: "MDA",
    continent: "EU",
    south: 45.468887,
    east: 30.135445,
    geonameId: 617790,
    west: 26.618944,
    population: "4324000"
  }, {
    countryName: "Montenegro",
    currencyCode: "EUR",
    fipsCode: "MJ",
    countryCode: "ME",
    isoNumeric: "499",
    north: 43.570137,
    capital: "Podgorica",
    continentName: "Europe",
    areaInSqKm: "14026.0",
    languages: "sr,hu,bs,sq,hr,rom",
    isoAlpha3: "MNE",
    continent: "EU",
    south: 41.850166,
    east: 20.358833,
    geonameId: 3194884,
    west: 18.461306,
    population: "666730"
  }, {
    countryName: "Saint Martin",
    currencyCode: "EUR",
    fipsCode: "RN",
    countryCode: "MF",
    isoNumeric: "663",
    north: 18.130354,
    capital: "Marigot",
    continentName: "North America",
    areaInSqKm: "53.0",
    languages: "fr",
    isoAlpha3: "MAF",
    continent: "NA",
    south: 18.052231,
    east: -63.012993,
    geonameId: 3578421,
    west: -63.152767,
    population: "35925"
  }, {
    countryName: "Madagascar",
    currencyCode: "MGA",
    fipsCode: "MA",
    countryCode: "MG",
    isoNumeric: "450",
    north: -11.945433,
    capital: "Antananarivo",
    continentName: "Africa",
    areaInSqKm: "587040.0",
    languages: "fr-MG,mg",
    isoAlpha3: "MDG",
    continent: "AF",
    south: -25.608952,
    east: 50.48378,
    geonameId: 1062947,
    west: 43.224876,
    population: "21281844"
  }, {
    countryName: "Marshall Islands",
    currencyCode: "USD",
    fipsCode: "RM",
    countryCode: "MH",
    isoNumeric: "584",
    north: 14.62,
    capital: "Majuro",
    continentName: "Oceania",
    areaInSqKm: "181.3",
    languages: "mh,en-MH",
    isoAlpha3: "MHL",
    continent: "OC",
    south: 5.587639,
    east: 171.931808,
    geonameId: 2080185,
    west: 165.524918,
    population: "65859"
  }, {
    countryName: "Macedonia",
    currencyCode: "MKD",
    fipsCode: "MK",
    countryCode: "MK",
    isoNumeric: "807",
    north: 42.361805,
    capital: "Skopje",
    continentName: "Europe",
    areaInSqKm: "25333.0",
    languages: "mk,sq,tr,rmm,sr",
    isoAlpha3: "MKD",
    continent: "EU",
    south: 40.860195,
    east: 23.038139,
    geonameId: 718075,
    west: 20.464695,
    population: "2062294"
  }, {
    countryName: "Mali",
    currencyCode: "XOF",
    fipsCode: "ML",
    countryCode: "ML",
    isoNumeric: "466",
    north: 25.000002,
    capital: "Bamako",
    continentName: "Africa",
    areaInSqKm: "1240000.0",
    languages: "fr-ML,bm",
    isoAlpha3: "MLI",
    continent: "AF",
    south: 10.159513,
    east: 4.244968,
    geonameId: 2453866,
    west: -12.242614,
    population: "13796354"
  }, {
    countryName: "Myanmar [Burma]",
    currencyCode: "MMK",
    fipsCode: "BM",
    countryCode: "MM",
    isoNumeric: "104",
    north: 28.543249,
    capital: "Nay Pyi Taw",
    continentName: "Asia",
    areaInSqKm: "678500.0",
    languages: "my",
    isoAlpha3: "MMR",
    continent: "AS",
    south: 9.784583,
    east: 101.176781,
    geonameId: 1327865,
    west: 92.189278,
    population: "53414374"
  }, {
    countryName: "Mongolia",
    currencyCode: "MNT",
    fipsCode: "MG",
    countryCode: "MN",
    isoNumeric: "496",
    north: 52.154251,
    capital: "Ulan Bator",
    continentName: "Asia",
    areaInSqKm: "1565000.0",
    languages: "mn,ru",
    isoAlpha3: "MNG",
    continent: "AS",
    south: 41.567638,
    east: 119.924309,
    geonameId: 2029969,
    west: 87.749664,
    population: "3086918"
  }, {
    countryName: "Macao",
    currencyCode: "MOP",
    fipsCode: "MC",
    countryCode: "MO",
    isoNumeric: "446",
    north: 22.222334,
    capital: "Macao",
    continentName: "Asia",
    areaInSqKm: "254.0",
    languages: "zh,zh-MO,pt",
    isoAlpha3: "MAC",
    continent: "AS",
    south: 22.180389,
    east: 113.565834,
    geonameId: 1821275,
    west: 113.528946,
    population: "449198"
  }, {
    countryName: "Northern Mariana Islands",
    currencyCode: "USD",
    fipsCode: "CQ",
    countryCode: "MP",
    isoNumeric: "580",
    north: 20.55344,
    capital: "Saipan",
    continentName: "Oceania",
    areaInSqKm: "477.0",
    languages: "fil,tl,zh,ch-MP,en-MP",
    isoAlpha3: "MNP",
    continent: "OC",
    south: 14.11023,
    east: 146.06528,
    geonameId: 4041468,
    west: 144.88626,
    population: "53883"
  }, {
    countryName: "Martinique",
    currencyCode: "EUR",
    fipsCode: "MB",
    countryCode: "MQ",
    isoNumeric: "474",
    north: 14.878819,
    capital: "Fort-de-France",
    continentName: "North America",
    areaInSqKm: "1100.0",
    languages: "fr-MQ",
    isoAlpha3: "MTQ",
    continent: "NA",
    south: 14.392262,
    east: -60.81551,
    geonameId: 3570311,
    west: -61.230118,
    population: "432900"
  }, {
    countryName: "Mauritania",
    currencyCode: "MRO",
    fipsCode: "MR",
    countryCode: "MR",
    isoNumeric: "478",
    north: 27.298073,
    capital: "Nouakchott",
    continentName: "Africa",
    areaInSqKm: "1030700.0",
    languages: "ar-MR,fuc,snk,fr,mey,wo",
    isoAlpha3: "MRT",
    continent: "AF",
    south: 14.715547,
    east: -4.827674,
    geonameId: 2378080,
    west: -17.066521,
    population: "3205060"
  }, {
    countryName: "Montserrat",
    currencyCode: "XCD",
    fipsCode: "MH",
    countryCode: "MS",
    isoNumeric: "500",
    north: 16.824060205313184,
    capital: "Plymouth",
    continentName: "North America",
    areaInSqKm: "102.0",
    languages: "en-MS",
    isoAlpha3: "MSR",
    continent: "NA",
    south: 16.674768935441556,
    east: -62.144100129608205,
    geonameId: 3578097,
    west: -62.24138237036129,
    population: "9341"
  }, {
    countryName: "Malta",
    currencyCode: "EUR",
    fipsCode: "MT",
    countryCode: "MT",
    isoNumeric: "470",
    north: 36.079112527087844,
    capital: "Valletta",
    continentName: "Europe",
    areaInSqKm: "316.0",
    languages: "mt,en-MT",
    isoAlpha3: "MLT",
    continent: "EU",
    south: 35.810276,
    east: 14.577639,
    geonameId: 2562770,
    west: 14.184376415657312,
    population: "403000"
  }, {
    countryName: "Mauritius",
    currencyCode: "MUR",
    fipsCode: "MP",
    countryCode: "MU",
    isoNumeric: "480",
    north: -10.319255,
    capital: "Port Louis",
    continentName: "Africa",
    areaInSqKm: "2040.0",
    languages: "en-MU,bho,fr",
    isoAlpha3: "MUS",
    continent: "AF",
    south: -20.525717,
    east: 63.500179,
    geonameId: 934292,
    west: 56.512718,
    population: "1294104"
  }, {
    countryName: "Maldives",
    currencyCode: "MVR",
    fipsCode: "MV",
    countryCode: "MV",
    isoNumeric: "462",
    north: 7.098361,
    capital: "MalÃ©",
    continentName: "Asia",
    areaInSqKm: "300.0",
    languages: "dv,en",
    isoAlpha3: "MDV",
    continent: "AS",
    south: -.692694,
    east: 73.637276,
    geonameId: 1282028,
    west: 72.693222,
    population: "395650"
  }, {
    countryName: "Malawi",
    currencyCode: "MWK",
    fipsCode: "MI",
    countryCode: "MW",
    isoNumeric: "454",
    north: -9.367541,
    capital: "Lilongwe",
    continentName: "Africa",
    areaInSqKm: "118480.0",
    languages: "ny,yao,tum,swk",
    isoAlpha3: "MWI",
    continent: "AF",
    south: -17.125,
    east: 35.916821,
    geonameId: 927384,
    west: 32.67395,
    population: "15447500"
  }, {
    countryName: "Mexico",
    currencyCode: "MXN",
    fipsCode: "MX",
    countryCode: "MX",
    isoNumeric: "484",
    north: 32.716759,
    capital: "Mexico City",
    continentName: "North America",
    areaInSqKm: "1972550.0",
    languages: "es-MX",
    isoAlpha3: "MEX",
    continent: "NA",
    south: 14.532866,
    east: -86.703392,
    geonameId: 3996063,
    west: -118.453949,
    population: "112468855"
  }, {
    countryName: "Malaysia",
    currencyCode: "MYR",
    fipsCode: "MY",
    countryCode: "MY",
    isoNumeric: "458",
    north: 7.363417,
    capital: "Kuala Lumpur",
    continentName: "Asia",
    areaInSqKm: "329750.0",
    languages: "ms-MY,en,zh,ta,te,ml,pa,th",
    isoAlpha3: "MYS",
    continent: "AS",
    south: .855222,
    east: 119.267502,
    geonameId: 1733045,
    west: 99.643448,
    population: "28274729"
  }, {
    countryName: "Mozambique",
    currencyCode: "MZN",
    fipsCode: "MZ",
    countryCode: "MZ",
    isoNumeric: "508",
    north: -10.471883,
    capital: "Maputo",
    continentName: "Africa",
    areaInSqKm: "801590.0",
    languages: "pt-MZ,vmw",
    isoAlpha3: "MOZ",
    continent: "AF",
    south: -26.868685,
    east: 40.842995,
    geonameId: 1036973,
    west: 30.217319,
    population: "22061451"
  }, {
    countryName: "Namibia",
    currencyCode: "NAD",
    fipsCode: "WA",
    countryCode: "NA",
    isoNumeric: "516",
    north: -16.959894,
    capital: "Windhoek",
    continentName: "Africa",
    areaInSqKm: "825418.0",
    languages: "en-NA,af,de,hz,naq",
    isoAlpha3: "NAM",
    continent: "AF",
    south: -28.97143,
    east: 25.256701,
    geonameId: 3355338,
    west: 11.71563,
    population: "2128471"
  }, {
    countryName: "New Caledonia",
    currencyCode: "XPF",
    fipsCode: "NC",
    countryCode: "NC",
    isoNumeric: "540",
    north: -19.549778,
    capital: "Noumea",
    continentName: "Oceania",
    areaInSqKm: "19060.0",
    languages: "fr-NC",
    isoAlpha3: "NCL",
    continent: "OC",
    south: -22.698,
    east: 168.129135,
    geonameId: 2139685,
    west: 163.564667,
    population: "216494"
  }, {
    countryName: "Niger",
    currencyCode: "XOF",
    fipsCode: "NG",
    countryCode: "NE",
    isoNumeric: "562",
    north: 23.525026,
    capital: "Niamey",
    continentName: "Africa",
    areaInSqKm: "1267000.0",
    languages: "fr-NE,ha,kr,dje",
    isoAlpha3: "NER",
    continent: "AF",
    south: 11.696975,
    east: 15.995643,
    geonameId: 2440476,
    west: .16625,
    population: "15878271"
  }, {
    countryName: "Norfolk Island",
    currencyCode: "AUD",
    fipsCode: "NF",
    countryCode: "NF",
    isoNumeric: "574",
    north: -28.995170686948427,
    capital: "Kingston",
    continentName: "Oceania",
    areaInSqKm: "34.6",
    languages: "en-NF",
    isoAlpha3: "NFK",
    continent: "OC",
    south: -29.063076742954735,
    east: 167.99773740209957,
    geonameId: 2155115,
    west: 167.91543230151365,
    population: "1828"
  }, {
    countryName: "Nigeria",
    currencyCode: "NGN",
    fipsCode: "NI",
    countryCode: "NG",
    isoNumeric: "566",
    north: 13.892007,
    capital: "Abuja",
    continentName: "Africa",
    areaInSqKm: "923768.0",
    languages: "en-NG,ha,yo,ig,ff",
    isoAlpha3: "NGA",
    continent: "AF",
    south: 4.277144,
    east: 14.680073,
    geonameId: 2328926,
    west: 2.668432,
    population: "154000000"
  }, {
    countryName: "Nicaragua",
    currencyCode: "NIO",
    fipsCode: "NU",
    countryCode: "NI",
    isoNumeric: "558",
    north: 15.025909,
    capital: "Managua",
    continentName: "North America",
    areaInSqKm: "129494.0",
    languages: "es-NI,en",
    isoAlpha3: "NIC",
    continent: "NA",
    south: 10.707543,
    east: -82.738289,
    geonameId: 3617476,
    west: -87.690308,
    population: "5995928"
  }, {
    countryName: "Netherlands",
    currencyCode: "EUR",
    fipsCode: "NL",
    countryCode: "NL",
    isoNumeric: "528",
    north: 53.512196,
    capital: "Amsterdam",
    continentName: "Europe",
    areaInSqKm: "41526.0",
    languages: "nl-NL,fy-NL",
    isoAlpha3: "NLD",
    continent: "EU",
    south: 50.753918,
    east: 7.227944,
    geonameId: 2750405,
    west: 3.362556,
    population: "16645000"
  }, {
    countryName: "Norway",
    currencyCode: "NOK",
    fipsCode: "NO",
    countryCode: "NO",
    isoNumeric: "578",
    north: 71.18811,
    capital: "Oslo",
    continentName: "Europe",
    areaInSqKm: "324220.0",
    languages: "no,nb,nn,se,fi",
    isoAlpha3: "NOR",
    continent: "EU",
    south: 57.977917,
    east: 31.078052520751953,
    geonameId: 3144096,
    west: 4.650167,
    population: "5009150"
  }, {
    countryName: "Nepal",
    currencyCode: "NPR",
    fipsCode: "NP",
    countryCode: "NP",
    isoNumeric: "524",
    north: 30.43339,
    capital: "Kathmandu",
    continentName: "Asia",
    areaInSqKm: "140800.0",
    languages: "ne,en",
    isoAlpha3: "NPL",
    continent: "AS",
    south: 26.356722,
    east: 88.199333,
    geonameId: 1282988,
    west: 80.056274,
    population: "28951852"
  }, {
    countryName: "Nauru",
    currencyCode: "AUD",
    fipsCode: "NR",
    countryCode: "NR",
    isoNumeric: "520",
    north: -.504306,
    capital: "",
    continentName: "Oceania",
    areaInSqKm: "21.0",
    languages: "na,en-NR",
    isoAlpha3: "NRU",
    continent: "OC",
    south: -.552333,
    east: 166.945282,
    geonameId: 2110425,
    west: 166.899033,
    population: "10065"
  }, {
    countryName: "Niue",
    currencyCode: "NZD",
    fipsCode: "NE",
    countryCode: "NU",
    isoNumeric: "570",
    north: -18.951069,
    capital: "Alofi",
    continentName: "Oceania",
    areaInSqKm: "260.0",
    languages: "niu,en-NU",
    isoAlpha3: "NIU",
    continent: "OC",
    south: -19.152193,
    east: -169.775177,
    geonameId: 4036232,
    west: -169.951004,
    population: "2166"
  }, {
    countryName: "New Zealand",
    currencyCode: "NZD",
    fipsCode: "NZ",
    countryCode: "NZ",
    isoNumeric: "554",
    north: -34.389668,
    capital: "Wellington",
    continentName: "Oceania",
    areaInSqKm: "268680.0",
    languages: "en-NZ,mi",
    isoAlpha3: "NZL",
    continent: "OC",
    south: -47.286026,
    east: -180,
    geonameId: 2186224,
    west: 166.7155,
    population: "4252277"
  }, {
    countryName: "Oman",
    currencyCode: "OMR",
    fipsCode: "MU",
    countryCode: "OM",
    isoNumeric: "512",
    north: 26.387972,
    capital: "Muscat",
    continentName: "Asia",
    areaInSqKm: "212460.0",
    languages: "ar-OM,en,bal,ur",
    isoAlpha3: "OMN",
    continent: "AS",
    south: 16.64575,
    east: 59.836582,
    geonameId: 286963,
    west: 51.882,
    population: "2967717"
  }, {
    countryName: "Panama",
    currencyCode: "PAB",
    fipsCode: "PM",
    countryCode: "PA",
    isoNumeric: "591",
    north: 9.637514,
    capital: "Panama City",
    continentName: "North America",
    areaInSqKm: "78200.0",
    languages: "es-PA,en",
    isoAlpha3: "PAN",
    continent: "NA",
    south: 7.197906,
    east: -77.17411,
    geonameId: 3703430,
    west: -83.051445,
    population: "3410676"
  }, {
    countryName: "Peru",
    currencyCode: "PEN",
    fipsCode: "PE",
    countryCode: "PE",
    isoNumeric: "604",
    north: -.012977,
    capital: "Lima",
    continentName: "South America",
    areaInSqKm: "1285220.0",
    languages: "es-PE,qu,ay",
    isoAlpha3: "PER",
    continent: "SA",
    south: -18.349728,
    east: -68.677986,
    geonameId: 3932488,
    west: -81.326744,
    population: "29907003"
  }, {
    countryName: "French Polynesia",
    currencyCode: "XPF",
    fipsCode: "FP",
    countryCode: "PF",
    isoNumeric: "258",
    north: -7.903573,
    capital: "Papeete",
    continentName: "Oceania",
    areaInSqKm: "4167.0",
    languages: "fr-PF,ty",
    isoAlpha3: "PYF",
    continent: "OC",
    south: -27.653572,
    east: -134.929825,
    geonameId: 4030656,
    west: -152.877167,
    population: "270485"
  }, {
    countryName: "Papua New Guinea",
    currencyCode: "PGK",
    fipsCode: "PP",
    countryCode: "PG",
    isoNumeric: "598",
    north: -1.318639,
    capital: "Port Moresby",
    continentName: "Oceania",
    areaInSqKm: "462840.0",
    languages: "en-PG,ho,meu,tpi",
    isoAlpha3: "PNG",
    continent: "OC",
    south: -11.657861,
    east: 155.96344,
    geonameId: 2088628,
    west: 140.842865,
    population: "6064515"
  }, {
    countryName: "Philippines",
    currencyCode: "PHP",
    fipsCode: "RP",
    countryCode: "PH",
    isoNumeric: "608",
    north: 21.120611,
    capital: "Manila",
    continentName: "Asia",
    areaInSqKm: "300000.0",
    languages: "tl,en-PH,fil",
    isoAlpha3: "PHL",
    continent: "AS",
    south: 4.643306,
    east: 126.601524,
    geonameId: 1694008,
    west: 116.931557,
    population: "99900177"
  }, {
    countryName: "Pakistan",
    currencyCode: "PKR",
    fipsCode: "PK",
    countryCode: "PK",
    isoNumeric: "586",
    north: 37.097,
    capital: "Islamabad",
    continentName: "Asia",
    areaInSqKm: "803940.0",
    languages: "ur-PK,en-PK,pa,sd,ps,brh",
    isoAlpha3: "PAK",
    continent: "AS",
    south: 23.786722,
    east: 77.840919,
    geonameId: 1168579,
    west: 60.878613,
    population: "184404791"
  }, {
    countryName: "Poland",
    currencyCode: "PLN",
    fipsCode: "PL",
    countryCode: "PL",
    isoNumeric: "616",
    north: 54.839138,
    capital: "Warsaw",
    continentName: "Europe",
    areaInSqKm: "312685.0",
    languages: "pl",
    isoAlpha3: "POL",
    continent: "EU",
    south: 49.006363,
    east: 24.150749,
    geonameId: 798544,
    west: 14.123,
    population: "38500000"
  }, {
    countryName: "Saint Pierre and Miquelon",
    currencyCode: "EUR",
    fipsCode: "SB",
    countryCode: "PM",
    isoNumeric: "666",
    north: 47.146286,
    capital: "Saint-Pierre",
    continentName: "North America",
    areaInSqKm: "242.0",
    languages: "fr-PM",
    isoAlpha3: "SPM",
    continent: "NA",
    south: 46.786041,
    east: -56.252991,
    geonameId: 3424932,
    west: -56.420658,
    population: "7012"
  }, {
    countryName: "Pitcairn Islands",
    currencyCode: "NZD",
    fipsCode: "PC",
    countryCode: "PN",
    isoNumeric: "612",
    north: -24.315865,
    capital: "Adamstown",
    continentName: "Oceania",
    areaInSqKm: "47.0",
    languages: "en-PN",
    isoAlpha3: "PCN",
    continent: "OC",
    south: -24.672565,
    east: -124.77285,
    geonameId: 4030699,
    west: -128.346436,
    population: "46"
  }, {
    countryName: "Puerto Rico",
    currencyCode: "USD",
    fipsCode: "RQ",
    countryCode: "PR",
    isoNumeric: "630",
    north: 18.520166,
    capital: "San Juan",
    continentName: "North America",
    areaInSqKm: "9104.0",
    languages: "en-PR,es-PR",
    isoAlpha3: "PRI",
    continent: "NA",
    south: 17.926405,
    east: -65.242737,
    geonameId: 4566966,
    west: -67.942726,
    population: "3916632"
  }, {
    countryName: "Palestine",
    currencyCode: "ILS",
    fipsCode: "WE",
    countryCode: "PS",
    isoNumeric: "275",
    north: 32.54638671875,
    capital: "",
    continentName: "Asia",
    areaInSqKm: "5970.0",
    languages: "ar-PS",
    isoAlpha3: "PSE",
    continent: "AS",
    south: 31.216541290283203,
    east: 35.5732955932617,
    geonameId: 6254930,
    west: 34.21665954589844,
    population: "3800000"
  }, {
    countryName: "Portugal",
    currencyCode: "EUR",
    fipsCode: "PO",
    countryCode: "PT",
    isoNumeric: "620",
    north: 42.145638,
    capital: "Lisbon",
    continentName: "Europe",
    areaInSqKm: "92391.0",
    languages: "pt-PT,mwl",
    isoAlpha3: "PRT",
    continent: "EU",
    south: 36.96125,
    east: -6.182694,
    geonameId: 2264397,
    west: -9.495944,
    population: "10676000"
  }, {
    countryName: "Palau",
    currencyCode: "USD",
    fipsCode: "PS",
    countryCode: "PW",
    isoNumeric: "585",
    north: 8.46966,
    capital: "Melekeok - Palau State Capital",
    continentName: "Oceania",
    areaInSqKm: "458.0",
    languages: "pau,sov,en-PW,tox,ja,fil,zh",
    isoAlpha3: "PLW",
    continent: "OC",
    south: 2.8036,
    east: 134.72307,
    geonameId: 1559582,
    west: 131.11788,
    population: "19907"
  }, {
    countryName: "Paraguay",
    currencyCode: "PYG",
    fipsCode: "PA",
    countryCode: "PY",
    isoNumeric: "600",
    north: -19.294041,
    capital: "AsunciÃ³n",
    continentName: "South America",
    areaInSqKm: "406750.0",
    languages: "es-PY,gn",
    isoAlpha3: "PRY",
    continent: "SA",
    south: -27.608738,
    east: -54.259354,
    geonameId: 3437598,
    west: -62.647076,
    population: "6375830"
  }, {
    countryName: "Qatar",
    currencyCode: "QAR",
    fipsCode: "QA",
    countryCode: "QA",
    isoNumeric: "634",
    north: 26.154722,
    capital: "Doha",
    continentName: "Asia",
    areaInSqKm: "11437.0",
    languages: "ar-QA,es",
    isoAlpha3: "QAT",
    continent: "AS",
    south: 24.482944,
    east: 51.636639,
    geonameId: 289688,
    west: 50.757221,
    population: "840926"
  }, {
    countryName: "RÃ©union",
    currencyCode: "EUR",
    fipsCode: "RE",
    countryCode: "RE",
    isoNumeric: "638",
    north: -20.856855,
    capital: "Saint-Denis",
    continentName: "Africa",
    areaInSqKm: "2517.0",
    languages: "fr-RE",
    isoAlpha3: "REU",
    continent: "AF",
    south: -21.372211,
    east: 55.845039,
    geonameId: 935317,
    west: 55.219086,
    population: "776948"
  }, {
    countryName: "Romania",
    currencyCode: "RON",
    fipsCode: "RO",
    countryCode: "RO",
    isoNumeric: "642",
    north: 48.266945,
    capital: "Bucharest",
    continentName: "Europe",
    areaInSqKm: "237500.0",
    languages: "ro,hu,rom",
    isoAlpha3: "ROU",
    continent: "EU",
    south: 43.627304,
    east: 29.691055,
    geonameId: 798549,
    west: 20.269972,
    population: "21959278"
  }, {
    countryName: "Serbia",
    currencyCode: "RSD",
    fipsCode: "RI",
    countryCode: "RS",
    isoNumeric: "688",
    north: 46.18138885498047,
    capital: "Belgrade",
    continentName: "Europe",
    areaInSqKm: "88361.0",
    languages: "sr,hu,bs,rom",
    isoAlpha3: "SRB",
    continent: "EU",
    south: 42.232215881347656,
    east: 23.00499725341797,
    geonameId: 6290252,
    west: 18.817020416259766,
    population: "7344847"
  }, {
    countryName: "Russia",
    currencyCode: "RUB",
    fipsCode: "RS",
    countryCode: "RU",
    isoNumeric: "643",
    north: 81.857361,
    capital: "Moscow",
    continentName: "Europe",
    areaInSqKm: "1.71E7",
    languages: "ru,tt,xal,cau,ady,kv,ce,tyv,cv,udm,tut,mns,bua,myv,mdf,chm,ba,inh,tut,kbd,krc,ava,sah,nog",
    isoAlpha3: "RUS",
    continent: "EU",
    south: 41.188862,
    east: -169.05,
    geonameId: 2017370,
    west: 19.25,
    population: "140702000"
  }, {
    countryName: "Rwanda",
    currencyCode: "RWF",
    fipsCode: "RW",
    countryCode: "RW",
    isoNumeric: "646",
    north: -1.053481,
    capital: "Kigali",
    continentName: "Africa",
    areaInSqKm: "26338.0",
    languages: "rw,en-RW,fr-RW,sw",
    isoAlpha3: "RWA",
    continent: "AF",
    south: -2.840679,
    east: 30.895958,
    geonameId: 49518,
    west: 28.856794,
    population: "11055976"
  }, {
    countryName: "Saudi Arabia",
    currencyCode: "SAR",
    fipsCode: "SA",
    countryCode: "SA",
    isoNumeric: "682",
    north: 32.158333,
    capital: "Riyadh",
    continentName: "Asia",
    areaInSqKm: "1960582.0",
    languages: "ar-SA",
    isoAlpha3: "SAU",
    continent: "AS",
    south: 15.61425,
    east: 55.666584,
    geonameId: 102358,
    west: 34.495693,
    population: "25731776"
  }, {
    countryName: "Solomon Islands",
    currencyCode: "SBD",
    fipsCode: "BP",
    countryCode: "SB",
    isoNumeric: "090",
    north: -6.589611,
    capital: "Honiara",
    continentName: "Oceania",
    areaInSqKm: "28450.0",
    languages: "en-SB,tpi",
    isoAlpha3: "SLB",
    continent: "OC",
    south: -11.850555,
    east: 166.980865,
    geonameId: 2103350,
    west: 155.508606,
    population: "559198"
  }, {
    countryName: "Seychelles",
    currencyCode: "SCR",
    fipsCode: "SE",
    countryCode: "SC",
    isoNumeric: "690",
    north: -4.283717,
    capital: "Victoria",
    continentName: "Africa",
    areaInSqKm: "455.0",
    languages: "en-SC,fr-SC",
    isoAlpha3: "SYC",
    continent: "AF",
    south: -9.753867,
    east: 56.279507,
    geonameId: 241170,
    west: 46.204769,
    population: "88340"
  }, {
    countryName: "Sudan",
    currencyCode: "SDG",
    fipsCode: "SU",
    countryCode: "SD",
    isoNumeric: "729",
    north: 22.232219696044922,
    capital: "Khartoum",
    continentName: "Africa",
    areaInSqKm: "1861484.0",
    languages: "ar-SD,en,fia",
    isoAlpha3: "SDN",
    continent: "AF",
    south: 8.684720993041992,
    east: 38.60749816894531,
    geonameId: 366755,
    west: 21.827774047851562,
    population: "35000000"
  }, {
    countryName: "Sweden",
    currencyCode: "SEK",
    fipsCode: "SW",
    countryCode: "SE",
    isoNumeric: "752",
    north: 69.0625,
    capital: "Stockholm",
    continentName: "Europe",
    areaInSqKm: "449964.0",
    languages: "sv-SE,se,sma,fi-SE",
    isoAlpha3: "SWE",
    continent: "EU",
    south: 55.337112,
    east: 24.156292483918484,
    geonameId: 2661886,
    west: 11.118694,
    population: "9555893"
  }, {
    countryName: "Singapore",
    currencyCode: "SGD",
    fipsCode: "SN",
    countryCode: "SG",
    isoNumeric: "702",
    north: 1.471278,
    capital: "Singapore",
    continentName: "Asia",
    areaInSqKm: "692.7",
    languages: "cmn,en-SG,ms-SG,ta-SG,zh-SG",
    isoAlpha3: "SGP",
    continent: "AS",
    south: 1.258556,
    east: 104.007469,
    geonameId: 1880251,
    west: 103.638275,
    population: "4701069"
  }, {
    countryName: "Saint Helena",
    currencyCode: "SHP",
    fipsCode: "SH",
    countryCode: "SH",
    isoNumeric: "654",
    north: -7.887815,
    capital: "Jamestown",
    continentName: "Africa",
    areaInSqKm: "410.0",
    languages: "en-SH",
    isoAlpha3: "SHN",
    continent: "AF",
    south: -16.019543,
    east: -5.638753,
    geonameId: 3370751,
    west: -14.42123,
    population: "7460"
  }, {
    countryName: "Slovenia",
    currencyCode: "EUR",
    fipsCode: "SI",
    countryCode: "SI",
    isoNumeric: "705",
    north: 46.877918,
    capital: "Ljubljana",
    continentName: "Europe",
    areaInSqKm: "20273.0",
    languages: "sl,sh",
    isoAlpha3: "SVN",
    continent: "EU",
    south: 45.413139,
    east: 16.566,
    geonameId: 3190538,
    west: 13.383083,
    population: "2007000"
  }, {
    countryName: "Svalbard and Jan Mayen",
    currencyCode: "NOK",
    fipsCode: "SV",
    countryCode: "SJ",
    isoNumeric: "744",
    north: 80.762085,
    capital: "Longyearbyen",
    continentName: "Europe",
    areaInSqKm: "62049.0",
    languages: "no,ru",
    isoAlpha3: "SJM",
    continent: "EU",
    south: 79.220306,
    east: 33.287334,
    geonameId: 607072,
    west: 17.699389,
    population: "2550"
  }, {
    countryName: "Slovakia",
    currencyCode: "EUR",
    fipsCode: "LO",
    countryCode: "SK",
    isoNumeric: "703",
    north: 49.603168,
    capital: "Bratislava",
    continentName: "Europe",
    areaInSqKm: "48845.0",
    languages: "sk,hu",
    isoAlpha3: "SVK",
    continent: "EU",
    south: 47.728111,
    east: 22.570444,
    geonameId: 3057568,
    west: 16.84775,
    population: "5455000"
  }, {
    countryName: "Sierra Leone",
    currencyCode: "SLL",
    fipsCode: "SL",
    countryCode: "SL",
    isoNumeric: "694",
    north: 10,
    capital: "Freetown",
    continentName: "Africa",
    areaInSqKm: "71740.0",
    languages: "en-SL,men,tem",
    isoAlpha3: "SLE",
    continent: "AF",
    south: 6.929611,
    east: -10.284238,
    geonameId: 2403846,
    west: -13.307631,
    population: "5245695"
  }, {
    countryName: "San Marino",
    currencyCode: "EUR",
    fipsCode: "SM",
    countryCode: "SM",
    isoNumeric: "674",
    north: 43.99223730851663,
    capital: "San Marino",
    continentName: "Europe",
    areaInSqKm: "61.2",
    languages: "it-SM",
    isoAlpha3: "SMR",
    continent: "EU",
    south: 43.8937092171425,
    east: 12.51653186779788,
    geonameId: 3168068,
    west: 12.403538978820734,
    population: "31477"
  }, {
    countryName: "Senegal",
    currencyCode: "XOF",
    fipsCode: "SG",
    countryCode: "SN",
    isoNumeric: "686",
    north: 16.691633,
    capital: "Dakar",
    continentName: "Africa",
    areaInSqKm: "196190.0",
    languages: "fr-SN,wo,fuc,mnk",
    isoAlpha3: "SEN",
    continent: "AF",
    south: 12.307275,
    east: -11.355887,
    geonameId: 2245662,
    west: -17.535236,
    population: "12323252"
  }, {
    countryName: "Somalia",
    currencyCode: "SOS",
    fipsCode: "SO",
    countryCode: "SO",
    isoNumeric: "706",
    north: 11.979166,
    capital: "Mogadishu",
    continentName: "Africa",
    areaInSqKm: "637657.0",
    languages: "so-SO,ar-SO,it,en-SO",
    isoAlpha3: "SOM",
    continent: "AF",
    south: -1.674868,
    east: 51.412636,
    geonameId: 51537,
    west: 40.986595,
    population: "10112453"
  }, {
    countryName: "Suriname",
    currencyCode: "SRD",
    fipsCode: "NS",
    countryCode: "SR",
    isoNumeric: "740",
    north: 6.004546,
    capital: "Paramaribo",
    continentName: "South America",
    areaInSqKm: "163270.0",
    languages: "nl-SR,en,srn,hns,jv",
    isoAlpha3: "SUR",
    continent: "SA",
    south: 1.831145,
    east: -53.977493,
    geonameId: 3382998,
    west: -58.086563,
    population: "492829"
  }, {
    countryName: "South Sudan",
    currencyCode: "SSP",
    fipsCode: "OD",
    countryCode: "SS",
    isoNumeric: "728",
    north: 12.219148635864258,
    capital: "Juba",
    continentName: "Africa",
    areaInSqKm: "644329.0",
    languages: "en",
    isoAlpha3: "SSD",
    continent: "AF",
    south: 3.493394374847412,
    east: 35.9405517578125,
    geonameId: 7909807,
    west: 24.140274047851562,
    population: "8260490"
  }, {
    countryName: "SÃ£o TomÃ© and PrÃ­ncipe",
    currencyCode: "STD",
    fipsCode: "TP",
    countryCode: "ST",
    isoNumeric: "678",
    north: 1.701323,
    capital: "SÃ£o TomÃ©",
    continentName: "Africa",
    areaInSqKm: "1001.0",
    languages: "pt-ST",
    isoAlpha3: "STP",
    continent: "AF",
    south: .024766,
    east: 7.466374,
    geonameId: 2410758,
    west: 6.47017,
    population: "175808"
  }, {
    countryName: "El Salvador",
    currencyCode: "USD",
    fipsCode: "ES",
    countryCode: "SV",
    isoNumeric: "222",
    north: 14.445067,
    capital: "San Salvador",
    continentName: "North America",
    areaInSqKm: "21040.0",
    languages: "es-SV",
    isoAlpha3: "SLV",
    continent: "NA",
    south: 13.148679,
    east: -87.692162,
    geonameId: 3585968,
    west: -90.128662,
    population: "6052064"
  }, {
    countryName: "Sint Maarten",
    currencyCode: "ANG",
    fipsCode: "NN",
    countryCode: "SX",
    isoNumeric: "534",
    north: 18.070248,
    capital: "Philipsburg",
    continentName: "North America",
    areaInSqKm: "",
    languages: "nl,en",
    isoAlpha3: "SXM",
    continent: "NA",
    south: 18.011692,
    east: -63.012993,
    geonameId: 7609695,
    west: -63.144039,
    population: "37429"
  }, {
    countryName: "Syria",
    currencyCode: "SYP",
    fipsCode: "SY",
    countryCode: "SY",
    isoNumeric: "760",
    north: 37.319138,
    capital: "Damascus",
    continentName: "Asia",
    areaInSqKm: "185180.0",
    languages: "ar-SY,ku,hy,arc,fr,en",
    isoAlpha3: "SYR",
    continent: "AS",
    south: 32.310665,
    east: 42.385029,
    geonameId: 163843,
    west: 35.727222,
    population: "22198110"
  }, {
    countryName: "Swaziland",
    currencyCode: "SZL",
    fipsCode: "WZ",
    countryCode: "SZ",
    isoNumeric: "748",
    north: -25.719648,
    capital: "Mbabane",
    continentName: "Africa",
    areaInSqKm: "17363.0",
    languages: "en-SZ,ss-SZ",
    isoAlpha3: "SWZ",
    continent: "AF",
    south: -27.317101,
    east: 32.13726,
    geonameId: 934841,
    west: 30.794107,
    population: "1354051"
  }, {
    countryName: "Turks and Caicos Islands",
    currencyCode: "USD",
    fipsCode: "TK",
    countryCode: "TC",
    isoNumeric: "796",
    north: 21.961878,
    capital: "Cockburn Town",
    continentName: "North America",
    areaInSqKm: "430.0",
    languages: "en-TC",
    isoAlpha3: "TCA",
    continent: "NA",
    south: 21.422626,
    east: -71.123642,
    geonameId: 3576916,
    west: -72.483871,
    population: "20556"
  }, {
    countryName: "Chad",
    currencyCode: "XAF",
    fipsCode: "CD",
    countryCode: "TD",
    isoNumeric: "148",
    north: 23.450369,
    capital: "N'Djamena",
    continentName: "Africa",
    areaInSqKm: "1284000.0",
    languages: "fr-TD,ar-TD,sre",
    isoAlpha3: "TCD",
    continent: "AF",
    south: 7.441068,
    east: 24.002661,
    geonameId: 2434508,
    west: 13.473475,
    population: "10543464"
  }, {
    countryName: "French Southern Territories",
    currencyCode: "EUR",
    fipsCode: "FS",
    countryCode: "TF",
    isoNumeric: "260",
    north: -37.790722,
    capital: "Port-aux-FranÃ§ais",
    continentName: "Antarctica",
    areaInSqKm: "7829.0",
    languages: "fr",
    isoAlpha3: "ATF",
    continent: "AN",
    south: -49.735184,
    east: 77.598808,
    geonameId: 1546748,
    west: 50.170258,
    population: "140"
  }, {
    countryName: "Togo",
    currencyCode: "XOF",
    fipsCode: "TO",
    countryCode: "TG",
    isoNumeric: "768",
    north: 11.138977,
    capital: "LomÃ©",
    continentName: "Africa",
    areaInSqKm: "56785.0",
    languages: "fr-TG,ee,hna,kbp,dag,ha",
    isoAlpha3: "TGO",
    continent: "AF",
    south: 6.104417,
    east: 1.806693,
    geonameId: 2363686,
    west: -.147324,
    population: "6587239"
  }, {
    countryName: "Thailand",
    currencyCode: "THB",
    fipsCode: "TH",
    countryCode: "TH",
    isoNumeric: "764",
    north: 20.463194,
    capital: "Bangkok",
    continentName: "Asia",
    areaInSqKm: "514000.0",
    languages: "th,en",
    isoAlpha3: "THA",
    continent: "AS",
    south: 5.61,
    east: 105.639389,
    geonameId: 1605651,
    west: 97.345642,
    population: "67089500"
  }, {
    countryName: "Tajikistan",
    currencyCode: "TJS",
    fipsCode: "TI",
    countryCode: "TJ",
    isoNumeric: "762",
    north: 41.042252,
    capital: "Dushanbe",
    continentName: "Asia",
    areaInSqKm: "143100.0",
    languages: "tg,ru",
    isoAlpha3: "TJK",
    continent: "AS",
    south: 36.674137,
    east: 75.137222,
    geonameId: 1220409,
    west: 67.387138,
    population: "7487489"
  }, {
    countryName: "Tokelau",
    currencyCode: "NZD",
    fipsCode: "TL",
    countryCode: "TK",
    isoNumeric: "772",
    north: -8.553613662719727,
    capital: "",
    continentName: "Oceania",
    areaInSqKm: "10.0",
    languages: "tkl,en-TK",
    isoAlpha3: "TKL",
    continent: "OC",
    south: -9.381111145019531,
    east: -171.21142578125,
    geonameId: 4031074,
    west: -172.50033569335938,
    population: "1466"
  }, {
    countryName: "East Timor",
    currencyCode: "USD",
    fipsCode: "TT",
    countryCode: "TL",
    isoNumeric: "626",
    north: -8.137417,
    capital: "Dili",
    continentName: "Oceania",
    areaInSqKm: "15007.0",
    languages: "tet,pt-TL,id,en",
    isoAlpha3: "TLS",
    continent: "OC",
    south: -8.320666,
    east: 125.64753,
    geonameId: 1966436,
    west: 125.50425,
    population: "1154625"
  }, {
    countryName: "East Timor",
    currencyCode: "USD",
    fipsCode: "TT",
    countryCode: "TL",
    isoNumeric: "626",
    north: -8.135833740234375,
    capital: "Dili",
    continentName: "Oceania",
    areaInSqKm: "15007.0",
    languages: "tet,pt-TL,id,en",
    isoAlpha3: "TLS",
    continent: "OC",
    south: -9.463626861572266,
    east: 127.30859375,
    geonameId: 1966436,
    west: 124.04609680175781,
    population: "1154625"
  }, {
    countryName: "Turkmenistan",
    currencyCode: "TMT",
    fipsCode: "TX",
    countryCode: "TM",
    isoNumeric: "795",
    north: 42.795555,
    capital: "Ashgabat",
    continentName: "Asia",
    areaInSqKm: "488100.0",
    languages: "tk,ru,uz",
    isoAlpha3: "TKM",
    continent: "AS",
    south: 35.141083,
    east: 66.684303,
    geonameId: 1218197,
    west: 52.441444,
    population: "4940916"
  }, {
    countryName: "Tunisia",
    currencyCode: "TND",
    fipsCode: "TS",
    countryCode: "TN",
    isoNumeric: "788",
    north: 37.543915,
    capital: "Tunis",
    continentName: "Africa",
    areaInSqKm: "163610.0",
    languages: "ar-TN,fr",
    isoAlpha3: "TUN",
    continent: "AF",
    south: 30.240417,
    east: 11.598278,
    geonameId: 2464461,
    west: 7.524833,
    population: "10589025"
  }, {
    countryName: "Tonga",
    currencyCode: "TOP",
    fipsCode: "TN",
    countryCode: "TO",
    isoNumeric: "776",
    north: -15.562988,
    capital: "Nuku'alofa",
    continentName: "Oceania",
    areaInSqKm: "748.0",
    languages: "to,en-TO",
    isoAlpha3: "TON",
    continent: "OC",
    south: -21.455057,
    east: -173.907578,
    geonameId: 4032283,
    west: -175.682266,
    population: "122580"
  }, {
    countryName: "Turkey",
    currencyCode: "TRY",
    fipsCode: "TU",
    countryCode: "TR",
    isoNumeric: "792",
    north: 42.107613,
    capital: "Ankara",
    continentName: "Asia",
    areaInSqKm: "780580.0",
    languages: "tr-TR,ku,diq,az,av",
    isoAlpha3: "TUR",
    continent: "AS",
    south: 35.815418,
    east: 44.834999,
    geonameId: 298795,
    west: 25.668501,
    population: "77804122"
  }, {
    countryName: "Trinidad and Tobago",
    currencyCode: "TTD",
    fipsCode: "TD",
    countryCode: "TT",
    isoNumeric: "780",
    north: 11.338342,
    capital: "Port of Spain",
    continentName: "North America",
    areaInSqKm: "5128.0",
    languages: "en-TT,hns,fr,es,zh",
    isoAlpha3: "TTO",
    continent: "NA",
    south: 10.036105,
    east: -60.517933,
    geonameId: 3573591,
    west: -61.923771,
    population: "1228691"
  }, {
    countryName: "Tuvalu",
    currencyCode: "AUD",
    fipsCode: "TV",
    countryCode: "TV",
    isoNumeric: "798",
    north: -5.641972,
    capital: "Funafuti",
    continentName: "Oceania",
    areaInSqKm: "26.0",
    languages: "tvl,en,sm,gil",
    isoAlpha3: "TUV",
    continent: "OC",
    south: -10.801169,
    east: 179.863281,
    geonameId: 2110297,
    west: 176.064865,
    population: "10472"
  }, {
    countryName: "Taiwan",
    currencyCode: "TWD",
    fipsCode: "TW",
    countryCode: "TW",
    isoNumeric: "158",
    north: 25.29825,
    capital: "Taipei",
    continentName: "Asia",
    areaInSqKm: "35980.0",
    languages: "zh-TW,zh,nan,hak",
    isoAlpha3: "TWN",
    continent: "AS",
    south: 21.901806,
    east: 122.000443,
    geonameId: 1668284,
    west: 119.534691,
    population: "22894384"
  }, {
    countryName: "Tanzania",
    currencyCode: "TZS",
    fipsCode: "TZ",
    countryCode: "TZ",
    isoNumeric: "834",
    north: -.990736,
    capital: "Dodoma",
    continentName: "Africa",
    areaInSqKm: "945087.0",
    languages: "sw-TZ,en,ar",
    isoAlpha3: "TZA",
    continent: "AF",
    south: -11.745696,
    east: 40.443222,
    geonameId: 149590,
    west: 29.327168,
    population: "41892895"
  }, {
    countryName: "Ukraine",
    currencyCode: "UAH",
    fipsCode: "UP",
    countryCode: "UA",
    isoNumeric: "804",
    north: 52.369362,
    capital: "Kyiv",
    continentName: "Europe",
    areaInSqKm: "603700.0",
    languages: "uk,ru-UA,rom,pl,hu",
    isoAlpha3: "UKR",
    continent: "EU",
    south: 44.390415,
    east: 40.20739,
    geonameId: 690791,
    west: 22.128889,
    population: "45415596"
  }, {
    countryName: "Uganda",
    currencyCode: "UGX",
    fipsCode: "UG",
    countryCode: "UG",
    isoNumeric: "800",
    north: 4.214427,
    capital: "Kampala",
    continentName: "Africa",
    areaInSqKm: "236040.0",
    languages: "en-UG,lg,sw,ar",
    isoAlpha3: "UGA",
    continent: "AF",
    south: -1.48405,
    east: 35.036049,
    geonameId: 226074,
    west: 29.573252,
    population: "33398682"
  }, {
    countryName: "U.S. Minor Outlying Islands",
    currencyCode: "USD",
    fipsCode: "",
    countryCode: "UM",
    isoNumeric: "581",
    north: 28.219814,
    capital: "",
    continentName: "Oceania",
    areaInSqKm: "0.0",
    languages: "en-UM",
    isoAlpha3: "UMI",
    continent: "OC",
    south: -.389006,
    east: 166.654526,
    geonameId: 5854968,
    west: -177.392029,
    population: "0"
  }, {
    countryName: "United States",
    currencyCode: "USD",
    fipsCode: "US",
    countryCode: "US",
    isoNumeric: "840",
    north: 49.388611,
    capital: "Washington",
    continentName: "North America",
    areaInSqKm: "9629091.0",
    languages: "en-US,es-US,haw,fr",
    isoAlpha3: "USA",
    continent: "NA",
    south: 24.544245,
    east: -66.954811,
    geonameId: 6252001,
    west: -124.733253,
    population: "310232863"
  }, {
    countryName: "Uruguay",
    currencyCode: "UYU",
    fipsCode: "UY",
    countryCode: "UY",
    isoNumeric: "858",
    north: -30.082224,
    capital: "Montevideo",
    continentName: "South America",
    areaInSqKm: "176220.0",
    languages: "es-UY",
    isoAlpha3: "URY",
    continent: "SA",
    south: -34.980816,
    east: -53.073933,
    geonameId: 3439705,
    west: -58.442722,
    population: "3477000"
  }, {
    countryName: "Uzbekistan",
    currencyCode: "UZS",
    fipsCode: "UZ",
    countryCode: "UZ",
    isoNumeric: "860",
    north: 45.575001,
    capital: "Tashkent",
    continentName: "Asia",
    areaInSqKm: "447400.0",
    languages: "uz,ru,tg",
    isoAlpha3: "UZB",
    continent: "AS",
    south: 37.184444,
    east: 73.132278,
    geonameId: 1512440,
    west: 55.996639,
    population: "27865738"
  }, {
    countryName: "Vatican City",
    currencyCode: "EUR",
    fipsCode: "VT",
    countryCode: "VA",
    isoNumeric: "336",
    north: 41.90743830885576,
    capital: "Vatican",
    continentName: "Europe",
    areaInSqKm: "0.44",
    languages: "la,it,fr",
    isoAlpha3: "VAT",
    continent: "EU",
    south: 41.90027960306854,
    east: 12.45837546629481,
    geonameId: 3164670,
    west: 12.44570678169205,
    population: "921"
  }, {
    countryName: "Saint Vincent and the Grenadines",
    currencyCode: "XCD",
    fipsCode: "VC",
    countryCode: "VC",
    isoNumeric: "670",
    north: 13.377834,
    capital: "Kingstown",
    continentName: "North America",
    areaInSqKm: "389.0",
    languages: "en-VC,fr",
    isoAlpha3: "VCT",
    continent: "NA",
    south: 12.583984810969037,
    east: -61.11388,
    geonameId: 3577815,
    west: -61.46090317727658,
    population: "104217"
  }, {
    countryName: "Venezuela",
    currencyCode: "VEF",
    fipsCode: "VE",
    countryCode: "VE",
    isoNumeric: "862",
    north: 12.201903,
    capital: "Caracas",
    continentName: "South America",
    areaInSqKm: "912050.0",
    languages: "es-VE",
    isoAlpha3: "VEN",
    continent: "SA",
    south: .626311,
    east: -59.80378,
    geonameId: 3625428,
    west: -73.354073,
    population: "27223228"
  }, {
    countryName: "British Virgin Islands",
    currencyCode: "USD",
    fipsCode: "VI",
    countryCode: "VG",
    isoNumeric: "092",
    north: 18.757221,
    capital: "Road Town",
    continentName: "North America",
    areaInSqKm: "153.0",
    languages: "en-VG",
    isoAlpha3: "VGB",
    continent: "NA",
    south: 18.38998,
    east: -64.268768,
    geonameId: 3577718,
    west: -64.715363,
    population: "21730"
  }, {
    countryName: "U.S. Virgin Islands",
    currencyCode: "USD",
    fipsCode: "VQ",
    countryCode: "VI",
    isoNumeric: "850",
    north: 18.391747,
    capital: "Charlotte Amalie",
    continentName: "North America",
    areaInSqKm: "352.0",
    languages: "en-VI",
    isoAlpha3: "VIR",
    continent: "NA",
    south: 17.681725,
    east: -64.565178,
    geonameId: 4796775,
    west: -65.038231,
    population: "108708"
  }, {
    countryName: "Vietnam",
    currencyCode: "VND",
    fipsCode: "VM",
    countryCode: "VN",
    isoNumeric: "704",
    north: 23.388834,
    capital: "Hanoi",
    continentName: "Asia",
    areaInSqKm: "329560.0",
    languages: "vi,en,fr,zh,km",
    isoAlpha3: "VNM",
    continent: "AS",
    south: 8.559611,
    east: 109.464638,
    geonameId: 1562822,
    west: 102.148224,
    population: "89571130"
  }, {
    countryName: "Vanuatu",
    currencyCode: "VUV",
    fipsCode: "NH",
    countryCode: "VU",
    isoNumeric: "548",
    north: -13.073444,
    capital: "Port Vila",
    continentName: "Oceania",
    areaInSqKm: "12200.0",
    languages: "bi,en-VU,fr-VU",
    isoAlpha3: "VUT",
    continent: "OC",
    south: -20.248945,
    east: 169.904785,
    geonameId: 2134431,
    west: 166.524979,
    population: "221552"
  }, {
    countryName: "Wallis and Futuna",
    currencyCode: "XPF",
    fipsCode: "WF",
    countryCode: "WF",
    isoNumeric: "876",
    north: -13.216758181061444,
    capital: "Mata-Utu",
    continentName: "Oceania",
    areaInSqKm: "274.0",
    languages: "wls,fud,fr-WF",
    isoAlpha3: "WLF",
    continent: "OC",
    south: -14.314559989820843,
    east: -176.16174317718253,
    geonameId: 4034749,
    west: -178.1848112896414,
    population: "16025"
  }, {
    countryName: "Samoa",
    currencyCode: "WST",
    fipsCode: "WS",
    countryCode: "WS",
    isoNumeric: "882",
    north: -13.432207,
    capital: "Apia",
    continentName: "Oceania",
    areaInSqKm: "2944.0",
    languages: "sm,en-WS",
    isoAlpha3: "WSM",
    continent: "OC",
    south: -14.040939,
    east: -171.415741,
    geonameId: 4034894,
    west: -172.798599,
    population: "192001"
  }, {
    countryName: "Kosovo",
    currencyCode: "EUR",
    fipsCode: "KV",
    countryCode: "XK",
    isoNumeric: "0",
    north: 43.2682495807952,
    capital: "Pristina",
    continentName: "Europe",
    areaInSqKm: "",
    languages: "sq,sr",
    isoAlpha3: "XKX",
    continent: "EU",
    south: 41.856369601859925,
    east: 21.80335088694943,
    geonameId: 831053,
    west: 19.977481504492914,
    population: "1800000"
  }, {
    countryName: "Yemen",
    currencyCode: "YER",
    fipsCode: "YM",
    countryCode: "YE",
    isoNumeric: "887",
    north: 18.9999989031009,
    capital: "Sanaa",
    continentName: "Asia",
    areaInSqKm: "527970.0",
    languages: "ar-YE",
    isoAlpha3: "YEM",
    continent: "AS",
    south: 12.1110910264462,
    east: 54.5305388163283,
    geonameId: 69543,
    west: 42.5325394314234,
    population: "23495361"
  }, {
    countryName: "Mayotte",
    currencyCode: "EUR",
    fipsCode: "MF",
    countryCode: "YT",
    isoNumeric: "175",
    north: -12.648891,
    capital: "Mamoutzou",
    continentName: "Africa",
    areaInSqKm: "374.0",
    languages: "fr-YT",
    isoAlpha3: "MYT",
    continent: "AF",
    south: -13.000132,
    east: 45.29295,
    geonameId: 1024031,
    west: 45.03796,
    population: "159042"
  }, {
    countryName: "South Africa",
    currencyCode: "ZAR",
    fipsCode: "SF",
    countryCode: "ZA",
    isoNumeric: "710",
    north: -22.126612,
    capital: "Pretoria",
    continentName: "Africa",
    areaInSqKm: "1219912.0",
    languages: "zu,xh,af,nso,en-ZA,tn,st,ts,ss,ve,nr",
    isoAlpha3: "ZAF",
    continent: "AF",
    south: -34.839828,
    east: 32.895973,
    geonameId: 953987,
    west: 16.458021,
    population: "49000000"
  }, {
    countryName: "Zambia",
    currencyCode: "ZMK",
    fipsCode: "ZA",
    countryCode: "ZM",
    isoNumeric: "894",
    north: -8.22436,
    capital: "Lusaka",
    continentName: "Africa",
    areaInSqKm: "752614.0",
    languages: "en-ZM,bem,loz,lun,lue,ny,toi",
    isoAlpha3: "ZMB",
    continent: "AF",
    south: -18.079473,
    east: 33.705704,
    geonameId: 895949,
    west: 21.999371,
    population: "13460305"
  }, {
    countryName: "Zimbabwe",
    currencyCode: "ZWL",
    fipsCode: "ZI",
    countryCode: "ZW",
    isoNumeric: "716",
    north: -15.608835,
    capital: "Harare",
    continentName: "Africa",
    areaInSqKm: "390580.0",
    languages: "en-ZW,sn,nr,nd",
    isoAlpha3: "ZWE",
    continent: "AF",
    south: -22.417738,
    east: 33.056305,
    geonameId: 878675,
    west: 25.237028,
    population: "11651858"
  }]
};
! function(e) {
  Foundation.libs.offcanvasclose = {
    name: "offcanvasclose",
    version: "5.0.3",
    settings: {},
    init: function() {
      this.events()
    },
    events: function() {
      e(this.scope).off(".offcanvasclose").on("click.fndtn.offcanvasclose", ".exit-off-canvas-link", function() {
        e(".off-canvas-wrap").removeClass("move-right")
      })
    },
    reflow: function() {}
  }
}(jQuery, this, this.document), angular.module("peppritAngularApp").filter("formatTime", function() {
  return function(e) {
    return moment(e).format("HH:mm:ss")
  }
}).filter("formatTimeHHmm", function() {
  return function(e) {
    return moment(e).format("HH:mm")
  }
}).filter("formatTimeStr", function() {
  return function(e) {
    return (e ? e : "").replace(/^((0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){1}).*/, "$1")
  }
}).filter("formatDate", function() {
  return function(e) {
    return moment(e).format("YYYY-MM-DD")
  }
}).filter("formatDateAndTime", function() {
  return function(e) {
    return moment(e).format("YYYY-MM-DD HH:mm")
  }
}).filter("formatDateAgo", function() {
  return function(e) {
    return e ? moment(e).fromNow() : ""
  }
}).filter("formatDurationMs", function() {
  return function(e) {
    return moment.duration(e, "milliseconds").humanize()
  }
}).filter("formatDurationExactMs", function() {
  return function(e) {
    var i = moment.duration(e, "milliseconds"),
      n = i.minutes() < 10 ? "0" + i.minutes() : i.minutes(),
      t = i.seconds() < 10 ? "0" + i.seconds() : i.seconds(),
      a = i.hours() < 10 ? "0" + i.hours() : i.hours(),
      o = a + ":" + n + ":" + t;
    return i.days() > 0 && (o = i.days() + ":" + o), i.months() > 0 && (o = i.months() + ":" + o), i.years() > 0 && (o = i.years() + ":" + o), o
  }
}).filter("formatSpeedKmh", function() {
  return function(e) {
    return Number(e).toFixed(2)
  }
}).filter("formatDistanceKm", function() {
  return function(e) {
    return Number(e).toFixed(2)
  }
}).filter("formatTemperatureC", function() {
  return function(e) {
    return Number(e).toFixed(1)
  }
}).filter("formatLatLon", function() {
  return function(e) {
    return Number(e).toFixed(4)
  }
}).filter("formatBooleanStatus", ["$translate", function(e) {
  return function(i) {
    return e.instant(i === !0 ? "on" : "off")
  }
}]), angular.module("peppritAngularApp").run(["$templateCache", function(e) {
  e.put("app/components/pattern_setter.html", '<div class="component-pattern-setter"> <h4 ng-hide="showConfirm">{{\'draw_pattern\'|translate}}</h4> <h4 ng-show="showConfirm">{{\'confirm_pattern\'|translate}}</h4> <div pattern-lock="lock" pattern-lock-opts="patternOpts" pattern-lock-on-finish="onFinishPattern($pattern, $lock)"></div> <div> <ul class="button-group even-2"> <li> <a class="button" ng-click="onCancel()">{{\'cancel\'|translate}}</a> </li><li> <a class="button" ng-click="onShowConfirm()" ng-disabled="showConfirm">{{\'confirm\'|translate}}</a> </li> </ul> </div> </div>'), e.put("app/components/pp_enter_site.html", '<div class="component-enter-site"> <div class="row desktop"> <div class="text-center small-12 medium-8 medium-offset-2 large-6 large-offset-3 columns"> <h2 ng-hide="enterPressed &amp;&amp; !showOutsideMarket">{{ \'locate_yourself\' | translate }}</h2> <h2 ng-show="enterPressed &amp;&amp; !showOutsideMarket">{{ \'tell_us_what_you_like\' | translate }}</h2> </div> </div> <div class="row collapse agb-confirm"> <div class="small-12 large-6 large-offset-3 columns"> <div class="panel client-location agb-confirm"> <form ng-hide="enterPressed"> <div class="row collapse zip"> <div class="small-8 columns" ng-show="locateFailed || $root.peppr.clientLocation.isValid"> <div class="row collapse"> <div class="small-10 columns"> <input type="text" ng-model="$root.peppr.clientLocation.zipCode" placeholder="{{ \'zip_code_country\' | translate }}" required="true"> </div> <div class="small-2 columns locate-me" ng-class="{ working: $root.peppr.clientLocation.working }"> <span class="postfix" ng-click="clickLocateMe()"><i class="peppr-icon-gps"></i></span> </div> </div> </div> <div class="small-8 columns" ng-hide="locateFailed || $root.peppr.clientLocation.isValid"> <a class="button inverted-button" ng-click="clickLocateMe()">Locate Me!</a> </div> <div class="small-4 columns button-column"> <button type="submit" ng-click="clickEnterForm()" ng-disabled="!$root.peppr.clientLocation.isValid" ng-hide="enterPressed" class="button inverted-button">{{ \'enter\' | translate }}</button> </div> </div> <div class="row collapse geocoded-address" ng-show="$root.peppr.clientLocation.geocodedAddress"> <div class="small-8 columns"> <div> <small>{{ $root.peppr.clientLocation.geocodedAddress }}</small> </div> </div> </div> <div class="disclaimer-and-enter"> <div> <div> </div> <div ng-hide="enterPressed" class="text-center"> <small class="age-disclaimer"> {{ \'age_disclaimer\' | translate }}  <span ng-bind-html="tacPpText"></span> </small> </div> </div> </div> </form> <div class="sex-choose-buttons text-center" ng-show="enterPressed &amp;&amp; !showOutsideMarket"> <h3>{{ \'show_me_pepprs\' | translate }}</h3> <div class="center-buttons"> <a class="button inverted-button" ng-click="clickShowFemale()">{{ \'choose_sex_show_females\' | translate }}</a> <a class="button inverted-button" ng-click="clickShowMale()">{{ \'choose_sex_show_males\' | translate }}</a> <a class="button inverted-button" ng-click="clickShowTrans()">{{ \'choose_sex_show_trans\' | translate }}</a> </div> </div> <div class="outside-market-notice text-center" ng-show="enterPressed &amp;&amp; showOutsideMarket"> <div ng-hide="showLaunchSignup"> <p>{{ \'we_havent_launched_in_your_country_yet\' | translate }} {{ \'would_you_use_peppr_when_we_launch\' | translate:{country: $root.peppr.clientLocation.location.country || $root.peppr.clientLocation.location.countryCode} }}</p> <div class="row collapse"> <div class="columns"> <a class="button inverted-button" ng-click="clickUseYes()">{{ \'yes\' | translate }}</a> <a class="button inverted-button" ng-click="clickUseNo()">{{ \'no\' | translate }}</a> </div> </div> </div> <div ng-show="showLaunchSignup"> <p>{{ \'we_would_like_notify_launch\' | translate }}</p> <div class="row collapse text-left"> <div class="small-5 columns"> <label>{{ \'forename\' | translate }} <small>{{ \'optional\' | translate }}</small></label> <input type="text" ng-model="signup.name" placeholder="Forename"> </div> <div class="small-7 columns"> <label>{{ \'email\' | translate }} <small>{{ \'optional\' | translate }}</small></label> <input type="text" ng-model="signup.email" placeholder="you@example.com"> </div> </div> <div class="row collapse text-left"> <div class="columns"> <a class="button inverted-button" ng-click="clickSignupEnter()">{{ \'enter\' | translate }}</a> </div> </div> </div> </div> </div> </div> </div> </div>'), e.put("app/components/pp_phone_confirm.html", '<div> <h5>{{ \'phone_confirm_short_instructions\' | translate }}</h5> <form name="phoneconfirmform" ng-submit="clickPhoneConfirmForm()"> <div class="row"> <div class="medium-6 large-6 columns"> <label> {{ \'phone_confirmation_code\' | translate }} <span class="small" ng-show="user">{{ \'phone_number\' | translate }}: {{ user.phoneNumber }} <a ui-sref="app.user+action({action: \'showEdit\', lang: activeLang})">{{ \'change\' | translate }}</a></span> <span class="small" ng-hide="user"><a ui-sref="app.login({lang: activeLang})" ng-click="clickLoginToResend($event)">{{ \'login_to_resend_code\' | translate }}</a></span> </label> <input type="text" ng-model="code" name="code" pp-has-error="" required="true" placeholder="e4r2f" autocapitalize="off"> <small class="error">{{ \'phone_confirmation_code_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-12 columns"> <ul class="button-group"> <li><button type="submit" class="button">{{ \'confirm\' | translate }}</button></li> <li ng-show="user"><a class="button" ng-click="sendNewCode()">{{ \'resend_confirmation_code\' | translate }}</a></li> </ul> </div> </div> </form> </div>'), e.put("app/icomoon52684/demo.html", '<!doctype html> <html> <head> <meta charset="utf-8"> <title>IcoMoon Demo</title> <meta name="description" content="An Icon Font Generated By IcoMoon.io"> <meta name="viewport" content="width=device-width"> <link rel="stylesheet" href="demo-files/demo.css"> <link rel="stylesheet" href="style.css"></head> <body> <div class="bgc1 clearfix"> <h1 class="mhmm mvm"><span class="fgc1">Font Name:</span> peppr <small class="fgc1">(Glyphs:&nbsp;38)</small></h1> </div> <div class="clearfix mhl ptl"> <h1 class="mvm mtn bshadow fgc1">Grid Size: Unknown</h1> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-statistik"></span><span class="mls"> peppr-icon-statistik</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e625" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe625;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-indiependent"></span><span class="mls"> peppr-icon-indiependent</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e623" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe623;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-agency-indicator"></span><span class="mls"> peppr-icon-agency-indicator</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e624" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe624;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-shield"></span><span class="mls"> peppr-icon-shield</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e621" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe621;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-flame"></span><span class="mls"> peppr-icon-flame</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e608" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe608;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-imprint-big"></span><span class="mls"> peppr-icon-imprint-big</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60b" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60b;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-privacy"></span><span class="mls"> peppr-icon-privacy</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e622" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe622;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-join"></span><span class="mls"> peppr-icon-join</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61e" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61e;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-play"></span><span class="mls"> peppr-icon-play</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61d" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61d;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-faq"></span><span class="mls"> peppr-icon-faq</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61c" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61c;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-lock"></span><span class="mls"> peppr-icon-lock</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61b" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61b;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-dollar"></span><span class="mls"> peppr-icon-dollar</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e600" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe600;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-filter"></span><span class="mls"> peppr-icon-filter</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e601" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe601;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-telephone"></span><span class="mls"> peppr-icon-telephone</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e602" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe602;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-x"></span><span class="mls"> peppr-icon-x</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e603" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe603;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-ladies"></span><span class="mls"> peppr-icon-ladies</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e604" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe604;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-start"></span><span class="mls"> peppr-icon-start</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e605" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe605;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-login"></span><span class="mls"> peppr-icon-login</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e606" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe606;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-imprint"></span><span class="mls"> peppr-icon-imprint</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e607" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe607;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-distance"></span><span class="mls"> peppr-icon-distance</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e609" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe609;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-date"></span><span class="mls"> peppr-icon-date</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60a" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60a;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-price"></span><span class="mls"> peppr-icon-price</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60c" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60c;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-user"></span><span class="mls"> peppr-icon-user</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60d" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60d;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-time"></span><span class="mls"> peppr-icon-time</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60e" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60e;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-profile"></span><span class="mls"> peppr-icon-profile</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e60f" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe60f;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-gps"></span><span class="mls"> peppr-icon-gps</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e610" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe610;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-agency"></span><span class="mls"> peppr-icon-agency</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e611" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe611;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-bookings"></span><span class="mls"> peppr-icon-bookings</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e612" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe612;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-arrow-up"></span><span class="mls"> peppr-icon-arrow-up</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e613" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe613;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-arrow-right"></span><span class="mls"> peppr-icon-arrow-right</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e614" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe614;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-arrow-left"></span><span class="mls"> peppr-icon-arrow-left</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e615" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe615;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-arrow-down"></span><span class="mls"> peppr-icon-arrow-down</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e616" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe616;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-sed-card"></span><span class="mls"> peppr-icon-sed-card</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e617" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe617;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-phone"></span><span class="mls"> peppr-icon-phone</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e618" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe618;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-list"></span><span class="mls"> peppr-icon-list</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e619" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe619;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs1"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-email"></span><span class="mls"> peppr-icon-email</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61a" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61a;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> </div> <div class="clearfix mhl ptl"> <h1 class="mvm mtn bshadow fgc1">Grid Size: 16</h1> <div class="glyph fs2"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-facebook"></span><span class="mls"> peppr-icon-facebook</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e61f" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe61f;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> <div class="glyph fs2"> <div class="clearfix bshadow0 pbs"> <span class="peppr-icon-twitter"></span><span class="mls"> peppr-icon-twitter</span> </div> <fieldset class="fs0 size1of1 clearfix hidden-false"> <input type="text" readonly="" value="e620" class="unit size1of2"> <input type="text" maxlength="1" readonly="" value="&#xe620;" class="unitRight size1of2 talign-right"> </fieldset> <div class="fs0 bshadow0 clearfix hidden-true"> <span class="unit pvs fgc1">liga: </span> <input type="text" readonly="" value="" class="liga unitRight"> </div> </div> </div>  <div class="mhl clearfix mbl"> <h1>Font Test Drive</h1> <label> Font Size: <input id="fontSize" type="number" class="textbox0 mbm" min="8" value="48"> px </label> <input id="testText" type="text" class="phl size1of1 mvl" placeholder="Type some text to test..." value=""> <div id="testDrive" class="peppr-icon-">&nbsp; </div> </div>  <div class="bgc1 clearfix"> <p class="mhl">Generated by <a href="https://icomoon.io/app">IcoMoon</a></p> </div> <script src="demo-files/demo.js"></script> </body> </html>'), e.put("app/views/about.html", '<section class="about-section view-about"> <div class="row centered peppr-logo"> <div class="small-12 columns text-center">  <img class="peppr-logo" src="images/peppr_logo_white.png" alt="peppr logo"> </div> </div> <div class="row centered"> <div class="small-12 columns"> <div class="text-center"> <h1>{{ \'about_title\' | translate }}</h1> <p>  <em>{{ pepprCompanyName }}</em><br> <span ng-if="pepprStreetAndNumber">{{ pepprStreetAndNumber }}<br></span> {{ pepprPostcodeAndCity }}<br> {{ pepprCountry }}<br> {{ pepprRegisterNr }} {{ pepprRegisterCourt }}<br> <br> <a ng-hide="peppr.isItaly" href="https://peppr.it/s/zFe">{{ \'press_kit_title\' | translate }}</a> <br ng-hide="peppr.isItaly"> {{ \'phone\' | translate }}: {{ pepprContactPhone }}<br> {{ \'tech_suport_phone\' | translate }}: {{ pepprTechContactPhone }}<br> {{ \'email\' | translate }}: s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">...klick...</a>@peppr.it<br> {{ \'live_chat\' | translate}}: <a ng-click="showChat()">{{ \'click_here\' | translate }}</a> <br> {{ \'company_ceo\' | translate }}:<br> {{ pepprCEO }}<br> <br>  <a href="http://www.erotik-jugendschutz.de/" target="_blank"><b>Jugendschutzbeauftragter</b></a> <br>Kristine Peters <br>Kattensteert 4 <br>22119 Hamburg <br>Tel. 0180-5012981 <br><small>(0,14 EUR/Min. aus dem dt. Festnetz, max. 0,42 EUR/Min. aus den Mobilfunknetzen)</small> <br>info@erotik-jugendschutz.de <br><a href="http://www.erotik-jugendschutz.de/" target="_blank">http://www.erotik-jugendschutz.de</a><br>  <br> <a ui-sref="app.tnc({lang: activeLang})">{{ \'about_terms_and_conditions\' | translate }}</a><br> <a ui-sref="app.privacy-policy({lang: activeLang})">{{ \'privacy_policy\' | translate }}</a><br> </p><p> <small> Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> </small> </p> <p></p> </div> </div> </div> </section> '), e.put("app/views/agency_admin.html", '<section class="agency-admin-section view-agency-admin"> <div class="row"> <div class="small-12 large-6 columns"> <h1>{{agency.name}}</h1> </div> </div> <div class="agency-info"> <div class="row"> <div class="small-12 large-6 columns"> <i class="peppr-icon-phone"></i> {{agency.phoneNumber}} </div> </div> <div class="row"> <div class="small-12 large-6 columns"> <i class="peppr-icon-email"></i> {{agency.email}} </div> </div> <div class="row ng-hide" ng-show="responseRate > 0"> <div class="small-12 large-6 columns"> {{(responseRate * 100).toFixed(0)}}% {{ \'response_rate\' | translate }} </div> </div> </div> <div class="row" ng-hide="showContract"> <div class="grid-table provider-list small-12 large-6 columns" ng-repeat="p in providers"> <div class="row button-group collapse"> <div class="columns info-column"> <a ui-sref="app.provider({providerId: p.id, lang: activeLang})">{{ p.name }}</a>: <small>{{ p.state }}</small> </div> <div class="columns button-column" ng-hide="isAdmin"> <a class="button" title="{{ \'publish_profile\' | translate }}" ng-show="p.state == \'REVIEWED\'" ng-click="publishProfile(p.id)">&#10003;</a> <a class="button" title="{{ \'disable_profile\' | translate }}" ng-show="p.state == \'ACTIVE\'" ng-click="disableProfile(p.id)"><i class="peppr-icon-lock"></i></a> </div> <div class="columns button-column" ng-show="isAdmin"> <a class="button" title="{{ \'review_profile\' | translate }}" ng-show="p.state == \'INACTIVE\'" ng-click="reviewProfile(p.id)">&#10003;</a> </div> <div class="columns button-column"> <a ui-sref="app.provider_imageupload({providerId: p.id, lang: activeLang})" class="button"><i class="peppr-icon-sed-card"></i></a> </div> <div class="columns button-column"> <a ui-sref="app.provider_edit({providerId: p.id, lang: activeLang})" class="button"><i class="peppr-icon-profile"></i></a> </div> <div class="columns button-column"> <a class="button" title="{{ \'delete_profile\' | translate }}" ng-click="archiveProfile(p.id)">&#215;</a> </div> </div> </div> </div> <div class="row" ng-hide="showContract"> <div class="small-12 large-6 columns"> <a class="button" ui-sref="app.signup_peppr({lang: activeLang})">{{ \'agency_add_provider\' | translate }}</a> </div> </div> <div class="row" ng-show="agencyContractHtml"> <div class="small-12 large-6 columns"> <p ng-hide="showContract"> {{ \'you_have_to_sign_the_agency_contract\' | translate }} </p> <a ng-click="clickShowContract()" ng-hide="showContract" class="button">{{ \'show_contract\' | translate }}</a> <a ng-click="clickHideContract()" ng-show="showContract" class="button">{{ \'hide_contract\' | translate }}</a> </div> </div> <div class="row" ng-show="showContract"> <div class="small-12 large-6 columns"> <div class="agency-contract-text" ng-bind-html="agencyContractHtml"></div> <form name="agencyadminform" ng-submit="clickSubmitContractSignatureForm()"> <div class="row"> <div class="columns"> <h5>{{ \'agency_details\' | translate }}</h5> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_company_name\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.companyName" name="companyName" pp-has-error="" required="true" placeholder="Spicy Escorts GmbH"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_register_number\' | translate }}</label> <input type="text" ng-model="contractSignatureInfo.registerNumber" placeholder="HRB 123456 B"> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_full_address\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.fullAddress" name="fullAddress" pp-has-error="" required="true" placeholder="{{ pepprStreetAndNumber }} {{ pepprPostcodeAndCity }} {{ pepprCountry }}"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_director_name\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.directorName" name="directorName" pp-has-error="" required="true" placeholder="Andrea Musterfrau"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="columns"> <h5>{{ \'agency_contact\' | translate }}</h5> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_contact_name\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.contactName" name="contactName" pp-has-error="" required="true" placeholder="Andrea"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_contact_email\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.contactEmail" name="contactEmail" pp-has-error="" required="true" ng-pattern="peppr.validators.email" placeholder="andrea@spicyescorts.com"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'contract_contact_phonenumber\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.contactPhoneNumber" name="contactPhoneNumber" pp-has-error="" required="true" placeholder="+49 176 1234 5678"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="columns"> <h5>{{ \'contract_signature\' | translate }}</h5> <label>{{ \'contract_signed_by\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="contractSignatureInfo.signedBy" name="signedBy" pp-has-error="" required="true" placeholder="Andrea Musterfrau"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="columns"> <button type="submit" class="button" ng-disabled="!contractSignatureInfo.signedBy || agencyadminform.$invalid">{{ \'contract_sign\' | translate }}</button> </div> </div> </form> </div> </div> </section>'), e.put("app/views/agency_booking.html", '<section class="agency-booking-section view-agency-booking"> <div class="row"> <div class="small-12 medium-6 columns"> <h1>{{ \'agency_booking_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-6 columns"> <ul class="panel vcard"> <li class="fn" ng-hide="isClient">{{booking.client.forename || booking.client.username}}</li> <li class="fn" ng-show="isClient">{{booking.provider.name}}</li> <li ng-show="userAgency || isAdmin"><div class="row"><div class="small-4 columns"><small>{{ \'booking_provider\' | translate }}</small></div><div class="small-8 columns"> <a ui-sref="app.provider({providerId: booking.provider.id, lang: activeLang})">{{ booking.provider.name }}</a> <a ui-sref="app.outboundsms({recipient: booking.provider.phoneNumber})" ng-show="isAdmin">{{ \'send_sms\' | translate}} <i class="fi-comment"></i></a> </div></div></li> <li><div class="row"><div class="small-4 columns"><small>{{ \'booking_state\' | translate }}</small></div><div class="small-8 columns"> {{ booking.state | translateEnum:\'Agency_BookingState\' }} </div></div></li> <li ng-show="booking.shortlistExpiration &amp;&amp; booking.shortlistState != \'PROVIDER_ACCEPTED\'"><div class="row"><div class="small-4 columns"><small>{{ \'booking_shortlist_expiration\' | translate }}</small></div><div class="small-8 columns"> {{ booking.shortlistExpiration | formatDateAndTime }} </div></div></li> <li ng-show="booking.shortlistState"><div class="row"><div class="small-4 columns"><small>{{ \'booking_shortlist_state\' | translate }}</small></div><div class="small-8 columns"> {{ booking.shortlistState | translateEnum:\'ShortlistState\' }} </div></div></li> <li><div class="row"><div class="small-4 columns"><small>{{ \'booking_date\' | translate }}</small></div><div class="small-8 columns"> {{ booking.dateAndTime | formatDateAndTime }} </div></div></li> <li><div class="row"><div class="small-4 columns"><small>{{ \'booking_duration\' | translate }}</small></div><div class="small-8 columns"> {{ booking.durationHours }} {{ \'hours\' | translate }} </div></div></li> <li ng-show="peppr.features.showPrices"><div class="row"><div class="small-4 columns"><small>{{ \'price\' | translate }}</small></div><div class="small-8 columns"> {{ booking.servicePrice }} â‚¬ </div></div></li> <li><div class="row"><div class="small-4 columns"><small>{{ \'booking_location_type\' | translate }}</small></div><div class="small-8 columns"> {{ booking.locationType | translateEnum:\'Agency_LocationType\' }} </div></div></li> <li ng-show="booking.location"><div class="row"><div class="small-4 columns"><small>{{ \'location\' | translate }}</small></div><div class="small-8 columns"> {{ booking.locationGeocoded }} <a class="button tiny location-maps-button" target="_blank" href="http://maps.google.com/?q={{ booking.location.latitude }},{{ booking.location.longitude }}">{{ \'show_in_maps\' | translate }}</a> </div></div></li> <li ng-show="booking.notes"><div class="row"><div class="small-4 columns"><small>{{ \'booking_notes\' | translate }}</small></div><div class="small-8 columns"> {{ booking.notes }} </div></div></li> </ul> </div> </div>  <div class="row" ng-show="showMap"> <div class="small-12 medium-6 columns tracking-map-container"> <div class="map-wrapper"> <ui-gmap-google-map ng-attr-bounds="map.bounds" ng-attr-center="map.center" ng-attr-zoom="map.zoom" ng-attr-draggable="true" ng-attr-events="map.events" ng-attr-event-opts="map.eventOpts" ng-attr-options="map.mapOptions">  <ui-gmap-markers models="mapMarkers" coords="\'coords\'" icon="\'icon\'" click="onClickMarker" type="map.clusterType" typeoptions="map.clusterOptions"> </ui-gmap-markers>  <ui-gmap-polyline ng-repeat="p in travelPositions" path="p.path" stroke="p.stroke" visible="p.visible" geodesic="p.geodesic" draggable="p.draggable" static="true"> </ui-gmap-polyline> </ui-gmap-google-map> </div> <div ng-show="travelLastPosition"> <p title="{{travelLastPosition | formatDateAndTime}}">{{\'last_position_update\' | translate}}: {{travelLastPosition | formatDateAgo}}</p> </div> </div> </div>  <div class="row ng-hide" ng-show="peppr.features.enableRatings &amp;&amp; booking.state == \'COMPLETED\' &amp;&amp; review &amp;&amp; isClient">  <div class="small-12 medium-6 columns"> <ul class="review-container panel vcard"> <li class="fn"> <span>{{ \'review_title\' | translate }}</span> </li> <li class="grid-table"> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_1\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory1 = 5" ng-class="{active: review.ratingCategory1 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory1 = 4" ng-class="{active: review.ratingCategory1 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory1 = 3" ng-class="{active: review.ratingCategory1 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory1 = 2" ng-class="{active: review.ratingCategory1 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory1 = 1" ng-class="{active: review.ratingCategory1 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_2\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory2 = 5" ng-class="{active: review.ratingCategory2 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory2 = 4" ng-class="{active: review.ratingCategory2 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory2 = 3" ng-class="{active: review.ratingCategory2 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory2 = 2" ng-class="{active: review.ratingCategory2 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory2 = 1" ng-class="{active: review.ratingCategory2 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_3\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory3 = 5" ng-class="{active: review.ratingCategory3 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory3 = 4" ng-class="{active: review.ratingCategory3 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory3 = 3" ng-class="{active: review.ratingCategory3 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory3 = 2" ng-class="{active: review.ratingCategory3 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-click="review.ratingCategory3 = 1" ng-class="{active: review.ratingCategory3 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> </li> <li class="row"> <div class="column"> <form> <label>{{ \'review_text\' | translate }}</label> <textarea ng-model="review.reviewText" placeholder="{{ \'review_text_placeholder\' | translate }}"></textarea> <a class="button ng-binding" ng-click="sendRating()">{{ \'review_send\' | translate }}</a> </form> </div> </li> </ul></div> </div>  <div class="row" ng-show="!isClient &amp;&amp; !userAgency &amp;&amp; booking.state != \'ARCHIVED\'"> <div class="small-12 medium-6 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'booking_payment_peppr_is_anonymous\' | translate }}</span> </div> <p class="small">{{ \'we_do_not_share_phone_number_if_like_call_type_in_message\' | translate }}</p> </div> </div> </div> <form name="modifyBookingForm" novalidate="" ng-show="showModifyBooking" ng-submit="onSubmitModifyBooking()"> <div class="row"> <div class="small-12 medium-6 columns"> <label>{{ \'booking_date\' | translate }}</label> <input type="date" name="bookingDate" ng-model="bookingDate" placeholder="2014-02-14" required="true"> <small class="error" ng-show="bookingform.bookingDate.$invalid"> {{ \'booking_date_error\' | translate }} </small> </div> </div> <div class="row"> <div class="small-12 medium-6 columns"> <label>{{ \'booking_time\' | translate }}</label> <input type="time" ng-pattern="peppr.validators.time_hm" name="bookingTime" ng-model="bookingTime" placeholder="21:00" required="true"> <small class="error" ng-show="bookingform.bookingTime.$invalid"> {{ \'booking_time_error\' | translate }} </small> </div> </div> <div class="row"> <div class="column"> <button class="button" type="submit">{{\'save\' | translate}}</button> <a class="button" ng-click="showModifyBooking = false">{{\'cancel\'|translate}}</a> </div> </div> </form>  <div class="row" ng-show="doesAcceptChatMessage()"> <div class="small-12 medium-6 columns"> <small class="warning" ng-show="booking.requiresTravelConfirmation &amp;&amp; !isClient"> {{ \'agency_please_specify_travel_terms_client_will_have_to_accept\' | translate }} </small> <form> <label>{{ \'message\' | translate }}</label> <textarea ng-model="notes" placeholder="{{ bookingNotesPlaceholder }}"></textarea> </form> </div> </div>  <div class="row" ng-show="(!isClient || isAdmin) &amp;&amp; booking.state == \'SHORTLIST\'"> <div class="small-12 medium-6 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <span>{{ \'booking_shortlist\' | translate }}</span> </div> <p class="small">{{ \'booking_shortlist_provider_explanation\' | translate }}</p> </div> </div> </div>  <div class="row" ng-show="showStartTracking"> <div class="small-12 medium-6 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <span>{{ \'booking_tracking\' | translate }}</span> </div> <p class="small">{{ \'booking_tracking_explanation\' | translate }}</p> <a class="button" ng-click="startTracking()">{{ \'start_tracking\' | translate }}</a> </div> </div> </div>  <div class="row" ng-show="booking.state != \'ARCHIVED\'"> <div class="small-12 medium-6 columns"> <ul class="button-group" ng-show="!isAdmin && !isClient">  <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\'"> <a class="button" ng-click="acceptBooking(false, isClient)">{{ \'accept\' | translate }}</a> </li> <li ng-show="booking.state == \'SHORTLIST\' &amp;&amp; booking.shortlistState == \'CONTACTED\'"> <a class="button" ng-click="acceptBooking(false, isClient)">{{ \'make_offer\' | translate }}</a> </li> <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\' || (booking.state == \'SHORTLIST\' &amp;&amp; booking.shortlistState == \'CONTACTED\')"> <a class="button" ng-click="declineBooking(false, isClient)">{{ \'decline\' | translate }}</a> </li> <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\' || booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="onStartModifyBooking()">{{ \'modify\' | translate }}</a> </li> <li ng-show="doesAcceptChatMessage()"> <a class="button" ng-class="{disabled: !notes || notes.length &lt; 5}" ng-click="sendChatMessage()">{{ \'message_send\' | translate }}</a> </li> </ul> <ul class="button-group" ng-show="isClient"> <li ng-show="booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="acceptBooking(false, isClient)">{{ \'accept\' | translate }}</a> </li> <li ng-show="booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="declineBooking(false, isClient)">{{ \'decline\' | translate }}</a> </li> <li ng-show="doesAcceptChatMessage()"> <a class="button" ng-class="{disabled: !notes || notes.length &lt; 5}" ng-click="sendChatMessage()">{{ \'message_send\' | translate }}</a> </li> </ul> </div> </div>  <div class="row" ng-show="isAdmin"> <div class="small-12 medium-6 columns"> <ul class="button-group"> <li> <a class="button" ng-class="{disabled: !notes || notes.length &lt; 5}" ng-click="sendChatMessage()">{{ \'message_send\' | translate }}</a> </li> <li> <a class="button" ng-click="sendChatMessageAsCustomer()">Send Message as customer</a> </li> <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\' || booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="onStartModifyBooking()">{{ \'modify\' | translate }}</a> </li> <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\'"> <a class="button" ng-click="acceptBooking(true)">Silent Accept</a> </li> <li ng-show="booking.state == \'SHORTLIST\' &amp;&amp; booking.shortlistState == \'CONTACTED\'"> <a class="button" ng-click="acceptBooking(true)">Silent {{ \'make_offer\' | translate }}</a> </li> <li ng-show="booking.state == \'PAYMENT_AUTH\' || booking.state == \'PAID\' || (booking.state == \'SHORTLIST\' &amp;&amp; booking.shortlistState == \'CONTACTED\')"> <a class="button" ng-click="declineBooking(true)">Silent Decline</a> </li> <li ng-show="booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="acceptBooking(true, true)">Silent Accept (client)</a> </li> <li ng-show="booking.state == \'PROVIDER_ACCEPTED\'"> <a class="button" ng-click="declineBooking(true, true)">Silent Decline (client)</a> </li> <li ng-show="booking.state != \'ENQUIRY\' &amp;&amp booking.state != \'PAYMENT_AUTH\' &amp;&amp booking.archivedState != \'ENQUIRY\' &amp;&amp booking.archivedState != \'PAYMENT_AUTH\'"> <a class="button" ng-click="refundBooking()">Refund booking</a> </li> </ul> </div> </div> <div class="row" ng-show="booking.shortlist.length &gt; 0 &amp;&amp; (isClient || isAdmin)"> <div class="small-12 medium-6 columns"> <h6>Shortlist</h6> <div class="grid-table" ng-repeat="sugg in booking.shortlist"> <div class="row booking"> <div class="columns mini-profile-column"> <div class="mini-profile-image-container"> <div class="mini-profile-image" ng-if="sugg.provider.profilePictures &amp;&amp; sugg.provider.profilePictures.length > 0" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + sugg.provider.profilePictures[0].uploadUUID + \'?width=60)\'}"></div> </div> </div> <div class="columns booking-info"> <div class="booking-list-info"> <div class="provider-name">{{ sugg.provider.name }}, <small>{{ sugg.provider.age }}</small></div> <div class="indicators" ng-hide="sugg.booking"> <small>{{ \'booking_shortlist_state_contacted_soon\' | translate }}</small> </div> <div class="indicators" ng-show="sugg.booking &amp;&amp; sugg.booking.shortlistState == \'CONTACTED\'"> <small>{{ \'booking_shortlist_state_waiting_for_reply\' | translate }}</small> </div> <div class="indicators" ng-show="sugg.booking &amp;&amp; (sugg.booking.shortlistState == \'PROVIDER_DECLINED\' || sugg.booking.shortlistState == \'CLIENT_DECLINED\')"> <small>{{ \'booking_shortlist_state_declined\' | translate }}</small> </div> <div class="indicators" ng-show="sugg.booking &amp;&amp; sugg.booking.shortlistState == \'EXPIRED\'"> <small>{{ \'booking_shortlist_state_expired\' | translate }}</small> </div> <div class="indicators" ng-show="sugg.booking"> <div class="indicator price-indicator" ng-if="peppr.features.showPrices"> <i class="peppr-icon-price"></i> <span class="data"><small>{{sugg.booking.servicePrice}}â‚¬</small></span> </div> <div class="indicator distance-indicator" ng-show="sugg.distanceKm >= 0"> <i class="peppr-icon-distance"></i> <span class="data"><small>{{sugg.distanceKm.toFixed(0)}}<span class="unit">km</span></small></span> </div>  </div> </div> </div> <div class="columns button-column"> <a class="button" ui-sref="app.provider({providerId: sugg.provider.id, lang: activeLang})"> <i class="peppr-icon-ladies"></i> </a> </div> <div class="columns button-column" ng-show="sugg.booking &amp;&amp; sugg.booking.shortlistState == \'PROVIDER_ACCEPTED\'"> <a class="button" title="Accept this offer" ng-click="acceptShortlistOffer(sugg.booking)">âœ“</a> </div> <div class="columns button-column" ng-show="sugg.booking &amp;&amp; sugg.booking.shortlistState == \'PROVIDER_ACCEPTED\'"> <a class="button" title="Decline this offer" ng-click="declineShortlistOffer(sugg.booking)">Ã—</a> </div> </div> </div> </div> </div>  <div class="row" ng-show="!messages.length &amp;&amp; booking.state == \'ARCHIVED\'"> <div class="small-12 medium-6 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'messages_header\' | translate }}</span> </div> <p class="small">{{ \'messages_deleted_for_privacy\' | translate }}</p> </div> </div> </div>  <div class="row" ng-show="messages.length > 0"> <div class="small-12 medium-6 columns"> <h6>{{ \'messages_header\' | translate }}</h6> </div> </div> <div class="row"> <div class="small-12 medium-6 columns"> <ul class="panel vcard" ng-repeat="m in messages"> <li><div class="row"><div class="small-2 columns"><small>{{ \'message_to\' | translate }}:</small></div><div class="small-10 columns"> <span ng-show="m.person == \'CLIENT\'">{{ booking.client.forename }}</span> <span ng-show="m.person == \'PROVIDER\' &amp;&amp; !booking.agency">{{ booking.provider.name }}</span> <span ng-show="m.person == \'PROVIDER\' &amp;&amp; booking.agency">{{ booking.provider.agency.name }}</span> <small>{{ m.recipient }}</small> </div></div></li> <li><div class="row"><div class="small-2 columns"><small>{{ \'message_date\' | translate }}:</small></div><div class="small-10 columns"> {{ m.date | formatDateAndTime }} <span ng-show="m.read">&#10003;</span> </div></div></li> <li class="message-text"> {{ m.messageText }} </li> </ul> </div> </div> </section> '), e.put("app/views/agency_booking_list.html", '<section class="agency-booking-list-section view-agency-booking-list"> <div class="row"> <div class="small-12 medium-8 columns"> <h1>{{ \'agency_booking_list_title\' | translate }}</h1> </div> </div> <div class="row ng-hide" ng-show="isAgency || isAdmin"> <div class="small-12 medium-8 columns"> <input type="checkbox" ng-model="showArchived"> <label>Show archived</label> </div> </div> <div class="row"> <div class="small-12 medium-8 columns"> <div class="row" ng-hide="bookings &amp;&amp; bookings.length &gt; 0"> <div class="columns"> {{ \'no_active_bookings\' | translate }} </div> </div> </div> </div> <div class="row"> <div class="small-12 medium-8 columns"> <div class="grid-table" ng-repeat="b in bookings"> <div class="row booking"> <div class="columns mini-profile-column"> <div class="mini-profile-image-container"> <div class="mini-profile-image" ng-if="b.provider.profilePictures &amp;&amp; b.provider.profilePictures.length > 0" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + b.provider.profilePictures[0].uploadUUID + \'?width=60)\'}"></div> </div> </div> <div class="columns booking-info"> <div class="booking-list-info"> <div ng-show="userAgency || isClient" class="provider-name">{{ b.provider.name }}</div> <div ng-hide="userAgency || isClient" class="client-name">{{ b.client.forename || b.client.username }} <small ng-show="isAdmin">{{ b.provider.name }} {{ b.provider.agency.name }}</small></div> <div class="small"> {{ bookingDateTime(b) }} {{ b.durationHours }} {{ \'hours\' | translate }}<span ng-show="peppr.features.showPrices"> {{ b.servicePrice }} â‚¬</span> <span class="booking-state"><span ng-show="b.instantBooking">{{ \'instant_booking\' | translate }} </span>{{ b.state | translateEnum:\'Agency_BookingState\' }}</span> </div> </div> </div> <div class="columns button-column"> <a class="button" ui-sref="app.booking_admin({bookingId: b.id, lang: activeLang})" ng-click="showBooking($event, b)"><i class="peppr-icon-imprint"></i></a> </div> <div class="columns button-column" ng-show="isAdmin"> <a class="button" ng-click="deleteBooking(b)"><i class="peppr-icon-x"></i></a> </div> </div> </div> </div> </div> </section>'), e.put("app/views/agency_faq.html", '<section class="agency-faq-section view-agency-faq"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'agency_faq_title\' | translate }}</h1> </div> </div> <form ng-submit="clickNewTopicForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.topicId" placeholder="faqTopicId"> </div> <div class="small-6 columns"> <input type="text" ng-model="newEntry.langCode" placeholder="de"> </div> </div> <div class="row"> <div class="small-12 columns"> <input type="text" ng-model="newEntry.title" placeholder="The question"> </div> </div> <div class="row"> <div class="small-12 columns"> <textarea ng-model="newEntry.text" placeholder="The text answering the question"></textarea> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="faq in faqEntries | filter:faqLangFilter"> <dt>{{ faq.title }} <small ng-show="isAdmin"><a ng-click="clickTopic(faq)">{{ faq.topicId }}</a></small></dt> <dd style="white-space: pre-line;">{{ faq.text }}</dd> </dl> </div> </div> </section>'), e.put("app/views/agency_list.html", '<section class="agency-list-section view-agency-list"> <div class="row"> <div class="small-12 medium-6 columns"> <h1>{{ \'agency_list_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-6 columns"> <div class="row" ng-hide="agencies"> <div class="columns"> {{ \'no_agencies\' | translate }} </div> </div> </div> </div> <div class="row"> <div class="small-12 medium-6 columns"> <div class="grid-table" ng-repeat="a in agencies"> <div class="row agency" ng-click="editAgency(a)"> <div class="columns agency-info"> <div class="agency-list-info"> <div class="agency-name">{{ a.name }}</div> <div class="small"> {{ a.phoneNumber }} {{ a.email }} <span class="num-providers">{{ numActiveProviders(a) }}/{{ numProviders(a) }} active</span> </div> </div> </div> <div class="columns button-column"> <div class="button"><i class="peppr-icon-imprint"></i></div> </div> </div> </div> </div> </div> </section>'), e.put("app/views/alarm.html", '<section class="alarm-section view-alarm">  <div class="row collapse" ng-show="showSettings &amp;&amp; !showPattern"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <form name="alarmSettingsForm" class="css-form" novalidate="" ng-hide="showSetPattern"> <label>{{ \'forename\' | translate }}</label> <input type="text" ng-model="settings.forename"> <pp-phone-number phone-number="settings.phoneNumber" name="\'phoneNumber\'" label="\'phone_number\' | translate" err-msg="\'phone_error\' | translate" form="form"></pp-phone-number> <pp-phone-number phone-number="settings.emergencyNumber" name="\'emergencyNumber\'" label="\'alarm_emergency_phone_number\' | translate" err-msg="\'alarm_emergency_phone_error\' | translate" form="form"></pp-phone-number> <a class="button" ng-click="showSetPattern = true">{{ \'save\' | translate }}</a> </form> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns" ng-show="showSetPattern"> <div pattern-setter="onSaveSettings($pattern, $lock)" pattern-setter-cancel="showSetPattern = false"></div> </div> </div> </div> <div class="row collapse" ng-show="!currAlarm &amp;&amp; !showSettings &amp;&amp; !showPattern"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns" ng-hide="showConfirmPattern"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <span>{{settings.forename}}</span> <small><a ng-click="showSettings = true">{{\'change\'|translate}}</a></small> </div> <ul class="vcard"> <li><small>{{\'phone_number\'|translate}}:</small> {{settings.phoneNumber}}</li> <li><small>{{\'alarm_emergency_phone_number\'|translate}}:</small> {{settings.emergencyNumber}}</li> </ul> </div> <form name="createAlarmForm" class="css-form" novalidate=""> <label>{{ \'alarm_duration\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="small-6 medium-8 large-10 columns"> <input type="number" steps="15" min="15" ng-model="alarmDurationMinutes" required="required"> </div> <div class="small-6 medium-4 large-2 columns"> <span class="postfix"> {{ \'alarm_rings_at\' | translate}} <span class="alarmtime">{{newAlarm.alarmTime | formatTimeHHmm}}</span> </span> </div> </div> <label>{{ \'alarm_address\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse client-location"> <div class="small-9 large-10 columns"> <input type="text" ng-model="newAlarm.address" name="address" pp-has-error="" required="required"> <small class="error">{{ \'please_fill_out_the_field_error\' | translate }}</small> </div> <div class="small-3 large-2 columns locate-me clickable" ng-click="onLocateMe()" ng-class="{ working: geocodingWorking }"> <span class="postfix"><a title="{{\'locate_me\'|translate}}"><i class="peppr-icon-gps"></i></a></span> </div> </div>        <a class="button" ng-click="showConfirmPattern = true" ng-disabled="createAlarmForm.$invalid">{{ \'create\' | translate }}</a> </form> </div> </div> <div class="row collapse" ng-show="showConfirmPattern"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <label>{{ \'confirm_pattern\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div pattern-lock="newAlarm" pattern-lock-opts="{}" pattern-lock-on-finish="onCreateAlarm($pattern, $lock)"></div> </div> </div> <div class="row collapse" ng-show="currAlarm &amp;&amp; !showSettings &amp;&amp; !showPattern"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns" ng-hide="showStop"> <div class="clock"> <div class="wrapper"> <div class="pie spinner"></div> <div class="pie filler"></div> <div class="mask"></div> <div class="alarmtime" title="{{currAlarm.alarmTime | formatTime}}"> <span ng-show="durationRemainingMs &gt; 0">{{durationRemainingMs | formatDurationMs}} remaining</span> <span ng-hide="durationRemainingMs &gt; 0">0 remaining</span> <br> <small class="remaining-exact">{{durationRemainingMs | formatDurationExactMs}}</small> </div> <div class="button-wrapper"> <a class="button" ng-click="showStop = true"><i class="fi-stop"></i></a> </div> </div> </div> </div> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns" ng-show="showStop"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <span>{{settings.forename}}</span> </div> <ul class="vcard"> <li><small>{{\'phone_number\'|translate}}:</small> {{settings.phoneNumber}}</li> <li><small>{{\'alarm_emergency_phone_number\'|translate}}:</small> {{settings.emergencyNumber}}</li> </ul> </div> <form name="stopAlarmForm" class="css-form" novalidate=""> <div class="row collapse"> <div class="columns"> <label>{{ \'confirm_pattern\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div pattern-lock="stop" pattern-lock-opts="{}" pattern-lock-on-finish="onStopAlarm()"></div> </div> </div> <a class="button" ng-click="showStop = false">{{\'cancel\' | translate}}</a> </form> </div> </div> </section>'), e.put("app/views/berlin.html", '<section class="concept-section view-concept view-city view-city-berlin">      <div class="row collapse pictures-wrapper city-image" ng-if="!showMockup" ng-style="{ height: desktopProfilePicturesHeight }">  <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="image"></div> </div> </div> <div class="row info-wrapper"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="desktop-back-button show-for-large-up"> <a class="button icon-button back" ui-sref="app.provider_list({lang: activeLang})"> <span class="button-icon"><i>&#8249;</i></span>{{ \'back\' | translate }} </a> </div> <div class="content-wrapper"> <div class="content"> <h2>Berlin</h2> <p>Berlin ist der Hotspot in Deutschland, GeschichtstrÃ¤chtiges an jeder Ecke, das internationale Publikum, die legendÃ¤ren Parties und das Big Business der Digitalwirtschaft.</p> <p>Die Stadt hat immens viel zu bieten, so hat jeder erdenkliche Lebensstil seinen Platz in Berlin, von KÃ¼nstlern Ã¼ber Promis bis zu MillionÃ¤ren, alles in Berlin.</p> <div class="scroll-down-bar text-center show-for-large-up"> <i class="peppr-icon-arrow-down" ng-click="scrollDown()"></i> </div> </div> </div> </div> </div> <div class="row collapse separator"> </div> <div class="row teaser"> <div class="small-12 medium-6 medium-offset-3 columns"> <p>Berlin lÃ¤sst sich natÃ¼rlich am Besten mit der richtigen Begleitung erkunden. PEPPR vermittelt Escort und Begleitservices in Berlin. Lassen Sie sich fallen und mit allen Sinnen von einem Callgirl oder Callboy verwÃ¶hnen. Alle Escorts kÃ¶nnen Sie direkt buchen.</p> <p>NatÃ¼rlich auch in ganz Brandenburg.</p> </div> </div> <div class="row collapse showcase-image-list"> <div class="small-12 columns"> <div class="row collapse"> <div class="small-12 medium-12 large-12 columns"> <div class="row collapse provider-row"> <div class="small-12 medium-6 large-4 xlarge-3 xxlarge-2 columns" ng-repeat="p in providers | filter:filterProviders"> <a ui-sref="app.provider({providerId: p.provider.id, lang: activeLang})" class="showcase-image-wrapper inactive" id="plSc{{p.provider.id}}"> <div class="in-view-container"> <div ng-if="p.profilePictures" pp-hide-on-img-loaded="{{ pepprRestBaseUrl }}/image/{{ p.profilePictures[0].uploadUUID }}?width=300" class="image-loading"></div> <div class="image" ng-if="p.profilePictures" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + p.profilePictures[0].uploadUUID + \'?width=300)\'}"></div> <div class="img-overlay"></div> <div class="available-now" ng-show="p.instantAvailable"><i class="peppr-icon-time"></i> {{ \'instant_booking_available\' | translate }}</div> <div class="profile-info"> <div class="profile-click-hint" ng-if="p.provider.id == firstProviderId"> <span class="tooltip tip-top transparent radius"> {{ \'click_to_show_profile\' | translate }} <span class="nub"></span> </span> </div> <div class="profile-name"><h2>{{p.provider.name}}</h2></div> <div class="indicators"> <div class="indicator price-indicator" ng-if="peppr.features.showPrices"> <i class="peppr-icon-price"></i> <span class="data">{{pricePer(p.provider)}}â‚¬<span class="unit">/{{pricePerNumHours(p.provider)}}h</span></span> </div> <div class="indicator availability-indicator availability-instant-indicator" ng-show="p.instantAvailable"> <i class="peppr-icon-time"></i> <span class="data">{{ \'availability_now\' | translate }}</span> </div> <div class="indicator distance-indicator" ng-show="p.distanceKm &gt;= 0"> <i class="peppr-icon-distance"></i> <span class="data">{{p.distanceKm.toFixed(0)}}<span class="unit">km</span></span> </div> </div> </div> </div> </a> </div> <div class="small-12 medium-6 large-4 xlarge-3 xxlarge-2 columns"> <a ui-sref="app.provider_list({lang: activeLang})" ng-click="showMore($event)" class="showcase-image-wrapper inactive"> <div class="in-view-container"> <div class="image"></div> <div class="img-overlay"></div> <div class="profile-info"> <div class="profile-name"><h2>Show more</h2></div> </div> </div> </a> </div> </div> </div> </div> </div> </div> </section>'), e.put("app/views/beta.html", '<section class="beta-section view-beta"> <div class="view-beta-scroll-container"> <div class="row peppr-logo centered"> <div class="small-12 columns text-right">  <img class="peppr-logo" src="images/peppr_logo_white.png" alt="peppr logo"> </div> </div> <div class="row beta-claim centered"> <div class="small-12 medium-8 medium-offset-2 large-6 large-offset-3 columns text-center"> <div class="tagline1">WIR SUCHEN BETA-TESTER FÃœR EINE HEISSE NACHT</div> <div class="text"> <p> PEPPR ist eine mobile Web-App, mit der du erotische Dienstleistungen in deiner NÃ¤he schnell und bequem finden und buchen kannst. </p> <p> Wir suchen abenteuerlustige Beta-Tester, die auf unsere Kosten eine wilde Nacht erleben wollen. </p> <p> Bist du <strong>mÃ¤nnlich, Ã¼ber 18 und wohnst in Berlin?</strong> Dann melde dich an und lass dich Ã¼berraschen. </p> <p> Bist du doch ein wenig schÃ¼chtern, oder mÃ¶chtest einfach nur am Laufenden bleiben? Dann melde dich <a ui-sref="app.launch({lang: activeLang})">hier</a> fÃ¼r unseren Newsletter an. </p> </div> <div class="beta-confirm"> <form name="betaconfirmform" ng-submit="clickEnterForm()" novalidate=""> <div class="row collapse email"> <div class="columns"> <input type="text" ng-model="signup.email" name="email" pp-has-error="" placeholder="you@example.com" required="true">  <small class="error">Bitte eine gÃ¼ltige Email Adresse angeben</small> </div> </div> <div class="row collapse name"> <div class="columns"> <input type="text" ng-model="signup.name" name="name" pp-has-error="" placeholder="Name" required="true">  <small class="error">Wir mÃ¶chten dich persÃ¶nlich ansprechen</small> </div> </div> <div class="row collapse enter"> <div class="columns"> <button type="submit" class="button icon-button" ng-disabled="betaconfirmform.$invalid"><span class="button-icon"><i class="peppr-icon-flame"></i></span> Anmelden </button></div> </div> </form></div> </div> </div> <div class="copyright"> {{ pepprCompanyName }}, <span ng-if="pepprStreetAndNumber">{{ pepprStreetAndNumber }},</span> {{ pepprPostcodeAndCity }}, {{ pepprCountry }} s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">......</a>@peppr.it<br> </div> </div> </section>'), e.put("app/views/booking.html", '<section class="booking-section view-booking"> <div class="row"> <div class="small-12 medium-6 columns"> <h1>{{ \'booking_title\' | translate }} {{provider.name}}</h1> </div> </div> <form name="bookingform" ng-submit="clickSubmitBookingForm()" novalidate=""> <div class="row"> <div class="small-12 medium-6 columns"> <p class="small alert-box success free-ride-available" ng-show="isFreeRideAvailable"> {{ \'booking_payment_free_ride\' | translate }} </p> <ul class="pricing-table"> <li class="title title-sub" ng-class="{\'inactive\': !showMore}" ng-show="provider.availability"><a class="expandable" ng-click="showMore = !showMore" ng-class="{true: \'expanded\', false: \'\'}[showMore]"><span>{{ \'availability\' | translate }}</span></a></li> <li class="bullet-item booking-advance-hours" ng-show="showMore &amp;&amp; (provider.bookingUpfrontHours &gt; 0 || provider.bookingUpfrontHoursTravel &gt; 0)"> <div class="row"> <div class="small-6 columns text-left"> {{ \'booking_in_advance\' | translate }}: </div> <div class="small-6 columns text-right"> <span ng-show="provider.bookingUpfrontHours &gt; 0">{{ provider.bookingUpfrontHours }}{{ \'availability_hours\' | translate }}</span> <span ng-show="provider.bookingUpfrontHours &gt; 0 &amp;&amp; provider.bookingUpfrontHoursTravel &gt; 0"> / </span> <span ng-show="provider.bookingUpfrontHoursTravel &gt; 0">{{ provider.bookingUpfrontHoursTravel }}{{ \'availability_hours\' | translate }} {{ \'for_travels\' | translate }}</span> </div> </div> </li> <li ng-show="showMore" class="bullet-item" ng-repeat="avail in provider.availability"> <div class="row"> <div class="small-6 columns text-left">{{ avail.day | translateEnum:\'Weekday\' }}</div> <div class="price-extra small-6 columns text-right">{{ avail.fromTime | formatTimeStr }} - {{ avail.toTime | formatTimeStr }}</div> </div> </li> <li class="title title-sub">{{ \'booking_booking_heading\' | translate }}</li> <li class="bullet-item response-rate ng-hide" ng-show="provider.responseRate > 0">{{(provider.responseRate * 100).toFixed(0)}}% {{ \'response_rate\' | translate }}</li> <li class="bullet-item provider-location-type" ng-show="quickBookingDateTime != 0"> <label>{{ \'booking_time\' | translate }}</label> <select ng-model="quickBookingDateTime" ng-options="c.value as c.name for c in selQuickBookingDateTimeOptions"></select> <small class="input-info info" ng-show="quickBookingDateTime == -2">{{ \'booking_instant_info\' | translate:{name: provider.name} }}</small> </li> <li class="bullet-item" ng-show="quickBookingDateTime == 0"> <label>{{ \'booking_date\' | translate }}</label> <input type="date" pp-date-future="" name="bookingDate" ng-model="bookingDate" placeholder="2014-02-14" required="true"> <small class="error" ng-show="bookingform.bookingDate.$invalid"> {{ \'booking_date_error\' | translate }} </small> </li><li> </li><li class="bullet-item" ng-show="quickBookingDateTime == 0"> <label>{{ \'booking_time\' | translate }}</label> <input type="time" ng-pattern="peppr.validators.time_hm" name="bookingTime" ng-model="bookingTime" placeholder="21:00" required="true"> <small class="error" ng-show="bookingform.bookingTime.$invalid"> {{ \'booking_time_error\' | translate }} </small> </li><li> </li><li class="bullet-item"> <label>{{ \'booking_duration_hours\' | translate }}</label> <select ng-show="quickDurationHours != 0" ng-model="quickDurationHours" ng-options="c.value as c.name for c in selQuickDurationHoursOptions"></select> <input ng-show="quickDurationHours == 0" type="number" name="bookingDuration" ng-model="durationHours" required="true" min="0.5" step="0.5"> <small class="error" ng-show="bookingform.bookingDuration.$invalid"> {{ \'booking_duration_hours_error\' | translate }} </small> <small class="input-info warning" ng-hide="isBookingTimeAvailable || provider.availability.length == 0">{{ \'booking_availability_warning\' | translate }}</small> <small class="input-info alert" ng-hide="isBookingTimeConstraintSatisfied"> {{ \'booking_constraints_error\' | translate }} <span ng-show="distanceRequiredTravelCostsConfirmation"> <span ng-show="provider.bookingUpfrontHoursTravel > 0">{{ \'booking_constraints_error_hint_advance\' | translate:{ advanceHours: provider.bookingUpfrontHoursTravel } }}</span> <span ng-show="provider.bookingMinHoursTravel > 0">{{ \'booking_constraints_error_hint_duration\' | translate:{ durationHours: provider.bookingMinHoursTravel } }}</span> {{ \'booking_constraints_error_hint_travel\' | translate }} </span> <span ng-hide="distanceRequiredTravelCostsConfirmation"> <span ng-show="provider.bookingUpfrontHours > 0">{{ \'booking_constraints_error_hint_advance\' | translate:{ advanceHours: provider.bookingUpfrontHours } }}</span> <span ng-show="provider.bookingMinHours > 0">{{ \'booking_constraints_error_hint_duration\' | translate:{ durationHours: provider.bookingMinHours } }}</span> </span> </small> <small class="input-info info" ng-show="provider.availability.length == 0">{{ \'booking_availability_ondemand_warning\' | translate }}</small> </li><li> </li><li class="bullet-item provider-location-type">   <div ng-show="peppr.features.showPrices"> <label>{{ \'booking_location_type\' | translate }}</label> <select ng-model="locationType" name="locationType" required="true" ng-options="c.value as c.name for c in selLocationTypeOptions | filter:filterLocationTypes" ng-class="{ \'with-home-location\': !showMap }"> <option value="">{{ \'option_choose\' | translate }}</option> </select> <small class="error" ng-show="bookingform.locationType.$invalid &amp;&amp; bookingform.locationType.$touched"> {{ \'booking_location_error\' | translate }} </small> <small class="input-info info" ng-show="locationType">{{ locationType | translateEnum:\'Description_LocationType\':{name: provider.name} }}</small> <div ng-show="isProviderLocation" class="provider-home-location"> <div class="location-name"> <span ng-hide="provider.showApproxLocation">{{ providerLocation.street }} {{ providerLocation.streetNr }}<br></span> {{ providerLocation.zip }} {{ providerLocation.city || providerLocation.state }} </div> <a ng-hide="provider.showApproxLocation" class="button tiny location-maps-button" target="_blank" href="http://maps.google.com/?q={{ provider.homeLocation.latitude }},{{ provider.homeLocation.longitude }}">{{ \'show_in_maps\' | translate }}</a> </div> </div> <input class="location-search" ng-model="locationSearchInput" type="text" ng-keyup="locationSearchInputUpdated()" ng-focus="inputGotFocus()" ng-blur="inputLostFocus()" ng-show="isMapLocation(locationType)" placeholder="{{ \'search_map\' | translate }}"> <div class="location-suggestions" ng-show="isMapLocation(locationType)"> <div class="data-loading-indicator" ng-show="locationSearchActive"></div> <div class="location-suggestion" ng-repeat="location in locationSearchResults" ng-click="chooseLocationResult(location)"> {{ locationResultDisplayStr(location) }} </div> </div> <div ng-show="isClientLocation &amp;&amp; !showMap &amp;&amp clientLocation" class="client-home-location"> <div class="location-name"> {{ clientLocation.street }} {{ clientLocation.streetNr }}<br> {{ clientLocation.zip }} {{ clientLocation.city }} </div> <a class="button tiny location-maps-button" ng-click="showMap = true">{{ \'show_map\' | translate }}</a> </div> <div class="map-wrapper" ng-show="showMap"> <img class="crosshair" src="https://cdn3.iconfinder.com/data/icons/block/32/target-128.png"> <div class="accept-overlay"> <a class="button" ng-click="acceptPosition()">ok</a> </div> <ui-gmap-google-map ng-attr-center="mapCenter" ng-attr-zoom="mapCenter.zoom" ng-attr-draggable="true" ng-attr-events="mapEvents"> </ui-gmap-google-map></div> <small class="input-info warning" ng-show="distanceRequiredTravelCostsConfirmation">{{ \'booking_travel_confirmation_required\' | translate:{name: provider.name} }}</small> </li>  <li class="bullet-item services" ng-show="confirmableServicesAvailable"> <label>{{ \'please_choose_extras\' | translate }}</label> <div class="row" ng-repeat="service in chkServiceOptions | filter:filterConfirmableServices"> <div class="small-1 columns"> <input id="bFormServiceCheckbox{{service.id}}" ng-model="service.checked" type="checkbox"> </div> <div class="small-9 columns">{{service.name}} <span ng-if="service.requiresPhoneCall" data-tooltip="" class="has-tip" title="Please call after booking to discuss the details">(tel)</span></div> <div class="price-extra small-2 columns text-right" ng-show="service.fee">{{service.fee}} â‚¬</div> </div> </li> <li class="bullet-item"> <div class="row"> <div class="large-12 columns"> <label>{{ \'booking_notes\' | translate }}</label> <textarea ng-model="notes" placeholder="{{ \'booking_notes_placeholder\' | translate }}"></textarea> <small class="input-info info" ng-show="provider.bookingNotes"> <span ng-hide="provider.agency">{{ \'provider_booking_notes_prefix\' | translate:{ name: provider.name } }}</span> <span ng-show="provider.agency">{{ \'provider_booking_notes_prefix_agency\' | translate:{ name: provider.name } }}</span> {{ provider.bookingNotes }} </small> </div> </div> </li> </ul> </div> </div> <div class="row collapse bottom-on-small"> <div class="small-12 medium-6 columns"> <div class="row collapse pricing-infos" ng-hide="inputHasFocus"> <div class="columns"> <div class="row collapse"> <div class="small-2 columns mini-profile-image-container"> <div class="mini-profile-image" ng-if="profilePicture.uploadUUID" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + profilePicture.uploadUUID + \'?width=100)\'}"></div> </div> <div class="small-10 columns pricing-details"> <div class="row"> <div class="small-6 columns fee" ng-show="peppr.features.showPrices"> {{ \'fee\' | translate }} <span class="num">({{ durationHours }} {{ \'hours\' | translate }})</span> </div> <div class="small-6 columns fee price" ng-show="peppr.features.showPrices">   {{ basePrice.toLocaleString(undefined, {maximumFractionDigits: 0}) }}<sup>{{ priceFraction(basePrice) }}</sup>â‚¬ </div> <div class="small-6 columns extras" ng-show="peppr.features.showPrices" ng-class="{\'inactive\': numExtras &lt;= 0}"> {{ \'extras\' | translate }} <span class="num">({{ numExtras }})</span> </div> <div class="small-6 columns extras price" ng-show="peppr.features.showPrices" ng-class="{\'inactive\': numExtras &lt;= 0}"> {{ extrasPrice.toFixed(0) }}<sup>{{ priceFraction(extrasPrice) }}</sup>â‚¬ </div> <div class="small-6 columns booking-fee"> {{ \'booking_fee\' | translate }} </div> <div class="small-6 columns booking-fee price"> {{ fee.toFixed(0) }}<sup>{{ priceFraction(fee) }}</sup>â‚¬ </div> </div> </div> </div> </div> </div> <div class="button-group-table"> <div class="button-group-table-row"> <div> <a class="button back" ui-sref="app.provider({providerId: provider.id, lang: activeLang})">{{ \'back\' | translate }}</a> </div><div> <button type="submit" class="button icon-button book" ng-disabled="!isBookingTimeConstraintSatisfied || !isLocationValid || bookingform.$invalid"> <span class="button-icon"><i class="peppr-icon-flame"></i></span>&nbsp;{{ \'book\' | translate }} </button> </div> </div> </div> </div> </div> </form> </section>'), e.put("app/views/booking_confirmation.html", '<section class="booking-confirmation-section view-booking-confirmation"> <div class="row"> <div class="small-12 medium-6 columns"> <h1>{{ \'booking_confirmation_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-6 columns text-justify"> <p> Congratulations, <em>Stacey</em> has just confirmed your booking! Here are the details for your reference: </p> <ul class="panel vcard"> <li class="fn"><h5>Stacey <small>schlanke SchÃ¶nheit</small></h5></li> <li><div class="row"><div class="small-4 columns"><small>Date</small></div><div class="small-8 columns">21/01/2014</div></div></li> <li><div class="row"><div class="small-4 columns"><small>Time</small></div><div class="small-8 columns">21:30</div></div></li> <li><div class="row"><div class="small-4 columns"><small>Location Type</small></div><div class="small-8 columns">Hotel</div></div></li> <li><div class="row"><div class="small-4 columns"><small>Location</small></div><div class="small-8 columns">Oranienstr 27, 10999 Berlin <a class="expandable right">map</a></div></div></li> <li class="phone"><div class="row"><div class="small-4 columns"><small>Phone</small></div><div class="small-8 columns">+49 176 1234 5678</div></div></li> <li>&nbsp;<a ui-sref="app.provider({providerId: \'fake\', lang: activeLang})" class="expandable right"><span>Show profile</span></a></li> </ul> <p> <small> Please feel free to call <em>Stacey</em> on her phone to discuss specific requests, especially if this is the first time you are booking a peppr. She will make sure that you feel comfortable meeting her. </small> </p> <p class="text-center"> Thank you for booking with peppr </p> </div> </div> <div class="row"> <div class="small-12 medium-6 columns text-center"> <a ui-sref="app.provider_list({lang: activeLang})" class="button submit-button">Ok</a> </div> </div> </section>'), e.put("app/views/booking_payment.html", '<section class="booking-payment-section view-booking-payment"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'booking_payment_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="large-12 columns text-justify"> <div class="text-left"> <dl> <dt>{{ \'booking_payment_intro_now\' | translate }}</dt> <dd ng-bind-html="bookingPaymentIntroNowInfo"></dd> <dt ng-show="peppr.features.showPrices">{{ \'booking_payment_intro_later\' | translate }}</dt> <dd ng-show="peppr.features.showPrices" ng-bind-html="bookingPaymentIntroLaterInfo"></dd> </dl> </div> <div class="panel secure-notice-wrapper"> <div class="secure-notice clearfix" ng-class="{ \'closed\': !chkShowAnonymousInfo }"> <i class="peppr-icon-lock left"></i> <span class="left">{{ \'booking_payment_peppr_is_anonymous\' | translate }}</span> <a class="right" ng-click="chkShowAnonymousInfo = true" ng-hide="chkShowAnonymousInfo">{{ \'more\' | translate }}</a> </div> <div ng-show="chkShowAnonymousInfo"> <p class="small" ng-show="paymentInfo.method == \'CREDIT_CARD\'" ng-bind-html="bookingPaymentCreditCardLineText"></p> <p class="small" ng-show="paymentInfo.method == \'PAYPAL\'" ng-bind-html="bookingPaymentPayPalLineText"></p> <p class="small" ng-show="paymentInfo.method == \'DEBIT_CARD\'" ng-bind-html="bookingPaymentDebitCardLineText"></p> <p class="small">{{ \'booking_payment_transaction_security_text\' | translate }}</p> <p class="small">{{ \'booking_payment_privacy_text\' | translate }}</p> </div> </div> <p class="small alert-box success" ng-show="isFreeRideAvailable"> {{ \'booking_payment_free_ride\' | translate }} </p> </div> </div> <form id="bpForm" name="paymentform" ng-submit="submitPayment()" novalidate=""> <div class="row"> <div class="columns"> <label>{{ \'payment_method\' | translate }}</label> <div class="row" ng-show="bookingRebill"> <div class="columns checkbox-wrapper"> <input type="checkbox" ng-model="paymentInfo.useStoredTransaction" id="bpFormPaymentMethodRebill"> <label for="bpFormPaymentMethodRebill">{{ \'booking_payment_method_rebill\' | translate }}</label> </div> </div> <div class="row"> <div class="small-6 medium-4 columns checkbox-wrapper"> <input type="radio" ng-model="paymentInfo.method" ng-disabled="isFreeRideAvailable || paymentInfo.useStoredTransaction" value="CREDIT_CARD" id="bpFormPaymentMethodCC" name="bpFormPaymentMethod" required="true"> <label for="bpFormPaymentMethodCC">{{ \'ENUM_PaymentMethod_CREDIT_CARD\' | translate }}</label> </div> <div class="small-6 medium-4 columns checkbox-wrapper"> <input type="radio" ng-model="paymentInfo.method" ng-disabled="isFreeRideAvailable || paymentInfo.useStoredTransaction" value="DEBIT_CARD" id="bpFormPaymentMethodDC" name="bpFormPaymentMethod" required="true"> <label for="bpFormPaymentMethodDC">{{ \'ENUM_PaymentMethod_DEBIT_CARD\' | translate }}</label> </div> <div class="small-6 medium-4 columns checkbox-wrapper"> <input type="radio" ng-model="paymentInfo.method" ng-disabled="isFreeRideAvailable || paymentInfo.useStoredTransaction" value="PAYPAL" id="bpFormPaymentMethodPP" name="bpFormPaymentMethod" required="true"> <label for="bpFormPaymentMethodPP">{{ \'ENUM_PaymentMethod_PAYPAL\' | translate }}</label> </div> </div> <p class="small" ng-show="paymentInfo.method == \'CREDIT_CARD\' || paymentInfo.method == \'PAYPAL\'" ng-bind-html="bookingPaymentCreditCardRefundInfo"></p> <p class="small" ng-show="paymentInfo.method == \'DEBIT_CARD\'" ng-bind-html="bookingPaymentDebitCardRefundInfo"></p> </div> </div> <div class="row" ng-show="paymentInfo.useStoredTransaction"> <div class="columns"> <p class="small">{{ \'booking_payment_method_rebill_explanation\' | translate }}</p> <p class="small">{{ \'booking_payment_method_rebill_title\' | translate }}: {{ paymentInfo.method | translateEnum:\'PaymentMethod\' }} {{ bookingRebill.lastPayment | formatDateAndTime }}</p> </div> </div> <div class="row"> <div class="columns medium-6 medium-offset-3"> <div class="panel secure-notice-wrapper"> <div class="secure-notice clearfix"> <i class="fi-megaphone left"></i> <span class="left">{{ \'not_what_you_want\' | translate }}</span> </div> <p class="small"> {{ \'not_satisfied_with_payment_options\' | translate }}<br> {{ \'tell_us_to_we_can_fix_it\' | translate }} <a ng-click="showChat()">{{ \'click_here\' | translate }}</a> </p> </div> </div> </div> <div class="row" ng-if="paymentInfo.method == \'CREDIT_CARD\' &amp;&amp; !paymentInfo.useStoredTransaction"> <div class="medium-10 small-9 columns"> <label>{{ \'booking_payment_card_number\' | translate }}</label> <input class="card-number" name="creditcardNumber" ng-model="paymentInfo.creditcardNumber" pp-has-error="" ng-disabled="isFreeRideAvailable" size="20" placeholder="4111111111111111" type="text" ng-pattern="peppr.validators.integer" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_number_error\' | translate }}</small> </div> <div class="medium-2 small-3 columns"> <label>{{ \'booking_payment_card_cvv\' | translate }}</label> <input class="card-cvc" name="creditcardCvv" ng-model="paymentInfo.creditcardCvv" pp-has-error="" ng-disabled="isFreeRideAvailable" maxlength="3" size="3" placeholder="243" type="text" ng-pattern="peppr.validators.integer" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_cvc_error\' | translate }}</small> </div> <div class="small-12 columns"> <label>{{ \'booking_payment_card_holdername\' | translate }}</label> <div class="row"> <div class="small-4 columns"> <input class="card-holdername" name="firstName" ng-model="paymentInfo.firstName" pp-has-error="" ng-disabled="isFreeRideAvailable" size="20" placeholder="John" type="text" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_holdername_error\' | translate }}</small> </div> <div class="small-8 columns"> <input class="card-holdername" name="lastName" ng-model="paymentInfo.lastName" pp-has-error="" ng-disabled="isFreeRideAvailable" size="20" placeholder="Doe" type="text" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_holdername_error\' | translate }}</small> </div> </div> </div> <div class="small-7 columns"> <label>{{ \'booking_payment_card_expiry\' | translate }}</label> <div class="row"> <div class="small-4 columns"> <input class="card-expiry-month" name="creditcardExpiryMonth" ng-model="paymentInfo.creditcardExpiryMonth" pp-has-error="" ng-disabled="isFreeRideAvailable" size="2" placeholder="05" maxlength="2" type="number" max="12" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_expiry_month_error\' | translate }}</small> </div> <div class="small-8 columns"> <input class="card-expiry-year" name="creditcardExpiryYear" ng-model="paymentInfo.creditcardExpiryYear" pp-has-error="" ng-disabled="isFreeRideAvailable" size="4" placeholder="2022" maxlength="4" type="number" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_expiry_year_error\' | translate }}</small> </div> </div> </div> <div class="small-5 columns"> <label>{{ \'payment_country\' | translate }}</label> <select name="country" ng-model="paymentInfo.country" pp-has-error="" ng-options="c.countryCode as c.countryName group by c.continentName for c in selCountryOptions" ng-disabled="isFreeRideAvailable" ng-required="!isFreeRideAvailable"></select> <small class="error">{{ \'booking_payment_country_error\' | translate }}</small> </div> </div> <div class="row" ng-if="paymentInfo.method == \'DEBIT_CARD\' &amp;&amp; !paymentInfo.useStoredTransaction"> <div class="small-8 columns"> <label>{{ \'booking_payment_iban\' | translate }}</label> <input type="text" name="iban" ng-model="paymentInfo.iban" pp-has-error="" pp-valid-iban="" required="true" placeholder="DE89 3704 0044 0532 0130 00"> <small class="error">{{ \'provider_bank_account_error\' | translate }}</small> </div> <div class="small-4 columns"> <label>{{ \'booking_payment_bic\' | translate }}</label> <input type="text" name="bic" ng-model="paymentInfo.bic" pp-has-error="" ng-pattern="peppr.validators.cstm_bic" required="true" placeholder="COBADEFFXXX"> <small class="error">{{ \'provider_bank_account_error\' | translate }}</small> </div> <div class="small-12 columns"> <label>{{ \'booking_payment_card_holdername\' | translate }}</label> <div class="row"> <div class="small-4 columns"> <input class="card-holdername" name="dcFirstName" ng-model="paymentInfo.firstName" pp-has-error="" ng-disabled="isFreeRideAvailable" size="20" placeholder="John" type="text" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_holdername_error\' | translate }}</small> </div> <div class="small-8 columns"> <input class="card-holdername" name="dcLastName" ng-model="paymentInfo.lastName" pp-has-error="" ng-disabled="isFreeRideAvailable" size="20" placeholder="Doe" type="text" ng-required="!isFreeRideAvailable"> <small class="error">{{ \'booking_payment_card_holdername_error\' | translate }}</small> </div> </div> </div> <div class="small-12 medium-6 columns" ng-if="$root.user.email"> <label>{{ \'email_address\' | translate }}</label> <input type="text" name="dcEmailAddress" ng-model="paymentInfo.email" pp-has-error="" required="true" placeholder="you@example.com"> <small class="error">{{ \'email_required_error\' | translate }}</small> </div> <div class="small-12 columns" ng-class="{\'medium-6\': $root.user.email}"> <label>{{ \'booking_payment_card_address\' | translate }}</label> <input type="text" name="dcAddress" ng-model="paymentInfo.address" pp-has-error="" required="true" placeholder="WeserstraÃŸe 165"> <small class="error">{{ \'booking_payment_address_error\' | translate }}</small> </div> <div class="small-7 columns"> <label>{{ \'booking_payment_zip_city\' | translate }}</label> <div class="row"> <div class="small-4 columns"> <input type="text" class="zip" name="dcZip" ng-model="paymentInfo.zip" pp-has-error="" required="true" placeholder="10247"> <small class="error">{{ \'booking_payment_zip_error\' | translate }}</small> </div> <div class="small-8 columns"> <input type="text" class="city" name="dcCity" ng-model="paymentInfo.city" pp-has-error="" required="true" placeholder="Berlin"> <small class="error">{{ \'booking_payment_city_error\' | translate }}</small> </div> </div> </div> <div class="small-5 columns"> <label>{{ \'payment_country\' | translate }}</label> <select name="dcCountry" ng-model="paymentInfo.country" ng-options="c.countryCode as c.countryName group by c.continentName for c in selCountryOptions" pp-has-error="" ng-disabled="isFreeRideAvailable" ng-required="!isFreeRideAvailable"></select> <small class="error">{{ \'booking_payment_country_error\' | translate }}</small> </div> </div> <div class="row"> <div class="small-12 columns payment-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="cbConfirmChecked" id="bpFormConfirmCb"> </div> <label for="bpFormConfirmCb"> {{ \'age_disclaimer\' | translate }}  <span ng-bind-html="bookingPaymentTacPpText"></span> </label> </div> </div> <div class="row"> <div class="small-12 columns text-center"> <button class="submit-button" type="submit" ng-disabled="!cbConfirmChecked || paymentInProgress || paymentform.$invalid">{{ \'pay_now\' | translate }} <small>{{paymentInfo.amount}} â‚¬</small></button> </div> </div> <div class="row company-info unimportant"> <div class="small-12 columns"> <p class="small"> <em>{{ pepprCompanyName }}</em> {{ pepprStreetAndNumber }}<br> {{ pepprPostcodeAndCity }}<br> {{ pepprCountry }}<br> <br> {{ \'customer_support\' | translate }}:<br> {{ \'phone\' | translate }}: {{ pepprContactPhone }}<br> {{ \'email\' | translate }}: <a href="{{ pepprServiceEmail }}">{{ pepprServiceEmail }}</a><br> </p> </div> </div> </form> </section>'), e.put("app/views/booking_payment_confirmation.html", '<section class="booking-confirmation-section view-booking-confirmation"> <div class="row"> <div class="small-12 medium-8 large-6 columns"> <h1>{{ \'booking_payment_confirmation_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-8 large-6 columns text-justify"> <p> <span ng-bind-html="bookingConfirmationIntroText"></span>  </p> <p class="text-center small"> <span ng-bind-html="bookingConfirmationExplanationText"></span> </p> <p class="text-center small"> {{ \'offline_disclaimer\' | translate }} </p> </div> </div> <div ng-show="suggestions &amp;&amp; suggestions.length > 0 &amp;&amp; (!booking.shortlist || booking.shortlist.length == 0)"> <div class="row"> <div class="small-12 medium-8 large-6 columns text-justify"> <h3>{{ \'client_shortlist_notice_title\' | translate }}</h3> <p> {{ \'client_shortlist_notice_text\' | translate }} </p>  <div class="row"> <div class="small-12 columns text-center"> <a class="button" ng-disabled="numChecked == 0" ng-click="onSaveShortlist()">Add them ({{numChecked}})</a> </div> </div> <div class="grid-table" ng-repeat="sugg in suggestions"> <div class="row booking"> <div class="columns mini-profile-column"> <div class="mini-profile-image-container"> <div class="mini-profile-image" ng-if="sugg.profilePictures &amp;&amp; sugg.profilePictures.length > 0" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + sugg.profilePictures[0].uploadUUID + \'?width=60)\'}"></div> </div> </div> <div class="columns booking-info"> <div class="booking-list-info"> <div class="provider-name">{{ sugg.provider.name }}, <small>{{ sugg.provider.age }}</small></div> <div class="indicators"> <div class="indicator price-indicator" ng-if="peppr.features.showPrices"> <i class="peppr-icon-price"></i> <span class="data"><small>{{sugg.servicePrice}}â‚¬</small></span> </div> <div class="indicator distance-indicator" ng-show="sugg.distanceKm >= 0"> <i class="peppr-icon-distance"></i> <span class="data"><small>{{sugg.distanceKm.toFixed(0)}}<span class="unit">km</span></small></span> </div>  </div> </div> </div> <div class="columns button-column"> <a class="button" ui-sref="app.provider({providerId: sugg.provider.id, lang: activeLang})"> <i class="peppr-icon-ladies"></i> </a> </div> <div class="columns button-column"> <div class="checkbox-button"> <input type="checkbox" ng-model="sugg.checked" ng-change="onSuggestionsCheckedChanged(sugg)" ng-attr-id="{{\'bpcChkInShortlist\' + sugg.provider.id}}"> <label class="button" ng-attr-for="{{\'bpcChkInShortlist\' + sugg.provider.id}}"></label> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="small-12 medium-8 large-6 columns text-center"> <a class="button" ng-disabled="numChecked == 0" ng-click="onSaveShortlist()">{{ \'shortlist_add\' | translate:{numChecked: numChecked} }}</a> <a ng-click="clickOk()" class="button submit-button">{{ \'no_thanks\' | translate }}</a> </div> </div> </div> <div class="row" ng-hide="suggestions &amp;&amp; suggestions.length > 0 && (!booking.shortlist || booking.shortlist.length === 0)"> <div class="small-12 medium-8 large-6 columns text-center"> <div ng-hide="user.signupIncomplete"> <a ng-click="clickOk()" class="button submit-button">Ok</a> </div> <div ng-show="user.signupIncomplete"> <p> {{ \'continue_to_complete_account\' | translate }} </p> <a ng-click="clickOk()" class="button submit-button">{{ \'continue\' | translate }}</a> </div> </div> </div> </section>'), e.put("app/views/client_faq.html", '<section class="client-faq-section view-client-faq"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'client_faq_title\' | translate }}</h1> </div> </div> <form ng-submit="clickNewTopicForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.topicId" placeholder="faqTopicId"> </div> <div class="small-6 columns"> <input type="text" ng-model="newEntry.langCode" placeholder="de"> </div> </div> <div class="row"> <div class="small-12 columns"> <input type="text" ng-model="newEntry.title" placeholder="The question"> </div> </div> <div class="row"> <div class="small-12 columns"> <textarea ng-model="newEntry.text" placeholder="The text answering the question"></textarea> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="faq in faqEntries | filter:faqLangFilter"> <dt>{{ faq.title }} <small ng-show="isAdmin"><a ng-click="clickTopic(faq)">{{ faq.topicId }}</a></small></dt> <dd style="white-space: pre-line;">{{ faq.text }}</dd> </dl> </div> </div> </section>'), e.put("app/views/component_phonenumber.html", '<label class="with-description">{{ label }} <small>{{ \'required\' | translate }}</small></label> <div class="label-description" ng-show="description">{{ description }}</div> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="phone.phoneNumberCountry" required="true" ng-options="c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="text" ng-model="phone.phoneNumberLocal" name="{{name}}" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error" ng-show="(form[name].$error.required || form[name].$error.pattern) &amp;&amp; form[name].$touched">{{ errMsg }}</small> </div> </div>'), e.put("app/views/concept.html", '<section class="concept-section view-concept">      <div class="row collapse pictures-wrapper" ng-if="!showMockup" ng-style="{ height: desktopProfilePicturesHeight }">  <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="image"> </div> </div> <div class="row info-wrapper"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="desktop-back-button show-for-large-up"> <a class="button icon-button back" ui-sref="app.provider_list({lang: activeLang})"> <span class="button-icon"><i>&#8249;</i></span>{{ \'back\' | translate }} </a> </div> <div class="content-wrapper"> <div class="content"> <h2>Meet the Twins</h2> <p>We are Pia and Flo, the brains and muscles begin PEPPR. Pia is a committed business woman, Flo a modern-age wizard in code, both Austrians living in Berlin, where at the end of 2013, we started working on a web app that will push the limits of eCommerce and online sex.</p> <p>After launching April 1st, 2014, PEPPR took over the web by a storm - with millions of clicks and features on Time Magazine, The Economist, Vice, The Huffington Post and many more, the world was fascinated by the first mobile app that offers erotic services with just a few clicks.</p> <p>Our goal is not only to take out the hassle of booking an erotic date, but also to offer a high-class, transparent platform that makes it easier and safer for our Pepprs to</p> </div> </div> </div> </div> </div></section>'), e.put("app/views/content_privacy_policy.html", '<h3 class="text-center">DatenschutzerklÃ¤rung</h3>  <h6>Geltungsbereich</h6> <p> Diese DatenschutzerklÃ¤rung klÃ¤rt Sie Ã¼ber die Art, den Umfang und die Zwecke der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Anbieter <em>{{ pepprCompanyName }}</em>, {{ pepprPostcodeAndCity }}, {{ pepprCountry }}, eMail: s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">......</a>@peppr.it, Telefon: {{ pepprContactPhone }} </p> <p> Die rechtlichen Grundlagen des Datenschutzes finden sich im Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG). </p> <h6>Zugriffsdaten/ Server-Logfiles</h6> <p> Peppr (beziehungsweise sein Webspace-Provider) erhebt Daten Ã¼ber jeden Zugriff auf das Angebot (so genannte Serverlogfiles). Zu den Zugriffsdaten gehÃ¶ren: Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, Ã¼bertragene Datenmenge, Meldung Ã¼ber erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider (â€ž<strong>Protokolldaten</strong>â€œ) </p> <p> Peppr verwendet die Protokolldaten nur fÃ¼r statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der Optimierung des Angebotes. Peppr behÃ¤lt sich jedoch vor, die Protokolldaten nachtrÃ¤glich zu Ã¼berprÃ¼fen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht einer rechtswidrigen Nutzung besteht. </p> <h6>Umgang mit personenbezogenen Daten</h6> <p> Personenbezogene Daten sind Informationen, mit deren Hilfe eine natÃ¼rliche Person bestimmbar ist, also Angaben, die zurÃ¼ck zu einer natÃ¼rlichen Person verfolgt werden kÃ¶nnen. Dazu gehÃ¶ren der Name, die Emailadresse oder die Telefonnummer. Peppr erhebt, verarbeitet und nutzt personenbezogene Daten entsprechend der gesetzlichen Vorschriften nur wenn dies gesetzlich erlaubt ist oder Sie in die Datenerhebung, -verarbeitung und/oder -nutzung einwilligen. </p> <h6>Registrierung</h6> <p> Bei Ihrer Registrierung bei peppr werden folgende personenbezogene Daten erhoben, verarbeitet und genutzt: </p> <ul> <li>Vorname</li> <li>E-Mailadresse</li> <li>Mobilfunknummer</li> <li>Sprache</li> </ul> <p> Die im Rahmen der Registrierung eingegebenen vorgenannten Daten (â€ž<strong>Registrierungsdaten</strong>â€œ) werden fÃ¼r die Zwecke der Nutzung des Angebotes verwendet. Sie kÃ¶nnen Ã¼ber angebots- oder registrierungsrelevante Informationen, wie Ã„nderungen des Angebotsumfangs oder technische UmstÃ¤nde per E-Mail informiert werden. Die Registrierungsdaten werden ausschlieÃŸlich zur Erbringung der Leistungen des Portals erhoben, verarbeitet und genutzt. Die Registrierungsdaten werden im Rahmen des Reservierungsverfahrens an die/den jeweilige/n Professional Ã¼bermittelt, da dies zur Erbringung der Leistungen von peppr erforderlich ist. </p> <h6>Standortdaten</h6> <p> DarÃ¼ber hinaus erhebt, verarbeitet und nutzt peppr auf Ihre Einwilligung hin Angaben zu Ihrem Standort im Zeitpunkt der Verwendung des Portals sowie im Rahmen des Reservierungsverfahrens (â€ž<strong>Standortdaten</strong>â€œ). Die Standortdaten werden aus den Daten, die Ihr Browser bereitstellt, ermittelt. Diese Daten sind im Normalfall die IP Adresse, der von Ihrem Mobilfunkanbieter Ã¼ber die Funkzellenabfrage bereitgestellte Standort und / oder der Standort, den ein, in Ihr EndgerÃ¤t verbauter, GPS EmpfÃ¤nger ermittelt. Die Einwilligung ist vor jeder Erhebung der Standortdaten von Ihnen zu erklÃ¤ren und ist jederzeit frei widerruflich. Die Standortdaten werden vom Anbieter nicht an Dritte Ã¼bermittelt. Sie kÃ¶nnen das Portal auch nutzen ohne in die Erhebung, Verarbeitung und Nutzung Ihrer Standortdaten einzuwilligen. </p> <h6>Zahlungsdaten</h6> <p> Im Rahmen von der Reservierungsanfragen werden folgende Ihrer â€ž<strong>Zahlungsdaten</strong>â€œ erfasst: </p> <ul> <li>Name und Vorname des Kreditkarteninhabers</li> <li>Nummer der Kreditkarte</li> <li>Ablaufdatum der Kreditkarte</li> <li>CVC-Code der Kreditkarte</li> <li>ggf. Secure-Code (persÃ¶nliche Sicherheitseinstellung, persÃ¶nlich Regelung mit dem Geldinstitut),</li> </ul> <p> Die Zahlungsdaten werden an die in Ziff. 4 der AGB bezeichneten Unternehmen zum Zwecke der Zahlungsabwicklung Ã¼bermittelt. Die Ãœbermittlung an diese Unternehmen ist erforderlich, um die Bezahlung der Reservierungskosten sicherzustellen. Eine hierÃ¼ber hinausgehende Ãœbermittlung Ihrer personenbezogenen Daten, insbesondere Registrierungsdaten und/oder Zahlungsdaten an andere Dritte ist ausgeschlossen. </p> <h6>Einbindung von Diensten und Inhalten Dritter</h6> <p> Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos von YouTube, Kartenmaterial von Google-Maps, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden werden. Dies setzt immer voraus, dass die Anbieter dieser Inhalte (nachfolgend bezeichnet als â€ž<strong>Dritt-Anbieter</strong>â€œ) die IP-Adresse der Nutzer wahrnehmen. Denn ohne die IP-Adresse, kÃ¶nnten sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden. Die IP-Adresse ist damit fÃ¼r die Darstellung dieser Inhalte erforderlich. Wir bemÃ¼hen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Jedoch haben wir keinen Einfluss darauf, falls die Dritt-Anbieter die IP-Adresse z.B. fÃ¼r statistische Zwecke speichern. Soweit dies uns bekannt ist, klÃ¤ren wir die Nutzer darÃ¼ber auf. </p> <h6>Cookies</h6> <p> Cookies sind kleine Dateien, die es ermÃ¶glichen, auf dem ZugriffsgerÃ¤t der Nutzer (PC, Smartphone o.Ã¤.) spezifische, auf das GerÃ¤t bezogene Informationen zu speichern. Sie dienen zum einem der Benutzerfreundlichkeit von Webseiten und damit den Nutzern (z.B. Speicherung von Logindaten). Zum anderen dienen sie, um die statistische Daten der Webseitennutzung zu erfassen und sie zwecks Verbesserung des Angebotes analysieren zu kÃ¶nnen. Die Nutzer kÃ¶nnen auf den Einsatz der Cookies Einfluss nehmen. Die meisten Browser verfÃ¼gen eine Option mit der das Speichern von Cookies eingeschrÃ¤nkt oder komplett verhindert wird. Allerdings wird darauf hingewiesen, dass die Nutzung und insbesondere der Nutzungskomfort ohne Cookies eingeschrÃ¤nkt werden. </p> <p> Sie kÃ¶nnen viele Online-Anzeigen-Cookies von Unternehmen Ã¼ber die US-amerikanische Seite <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite <a href="http://www.youronlinechoices.com/uk/your-ad-choices/">http://www.youronlinechoices.com/uk/your-ad-choices/</a> verwalten. </p> <h6>Sonstiges</h6> <p> Sollte eine Bestimmung dieser DatenschutzerklÃ¤rung unwirksam sein oder werden, so bleibt die Rechtswirksamkeit der Ã¼brigen Bestimmungen hiervon unberÃ¼hrt. An Stelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die der von den Parteien gewollten wirtschaftlich am nÃ¤chsten kommt. Diese DatenschutzerklÃ¤rung unterliegt dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (Convention of Contracts for the International Sales of Goods, CISG). AusschlieÃŸlicher Gerichtsstand fÃ¼r alle sich aus dieser DatenschutzerklÃ¤rung ergebenden Streitigkeiten ist, soweit eine solche Gerichtsstandsvereinbarung zulÃ¤ssig ist, Berlin, Deutschland. Von dieser Gerichtsstandsvereinbarung ausgenommen sind Verfahren des einstweiligen Rechtsschutzes. </p> <h6>Google Analytics</h6> <p> Dieses Angebot benutzt Google Analytics, einen Webanalysedienst der Google Inc. (â€ž<strong>Google</strong>â€œ). Google Analytics verwendet sog. â€ž<strong>Cookies</strong>â€œ, Textdateien, die auf Computer der Nutzer gespeichert werden und die eine Analyse der Benutzung der Website durch sie ermÃ¶glichen. Die durch den Cookie erzeugten Informationen Ã¼ber Benutzung dieser Website durch die Nutzer werden in der Regel an einen Server von Google in den USA Ã¼bertragen und dort gespeichert. </p> <p> Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird die IP-Adresse der Nutzer von Google jedoch innerhalb von Mitgliedstaaten der EuropÃ¤ischen Union oder in anderen Vertragsstaaten des Abkommens Ã¼ber den EuropÃ¤ischen Wirtschaftsraum zuvor gekÃ¼rzt. Nur in AusnahmefÃ¤llen wird die volle IP-Adresse an einen Server von Google in den USA Ã¼bertragen und dort gekÃ¼rzt. Die IP-Anonymisierung ist auf dieser Website aktiv. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um die Nutzung der Website durch die Nutzer auszuwerten, um Reports Ã¼ber die WebsiteaktivitÃ¤ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenÃ¼ber dem Websitebetreiber zu erbringen. </p> <p> Die im Rahmen von Google Analytics von Ihrem Browser Ã¼bermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengefÃ¼hrt. Die Nutzer kÃ¶nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; Dieses Angebot weist die Nutzer jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sÃ¤mtliche Funktionen dieser Website vollumfÃ¤nglich werden nutzen kÃ¶nnen. Die Nutzer kÃ¶nnen darÃ¼ber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfÃ¼gbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a>. </p> <p> Alternativ zum Browser-Add-On oder innerhalb von Browsern auf mobilen GerÃ¤ten, <a id="GAOptOut" title="Google Analytics Opt-Out-Cookie setzen" onclick="gaOptout()">klicken Sie bitte diesen Link</a>, um die Erfassung durch Google Analytics innerhalb dieser Website zukÃ¼nftig zu verhindern. Dabei wird ein Opt-Out-Cookie auf Ihrem GerÃ¤t abgelegt. LÃ¶schen Sie Ihre Cookies, mÃ¼ssen Sie diesen Link erneut klicken. </p> <h6>Widerruf, Ã„nderungen, Berichtigungen und Aktualisierungen</h6> <p> Sie haben das Recht, auf Antrag unentgeltlich Auskunft zu erhalten Ã¼ber die personenbezogenen Daten, die von peppr Ã¼ber Sie gespeichert wurden. ZusÃ¤tzlich haben Sie das Recht auf Berichtigung unrichtiger Daten, Sperrung und LÃ¶schung seiner personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht. </p>'), e.put("app/views/content_privacy_policy_it.html", '<h3 class="text-center">Informazioni sulla Privacy</h3> <ol> <li>I dati personali forniti dallâ€™utente saranno trattati, raccolti ed utilizzati da Peppr nel pieno rispetto delle norme europee e tedesche un tema di protezione della privacy e dei dati personali.</li> <li>Peppr rende noto allâ€™utente che: </li> <ol> <li>i dati personali forniti da questâ€™ultimo saranno trattati esclusivamente per la fornitura del servizio richiesto;</li> <li>costituiscono elementi da comunicare obbligatoriamente, il conferimento di un valido numero di telefonia mobile e di un valido indirizzo di posta elettronica;</li> <li>lâ€™eventuale rifiuto di comunicare i predetti dati comporterÃ  lâ€™impossibilitÃ  di usufruire del servizio richiesto;</li> <li>i dati personali raccolti non verranno ceduti a terzi. Al fine di favorire unâ€™adeguata comprensione di â€œdato personaleâ€, lo stesso Ã¨ definito come qualsivoglia informazione relativa ad una persona fisica o giuridica, ente, comitato o associazione, identificati o comunque identificabili, direttamente o indirettamente attraverso il riferimento a qualunque informazione, quale, a titolo esemplificativo, il numero di identificazione personale.</li> </ol> <li>Peppr garantisce che la raccolta ed il trattamento dei dati personali dellâ€™Utente sarÃ  improntata ai principi di correttezza, trasparenza e di tutela della riservatezza.</li> <li>Lâ€™eventuale conoscenza di dati personali da parte di terzi (quali a titolo di esempio nome o indirizzo) in seguito al trattamento dei medesimi, deriverÃ  esclusivamente dalla scelta volontaria dellâ€™Utente di inserire allâ€™interno del suo profilo elementi che consentano la propria identificazione.</li> <li>Lâ€™utente, accettando le condizioni di utilizzo, autorizza Peppr al trattamento dei propri dati personali entro i limiti e per le finalitÃ  di indicate nella presente informativa. </li> <li>I sistemi informatici preposti per il funzionamento del sito acquisiscono, nel corso del loro funzionamento, alcuni dati personali, tra i quali: indirizzo di posta elettronica ed eventuali dati personali inseriti nel profilo, le informazioni relative allâ€™utilizzo del sito, il traffico in entrata ed in uscita, le statistiche dâ€™accetto e delle pagine visitate, lâ€™indirizzo IP dellâ€™utente, il timestamp, i click su banner o link de sito.</li> <li>Peppr raccoglie e tratta i dati personali dellâ€™utente al fine di:</li> <ol> <li>permettere allâ€™Utente di usufruire al meglio del servizio offerto;</li> <li>migliorare il servizio offerto allâ€™Utente;</li> <li>personalizzare le modalitÃ  di navigazione;</li> <li>fornire informazioni commerciali e/o promozioni sullâ€™utilizzo del sito;</li> <li>salvaguardare la sicurezza del sito;</li> <li>fare rispettare le condizioni di utilizzo;</li> <li>adempiere agli obblighi di legge</li> </ol> <li>I dati sono trattati con strumenti automatizzati e per il tempo necessario a conseguire gli scopi per i quali sono stati raccolti.</li> <li>Al fine di prevenire violazioni dei diritti, delle libertÃ  fondamentali e della dignitÃ  degli interessati, Peppr dichiara di astenersi dal trattare dati sensibili conferiti dallâ€™Utente. Ai fini del presente atto, sono considerati â€œdati sensibiliâ€ tutti quei dati idonei a rivelare lâ€™origine razziale e/o etnica, le convinzioni politiche, filosofiche e religiose, lâ€™adesione ad organizzazioni politiche, sindacali, religiose, filosofiche, nonchÃ© lo stato di salute e lâ€™orientamento sessuale dellâ€™utente.</li> <li>Lâ€™utente si obbliga, pertanto:</li> <ol> <li>a non corredare il proprio profilo con ulteriori elementi che consentano la propria identificazione, diretta o indiretta. In caso contrario lâ€™Utente ne sarÃ  considerato unico responsabile, esonerando Peppr da qualsivoglia responsabilitÃ  o pretesa propria o di terzi;</li> <li>a non trasmettere a Peppr materiale dal contenuto osceno, offensivo, volgare, calunnioso, diffamatorio, pornografico, pedopornografico, blasfemo o comunque contrario ai principi dellâ€™ordine pubblico, della morale pubblica e del buon costume; in caso contrario assumendosene la completa responsabilitÃ  ai sensi della legge vigente.</li> </ol> <li>Lâ€™utente ha il diritto di esercitare in ogni momento i propri diritti nei confronti del titolare del trattamento, contattando Peppr, anche via email allâ€™indirizzo s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Rivela questo indirizzo e-mail">......</a>@peppr.it. In particolare Peppr riconosce il diritto dellâ€™Utente:</li> <ol> <li>ad ottenere conferma circa lâ€™esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, e la loro comunicazione in forma intellegibile;</li> <li>di conoscerne contenuto ed origine;</li> <li>di verificarne lâ€™esattezza e di chiederne lâ€™integrazione, lâ€™aggiornamento e/o la rettificazione;</li> <li>di chiederne la cancellazione, la trasformazione in forma anonima ovvero il blocco dei dati trattati in violazione della legge.</li> <li>di opporsi, per motivi legittimi, al loro trattamento.</li> </ol> <li>Peppr si impegna ad eseguire la rettifica e/o la cancellazione dei dati stessi entro 48 ore dalla richiesta, salvo imprevisti o disservizi o qualsiasi altro impedimento tecnico.</li> <li>Peppr si riserva il diritto di modificare la suddetta informativa previo avviso allâ€™Utente, da effettuarsi mediante pubblicazione della versione aggiornata allâ€™interno del sito.</li> <li>Peppr adotta ed osserva specifiche misure di sicurezza al fine di prevenire la perdita dei dati conferiti, eventuali usi illeciti o non corretti dei medesimi ed accessi non autorizzati. </li> </ol>'), e.put("app/views/content_tnc.html", '<h3 class="text-center">Allgemeine GeschÃ¤ftsbedingungen der Peppr IT GmbH, Berlin (â€žAGBâ€œ) fÃ¼r die Erbringung von Reservierungsleistungen auf dem Internetportal</h3> <h6>PrÃ¤ambel</h6> <p> Die Peppr IT GmbH (â€ž<strong>Anbieter</strong>â€œ) betreibt das Internetportal www.peppr.it (â€ž<strong>Portal</strong>â€œ), auf dem NutzerInnen (â€ž<strong>Professional</strong>â€œ) Profile erstellen. Die Profile enthalten verschiedene Informationen Ã¼ber den/die Professional, insbesondere Ã¼ber die angebotenen Services, ihren Standort sowie die zeitliche VerfÃ¼gbarkeit des/der Professional. Der Anbieter macht die Profile auf dem Portal Dritten (â€ž<strong>Kunden</strong>â€œ/ â€ž<strong>Ihnen</strong>â€œ /â€œSieâ€œ ) gegenÃ¼ber Ã¶ffentlich zugÃ¤nglich. Sie kÃ¶nnen als Nutzer des Portals die Profile ansehen, Ã¼ber das Portal Professionals kontaktieren, um Professionals fÃ¼r einen bestimmten Zeitraum zu reservieren. FÃ¼r die Buchung von Professionals zahlen Sie eine BuchungsgebÃ¼hr, die vom Anbieter vereinnahmt wird. Die VergÃ¼tung fÃ¼r die vom Professional erbrachten Leistungen zahlen Sie direkt an die/den Professional. </p> <h6>Geltungsbereich / Ã„nderung dieser GeschÃ¤ftsbedingungen</h6> <p> Die AGB gelten fÃ¼r die Beziehungen zwischen Anbieter und Ihnen in Bezug auf die auf dem Portal verfÃ¼gbaren Leistungen, insbesondere die Abwicklung der Buchung von Professionals sowie der Abwicklung der Zahlung von BuchungsgebÃ¼hren. Informationen Ã¼ber den Anbieter finden Sie unter http://peppr.it Entgegenstehenden oder abweichenden Bedingungen des Kunden wird ausdrÃ¼cklich widersprochen. Diese werden nur anerkannt, wenn der Anbieter ausdrÃ¼cklich schriftlich der Geltung zustimmt. </p> <p> Der Anbieter behÃ¤lt sich vor, die AGB jederzeit mit Wirksamkeit auch innerhalb der bestehenden VertragsverhÃ¤ltnisse zu Ã¤ndern. Ãœber derartige Ã„nderungen wird der Anbieter Sie mindestens 30 Kalendertage vor dem geplanten Inkrafttreten der Ã„nderungen in Kenntnis setzen. Sofern Sie nicht innerhalb von 30 Tagen ab Zugang der Mitteilung widersprechen und die Inanspruchnahme der Dienste auch nach Ablauf der Widerspruchsfrist fortsetzen, so gelten die Ã„nderungen ab Fristablauf als wirksam vereinbart. Im Falle Ihres Widerspruchs wird der Vertrag zu den bisherigen Bedingungen fortgesetzt. In der Ã„nderungsmitteilung wird der Anbieter Sie auf Ihr Widerspruchsrecht und auf die Folgen hinweisen. </p> <h6>Anmeldung </h6> <p> Die Nutzung der auf dem Portal verfÃ¼gbaren Dienste setzt Ihre Anmeldung als Teilnehmer voraus. Ein Anspruch auf die Teilnahme besteht nicht. Der Anbieter ist berechtigt Registrierungen ohne Angabe von GrÃ¼nden zurÃ¼ckzuweisen. Die Anmeldung ist Ihnen nur erlaubt, wenn Sie volljÃ¤hrig und unbeschrÃ¤nkt geschÃ¤ftsfÃ¤hig sind. MinderjÃ¤hrigen Personen ist eine Anmeldung untersagt. Die Anmeldung ist fÃ¼r Sie kostenfrei. Die wÃ¤hrend des Anmeldevorgangs abgefragten Kontaktdaten und sonstigen Angaben mÃ¼ssen von Ihnen vollstÃ¤ndig und korrekt angegeben werden. Der Anbieter schaltet Ihren beantragten Zugang nach erfolgreicher Anmeldung frei. Nach erfolgreicher Anmeldung sind Sie zur Nutzung des Portals im Rahmen dieser AGB berechtigt. </p> <p> Im Verlauf des Anmeldevorgangs werden Sie gebeten, Ihre E-Mailadresse und ein Passwort anzugeben. Mit diesen Daten kÃ¶nnen Sie sich nach der Freischaltung Ihres Zugangs auf dem Portal einloggen. Es liegt in Ihrer Verantwortung, dass der Benutzername nicht Rechte Dritter, insbesondere keine Namens- oder Markenrechte verletzt und nicht gegen die guten Sitten verstÃ¶ÃŸt. Die Zugangsdaten einschlieÃŸlich des Passworts sind von Ihnen geheim zu halten und unbefugten Dritten nicht zugÃ¤nglich zu machen. Es liegt weiter in Ihrer Verantwortung sicher zu stellen, dass Ihr Zugang zu dem Portal und die Nutzung der auf dem Portal zur VerfÃ¼gung stehenden Dienste ausschlieÃŸlich durch Sie bzw. durch die von Ihnen bevollmÃ¤chtigten Personen erfolgt. Steht zu befÃ¼rchten, dass unbefugte Dritte von Ihren Zugangsdaten Kenntnis erlangt haben oder erlangen werden, ist der Anbieter unverzÃ¼glich zu informieren. </p> <p> <strong>Sie haften fÃ¼r jedwede Nutzung und/oder sonstige AktivitÃ¤t, die unter Ihren Zugangsdaten ausgefÃ¼hrt wird, nach den gesetzlichen Bestimmungen.</strong> </p> <h6>Profile der Professionals auf dem Portal / Selektion von Profilen </h6> <p> Der Anbieter vermittelt Ihnen auf dem Portal Zugang zu den von den Professionals erstellten Profilen und den darin enthaltenen Informationen (Daten, Bilder, Videos etc.). Sie kÃ¶nnen auf dem Portal die Profile nach verschiedenen Kriterien, insbesondere den von den Professionals angebotenen Leistungen sowie dem jeweiligen Standort der Professionals selektieren. Soll eine Selektion der Profile anhand des Standortes erfolgen, mÃ¼ssen Sie zuvor einwilligen, dass das Portal durch Zugriff auf die entsprechenden Ressourcen Ihrer GerÃ¤te bzw. Software Ihre persÃ¶nlichen Standortdaten ermitteln und an das Portal Ã¼bermitteln kann. Wird diese Einwilligung nicht erteilt, mÃ¼ssen Sie Ihre Selektion Ã¼ber eine manuelle Eingabe, z.B. einer Postleitzahl festlegen. </p> <h6>Buchung von Professionals / Autorisierung und Abbuchung der Reservierungskosten</h6> <p> Durch Auswahl eines Profils gelangen Sie zu den im Rahmen des jeweiligen Profils hinterlegten Informationen der/des Professionals und kÃ¶nnen unter Angabe von Datum, Uhrzeit und Dauer an diese/n im Rahmen des Reservierungsverfahrens eine kostenpflichtige Reservierungsanfrage senden (â€ž<strong>Reservierungsanfrage</strong>â€œ). Eine Ãœbermittlung der Reservierungsanfrage an die/den Professional erfolgt durch den Anbieter erst nachdem Sie den Button â€ž<strong>Jetzt bezahlen</strong>â€œ betÃ¤tigt haben sowie die BestÃ¤tigung der von Ihnen eingegebenen Zahlungsdaten durch den Zahlungsdienstleister. Die HÃ¶he der Kosten der Reservierungsanfrage (â€ž<strong>Reservierungskosten</strong>â€œ) werden Ihnen vor BetÃ¤tigung des Buttons â€ž<strong>Jetzt bezahlen</strong>â€œ sowie Ãœbermittlung Ihrer Zahlungsdaten an den Zahlungsdienstleister auf dem Portal dargestellt. Wenn die Reservierungskosten nur autorisiert und erst spÃ¤ter abgebucht werden, erhalten Sie einen entsprechenden Hinweis auf der Zahlungsseite. </p> <p> Die/der Professional muss Ihre Reservierungsanfrage bestÃ¤tigen. Sie erhalten nach Eingang dieser BestÃ¤tigung an die von Ihnen angegebene Mobilfunknummer per SMS oder per E-Mail eine BestÃ¤tigung Ihrer Reservierungsanfrage (â€ž<strong>ReservierungsbestÃ¤tigung</strong>â€œ). Der Anbieter erhÃ¤lt ebenfalls eine ReservierungsbestÃ¤tigung. Die Abbuchung der Reservierungskosten erfolgt spÃ¤testens zum Zeitpunkt des Versands der ReservierungsbestÃ¤tigung seitens der/des Professionals. Erhalten Sie bzw. der Anbieter innerhalb von 24 Stunden nach Versand der Reservierungsanfrage von der/dem Professional keine ReservierungsbestÃ¤tigung oder wird Ihre Reservierungsanfrage aus einem anderen Grund zurÃ¼ckgewiesen oder abgebrochen, werden die Reservierungskosten zurÃ¼ckerstattet, bzw. lÃ¤uft die Autorisierung auf Ihrem Zahlungsmittel automatisch aus </p> <p> Durch den Versand der ReservierungsbestÃ¤tigung an Sie bzw. den Anbieter wird die/der Professional nicht dazu verpflichtet bestimmte Leistungen zu erbringen. Die Erbringung dieser Dienstleistungen steht weiterhin im freien Ermessen der/des Professional. Haben Sie zunÃ¤chst eine ReservierungsbestÃ¤tigung erhalten und entschlieÃŸt sich die/der Professional die von Ihnen angefragten Leistungen nicht zu erbringen, erstattet der Anbieter Ihnen auf Anfrage die Reservierungskosten auf auf ihr verwendetes Zahlungsmittel zurÃ¼ck. </p> <p> Die Autorisierung sowie Bezahlung der Reservierungskosten mit Kreditkarte ist nur mit Visa oder MasterCard mÃ¶glich. Andere Kreditkarten werden derzeit nicht akzeptiert. </p> <ul> <em>FÃ¼r Kreditkartenzahlung:</em> <li>Name und Vorname des Kreditkarteninhabers </li> <li>Nummer der Kreditkarte </li> <li>Ablaufdatum der Kreditkarte </li> <li>CVC-Code der Kreditkarte </li> <li>ggf. Secure-Code (persÃ¶nliche Sicherheitseinstellung, persÃ¶nlich Regelung mit dem Geldinstitut),</li> </ul> <ul> <em>FÃ¼r Lastschriftzahlung:</em> <li>Name und Vorname des Karteninhabers</li> <li>IBAN und BIC des Kontos</li> <li>Adresse des Kontoinhabers</li> </ul> <p> (zusammen â€ž<strong>Zahlungsdaten</strong>â€œ) Diese Zahlungsdaten werden an den Rechner des Finanzunternehmens zur Abrechnung Ã¼bertragen. Die Zahlungsdaten werden geschÃ¼tzt, in einem PCI DSS zertifizierten System abgelegt. Der Anbieter speichert Ihre Zahlungsdaten nicht auf den von ihm betriebenen Systemen. </p> <p> FÃ¼r die Abwicklung der ZahlungsmodalitÃ¤ten sind die Firmen<br> Wirecard Technologies GmbH, 85609 Aschheim, Deutschland (â€ž<strong>Finanzunternehmen</strong>â€œ)<br> und<br> Euro Payment Group GmbH, 60327 Frankfurt am Main, Deutschland (â€ž<strong>Zahlungsdienstleister</strong>â€œ)<br> beauftragt. </p> <p> Die Systeme des Finanzunternehmens und des Zahlungsdienstleisters Ã¼berprÃ¼fen die von Ihnen angegebenen Zahlungsdaten auf Richtigkeit und ggf. vorhandene Sperrvermerke des jeweiligen Kreditkartenherausgebers. Sollte die Autorisierung aus irgendeinem Grund fehlschlagen, erhalten Sie eine entsprechende Nachricht angezeigt. Die Belastung des Bankkontos bzw. der Kreditkarte ist abhÃ¤ngig von der Verarbeitung der Kundenbanken bzw. ihres kreditkartenherausgebenden Institutes. </p> <p> Die Reservierungskosten erscheinen in der Kreditkartenabrechnung des Kreditkartenherausgebers, bzw. des Kontoauszuges als Gesamtbetrag in Euro und sind mit â€ž<strong>peppr IT GmbH</strong>â€œ bezeichnet. </p> <p> Sollten Sie ungerechtfertigt ein Charge Back (RÃ¼ckgabe des Betrages) veranlassen so sind Sie verpflichtet, zusÃ¤tzlich zu dem Betrag aus den im Vorfeld in Anspruch genommenen Reservierungskosten, die jeweils gÃ¼ltige BearbeitungsgebÃ¼hr sowie die angefallenen FremdgebÃ¼hren des Kreditkarten-Acquirers, bzw. der Bank zu tragen. Die HÃ¶he der BearbeitungsgebÃ¼hr richtet sich nach den AGBs Ihres Geldinstitutes. </p> <h6>Schutz der Inhalte, Verantwortlichkeit fÃ¼r Inhalte Dritter</h6> <p> Die auf dem Portal verfÃ¼gbaren Inhalte sind Ã¼berwiegend geschÃ¼tzt durch das Urheberrecht oder durch sonstige Schutzrechte und stehen jeweils im Eigentum des Anbieters, der Professionals oder sonstiger Dritter, welche die jeweiligen Inhalte zur VerfÃ¼gung gestellt haben. Die Zusammenstellung der Inhalte als Solche ist ggf. geschÃ¼tzt als Datenbank oder Datenbankwerk iSd. Â§Â§ 4 Abs. 2, 87a Abs. 1 UrhG. Sie dÃ¼rfen diese Inhalte lediglich gemÃ¤ÃŸ diesen AGB sowie im auf dem Portal vorgegebenen Rahmen nutzen. </p> <p> Die auf dem Portal verfÃ¼gbaren Inhalte stammen teilweise vom Anbieter und teilweise von den Professionals bzw. sonstigen Dritten (â€ž<strong>Drittinhalte</strong>â€œ). Der Anbieter fÃ¼hrt bei Drittinhalten keine PrÃ¼fung auf VollstÃ¤ndigkeit, Richtigkeit und RechtmÃ¤ÃŸigkeit durch und Ã¼bernimmt daher keinerlei Verantwortung oder GewÃ¤hrleistung fÃ¼r die VollstÃ¤ndigkeit, Richtigkeit, RechtmÃ¤ÃŸigkeit und AktualitÃ¤t der Drittinhalte. Dies gilt auch im Hinblick auf die QualitÃ¤t der Drittinhalte und deren Eignung fÃ¼r einen bestimmten Zweck, und auch, soweit es sich um Drittinhalte auf verlinkten externen Webseiten handelt. </p> <h6>Verbotene AktivitÃ¤ten</h6> <p> Sie dÃ¼rfen die auf dem Portal verfÃ¼gbaren Inhalte ausschlieÃŸlich nichtkommerziell nutzen. Jede Nutzung fÃ¼r oder im Zusammenhang mit kommerziellen Zwecken ist Ihnen untersagt, es sei denn, eine derartige Nutzung wurde Ihnen vom Anbieter zuvor ausdrÃ¼cklich und schriftlich erlaubt. Zur unerlaubten kommerziellen Nutzung zÃ¤hlen insbesondere </p> <ul> <li>alle Angebote und Bewerbungen entgeltlicher Inhalte, Dienste und/oder Produkte und zwar sowohl Ihrer eigenen, als auch solche Dritter,</li> <li>alle Angebote, Bewerbungen und DurchfÃ¼hrungen von AktivitÃ¤ten mit kommerziellem Hintergrund wie Preisausschreiben, Verlosungen, TauschgeschÃ¤fte, Inserate oder Schneeballsysteme, und</li> <li>jedwede elektronische bzw. anderweitige Sammlung von IdentitÃ¤ts- und/oder Kontaktdaten (einschlieÃŸlich E-Mail-Adressen) von Mitgliedern (zB fÃ¼r den Versand unaufgeforderter E-Mails).</li> </ul> <p> Ihnen sind jegliche AktivitÃ¤ten auf bzw. im Zusammenhang mit dem Portal untersagt, die gegen geltendes Recht verstoÃŸen, Rechte Dritter verletzen oder gegen die GrundsÃ¤tze des Jugendschutzes verstoÃŸen. Ebenfalls untersagt ist Ihnen jede Handlung, die geeignet ist, den reibungslosen Betrieb des Portals zu beeintrÃ¤chtigen, insbesondere die Systeme des Anbieters Ã¼bermÃ¤ÃŸig zu belasten. Sollte Ihnen eine illegale, missbrÃ¤uchliche, vertragswidrige oder sonstwie unberechtigte Nutzung des Portals bekannt werden, so wenden Sie sich bitte bitte per Email an s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">......</a>@peppr.it. Der Anbieter wird den Vorgang dann prÃ¼fen und ggf. angemessene Schritte einleiten. </p> <p> Bei Vorliegen eines Verdachts auf rechtswidrige bzw. strafbare Handlungen ist der Anbieter berechtigt und ggf. auch verpflichtet, Ihre AktivitÃ¤ten zu Ã¼berprÃ¼fen und ggf. geeignete rechtliche Schritte einzuleiten. Hierzu kann auch die Zuleitung eines Sachverhalts an die Staatsanwaltschaft gehÃ¶ren. </p> <h6>Sperrung von ZugÃ¤ngen</h6> <p> Der Anbieter kann Ihren Zugang zu dem Portal vorÃ¼bergehend oder dauerhaft sperren, wenn konkrete Anhaltspunkte vorliegen, dass Sie gegen diese AGB und/oder geltendes Recht verstoÃŸen bzw. verstoÃŸen haben, oder wenn der Anbieter ein sonstiges berechtigtes Interesse an der Sperrung hat. Bei der Entscheidung Ã¼ber eine Sperrung wird der Anbieter Ihre berechtigten Interessen angemessen berÃ¼cksichtigen. Im Falle der vorÃ¼bergehenden bzw. dauerhaften Sperrung sperrt der Anbieter Ihre Zugangsberechtigung und benachrichtigt Sie hierÃ¼ber per E-Mail. Im Falle einer vorÃ¼bergehenden Sperrung reaktiviert der Anbieter nach Ablauf der Sperrzeit die Zugangsberechtigung und benachrichtigt Sie hierÃ¼ber per E-Mail. Eine dauerhaft gesperrte Zugangsberechtigung kann nicht wiederhergestellt werden. Dauerhaft gesperrte Personen sind von der Teilnahme an dem Portal dauerhaft ausgeschlossen und dÃ¼rfen sich nicht erneut auf dem Portal anmelden. </p> <h6>Sonstiges</h6> <p> Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so bleibt die Rechtswirksamkeit der Ã¼brigen Bestimmungen hiervon unberÃ¼hrt. An Stelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die der von den Parteien gewollten wirtschaftlich am nÃ¤chsten kommt. Diese AGB unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (Convention of Contracts for the International Sales of Goods, CISG). AusschlieÃŸlicher Gerichtsstand fÃ¼r alle sich aus diesen AGB ergebenden Streitigkeiten ist, soweit eine solche Gerichtsstandsvereinbarung zulÃ¤ssig ist, Berlin, Deutschland. Von dieser Gerichtsstandsvereinbarung ausgenommen sind Verfahren des einstweiligen Rechtsschutzes. </p> '), e.put("app/views/content_tnc_it.html", '<h3 class="text-center">Condizioni dâ€™ utilizzo</h3> <h6>Termini del servizio e accettazione delle condizioni di utilizzo</h6> <ol> <li>Lâ€™utilizzo del servizio Peppr Ã¨ regolato nei termini e dalle condizioni di seguito riportate.</li> <li>Lâ€™utente, prima di usufruire di qualsivoglia servizio offerto da Peppr, Ã¨ tenuto ad informarsi sullâ€™eventuale sussistenza di modifiche e/o aggiornamenti apportati alle condizioni di utilizzo. Tali modifiche e/o aggiornamenti faranno parte integrante delle presenti condizioni dâ€™utilizzo e costituiranno fonte di accordo tra Peppr e lâ€™Utente.</li> <li>La fruizione del servizio e dei contenuti offerti da Peppr comporta e presuppone lâ€™integrale conoscenza e lâ€™incondizionata accettazione delle clausole sotto elencate.</li> </ol> <h6>Individuazione del servizio e contenuti offerti da Peppr, note legali</h6> <ol> <li>Peppr, con sede legale a Berlino (Germania), consente ai destinatari la creazione di profili online e lâ€™interazione tra gli stessi attraverso un servizio di incontri (di seguito il/i Servizio/i) accessibile agli Utenti iscritti a Peppr tramite internet, telefono cellulare o applicazioni mobili. Alcune funzionalitÃ  offerte da Peppr sono accessibili gratuitamente, mentre altre funzionalitÃ  sono a pagamento per gli Iscritti tramite un Abbonamento forfettario.</li> <li>Il sito www.italy.peppr.it non ha scopi di favoreggiamento di attivitÃ  illecite e/o criminali e si limita ad offrire allâ€™utente uno spazio web per la pubblicazione dei propri profili, i quali sono immessi esclusivamente ed autonomamente dagli utenti sotto la loro piena ed esclusiva responsabilitÃ .</li> <li>Il gestore del sito non svolge alcuna attivitÃ  di agenzia o di intermediazione. Peppr non ha nessuna relazione con gli Utenti se non lâ€™autorizzazione da parte degli stessi alla pubblicazione del loro profilo, liberamente proposto dallâ€™Utente.</li> <li>Peppr si occupa unicamente della realizzazione e della manutenzione della pagina, del mantenimento in rete della stessa e della pubblicazione del proprio sito. Pertanto, gli eventuali contatti e relazioni interpersonali conseguenti alla creazione e/o pubblicazione del profilo sono assolutamente estranei allâ€™attivitÃ  del gestore che invita gli utenti ad assumere ogni precauzione del caso in occasione di incontri con un altro iscritto.</li> <li>Lâ€™inclusione dei profili degli Utenti nel sito non comporta lâ€™approvazione e/o avallo da parte di Peppr, il quale non effettua alcun controllo preventivo e non si assume alcuna responsabilitÃ  a riguardo.</li> <li>Peppr farÃ  ogni ragionevole sforzo al fine di garantire che le informazioni che appaiono sul sito siano corrette e aggiornate. Tuttavia, non si escludono errori od omissioni involontarie. Pertanto si invita lâ€™Utente a verificare lâ€™esattezza delle informazioni contenute collegandosi direttamente al sito www.italy.peppr.it.</li> <li>Peppr non sarÃ  in alcun modo responsabile per lâ€™utilizzo che potrÃ  essere fatto della presente normativa nÃ© tantomeno dei danni derivanti direttamente o indirettamente dal suo utilizzo.</li> <li>I fruitori dei suddetti servizi potranno contattare o comunicare direttamente con Peppr tramite lâ€™indirizzo s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Rivela questo indirizzo e-mail">......</a>@peppr.it</li> </ol> <h6>Obblighi e condotta dellâ€™utente</h6> <ol> <li>Il servizio puÃ² essere utilizzato esclusivamente da maggiori di anni 18 ed Ã¨ indirizzato esclusivamente ad un pubblico maggiorenne. Lâ€™utilizzo del servizio da parte di minori di 18 anni presuppone e sottintende lâ€™autorizzazione dei genitori o di chi esercita su di essi la responsabilitÃ  genitoriale o la tutela. Costoro si assumono la piena responsabilitÃ  per qualsivoglia comportamento tenuto dal minore nellâ€™accesso, utilizzo o fruizione del servizio, e vengono informati sin dâ€™ora della possibilitÃ  di installazione sui propri computer di appositi software di protezione e di filtro.</li> <li>Peppr non garantisce alcunchÃ© in ordine alla veridicitÃ , qualitÃ  e provenienza del contenuto dei profili e non effettua alcun controllo preventivo sul contenuto dei profili immessi in rete dagli Utenti, nÃ© svolgerÃ  alcuna attivitÃ  di intermediazione sulle eventuali transazioni intercorrenti tra gli Utenti medesimi. Lâ€™Utente fa pertanto uso del servizio messo a disposizione da Peppr nella piena consapevolezza che questâ€™ultimo non garantisce alcunchÃ© circa la veridicitÃ  del contenuto dei profili ed Ã¨ assolutamente estraneo ad eventuali contatti e/o relazioni interpersonali tra gli Utenti conseguenti allâ€™utilizzo del sito. Qualora lâ€™Utente abbia motivo di ritenere che una persona utilizzi i suoi dati identificativi o il suo account dovrÃ  darne immediato avviso a Peppr.</li> <li>Lâ€™utente si impegna:</li> <ol> <li>a non fruire dei servizi fornitigli da Peppr in modo improprio e/o contrario allâ€™ordine pubblico, al buon costume o comunque alla morale, alle disposizioni di legge e regolamentari ed alle norme di etica e di buon uso dei servizi di rete (c.d. Netiquette);</li> <li>a non trasmettere a Peppr materiale dal contenuto e/o di natura osceno, offensivo, volgare, calunnioso, diffamatorio, blasfemo, pornografico, pedopornografico, o comunque contrario ai principi dellâ€™ordine pubblico, della morale pubblica e del buon costume, assumendosene in caso contrario, la piena responsabilitÃ  ai sensi delle vigenti leggi;</li> <li>a redigere il proprio profilo in maniera accurata e veritiera;</li> <li>a non pubblicare in rete senza il consenso degli aventi diritto inserzioni e profili contenenti dati personali, sensibili e/o immagini di terzi, nonchÃ© materiale contenente virus o altri sistemi tesi a danneggiare o rallentare il funzionamento del presente servizio ovvero protetto da copyright;</li> <li>a non pregiudicare lâ€™uso ed il godimento del servizio da parte degli altri utenti;</li> <li>ad astenersi dallâ€™inviare a qualunque terzo materiale informativo e/o pubblicitario non richiesto.</li> </ol> <li>Lâ€™utente si obbliga:</li> <ol> <li>a comportarsi correttamente nei confronti di Peppr e di ogni altro Utente;</li> <li>a non incoraggiare, commettere, favorire e/o agevolare in qualsiasi modo, mediante gli spazi messi a disposizione da www.italy.peppr.it, azioni criminali e comportamenti illeciti in generale, quali, a titolo esemplificativo: diffamazione, calunnia, favoreggiamento della prostituzione, pedofilia;</li> <li>a non utilizzare il sito per lâ€™offerta di prestazioni di carattere sessuale in cambio di denaro o facenti riferimento ad organi sessuali ovvero recanti immagini oscene e/o inappropriate;</li> <li>a non immettere nÃ© pubblicare materiale video-fotografico di minori;</li> <li>a rispettare i diritti di proprietÃ  intellettuale relativi ai contenuti forniti da Peppr e dagli altri Utenti e, in particolare, a non riprodurre, trascrivere, divulgare, duplicare, distribuire, modificare o comunicare, senza averne diritto, materiale protetto dal diritto di autore, dal diritto di proprietÃ  intellettuale e/o industriale;</li> <li>a non inserire dati sensibili e/o personali di terzi in assenza di una loro manifesta autorizzazione;</li> </ol> <li>Lâ€™utente sarÃ  pertanto lâ€™unico responsabile, verso Peppr e verso i terzi:</li> <ol> <li>del comportamento tenuto;</li> <li>del materiale e delle informazioni divulgate;</li> <li>del contenuto dei propri argomenti di discussione, i quali costituiscono espressioni di libera manifestazione del pensiero, costituzionalmente tutelata e dovranno svolgersi nel pieno rispetto dei limiti della legge.</li> </ol> <li>Lâ€™Utente Ã¨ consapevole che lâ€™indirizzo di posta elettronica reso noto a Peppr potrÃ  valere quale mezzo di comunicazione a distanza.</li> <li>I campi â€œtelefonoâ€ e â€œemailâ€ sono obbligatori.</li> <li>Eventuali incontri e/o contatti interpersonali tra Utenti del servizio sono assolutamente estranei allâ€™attivitÃ  di questo sito che si occupa unicamente della realizzazione e della manutenzione della pagina, del mantenimento in rete della stessa e della pubblicazione del proprio sito.</li> <li>Peppr non potrÃ  essere in alcun modo ritenuto responsabile dei comportamenti tenuti dallâ€™Utente e da qualsiasi pregiudizio o danno causato attraverso lâ€™utilizzo del servizio.</li> <li>Peppr avvisa gli Utenti che lâ€™accertata violazione delle sopraindicate regole comporterÃ  la segnalazione dei trasgressori alle competenti AutoritÃ  giudiziarie.</li> </ol> <h6>Esonero di responsabilitÃ  e manleva</h6> <ol> <li>Lâ€™utente, quale necessaria conseguenza della propria piena ed esclusiva responsabilitÃ  eventualmente derivante dalla violazione di leggi, regolamenti, netiquette e delle presenti condizioni generali, dichiara espressamente di esonerare e manlevare Peppr da qualsivoglia responsabilitÃ , civile e penale, riconoscendone da ora il difetto di legittimazione passiva giudizio.</li> <li>In particolare, lâ€™utente si obbliga a manlevare Peppr da qualsiasi pregiudizio, danno, perdita, responsabilitÃ , costo, onere o spesa derivanti da qualsivoglia pretesa o azione promossa da terzi a causa di un utilizzo improprio della piattaforma online offerta da Peppr.</li> <li>Lâ€™utente concorda che Peppr non sarÃ  ritenuto responsabile verso lo stesso e verso i terzi della modifica, sospensione, revoca o interruzione del servizio nonchÃ© della cancellazione e modifica dei profili inoltrati, indipendentemente dalla modalitÃ  di realizzazione.</li> <li>Salvi i limiti di legge, Peppr non Ã¨ in alcun modo responsabile delle perdite economiche e dei danni diretti o indiretti eventualmente subiti dallâ€™Utente o da terzi in conseguenza dellâ€™utilizzo del sito o del proprio servizio.</li> </ol> <h6>Diritti riservati, marchi commerciali, diritti dâ€™autore</h6> <ol> <li>Peppr Ã¨ titolare di tutti i servizi e i contenuti messi a disposizione dellâ€™utente tramite la propria piattaforma online. </li> <li>Ãˆ fatto divieto di utilizzare, riprodurre e/o distribuire, sia integralmente che parzialmente, tanto a titolo gratuito quanto a titolo oneroso, qualsivoglia risorsa, informazione o materiale contenuto nel sito appartenente a Peppr o a terzi quale, a scopo semplificativo, i marchi e i loghi registrati e non, vesta grafica, simboli e segni distintivi in genere. Il loro eventuale utilizzo Ã¨ pertanto subordinato al preventivo consenso scritto del proprietario.</li> <li>Qualsiasi foto presa dal sito e/o dai profili degli utenti non potrÃ  pertanto essere salvata sul proprio PC, su qualsivoglia tipo di dispositivo di memoria o archivio digitale o analogico, senza il preventivo consenso espresso per iscritto da parte del titolare della foto stessa, indipendentemente dallâ€™uso che se ne intenda fare.</li> <li>Nel caso in cui dovessero essere utilizzate, riprodotte o distribuite informazioni relative a terzi, che appaiono in questo sito, Ã¨ fatto salvo il diritto dâ€™autore di tali terzi, attraverso la riproduzione in tutte le copie.</li> <li>I profili e i contenuti pubblicati dagli utenti che vengano segnalati a causa di atti illeciti e/o abusi saranno prontamente rimossi da Peppr senza alcun preavviso e non saranno piÃ¹ reinseriti.</li> </ol> <h6>Regole per la pubblicazione del profilo</h6> <ol> <li>La fruizione del sito Ã¨ destinata esclusivamente ad un pubblico maggiorenne e consenziente. In caso di utilizzo da parte di minori di etÃ , saranno ritenuti responsabili unicamente i loro genitori, i quali sin dâ€™ora vengono informati della possibilitÃ  di installazione sui propri computer di appositi software di protezione e di filtro.</li> <li>I profili sono inseriti liberamente e possono avere contenuti testuali ed immagini a corredo a carattere erotico.</li> <li>Le foto e le immagini pubblicate dallâ€™Utente sul profilo non devono avere contenuto contrario alla legge vigente, ai principi dellâ€™ordine pubblico, della morale pubblica e del buon costume e alla netiquette, quali a titolo esemplificativo e non esaustivo: immagini pornografiche, pedopornografiche, di sesso esplicito o ritraenti organi genitali in vista. Lâ€™Utente che pubblica qualsivoglia immagine o foto si assume la piena responsabilitÃ  di quanto pubblicato.</li> <li>Non Ã¨ altresÃ¬ consentito di inserire nel profilo testi o annunci volgari o offensivi (quali a titolo esemplificativo quelli a carattere discriminatorio nei confronti di una persona o di una societÃ ) e di tenere comportamenti che costituiscono reati perseguibili penalmente rilevanti, illeciti o comunque proibiti dalle vigenti leggi, quali, a titolo esemplificativo: la diffamazione, la violazione della privacy, lo sfruttamento e il favoreggiamento della prostituzione, la diffusione di materiale pedopornografico.</li> <li>Peppr si riserva il diritto:</li> <ol> <li>di cancellare qualsivoglia immagine ritenuta, a suo insindacabile giudizio, non in linea con il Regolamento;</li> <li>di cancellare il profilo dellâ€™Utente che pubblichi testi o annunci volgari, offensivi o in violazione delle leggi vigenti;</li> <li>di prendere qualsiasi decisione in merito alla cancellazione e/o sospensione del servizio in caso di profili che infrangono le regole, le presenti condizioni dâ€™uso e le leggi vigenti;</li> <li>di segnalare immediatamente, in caso di inserimento di materiale pedopornografico, alle competenti AutoritÃ  giudiziarie i dati di accesso al sito al fine di risalire ai responsabili.</li> </ol> <li>Creando il proprio profilo, lâ€™Utente dichiara e certifica:</li> <ol> <li>di potere disporre con pieno diritto del contenuto del suo profilo.</li> <li>che le immagini eventualmente presenti sul profilo riguardano persone maggiori di etÃ  che hanno prestato il loro espresso e manifesto consenso alla pubblicazione dellâ€™immagine su www.italy.peppr.it.</li> </ol> </ol> <h6>Disposizioni finali</h6> <ol> <li>Peppr si riserva in ogni tempo, tanto temporaneamente quanto in maniera definitiva, il diritto:</li> <ol> <li>di revocare, disattivare e/o modificare, la fornitura del presente servizio;</li> <li>di cancellare i profili degli utenti secondo criteri discrezionali ed insindacabili, senza preavviso allâ€™Utente e senza indicarne le cause.</li> </ol> <li>Le presenti condizioni generali ed i rapporti intercorrenti tra Peppr e lâ€™Utente saranno regolati dalla Legge della Germania. </li> <li>Per qualsiasi controversia inerente, derivante o connessa alle presenti condizioni e/o allâ€™utilizzo del servizio sarÃ  esclusivamente competente il Foro di Berlino.</li> </ol>'), e.put("app/views/email_confirm.html", '<section class="email-confirm-section view-email-confirm"> <div class="row"> <div class="column"> <h1>{{ \'email_confirm_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="medium-10 large-8 columns"> <h5>{{ \'email_confirm_short_instructions\' | translate }}</h5> <form name="emailconfirmform" ng-submit="clickEmailConfirmForm()"> <div class="row"> <div class="medium-6 large-6 columns"> <label>{{ \'email_confirmation_code\' | translate }}</label> <input type="text" ng-model="code" name="code" pp-has-error="" required="true" placeholder="e4r2f"> <small class="error">{{ \'email_confirmation_code_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="emailconfirmform.$invalid">{{ \'confirm\' | translate }}</button> </div> </div> </form> </div> </div> </section> '), e.put("app/views/empty.html", '<section class="about-section view-empty"> </section>'), e.put("app/views/fake_inbound_sms.html", '<section class="signup-client-section view-signup-client"> <div class="row"> <div class="large-12 columns"> <h1>Fake Inbound SMS</h1> </div> </div> <div class="row"> <div class="large-8 medium-10 columns"> <h5>Send a fake SMS to our system to simulate booking</h5> <form name="fakesmsform" ng-submit="clickSubmitSms()" novalidate=""> <div class="row"> <div class="columns"> <label>Provider</label> <input type="radio" ng-model="provider" value="MYCOOL" id="fisFormProviderMyCool" name="fisFormProvider" required="true"> <label for="fisFormProviderMyCool">My Cool SMS</label> <input type="radio" ng-model="provider" value="SMSTRADE" id="fisFormProviderMyCool" name="fisFormProvider" required="true"> <label for="fisFormProviderMyCool">SMS Trade</label> <input type="radio" ng-model="provider" value="NEXMO" id="fisFormProviderNexmo" name="fisFormProvider" required="true"> <label for="fisFormProviderNexmo">NEXMO</label> <small class="error">{{ \'provider_sex_error\' | translate }}</small> </div> </div> <div class="row"> <div class="columns"> <label>Sender <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="phoneNumberCountry" required="true" ng-options="c.value as c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="phoneNumber" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="columns"> <label>Receiver <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="recvPhoneNumberCountry" required="true" ng-options="c.value as c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="recvPhoneNumber" name="recvPhoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="small-12 columns"> <label>SMS text</label> <textarea ng-model="sms.body" placeholder="Yes Thanks for your booking"></textarea> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="fakesmsform.$invalid">Send fake SMS</button> </div> </div> </form> </div> </div> </section> '), e.put("app/views/frankfurt.html", '<section class="concept-section view-concept view-city view-city-frankfurt">      <div class="row collapse pictures-wrapper city-image" ng-if="!showMockup" ng-style="{ height: desktopProfilePicturesHeight }">  <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="image"></div> </div> </div> <div class="row info-wrapper"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns"> <div class="desktop-back-button show-for-large-up"> <a class="button icon-button back" ui-sref="app.provider_list({lang: activeLang})"> <span class="button-icon"><i>&#8249;</i></span>{{ \'back\' | translate }} </a> </div> <div class="content-wrapper"> <div class="content"> <h2>Frankfurt</h2> <p>Frankfurt am Main ist jedem als Finanzmetropole mit der typischen Skyline aus Wolkenkratzern ein Begriff.</p> <p>Die Stadt hat auch ihre coolen Seiten, mit dem bunten Mix aller NationalitÃ¤ten und Hautfarben im Bahnhofsviertel, oder dem opulenten GrÃ¼nderzeitviertel Westend mit SinglebevÃ¶lkerung, hippen DesignerlÃ¤den und astronmischen Immobilienpreisen.</p> <div class="scroll-down-bar text-center show-for-large-up"> <i class="peppr-icon-arrow-down" ng-click="scrollDown()"></i> </div> </div> </div> </div> </div> <div class="row collapse separator"> </div> <div class="row teaser"> <div class="small-12 medium-6 medium-offset-3 columns"> <p>Frankfurt lÃ¤sst sich natÃ¼rlich am Besten mit der richtigen Begleitung erkunden. PEPPR vermittelt Escort und Begleitservices in Frankfurt. Lassen Sie sich fallen und mit allen Sinnen von einem Callgirl oder Callboy verwÃ¶hnen. Alle Escorts kÃ¶nnen Sie direkt buchen.</p> <p>NatÃ¼rlich auch in Wiesbaden, im wunderschÃ¶nen Mainz, im gesamten Rhein-Main Gebiet und Hessen.</p> </div> </div> <div class="row collapse showcase-image-list"> <div class="small-12 columns"> <div class="row collapse"> <div class="small-12 medium-12 large-12 columns"> <div class="row collapse provider-row"> <div class="small-12 medium-6 large-4 xlarge-3 xxlarge-2 columns" ng-repeat="p in providers | filter:filterProviders"> <a ui-sref="app.provider({providerId: p.provider.id, lang: activeLang})" class="showcase-image-wrapper inactive" id="plSc{{p.provider.id}}"> <div class="in-view-container"> <div ng-if="p.profilePictures" pp-hide-on-img-loaded="{{ pepprRestBaseUrl }}/image/{{ p.profilePictures[0].uploadUUID }}?width=300" class="image-loading"></div> <div class="image" ng-if="p.profilePictures" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + p.profilePictures[0].uploadUUID + \'?width=300)\'}"></div> <div class="img-overlay"></div> <div class="available-now" ng-show="p.instantAvailable"><i class="peppr-icon-time"></i> {{ \'instant_booking_available\' | translate }}</div> <div class="profile-info"> <div class="profile-click-hint" ng-if="p.provider.id == firstProviderId"> <span class="tooltip tip-top transparent radius"> {{ \'click_to_show_profile\' | translate }} <span class="nub"></span> </span> </div> <div class="profile-name"><h2>{{p.provider.name}}</h2></div> <div class="indicators"> <div class="indicator price-indicator" ng-if="peppr.features.showPrices"> <i class="peppr-icon-price"></i> <span class="data">{{pricePer(p.provider)}}â‚¬<span class="unit">/{{pricePerNumHours(p.provider)}}h</span></span> </div> <div class="indicator availability-indicator availability-instant-indicator" ng-show="p.instantAvailable"> <i class="peppr-icon-time"></i> <span class="data">{{ \'availability_now\' | translate }}</span> </div> <div class="indicator distance-indicator" ng-show="p.distanceKm &gt;= 0"> <i class="peppr-icon-distance"></i> <span class="data">{{p.distanceKm.toFixed(0)}}<span class="unit">km</span></span> </div> </div> </div> </div> </a> </div> <div class="small-12 medium-6 large-4 xlarge-3 xxlarge-2 columns"> <a ui-sref="app.provider_list({lang: activeLang})" ng-click="showMore()" class="showcase-image-wrapper inactive"> <div class="in-view-container"> <div class="image"></div> <div class="img-overlay"></div> <div class="profile-info"> <div class="profile-name"><h2>Show more</h2></div> </div> </div> </a> </div> </div> </div> </div> </div> </div> </section>'), e.put("app/views/imageupload_admin.html", '<section class="imageupload-admin-section view-imageupload-admin"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'imageupload_admin_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-4 columns"> <label>{{ \'imageupload_admin_mode\' | translate }}</label> <select ng-model="mode" ng-options="c.mode as c.title for c in modes"></select> </div> </div> <div class="row profile-pictures-wrapper" ng-show="mode == \'REVIEW\'"> <div class="large-12 columns text-center"> <ul class="small-block-grid-2 medium-block-grid-4 large-block-grid-6 orbit-container"> <li ng-repeat="p in pictures" id="image{{ p.uploadUUID }}"> <a class="delete button tiny" ng-click="rejectPicture(p, $index)" title="Reject">&#215;</a> <a class="approve button tiny" ng-click="approvePicture(p, $index)" title="Approve">&#10003;</a> <a class="show-profile button tiny" ng-class="{agency: p.provider[0].agency.id, \'active-provider\': isActive(p.provider[0])}" ui-sref="app.provider({providerId: p.provider[0].id, lang: activeLang})"><i class="peppr-icon-agency"></i></a> <a class="full-image button tiny" ng-href="{{pepprRestBaseUrl}}/image/{{p.uploadUUID}}" target="_blank"><i class="fi-zoom-in"></i></a> <div class="warning-mark" ng-show="isWarningImage(p)" title="Problem with resolution or mimetype"><i class="fi-alert"></i></div> <div class="th" data-tooltip="" title="{{ imageTitle(p) }}"> <div class="image" ng-hide="p.zoomed" ng-click="p.zoomed = true" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + p.uploadUUID + \'?width=150)\'}"></div> <img class="zoomed-image" ng-show="p.zoomed" ng-click="p.zoomed = false" ng-src="{{pepprRestBaseUrl}}/image/{{p.uploadUUID}}?width=150" alt="{{provider.name}} profile picture {{s.uploadUUID}}"> </div> </li> </ul> </div> </div> <div class="row profile-pictures-wrapper" ng-show="mode == \'RATING\'"> <div class="large-12 columns text-center"> <ul class="small-block-grid-2 medium-block-grid-4 large-block-grid-6 orbit-container"> <li ng-repeat="p in pictures" id="image{{ p.uploadUUID }}"> <div class="rating-wrapper"> <a class="rating button tiny" ng-click="ratePicture(p, $index, \'UNRESTRICTED\')" title="Unrestricted">0</a> <a class="rating button tiny" ng-click="ratePicture(p, $index, \'EROTIC\')" title="Erotic">1</a> <a class="rating button tiny" ng-click="ratePicture(p, $index, \'NUDITY\')" title="Nudity">2</a> <a class="rating button tiny" ng-click="ratePicture(p, $index, \'EXPLICIT\')" title="Explicit">3</a> </div> <a class="show-profile button tiny" ng-class="{agency: p.provider[0].agency.id, \'active-provider\': isActive(p.provider[0])}" ui-sref="app.provider({providerId: p.provider[0].id, lang: activeLang})"><i class="peppr-icon-agency"></i></a> <a class="full-image button tiny" ng-href="{{pepprRestBaseUrl}}/image/{{p.uploadUUID}}" target="_blank"><i class="fi-zoom-in"></i></a> <div class="th" data-tooltip="" title="{{ imageTitle(p) }}"> <img class="zoomed-image" ng-src="{{pepprRestBaseUrl}}/image/{{p.uploadUUID}}?width=150" alt="{{provider.name}} profile picture {{s.uploadUUID}}"> </div> </li> </ul> </div> </div> </section> '), e.put("app/views/italy.html", '<section class="launch-section view-italy"> <div class="background-wrapper" ng-style="{height: backgroundHeight, \'-webkit-transform\': translateString, \'-moz-transform\': translateString}"> <div class="background"></div> <div class="upper-content-wrapper" ng-style="{opacity: opacity}"> <div class="row centered peppr-logo"> <div class="small-12 columns text-right">  <img class="peppr-logo" src="images/peppr_logo_white.png" alt="peppr logo"> <div class="soon-in-italy-wrapper"> <div class="soon-in-italy"></div> </div> </div> </div> <div class="row centered launch-claim"> <div class="small-12 medium-8 medium-offset-2 columns text-center"> <em> <small> PEPPR Ã¨ una nuova piattaforma online per le prenotazioni di incontri da favola con le persone piÃ¹ attraenti intorno a te. </small> </em> </div> </div> <div class="row centered launch-claim"> <div class="small-12 medium-12 large-10 large-offset-1 columns text-center"> <div class="steps-wrapper" ng-class="{\'grid-table\': peppr.isScreenMedium}"> <div class="row steps"> <div class="small-12 medium-4 columns"> <div class="step"> <div> <div class="icon"> <i class="peppr-icon-list"></i> </div> <p> Scorri la lista di pepprs, troverai persone vicino a te per passare dei bei momenti  </p> </div> </div> </div> <div class="small-12 medium-4 columns"> <div class="step"> <div> <div class="icon"> <i class="peppr-icon-flame"></i> </div> <p> Chiedi alla tua peppr un appuntamento, la tua richiesta sarÃ  inoltrata immediatamente  </p> </div> </div> </div> <div class="small-12 medium-4 columns"> <div class="step"> <div> <div class="icon"> <i class="peppr-icon-phone"></i> </div> <p> Una volta accettata, potete scambiare i numeri e chattare in privato  </p> </div> </div> </div> </div> </div> </div> </div> <div class="row centered launch-claim press"> <div class="small-12 columns text-center"> <div class="middle-wrapper"> <div class="middle press-logos"> <div class="press-logo all show-for-medium-up"></div> <div class="hide-for-medium-up"> <div class="press-logo sueddeutsche"></div> <div class="press-logo huffingtonpost"></div> <div class="press-logo dailymail"></div> <div class="press-logo larepubblica"></div> <div class="press-logo gruenderszene"></div> <div class="press-logo time"></div> <div class="press-logo vice"></div> <div class="press-logo netzpiloten"></div> <div class="press-logo libertyvoice"></div> <div class="press-logo theeconomist"></div> <div class="press-logo bild"></div> </div> </div> </div> </div> </div> <div class="row centered launch-claim"> <div class="small-12 medium-8 medium-offset-2 columns text-center"> <em> <small> Forse vuoi visitare PEPPR Germania? <a href="https://peppr.it">Clicca qui</a> </small> </em> </div> </div> <div class="scroll-down-bar text-center show-for-medium-up"> <i class="peppr-icon-arrow-down" ng-click="scrollDown()"></i> </div> </div> </div> <div class="row signup-confirm"> <div class="small-12 columns"> <div class="row"> <div class="small-12 medium-6 medium-offset-3 large-4 large-offset-4 columns"> <div class="panel client-location signup-confirm"> <form name="italysignupform" ng-submit="clickEnterForm()" novalidate=""> <div class="before-zip">  <p>Iscriviti! Ti informeremo quando PEPPR Ã¨ disponibile in Italia!</p> </div> <div class="row"> <div class="columns"> <input type="radio" ng-model="signup.type" value="ITALY" id="isFormTypeItaly" name="isFormType" required="true">  <label for="isFormTypeItaly">Cliente</label> <input type="radio" ng-model="signup.type" value="ITALY_PROVIDER" id="isFormTypeItalyProvider" name="isFormType" required="true">  <label for="isFormTypeItalyProvider">Potenziale peppr</label> </div> </div> <div class="row collapse email"> <div class="columns"> <input type="text" ng-model="signup.email" name="email" pp-has-error="" placeholder="you@example.com" required="true"> <small class="error">{{ \'email_required_error\' | translate }}</small> </div> </div> <div class="row collapse zip"> <div class="small-10 columns"> <input type="text" ng-model="peppr.clientLocation.cityName" placeholder="CittÃ¡" required="true"> </div> <div class="small-2 columns locate-me" ng-class="{ working: peppr.clientLocation.working }"> <span class="postfix" ng-click="clickLocateMe()"><i class="peppr-icon-gps"></i></span> </div> </div> <div class="row collapse geocoded-address" ng-show="peppr.clientLocation.geocodedAddress"> <div class="columns"> <div> <small>{{ peppr.clientLocation.geocodedAddress }}</small> </div> </div> </div> <div class="row collapse enter"> <div class="columns"> <button type="submit" ng-disabled="!peppr.clientLocation.isValid || !signup.email" class="button icon-button"><span class="button-icon"><i class="peppr-icon-flame"></i></span> Inscriviti </button></div> </div> </form> </div> </div> <div class="copyright"> {{ pepprCompanyName }}, <span ng-if="pepprStreetAndNumber">{{ pepprStreetAndNumber }},</span> {{ pepprPostcodeAndCity }}, {{ pepprCountry }} s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">......</a>@peppr.it<br> </div> </div> </div> </div> </section>'), e.put("app/views/launch.html", '<section class="launch-section view-launch"> <div class="background"></div> <div class="background desktop" ng-hide="desktopShowApp"></div> <div class="row peppr-logo"> <div class="small-12 columns text-right">  <img class="peppr-logo" src="images/peppr_logo_white.png" alt="peppr logo"> </div> </div> <div class="row launch-claim" ng-hide="isItaly"> <div class="small-12 columns text-center"> <div class="tagline1">PEPPR IS COMING SOON</div> <div class="tagline2">AND SO WILL YOU</div> </div> </div> <div class="ng-hide row launch-claim" ng-show="isItaly"> <div class="small-12 columns text-center">   <div class="tagline1"> <img class="italy-flag" src="images/italy-flag.png" alt="italy flag"><br class="show-for-small-only"> SOON IN ITALY </div> <table class="security-info ng-hide"> <tbody> <tr> <td colspan="2" class="text-center">{{ \'anonymous_booking_promise\' | translate }}</td> </tr> <tr> <td class="seal"><i class="peppr-icon-lock"></i><div>Commodo<br>Secure SSL</div></td> <td class="seal"><i class="peppr-icon-lock"></i><div>PCI DSS<br>Certified</div></td> </tr> <tr> <td colspan="2" class="text-center">{{ \'genuine_profiles_promise\' | translate }}</td> </tr> </tbody> </table> </div> </div> <div class="row signup-confirm"> <div class="small-12 columns"> <div class="row"> <div class="ng-hide small-12 medium-6 medium-offset-3 large-4 large-offset-4 columns" ng-hide="isItaly"> <div class="panel client-location signup-confirm"> <form name="launchsignupform" ng-submit="clickEnterForm()" novalidate=""> <h3></h3> <div class="before-zip"> <p>Sign up to stay tuned. We\'ll notify you when PEPPR launches in your city.</p> </div> <div class="row collapse email"> <div class="columns"> <input type="text" ng-model="signup.email" name="email" pp-has-error="" placeholder="you@example.com" required="true"> <small class="error">{{ \'email_required_error\' | translate }}</small> </div> </div> <div class="row collapse zip"> <div class="small-10 columns"> <input type="text" ng-model="peppr.clientLocation.zipCode" placeholder="City" required="true"> </div> <div class="small-2 columns locate-me" ng-class="{ working: peppr.clientLocation.working }"> <span class="postfix" ng-click="clickLocateMe()"><i class="peppr-icon-gps"></i></span> </div> </div> <div class="row collapse geocoded-address" ng-show="peppr.clientLocation.geocodedAddress"> <div class="columns"> <div> <small>{{ peppr.clientLocation.geocodedAddress }}</small> </div> </div> </div> <div class="row collapse enter"> <div class="columns"> <button type="submit" ng-disabled="!peppr.clientLocation.isValid || !signup.email || launchsignupform.$invalid" class="button icon-button"><span class="button-icon"><i class="peppr-icon-flame"></i></span> Sign-Up </button></div> </div> </form> </div> </div> <div class="small-12 medium-6 medium-offset-3 large-4 large-offset-4 columns" ng-show="isItaly"> <div class="panel client-location signup-confirm"> <form name="launchsignupitalyform" ng-submit="clickEnterForm()" novalidate=""> <h3></h3> <div class="before-zip"> <p>Sei una escort? <a ui-sref="app.login+action({action: \'showSignup\', lang: activeLang})">Applica ora!</a><br> Iscriviti! Ti informeremo quando PEPPR Ã¨ disponibile in Italia!</p> </div> <div class="row collapse email"> <div class="columns"> <input type="text" ng-model="signup.email" name="email" pp-has-error="" placeholder="you@example.com" required="true"> <small class="error">{{ \'email_required_error\' | translate }}</small> </div> </div> <div class="row collapse zip"> <div class="small-10 columns"> <input type="text" ng-model="peppr.clientLocation.cityName" placeholder="CitÃ¡" required="true"> </div> <div class="small-2 columns locate-me" ng-class="{ working: peppr.clientLocation.working }"> <span class="postfix" ng-click="clickLocateMe()"><i class="peppr-icon-gps"></i></span> </div> </div> <div class="row collapse geocoded-address" ng-show="peppr.clientLocation.geocodedAddress"> <div class="columns"> <div> <small>{{ peppr.clientLocation.geocodedAddress }}</small> </div> </div> </div> <div class="row collapse enter"> <div class="columns"> <button type="submit" ng-disabled="!peppr.clientLocation.isValid || !signup.email || launchsignupitalyform.$invalid" class="button icon-button"><span class="button-icon"><i class="peppr-icon-flame"></i></span> Inscriviti </button></div> </div> </form> </div> </div> <div class="copyright"> {{ pepprCompanyName }}, <span ng-if="pepprStreetAndNumber">{{ pepprStreetAndNumber }},</span> {{ pepprPostcodeAndCity }}, {{ pepprCountry }} s<a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">......</a>@peppr.it<br> </div> </div> </div> </div> </section>'), e.put("app/views/login.html", '<section class="login-section view-login" ng-show="professionalSignupClicked"> <div class="row register-title centered"> <div class="medium-8 medium-offset-2 large-6 large-offset-3 column"> <h1>{{ \'register_title\' | translate }}</h1> </div> </div> <div class="row register-advantages centered" ng-show="activeLang == \'de\' &amp;&amp; showIndieUSPs"> <div class="medium-8 medium-offset-2 large-6 large-offset-3 columns"> <p>Deine Vorteile bei PEPPR:</p> <ul> <li>PEPPR rÃ¼ckt durch elegantes Auftreten, die Sexarbeit in ein komplett anderes Licht. Erotik mit <strong>Stil und Klasse</strong> steht hier an erster Stelle.</li> <li>Wir sind aber trotzdem <strong>offen fÃ¼r alle</strong>, es ist egal wie du aussiehst und egal ob Hetero, Bi, Homo oder Transgender, wir erwarten nur gut gemachte Fotos und eine tolle Profilbeschreibung!</li> <li>Du sparst dir teure Werbung auf Portalen und Zeitungen, denn PEPPR ist <strong>kostenlos</strong>.</li> <li>Anstatt auf Anrufe von KundInnen zu warten, kannst du die Zeit fÃ¼r schÃ¶ne Dinge nutzen, denn PEPPR Anfragen kommen <strong>diskret per SMS</strong>.</li> <li><strong>Keine Anrufe</strong> mehr von KundInnen die sich nur ein erotisches GesprÃ¤ch erhoffen.</li> <li>Wenn du gerade telefonisch nicht erreichbar bist, kein Problem, du kannst den Auftrag auch ein paar Minuten <strong>spÃ¤ter annehmen</strong>.</li> <li>PEPPR bietet dir <strong>Sicherheit</strong> â€“ der Kunde / die Kundin muss seine Zahlungsdaten angeben und zudem auch eine VermittlungsgebÃ¼hr bezahlen. Dadurch gibt es wesentlich weniger Fake Bucher. Die Zahlung des Honorars wickelt ihr nach wie vor direkt ab.</li> <li>Du bewegst dich <strong>anonymer</strong> in der Erotikbranche, denn Impressumsangaben, wie etwa bei einer Homepage, fallen weg.</li> <li>Die Anmeldung ist kostenlos und die Erstellung eines Profils ist <strong>sehr einfach</strong> und spielend schnell erledigt.</li> <li>Wir von PEPPR sind <strong>keine anonymen Betreiber</strong>, sondern stehen Euch bei Fragen immer zur Seite.</li> </ul> <p>Du kannst also nur gewinnen, wenn du dich bei PEPPR anmeldet!</p> <a ui-sref="app.signup_peppr({lang: activeLang})" class="button">{{ \'register_now_for_free\' | translate }}</a> </div> </div> <div class="row register-as centered" ng-hide="showIndieUSPs"> <div class="medium-8 medium-offset-2 large-6 large-offset-3 columns"> <p ng-hide="professionalSignupClicked"> <a href="" ng-click="professionalSignupClicked = true">{{ \'create_new_profile_action\' | translate }}</a> {{ \'create_new_profile_rest\' | translate }} </p> <div ng-show="professionalSignupClicked" class="register-as-buttons center-buttons"> <a class="button" ng-click="showIndieUSPs = true" ng-show="activeLang == \'de\'">{{ \'create_provider_account\' | translate }}</a> <a ui-sref="app.signup_peppr({lang: activeLang})" class="button" ng-hide="activeLang == \'de\'">{{ \'create_provider_account\' | translate }}</a> <a ui-sref="app.signup_agency({lang: activeLang})" class="button" ng-show="peppr.features.enableAgencies">{{ \'create_agency_account\' | translate }}</a> </div> </div> </div> </section> <section class="login-section view-login" ng-show="!loggedIn &amp;&amp; !professionalSignupClicked"> <div class="row" ng-hide="showResetPassword || professionalSignupClicked"> <div class="medium-8 large-6 column"> <h1>{{ \'login_title\' | translate }}</h1> </div> </div> <div class="row register-title" ng-show="professionalSignupClicked"> <div class="medium-8 large-6 column"> <h1>{{ \'register_title\' | translate }}</h1> </div> </div> <div class="row" ng-hide="showResetPassword || professionalSignupClicked"> <div class="medium-8 large-6 columns"> <h5>{{ \'login_short_instructions\' | translate }}</h5> <form name="loginform" ng-submit="clickLoginForm()" novalidate=""> <div class="row"> <div class="medium-6 large-6 columns"> <label>{{ \'login_username\' | translate }}</label> <input type="text" ng-model="email" name="email" pp-has-error="" required="true" ng-pattern="peppr.validators.anything" placeholder="you@gmail.com"> <small class="error">{{ \'login_username_error\' | translate }}</small> </div> <div class="medium-6 large-6 columns"> <label>{{ \'password\' | translate }} <a ng-click="showResetPassword = !showResetPassword">{{ \'forgot_password\' | translate }}</a></label> <input type="password" ng-model="password" name="password" pp-has-error="" required="true" ng-pattern="peppr.validators.anything" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'login_password_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-12 columns"> <ul class="button-group"> <li><button type="submit" class="button">{{ \'login\' | translate }}</button></li> <li><a ui-sref="app.signup_client({lang: activeLang})" class="button">{{ \'create_client_account\' | translate }}</a></li> </ul> </div> </div> </form> </div> </div> <div class="row" ng-show="showResetPassword"> <div class="medium-8 large-6 column"> <h1>{{ \'reset_password_title\' | translate }}</h1> </div> </div> <div class="row" ng-show="showResetPassword"> <div class="medium-8 large-6 columns"> <form name="pwresetform" ng-submit="clickResetPasswordForm()"> <div class="row"> <div class="columns"> <label>{{ \'login_username\' | translate }}</label> <input type="email" ng-model="email" name="email" pp-has-error="" required="true" ng-pattern="peppr.validators.anything" placeholder="you@gmail.com"> <small class="error">{{ \'login_username_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button">{{ \'reset_password\' | translate }}</button> </div> </div> </form> </div> </div> </section> <section class="login-section view-login" ng-show="loggedIn &amp;&amp; !professionalSignupClicked"> <div class="row"> <div class="medium-8 large-6 column"> <h1>{{ \'welcome_slogan\' | translate }}</h1> <h5>{{ user.username }}</h5> </div> </div> <div class="row"> <div class="medium-8 large-6 columns"> <form ng-submit="clickLogoutForm()"> <div class="row"> <div class="large-12 columns"> <input type="submit" class="button" value="{{ \'logout\' | translate }}"> </div> </div> </form> </div> </div> </section> '), e.put("app/views/main.html", '<section class="main-section view-main split-screen" pp-split-screen=""> <div class="background mobile"></div> <div class="row info-content peppr-logo mobile" ng-show="desktopShowApp"> <div class="small-12 columns">  <img class="peppr-logo" src="images/peppr_logo_white.png" alt="peppr logo"> </div> <div class="small-12 columns"> <div class="peppr-info text-center"> <span ng-bind-html="firstMobileWebappText"></span> </div> <table class="security-info"> <tbody> <tr> <td colspan="2" class="text-center">{{ \'anonymous_booking_promise\' | translate }}</td> </tr> <tr> <td class="seal"><i class="peppr-icon-lock"></i><div>Commodo<br>Secure SSL</div></td> <td class="seal"><i class="peppr-icon-lock"></i><div>PCI DSS<br>Certified</div></td> </tr> <tr> <td colspan="2" class="text-center">{{ \'genuine_profiles_promise\' | translate }}</td> </tr> </tbody> </table> </div> </div> <div class="row info-content desktop" ng-hide="desktopShowApp"> <div class="small-12 medium-6 medium-offset-3 large-12 large-offset-0 columns" ng-hide="desktopShowApp"> <div class="content-wrapper"> <div class="content" ng-show="activeLang === \'en\' || activeLang === \'it\'"> <h2>PEPPR</h2> <p>Founded in 2014, PEPPR is committed to push the limits of eCommerce and online sex.</p> <p>After launching April 1st, 2014, PEPPR took over the web by a storm - with millions of clicks and features on <a href="http://time.com/72218/there-is-now-an-app-for-prostitution/">Time Magazine</a>, <a href="http://www.economist.com/news/briefing/21611074-how-new-technology-shaking-up-oldest-business-more-bang-your-buck">The Economist</a>, <a href="https://news.vice.com/article/looking-for-a-prostitute-germany-has-an-app-for-that">Vice</a>, <a href="http://www.huffingtonpost.com/2014/04/24/peppr-prostitution-app_n_5207689.html">The Huffington Post</a>  and many more, the world was fascinated by the first mobile web-app that offers booking erotic services with just a few clicks.</p> <p>Our goal is not only to take out the hassle of booking an erotic date, but also to offer a high-class, transparent platform that makes it easier and safer for our Pepprs. We are the trustworthy third party and handle your booking completely discreet.</p> <div class="scroll-down-bar text-center show-for-large-up"> <i class="peppr-icon-arrow-down scroll-down-btn"></i> </div> </div> <div class="content" ng-show="activeLang === \'de\'"> <h2>PEPPR</h2> <p>PEPPR wurde 2014 mit dem Ziel gegrÃ¼ndet, die Grenzen von eCommerce und Online sex zu verschieben.</p> <p>Nach dem Start am 1. April 2014 hat PEPPR das Internet im Sturm erobert - mit Millionen von Klicks und Presseartikeln von <a href="http://time.com/72218/there-is-now-an-app-for-prostitution/">Time Magazine</a>, <a href="http://www.economist.com/news/briefing/21611074-how-new-technology-shaking-up-oldest-business-more-bang-your-buck">The Economist</a>, <a href="https://news.vice.com/article/looking-for-a-prostitute-germany-has-an-app-for-that">Vice</a>, <a href="http://www.huffingtonpost.com/2014/04/24/peppr-prostitution-app_n_5207689.html">The Huffington Post</a>, <a href="https://www.youtube.com/watch?v=h754vTS7yws">ZDF</a> und vielen weiteren, war die Welt fasziniert von der ersten mobilen Web-app, die es ermÃ¶glicht ein erotisches Date mit wenigen Klicks online zu buchen.</p> <p>Unser Ziel ist nicht nur die Buchung zu vereinfachen, sondern vor Allem eine hochklassige, transparente Buchungsplattform zur VerfÃ¼gung zu stellen, die es fÃ¼r unsere Pepprs einfacher und sicherer macht erotische Dates anzubieten. Wir sind die vertrauenswÃ¼rdige dritte Partei und wickeln ihre Buchung vollkommen diskret ab.</p> <div class="scroll-down-bar text-center show-for-large-up"> <i class="peppr-icon-arrow-down scroll-down-btn"></i> </div> </div> </div> </div> </div> <div class="row visual-content"> <div class="background desktop" ng-hide="desktopShowApp"></div> <div class="view-main desktop" ng-hide="desktopShowApp"> <div class="middle-wrapper"> &nbsp; <div class="middle description"><strong>peppr</strong> - <span ng-bind-html="firstMobileWebappText"></span></div> <div class="middle to-app"> <a class="button inverted-button" ng-click="desktopShowApp = true">&gt; {{ \'main_show_peppr\' | translate }}</a> </div> <div class="middle to-video"> <a class="button" ng-click="showVideo()">&gt; {{ \'main_show_video\' | translate }}</a> </div> <div class="middle to-become-peppr" ng-hide="isLandingPage"> <a class="button" ng-click="clickProfessionalSignup()"> <table> <tbody> <tr> <td> <i class="peppr-icon-shield"></i> </td> <td class="text-left"> {{ \'we_are_looking_for_you\' | translate }}:<br> <strong>{{ \'become_a_peppr\' | translate }}</strong> </td> </tr> </tbody> </table> </a> </div> <div class="middle video-poster" ng-click="showVideo()"></div> <div class="middle mobile-phone" ng-click="desktopShowApp = true"> <div class="middle mobile-phone-img"></div>   </div> </div> </div> <div class="pp-enter-site-wrapper mobile" ng-show="desktopShowApp"> <pp-enter-site professional-signup-clicked="professionalSignupClicked"></pp-enter-site> </div> </div> <div class="row collapse separator desktop"> </div> <div class="row teaser desktop"> <div class="small-12 medium-6 medium-offset-3 columns"> <p> <div class="middle press-featured">{{ \'featured_in\' | translate }}:</div> <div class="middle press-logos"> <div class="press-logo all"></div> </div> </p> </div> </div> <div class="row collapse showcase-image-list desktop"> <div class="widget-city widget-city-berlin small-12 medium-6 columns clickable" ng-click="showCity(\'frankfurt\')"> <div class="row collapse showcase-image-wrapper pictures-wrapper city-image"> <div class="small-12 columns"> <div class="in-view-container"> <div class="image"></div> <div class="img-overlay"></div> <div class="profile-info"> <div class="profile-name"><h2><a ui-sref="app.berlin({lang: activeLang})">Escortservice Berlin</a></h2></div> </div> </div> </div> </div> <div class="row content-wrapper"> <div class="content small-12 columns"> <p>Berlin ist der Hotspot in Deutschland, GeschichtstrÃ¤chtiges an jeder Ecke, das internationale Publikum, die legendÃ¤ren Parties und das Big Business der Digitalwirtschaft. In keiner anderen Stadt ist High Class Escortservice gefragter als in der aufregenden Hauptstadt Deutschlands. Damit ihr Aufenthalt perfekt wird, kÃ¶nnen Sie Ã¼ber PEPPR direkt ein <a ui-sref="app.berlin({lang: activeLang})">Escort in Berlin</a> buchen. Egal ob beruflich oder privat! </p> </div> </div> </div> <div class="widget-city widget-city-frankfurt small-12 medium-6 columns clickable" ng-click="showCity(\'frankfurt\')"> <div class="row collapse showcase-image-wrapper pictures-wrapper city-image"> <div class="small-12 columns"> <div class="in-view-container"> <div class="image"></div> <div class="img-overlay"></div> <div class="profile-info"> <div class="profile-name"><h2><a ui-sref="app.frankfurt({lang: activeLang})">Escortservice Frankfurt</a></h2></div> </div> </div> </div> </div> <div class="row content-wrapper"> <div class="content small-12 columns"> <p>Frankfurt am Main ist jedem als Finanzmetropole mit der typischen Skyline aus Wolkenkratzern ein Begriff. Die Metropole am Main bietet aber auch eine enorme Bandbreite an kulturellen Highlights. Buchen Sie Ã¼ber PEPPR direkt ein <a ui-sref="app.frankfurt({lang: activeLang})">Escort in Frankfurt</a> und machen Sie mit dem seriÃ¶sen Begleitservice Ihren Aufenthalt zu einem unvergesslichen Erlebnis! </p> </div> </div> </div>  </div> <div class="social-icons"> <a href="https://facebook.com/lovepeppr" target="_blank" title="Like us on facebook"><i class="peppr-icon-facebook"></i></a> <a href="https://twitter.com/lovepeppr" target="_blank" title="Follow us on twitter"><i class="peppr-icon-twitter"></i></a> </div> <a class="imprint-link" ng-hide="enterPressed" data-reveal-id="pepprImprintModal">{{ \'imprint_modal_title\' | translate }}</a> <div class="video-underlay" id="pepprVideoWrapper" ng-class="{desktop: desktopShowVideo}" ng-click="hideVideo()"> <a class="close" ng-click="hideVideo()">&times;</a> <div class="video"> <div id="pepprVideo"></div> </div> </div> </section> '), e.put("app/views/outbound_sms.html", '<section class="signup-client-section view-signup-client"> <div class="row"> <div class="large-12 columns"> <h1>Send SMS</h1> </div> </div> <div class="row"> <div class="large-8 medium-10 columns"> <h5>Send an SMS using our SMS provider</h5> <form name="outboundsmsform" ng-submit="clickSubmitSms()" novalidate=""> <div class="row"> <div class="columns"> <label>Sender <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="phoneNumberCountry" required="true" ng-options="c.value as c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="phoneNumber" name="phoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="columns"> <label>Receiver <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="recvPhoneNumberCountry" required="true" ng-options="c.value as c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="recvPhoneNumber" name="recvPhoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="small-12 columns"> <label>SMS text</label> <textarea ng-model="sms.body" placeholder="Yes Thanks for your booking"></textarea> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="outboundsmsform.$invalid">Send SMS</button> </div> </div> </form> </div> </div> </section> '), e.put("app/views/partners.html", '<section class="about-section view-partners"> <div class="row centered"> <div class="small-12 medium-8 medium-offset-2 columns"> <div class="text-center"> <h3>PEPPR Partner werden</h3> <p> Sie leiten eine Escortagentur, haben eine Independent Escort Seite, leiten ein Hotel oder betreiben eine Seite die inhaltlich gut zu PEPPR passt? Dann <a href="http://www.google.com/recaptcha/mailhide/d?k=0194EshbrqPk4Qqc3_oa12tA==&amp;c=D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\0750194EshbrqPk4Qqc3_oa12tA\\75\\75\\46c\\75D5keyD6QMp7rJfyGj-huC64f2hBIZlqpdhDNS9A7ka0\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false;" title="Reveal this e-mail address">kontaktieren</a> Sie uns, wir platzieren im Austausch fÃ¼r unseren Banner auf Ihrer Seite gerne Ihren Banner hier! </p> <p> Wir freuen uns auf die Zusammenarbeit! </p> <h3>PEPPR Partner</h3>   <a href="https://erotus.de" target="_blank"><img src="https://erotus.de/images/banner/gold_1D4x3C.png" border="0" alt="Serviceleistungen versteigern / ersteigern" width="468" height="60"></a> </div> </div> </div> </section> '), e.put("app/views/phone_confirm.html", '<section class="phone-confirm-section view-phone-confirm"> <div class="row"> <div class="column"> <h1>{{ \'phone_confirm_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="medium-10 large-8 columns"> <pp-phone-confirm on-phone-confirmed="redirect"> </pp-phone-confirm></div> </div> </section> '), e.put("app/views/platformsettings_admin.html", '<section class="platformsettings-admin-section view-platformsettings-admin"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'platformsettings_admin_title\' | translate }}</h1> </div> </div> <form ng-submit="clickSetPlatformSettingForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <label>Key</label> <input type="text" ng-model="newEntry.key" placeholder="numInitialFreeRides"> </div> <div class="small-6 columns"> <label>Value</label> <input type="text" ng-model="newEntry.data" placeholder="1"> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="setting in settingsEntries"> <dt ng-click="clickSetting(setting)">{{ setting.key }}</dt> <dd>{{ setting.data }}</dd> </dl> </div> </div> </section>'), e.put("app/views/privacy.html", '<section class="about-section view-about"> <div class="row register-title"> <div class="medium-8 large-6 columns"> <h1>{{ \'privacy_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="medium-8 large-6 columns text-justify"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'booking_payment_peppr_is_anonymous\' | translate }}</span> </div> <p class="small">{{ \'privacy_privacy_text\' | translate }}</p> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'privacy_peppr_is_secure\' | translate }}</span> </div> <p class="small">{{ \'privacy_peppr_is_secure_text\' | translate }}</p>  <div class="secure-notice ng-hide" ng-if="loggedIn" ng-show="loggedIn"> <i class="peppr-icon-lock"></i> <span>{{ \'privacy_peppr_is_discreet\' | translate }}</span> </div> <p class="small ng-hide" ng-if="loggedIn" ng-show="loggedIn">{{ \'privacy_peppr_is_discreet_text_1\' | translate }}</p> <ul class="small ng-hide" ng-if="loggedIn" ng-show="loggedIn"> <li>{{ \'privacy_peppr_is_discreet_text_bullet_1\' | translate }}</li> <li>{{ \'privacy_peppr_is_discreet_text_bullet_2\' | translate }}</li> <li>{{ \'privacy_peppr_is_discreet_text_bullet_3\' | translate }}</li> </ul> <p class="small ng-hide" ng-if="loggedIn" ng-show="loggedIn">{{ \'privacy_peppr_is_discreet_text_2\' | translate }}</p> </div> <ul class="button-group"> <li><a class="button" onclick="history.back();return false;">{{ \'back\' | translate }}</a></li> <li><a class="button" ui-sref="app.privacy-policy({lang: activeLang})">{{ \'show_more\' | translate }}</a></li> </ul> </div> </div> </section>'), e.put("app/views/privacy_policy.html", '<section class="privacy-policy-section view-privacy-policy row centered"> <div class="privacy-wrapper medium-8 medium-offset-2 large-6 large-offset-3 columns" ng-include="peppr.isItaly ? \'app/views/content_privacy_policy_it.html\' : \'app/views/content_privacy_policy.html\'"> </div></section>'), e.put("app/views/provider.html", '<section class="provider-section view-provider">      <div class="row collapse profile-pictures-wrapper" ng-if="!showMockup" ng-style="{ height: profilePicturesHeight }"> <div class="data-loading-indicator" ng-hide="provider.id || showMockup"></div> <div class="small-12 medium-8 medium-offset-2 large-12 large-offset-0 columns" ng-class="{fullscreen: picturesFullscreen}"> <ul class="provider-orbit" data-orbit="" data-options="timer: false; bullets: true;" ng-click="toggleFullscreen()"> <li ng-repeat="s in profilePictures">  <div pp-hide-on-img-loaded="{{pepprRestBaseUrl}}/image/{{s.uploadUUID}}?width={{imageWidth}}&amp;height={{imageHeight}}&amp;cover={{ $index == 0 ? \'true\' : \'false\' }}" class="image-loading"></div> <div class="not-reviewed-mark" ng-hide="s.reviewedOn">?</div> <div class="image" ng-class="{first: $index == 0}" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + s.uploadUUID + \'?width=\' + imageWidth + \'&amp;height=\' + imageHeight + \'&amp;cover=\' + ($index == 0 ? \'true\' : \'false\') + \')\'}"> <div class="profile-info" ng-if="$index == 0"> <div class="profile-name"><h2>{{provider.name}}</h2></div> </div> </div></li> </ul> </div> </div> <div class="row collapse profile-info-wrapper"> <div class="small-12 medium-8 medium-offset-2 large-12 large-offset-0 columns"> <div class="profile-info-filler" ng-style="{ height: desktopProfileInfoFillerHeight }"></div> <div class="toggle-accordion"> <div class="desktop-profile-name show-for-large-up"> <div class="profile-name"> <h2>{{provider.name}}</h2> <h5 class="response-rate ng-hide" ng-show="provider.responseRate &gt; 0">{{(provider.responseRate * 100).toFixed(0)}}% {{ \'response_rate\' | translate }}</h5> </div> </div> <div class="toggle-accordion-entry" ng-class="{active: showProfile}"> <div class="toggle-accordion-header clickable" ng-click="toggleAccordion(\'showProfile\', $event)"> <div class="icon"><i class="peppr-icon-profile"></i></div> <div class="title">{{ \'profile\' | translate }}</div> <div class="toggle" ng-class="{\'closed\': !showProfile}"><span>&#8249;</span></div> </div> <div class="toggle-accordion-content" ng-show="showProfile" ng-style="{ height: desktopProfileHeight }"> <ul class="panel vcard"> <li class="fn header text-center" ng-show="peppr.features.showSexRelatedAttributes">{{ \'ProviderClaim_\' + provider.claim.nameId | translate }}</li> <li><div class="row collapse" ng-if="peppr.features.enableAgencies"><div class="attr-label">{{ \'provider_type\' | translate }}</div><div class="attr-value"><span ng-show="provider.agency">{{ \'provider_type_agency\' | translate }} <i class="peppr-icon-agency-indicator"></i></span><span ng-show="!provider.agency">{{ \'provider_type_indiependent\' | translate }} <i class="peppr-icon-indiependent"></i></span></div></div></li> <li><div class="row collapse"><div class="attr-label">{{ \'sex\' | translate }}</div><div class="attr-value">{{ \'ENUM_Sex_\' + provider.sex | translate }}</div></div></li> <li ng-if="provider.sexuality &amp;&amp peppr.features.showSexRelatedAttributes"><div class="row collapse"><div class="attr-label">{{ \'sexuality\' | translate }}</div><div class="attr-value">{{ \'ENUM_Sexuality_\' + provider.sexuality | translate }}</div></div></li> <li><div class="row collapse"><div class="attr-label">{{ \'age\' | translate }}</div><div class="attr-value">{{ provider.age }}</div></div></li> <li ng-if="provider.bustSize"><div class="row collapse"><div class="attr-label">{{ \'bust_size\' | translate }}</div><div class="attr-value">{{ provider.bustSize | translateEnum:\'BustSize\' }}</div></div></li> <li ng-if="provider.heightCm"><div class="row collapse"><div class="attr-label">{{ \'height\' | translate }}</div><div class="attr-value">{{ provider.heightCm }} cm</div></div></li> <li ng-if="provider.distanceKm"> <div class="row collapse"><div class="attr-label"> {{ \'location\' | translate }} </div><div class="attr-value"> {{ provider.distanceKm.toFixed(0) }}km <small>{{ provider.homeLocationStr }}</small> </div></div> </li> <li ng-show="provider.figure"><div class="row collapse"><div class="attr-label">{{ \'figure\' | translate }}</div><div class="attr-value">{{ \'ENUM_Figure_\' + provider.figure | translate }}</div></div></li>  <li ng-show="provider.hairColour"><div class="row collapse"><div class="attr-label">{{ \'hair_colour\' | translate }}</div><div class="attr-value">{{ \'ENUM_HairColor_\' + provider.hairColour | translate }}</div></div></li> <li ng-show="provider.hairLength"><div class="row collapse"><div class="attr-label">{{ \'hair_length\' | translate }}</div><div class="attr-value">{{ \'ENUM_HairLength_\' + provider.hairLength | translate }}</div></div></li> <li ng-show="provider.pubicHair" ng-if="peppr.features.showSexRelatedAttributes"><div class="row collapse"><div class="attr-label">{{ \'pubic_hair\' | translate }}</div><div class="attr-value">{{ \'ENUM_PubicHair_\' + provider.pubicHair | translate }}</div></div></li> <li ng-show="provider.bodyHair" ng-if="peppr.features.showSexRelatedAttributes"><div class="row collapse"><div class="attr-label">{{ \'body_hair\' | translate }}</div><div class="attr-value">{{ \'ENUM_BodyHair_\' + provider.bodyHair | translate }}</div></div></li> <li ng-show="provider.ethnicity"><div class="row collapse"><div class="attr-label">{{ \'ethnicity\' | translate }}</div><div class="attr-value">{{ \'ENUM_Ethnicity_\' + provider.ethnicity | translate }}</div></div></li> <li ng-show="provider.nationality"><div class="row collapse"><div class="attr-label">{{ \'nationality\' | translate }}</div><div class="attr-value">{{ provider.nationality | countryCodes }}</div></div></li>  <li ng-show="provider.languages"><div class="row collapse"><div class="attr-label">{{ \'provider_languages\' | translate }}</div><div class="attr-value">{{ provider.languages | langCodes }}</div></div></li> <li ng-show="provider.interests"><div class="row collapse"><div class="attr-label">{{ \'provider_interests\' | translate }}</div><div class="attr-value">{{ provider.interests}}</div></div></li> <li ng-show="provider.foodPreferences"><div class="row collapse"><div class="attr-label">{{ \'provider_food_preferences\' | translate }}</div><div class="attr-value">{{ provider.foodPreferences}}</div></div></li> <li ng-show="provider.drinkPreferences"><div class="row collapse"><div class="attr-label">{{ \'provider_drink_preferences\' | translate }}</div><div class="attr-value">{{ provider.drinkPreferences}}</div></div></li> <li ng-show="provider.occupation"><div class="row collapse"><div class="attr-label">{{ \'provider_occupation\' | translate }}</div><div class="attr-value">{{ provider.occupation}}</div></div></li> <li ng-show="provider.perfume"><div class="row collapse"><div class="attr-label">{{ \'provider_perfume\' | translate }}</div><div class="attr-value">{{ provider.perfume}}</div></div></li> <li ng-show="provider.dressStyle"><div class="row collapse"><div class="attr-label">{{ \'provider_dress_style\' | translate }}</div><div class="attr-value">{{ provider.dressStyle}}</div></div></li> <li class="fn header" ng-show="provider.description &amp;&amp; provider.description.length > 0" ng-if="peppr.features.showFreeText">{{ \'provider_description\' | translate }}</li> <li ng-show="provider.description &amp;&amp; provider.description.length > 0" ng-if="peppr.features.showFreeText"><div class="row text-block provider-description"><div class="columns"><div ng-bind-html="htmlDescription"></div></div></div></li> </ul> </div> </div> <div class="toggle-accordion-entry" ng-class="{active: showPriceAndExtras}" ng-if="peppr.features.showServices || peppr.features.showPrices"> <div class="toggle-accordion-header clickable" ng-click="toggleAccordion(\'showPriceAndExtras\', $event)"> <div class="icon"><i class="peppr-icon-price"></i></div> <div class="title" ng-show="peppr.features.showServices">{{ \'pricing_and_extras\' | translate }}</div> <div class="title" ng-hide="peppr.features.showServices">{{ \'pricing\' | translate }}</div> <div class="toggle" ng-class="{\'closed\': !showPriceAndExtras}">&#8249;</div> </div> <div class="toggle-accordion-content" ng-show="showPriceAndExtras" ng-style="{ height: desktopProfileHeight }"> <ul class="pricing-table"> <li class="price"> <div class="row"> <div class="columns text-center booking-fee"> <span>{{ \'pricing_booking_fee_now\' | translate }}</span> {{ fee }} â‚¬ <span>{{ \'pricing_booking_fee_now\' | translate }}</span> </div> </div> <div class="row"> <div class="columns text-center secure"> <a class="button tiny icon-button back" ui-sref="app.privacy({lang: activeLang})"><span class="button-icon"><i class="peppr-icon-lock"></i></span>{{ \'anonymous_and_secure\' | translate }}</a> </div> </div> <div class="row"> <div class="small-12 columns text-center"> <small>+ {{ \'price_to_professional\' | translate:{ price: priceLocalised(provider), name: provider.name } }}</small> </div> </div> <div class="row"> <div class="columns text-center secure"> <a class="button tiny icon-button book" ng-click="clickBookProvider($event)"><span class="button-icon"><i class="peppr-icon-flame"></i></span> {{ \'enquire\' | translate }}</a> </div> </div> </li> <li class="bullet-item min-booking-hours" ng-show="provider.bookingMinHours &gt; 0">{{ \'min_booking_duration\' | translate }}: {{ provider.bookingMinHours }}{{ \'availability_hours\' | translate }}</li> <li class="bullet-item min-booking-hours" ng-show="provider.bookingMinHoursTravel &gt; 0">{{ \'min_booking_duration\' | translate }} ({{ \'for_travels\' | translate }}): {{ provider.bookingMinHoursTravel }}{{ \'availability_hours\' | translate }}</li> <li class="bullet-item response-rate hide-for-large-up" ng-if="provider.responseRate &gt; 0">{{(provider.responseRate * 100).toFixed(0)}}% {{ \'response_rate\' | translate }}</li> <li class="bullet-item location-types" ng-show="peppr.features.showSexRelatedAttributes">{{ \'locations\' | translate }}: <span ng-repeat="l in provider.locationTypes"> {{ l | translateEnum:\'LocationType\':{name: provider.name} }}<span class="list-sep">,</span></span></li> <li class="bullet-item travel-types" ng-show="provider.travelTypes">{{ \'travel_types\' | translate }}: <span ng-repeat="l in provider.travelTypes"> {{ l | translateEnum:\'TravelType\' }}<span class="list-sep">,</span></span></li> <li class="title title-sub" ng-show="peppr.features.showServices &amp;&amp; provider.services">{{ \'services\' | translate }}</li>      <li class="bullet-item free-services" ng-show="peppr.features.showServices &amp;&amp; freeServicesAvailable">{{ \'free_services\' | translate }}: <span ng-repeat="s in provider.services | filter:filterFreeServices"> {{ \'Service_\' + s.service.nameId | translate }}<span class="list-sep">,</span></span></li> <li class="bullet-item" ng-show="peppr.features.showServices" ng-repeat="s in provider.services | filter:filterPaidServices"> <div class="row"> <div class="small-10 columns text-left"> {{ \'Service_\' + s.service.nameId | translate }} <span ng-if="s.requiresPhoneCall" data-tooltip="" class="has-tip" title="{{ \'please_call_after_booking_to_discuss_details\' | translate }}">{{ \'service_info_call\' | translate }}</span> </div> <div class="price-extra small-2 columns text-right">{{ s.fee }} â‚¬</div> </div> </li> </ul> </div> </div> <div class="toggle-accordion-entry" ng-class="{active: showAvailability}" ng-if="peppr.features.showPrices"> <div class="toggle-accordion-header clickable" ng-click="toggleAccordion(\'showAvailability\', $event)"> <div class="icon"><i class="peppr-icon-time"></i></div> <div class="title">{{ \'availability\' | translate }} <small class="instant-booking" ng-show="provider.instantAvailable">{{ \'instant_booking\' | translate }}!</small></div> <div class="toggle" ng-class="{\'closed\': !showAvailability}">&#8249;</div> </div> <div class="toggle-accordion-content" ng-show="showAvailability" ng-style="{ height: desktopProfileHeight }"> <div class="instant-booking-wrapper" ng-show="provider.instantAvailable"> <div class="panel"> <div class="secure-notice"> <i class="peppr-icon-time"></i> <span>{{ \'instant_booking\' | translate }}!</span> </div> <div ng-show="isInstantBookingActive"> <p> {{ \'booking_instant_profile_info\' | translate:{name: provider.name} }} </p> </div> </div> </div> <ul class="pricing-table"> <li class="bullet-item response-rate hide-for-large-up ng-hide" ng-if="provider.responseRate &gt; 0">{{(provider.responseRate * 100).toFixed(0)}}% {{ \'response_rate\' | translate }}</li> <li class="availability"> <div class="row"> <div class="small-4 columns text-left"> {{ \'next_availability\' | translate }}: </div> <div class="small-4 columns"> <span ng-hide="provider.nextAvailableNow">{{ provider.nextAvailableDateStr }}</span> </div> <div class="small-4 columns text-right"> {{ provider.nextAvailableLong }} </div> </div> </li> <li class="bullet-item booking-advance-hours" ng-show="provider.bookingUpfrontHours &gt; 0 || provider.bookingUpfrontHoursTravel &gt; 0"> <div class="row"> <div class="small-6 columns text-left"> {{ \'booking_in_advance\' | translate }}: </div> <div class="small-6 columns text-right"> <span ng-show="provider.bookingUpfrontHours &gt; 0">{{ provider.bookingUpfrontHours }}{{ \'availability_hours\' | translate }}</span> <span ng-show="provider.bookingUpfrontHours &gt; 0 &amp;&amp; provider.bookingUpfrontHoursTravel &gt; 0"> / </span> <span ng-show="provider.bookingUpfrontHoursTravel &gt; 0">{{ provider.bookingUpfrontHoursTravel }}{{ \'availability_hours\' | translate }} {{ \'for_travels\' | translate }}</span> </div> </div> </li> <li class="bullet-item" ng-repeat="avail in provider.availability"> <div class="row"> <div class="small-6 columns text-left">{{ avail.day | translateEnum:\'Weekday\' }}</div> <div class="price-extra small-6 columns text-right">{{ avail.fromTime | formatTimeStr }} - {{ avail.toTime | formatTimeStr }}</div> </div> </li> </ul> </div> </div> <div class="toggle-accordion-entry" ng-class="{active: showStatsAndReviews}"> <div class="toggle-accordion-header clickable" ng-click="toggleAccordion(\'showStatsAndReviews\', $event)"> <div class="icon"><i class="peppr-icon-statistik"></i></div> <div class="title">{{ \'stats_and_reviews\' | translate }}</div> <div class="toggle" ng-class="{\'closed\': !showStatsAndReviews}">&#8249;</div> </div> <div class="toggle-accordion-content" ng-show="showStatsAndReviews" ng-style="{ height: desktopProfileHeight }"> <ul class="panel vcard"> <li><div class="row collapse"><div class="attr-label">{{ \'created_on\' | translate }}</div><div class="attr-value">{{provider.createdOn | formatDate}}</div></div></li> <li><div class="row collapse"><div class="attr-label">{{ \'profile_visits\' | translate }}</div><div class="attr-value">{{provider.numVisits}}</div></div></li> <li><div class="row collapse" ng-if="provider.responseRate &gt; 0"><div class="attr-label">{{ \'response_rate\' | translate }}</div><div class="attr-value">{{(provider.responseRate * 100).toFixed(0)}}%</div></div></li> <li class="reviews" ng-show="peppr.features.enableRatings &amp;&amp; review"> <div class="attr-label">{{ \'profile_reviews\' | translate }}</div> <div class="grid-table"> <div class="row collapse"> <div class="column"> <small>{{ \'profile_num_reviews\' | translate }}:</small> </div> <div class="column"> <small>{{review.num}}</small> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'profile_review\' | translate }}:</small> </div> <div class="column"> <small>{{ \'profile_review_count\' | translate }}</small> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_1\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory1 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory1 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory1 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory1 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory1 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_2\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory2 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory2 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory2 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory2 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory2 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> <div class="row collapse"> <div class="column"> <small>{{ \'review_category_3\' | translate }}:</small> </div> <div class="column review-rating"> <div class="css-helper"> <div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory3 == 5}" title="{{ \'rating_high\' | translate }}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory3 == 4}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory3 == 3}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory3 == 2}"></div><div class="review-rating-icon peppr-icon-flame" ng-class="{active: review.ratingCategory3 == 1}" title="{{ \'rating_low\' | translate }}"></div> </div> </div> </div> </div> </li> </ul> </div> </div> </div> <div class="desktop-back-button show-for-large-up"> <a class="button icon-button back" ng-click="onClickBack($event)"> <span class="button-icon"><i>&#8249;</i></span>{{ \'back\' | translate }} </a> </div> <div class="row collapse button-wrapper"> <div class="small-12 large-6 columns"> <div class="button-group-table"> <div class="button-group-table-row"> <div class="back-button"> <a class="button back" onclick="window.history.back();return false;">{{ \'back\' | translate }}</a> </div><div class="book-button"> <a class="button icon-button book" ng-click="clickBookProvider($event)"><span class="button-icon"><i class="peppr-icon-flame"></i></span> {{ \'enquire\' | translate }}</a> </div> </div> </div> </div> </div> </div> </div> </section> '), e.put("app/views/provider_admin.html", '<section class="provider-section view-provider-admin"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'provider_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <span>{{ \'public_data\' | translate }}</span> </div> <ul class="vcard"> <li class="fn"><h5>{{provider.name}}</h5></li> <li><small>{{ \'location\' | translate }}:</small> {{providerLocation}}</li> <li ng-show="providerUrl"><small>{{ \'profile_url\' | translate }}:</small> <a href="{{providerUrl}}">{{providerUrlText}}</a></li> <li class="response-rate ng-hide" ng-show="provider.responseRate > 0"><small>{{ \'response_rate\' | translate }}:</small> {{(provider.responseRate * 100).toFixed(0)}}%</li> <li><small>{{ \'created_on\' | translate }}:</small> {{provider.createdOn | formatDate}}</li> <li><small>{{ \'profile_visits\' | translate }}:</small> {{provider.numVisits}}</li> </ul> </div> </div> </div> <div class="row"> <div class="small-12 columns"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'private_data\' | translate }}</span> </div> <ul class="vcard"> <li><small>{{ \'phone_number\' | translate }}</small> {{provider.phoneNumber}} <a ui-sref="app.user({lang: activeLang})">{{ \'edit\' | translate }}</a></li> <li class="email"><small>{{ \'email\' | translate }}:</small> <a href="mailto:{{provider.email}}">{{provider.email}}</a></li> <li> <small>{{ \'profile_state\' | translate }}:</small> {{ provider.state | translateEnum:\'ProviderState\' }} <span class="alert label" ng-show="provider.profilePictures.length &lt; 3"> {{ \'profilepictures_missing\' | translate }} </span> </li> </ul> </div> </div> </div> <div class="row"> <div class="small-12 columns text-center"> <ul class="button-group"> <li><a ui-sref="app.provider({providerId: provider.id, lang: activeLang})" class="button">{{ \'show_profile\' | translate }}</a></li> <li><a ui-sref="app.provider_edit({providerId: provider.id, lang: activeLang})" class="button">{{ \'edit_profile_title\' | translate }}</a> </li><li><a ui-sref="app.provider_imageupload({providerId: provider.id, lang: activeLang})" class="button">{{ \'upload_profile_pictures\' | translate }}</a></li> <li><a ng-click="updateLocation(providerId)" class="button">{{ \'provider_update_location\' | translate }}</a></li> </ul> <ul class="button-group"> <li><a ng-click="disableProfile(providerId)" class="button" ng-show="provider.state == \'ACTIVE\'">{{ \'disable_profile\' | translate }}</a></li> <li><a ng-click="deleteProfile(providerId)" class="button">{{ \'delete_profile\' | translate }}</a></li> <li ng-show="showMockup"><a ui-sref="app.provider_status({providerId: \'fake\', lang: activeLang})" class="button">{{ \'provider_account_status\' | translate }}</a></li> </ul> </div> </div> <div class="row" ng-show="provider.state == \'REVIEWED\'"> <div class="small-12 columns"> <p> {{ \'your_profile_is_inactive_and_reviewed_you_can_publish_it\' | translate }} </p> </div> <div class="small-12 columns signup-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="cbConfirmChecked" id="paFormConfirmCb"> </div> <label for="paFormConfirmCb"> {{ \'age_disclaimer\' | translate }} {{ \'offline_disclaimer\' | translate }} <span ng-bind-html="tacPpText"></span> </label> </div> </div> <div class="row" ng-show="provider.state == \'REVIEWED\'"> <div class="small-12 columns text-center"> <a ng-click="publishProfile(providerId)" class="button" ng-disabled="!cbConfirmChecked">{{ \'publish_profile\' | translate }}</a> </div> </div> <div class="row instant-booking-wrapper" ng-show="provider.state == \'ACTIVE\'"> <div class="small-12 columns"> <div class="panel"> <div class="secure-notice"> <i class="peppr-icon-time"></i> <span>{{ \'instant_booking\' | translate }}</span> <span class="explanation" ng-show="isInstantBookingActive">{{ \'instant_booking_ends_at\' | translate:{endDate: instantBookingEndStr} }}</span> </div> <div ng-show="isInstantBookingActive"> <p> {{ \'instant_booking_is_active\' | translate }} </p> </div> <p ng-show="!isInstantBookingActive"> {{ \'you_can_enable_instant_booking\' | translate }} </p> <div ng-show="!isInstantBookingActive"> <form name="instantbookingform"> <div class="row collapse"> <div class="small-10 medium-6 medium-offset-3 large-4 large-offset-4 end columns"> <label>{{ \'instant_booking_duration\' | translate }}</label> </div> </div> <div class="row collapse"> <div class="small-10 medium-4 medium-offset-3 large-3 large-offset-4 columns"> <input type="number" name="instantBookingHours" pp-has-error="" ng-model="instantBookingHours" placeholder="{{ \'2 \' + \'hours\' | translate }}" required="true" min="0.5" step="0.5" max="6"> <small class="error">{{ \'instant_booking_duration_hours_error\' | translate }}</small> </div> <div class="small-2 large-1 end columns"> <span class="postfix radius">{{ \'hours\' | translate }}</span> </div> </div> </form> </div> <p class="text-center"> <a class="button" ng-click="disableInstantBooking(providerId)" ng-show="isInstantBookingActive">{{ \'disable_instant_booking\' | translate }}</a> <a class="button" ng-click="enableInstantBooking(providerId)" ng-show="!isInstantBookingActive" ng-disabled="!instantBookingHours">{{ \'enable_instant_booking\' | translate }}</a> </p> </div> </div> </div> </section> '), e.put("app/views/provider_admin_all.html", '<section class="provider-section view-provider-admin" ng-show="isAdmin"> <div class="row"> <div class="small-12 medium-12 large-12 columns"> <h1>{{ \'provider_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 medium-12 large-12 columns"> <input type="checkbox" ng-model="showActive"> <label>Show active</label> <input type="checkbox" ng-model="showGoodCandidates"> <label>Show female > 20 years</label> </div> </div> <div class="row"> <div class="grid-table provider-list small-12 medium-12 large-12 columns" ng-repeat="p in adminProviders | filter:adminSearchFilter"> <div class="row button-group collapse"> <div class="columns info-column provider-info"> <a ui-sref="app.provider({providerId: p.provider.id, lang: activeLang})">{{ p.provider.name }}</a>: <small>{{ p.provider.state }} {{ distance(p).toFixed(0) }}km ({{ p.provider.admin.langCode }}) {{ p.provider.sex }} {{ p.provider.age }} {{ p.provider.pricePerHour }} â‚¬/h</small> <br> <small>Photos: {{ p.profilePictures.length }} reviewed {{ numReviewedPics(p) }}</small> <small>{{ \'created\' | translate }} {{ createdOnTime(p.provider) }}</small> <br> <small class="phone"><span class="valid" ng-show="p.provider.admin.phoneValid">&nbsp;</span> <a ui-sref="app.outboundsms({recipient: p.provider.phoneNumber})">{{ p.provider.phoneNumber }}</a> <a class="email" href="mailto:{{p.provider.email}}"><span class="valid" ng-show="p.provider.admin.emailValid">&nbsp;</span> {{ p.provider.email }}</a></small> </div> <div class="columns info-column internal-notes" ng-class="{ minimised: p.showInternalNotes }" ng-init="p.showInternalNotes = \'preview\'"> <div class="notes-preview" ng-show="p.showInternalNotes == \'preview\'" ng-click="p.showInternalNotes = \'full\'">{{ p.provider.internalNotes }}</div> <div class="notes-edit" ng-show="p.showInternalNotes == \'full\'"> <div contenteditable="true" markdown-editable="" ng-model="p.provider.internalNotes"> {{ p.provider.internalNotes }} </div> <a class="button tiny" ng-click="updateProviderInternal(p)">Save</a> </div> </div> <div class="columns button-column"> <a ui-sref="app.provider_imageupload({providerId: p.provider.id, lang: activeLang})" class="button"><i class="peppr-icon-sed-card"></i></a> </div> <div class="columns button-column"> <a ui-sref="app.provider_edit({providerId: p.provider.id, lang: activeLang})" class="button"><i class="peppr-icon-profile"></i></a> </div> <div class="columns button-column"> <a class="button" title="Mark beta" ng-show="peppr.formInfo.inBeta &amp;&amp; p.provider.state == \'INACTIVE\'" ng-disabled="numReviewedPics(p) < 1" ng-click="makeProfileBeta(p.provider.id)">&#10003;</a> <a class="button" ng-show="!peppr.formInfo.inBeta &amp;&amp; p.provider.state == \'INACTIVE\'" title="Mark reviewed (1+ reviewed images required)" ng-disabled="numReviewedPics(p) < 1" ng-click="reviewProfile(p.provider.id)">&#10003;</a> <a class="button" title="Mark inactive" ng-show="p.provider.state == \'REVIEWED\'" ng-click="deactivateProfile(p.provider.id)"><i class="peppr-icon-lock"></i></a> </div> <div class="columns button-column"> <a class="button" title="Delete (archive)" ng-click="archiveProfile(p.provider.id)">&#215;</a> </div> </div> </div> <div pp-appear="showMore" style="height: 5px;">&nbsp;</div> </div> </section>'), e.put("app/views/provider_claims.html", '<section class="provider-claims-section view-provider-claims"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'provider_claims_title\' | translate }}</h1> </div> </div> <form ng-submit="clickNewClaimForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.nameId" placeholder="slimBeauty"> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="claim in claimEntries"> <dt>{{ claim.nameId }}</dt> <dd>{{ \'ProviderClaim_\' + claim.nameId | translate }}</dd> </dl> </div> </div> </section>'), e.put("app/views/provider_faq.html", '<section class="provider-faq-section view-provider-faq"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'provider_faq_title\' | translate }}</h1> </div> </div> <form ng-submit="clickNewTopicForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.topicId" placeholder="faqTopicId"> </div> <div class="small-6 columns"> <input type="text" ng-model="newEntry.langCode" placeholder="de"> </div> </div> <div class="row"> <div class="small-12 columns"> <input type="text" ng-model="newEntry.title" placeholder="The question"> </div> </div> <div class="row"> <div class="small-12 columns"> <textarea ng-model="newEntry.text" placeholder="The text answering the question"></textarea> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="faq in faqEntries | filter:faqLangFilter"> <dt>{{ faq.title }} <small ng-show="isAdmin"><a ng-click="clickTopic(faq)">{{ faq.topicId }}</a></small></dt> <dd style="white-space: pre-line;">{{ faq.text }}</dd> </dl> </div> </div> </section>'), e.put("app/views/provider_imageupload.html", '<section class="provider-imageupload-section view-provider-imageupload"> <div class="row centered"> <div class="large-8 large-offset-2 medium-10 medium-offset-1 columns"> <h1>{{ \'provider_imageupload_title\' | translate }}</h1> </div> </div> <div class="row centered"> <div class="large-8 large-offset-2 medium-10 medium-offset-1 columns imageupload-form-container needsclick"> <h5>{{ \'imageupload_short_instructions\' | translate }}</h5> <p class="ng-hide" ng-show="peppr.features.showSexRelatedAttributes">{{ \'imageupload_long_instructions\' | translate }} <span ng-show="userAgency">{{ \'imageupload_agency_instructions\' | translate }}</span></p> <p class="ng-hide" ng-hide="peppr.features.showSexRelatedAttributes"><span translate="{{ \'imageupload_long_instructions_no_sex\' | translate }}"></span> <span ng-show="userAgency">{{ \'imageupload_agency_instructions\' | translate }}</span></p>  <form class="dropzone needsclick info-panel" id="provider-imageupload-dropzone"> <div class="fallback">     </div> </form> </div> </div> <div class="row centered" ng-if="numSuccessfulUploads == 0"> <div class="large-12 columns text-center"> <a class="button submit-button" ng-click="doneUploading()">{{ \'no_images_at_the_moment\' | translate }}</a> </div> </div> <div class="row centered" ng-if="numSuccessfulUploads &gt; 0"> <div class="large-12 columns text-center"> <a class="button submit-button" ng-click="doneUploading()">{{ \'im_done_with_uploading_num_pictures\' | translate:buttonData }}</a> </div> </div> <div class="row profile-pictures-wrapper centered"> <div class="large-12 columns text-center"> <div class="row" ng-if="firstPic">  <div class="small-12 medium-6 medium-offset-3 columns"> <ul class="orbit-container first-picture"> <li pp-draggable="true" item="0" id="image{{ firstPic.uploadUUID }}"> <div class="drop-bin"></div> <a class="delete button tiny" ng-click="deletePicture(firstPic)" title="Delete">&#215;</a> <a class="reviewed button tiny" ng-show="firstPic.reviewedOn" title="{{ \'reviewed\' | translate }}">âœ“</a> <a class="rejected button" ng-show="firstPic.rejectedOn" title="{{ \'rejected\' | translate }}">&#215;</a> <a class="approve button tiny" ng-show="isAdmin &amp;&amp; !firstPic.reviewedOn" ng-click="approvePicture(firstPic, 0)" title="Approve">&#10003;</a> <a class="orbit-next" ng-click="moveRight(0)" ng-hide="provider.profilePictures.length == 1"><span></span></a> <div class="th"> <div class="image" pp-droppable="true" drop="handleDrop" bin="0" id="bin{{ firstPic.uploadUUID }}" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + firstPic.uploadUUID + \'?width=300)\'}"></div> <div class="profile-info"> <div class="profile-name"><h2>{{provider.name}}</h2></div> </div> </div> </li> </ul> </div> </div> <ul class="small-block-grid-2 medium-block-grid-4 large-block-grid-6 orbit-container"> <li ng-repeat="p in provider.profilePictures | allButN:0" pp-draggable="true" item="$index + 1" id="image{{ p.uploadUUID }}"> <div class="drop-bin"></div> <a class="delete button tiny" ng-click="deletePicture(p)" title="{{ \'imageupload_admin_do_you_really_want_to_delete_cannot_be_undone\' | translate }}">&#215;</a> <a class="reviewed button tiny" ng-show="p.reviewedOn" title="{{ \'reviewed\' | translate }}">âœ“</a> <a class="rejected button" ng-show="p.rejectedOn" title="{{ \'rejected\' | translate }}">&#215;</a> <a class="approve button tiny" ng-show="isAdmin &amp;&amp; !p.reviewedOn" ng-click="approvePicture(p, $index + 1)">&#10003;</a> <a class="orbit-prev" ng-click="moveLeft($index + 1)"><span></span></a> <a class="orbit-next" ng-click="moveRight($index + 1)" ng-hide="$last"><span></span></a> <div class="th"> <div class="image" ng-hide="p.zoomed" ng-click="p.zoomed = true" pp-droppable="true" drop="handleDrop" bin="$index + 1" id="bin{{ p.uploadUUID }}" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + p.uploadUUID + \'?width=150)\'}"></div> <img class="zoomed-image" ng-show="p.zoomed" ng-click="p.zoomed = false" pp-droppable="true" drop="handleDrop" bin="$index + 1" ng-src="{{pepprRestBaseUrl}}/image/{{p.uploadUUID}}?width=150" alt="{{provider.name}} profile picture {{p.uploadUUID}}"> </div> </li> </ul> </div> </div> </section> '), e.put("app/views/provider_list.html", '<section class="provider-list-section view-provider-list">      <div class="scroll-up-bar text-center" ng-show="showUpBar"> <i class="peppr-icon-arrow-up" ng-click="scrollUp()"></i> </div> <div class="menu-click-hint"> <span class="tooltip tip-bottom radius"> {{ \'Menu\' | translate }} <span class="nub"></span> </span> </div> <div class="filter-click-hint"> <span class="tooltip tip-bottom radius"> {{ \'filter\' | translate }} <span class="nub"></span> </span> </div> <div class="row centered"> <div class="small-12 medium-6 medium-offset-3 columns"> <div class="data-loading-indicator" ng-hide="providers != null"></div> <div class="no-results-indicator" ng-hide="providers == null || providers.length > 0"> <h3> <i class="peppr-icon-flame"></i><br> {{ \'no_pepprs_found\' | translate }} </h3> </div> </div> </div> <div class="row collapse showcase-image-list"> <div class="small-12 medium-12 large-12 columns"> <div id="beforeViewportFiller" ng-style="{ height: beforeViewportFillerHeight }"> <div class="data-loading-indicator" ng-show="beforeViewportFillerHeight &gt; 0"></div> </div> <div class="row collapse provider-row"> <div class="small-12 medium-6 large-4 xlarge-3 xxlarge-2 columns" ng-repeat="p in providers | filter:filterProviders"> <a ui-sref="app.provider({providerId: p.provider.id, lang: activeLang})" class="showcase-image-wrapper inactive" id="plSc{{p.provider.id}}"> <div class="in-view-container"> <div ng-if="p.profilePictures" pp-hide-on-img-loaded="{{ pepprRestBaseUrl }}/image/{{ p.profilePictures[0].uploadUUID }}?width=300" class="image-loading"></div> <div class="image" ng-if="p.profilePictures" ng-style="{\'background-image\': \'url(\' + pepprRestBaseUrl + \'/image/\' + p.profilePictures[0].uploadUUID + \'?width=300)\'}"></div>   <div class="img-overlay"></div> <div class="available-now" ng-show="p.instantAvailable"><i class="peppr-icon-time"></i> {{ \'instant_booking_available\' | translate }}</div> <div class="profile-info"> <div class="profile-click-hint" ng-if="p.provider.id == firstProviderId"> <span class="tooltip tip-top transparent radius"> {{ \'click_to_show_profile\' | translate }} <span class="nub"></span> </span> </div> <div class="profile-name"><h2>{{p.provider.name}}</h2></div> <div class="indicators"> <div class="indicator price-indicator" ng-if="peppr.features.showPrices"> <i class="peppr-icon-price"></i> <span class="data">{{pricePer(p.provider)}}â‚¬<span class="unit">/{{pricePerNumHours(p.provider)}}h</span></span>   </div> <div class="indicator availability-indicator availability-instant-indicator" ng-show="p.instantAvailable"> <i class="peppr-icon-time"></i> <span class="data">{{ \'availability_now\' | translate }}</span> </div>  <div class="indicator distance-indicator" ng-show="p.distanceKm &gt;= 0"> <i class="peppr-icon-distance"></i> <span class="data">{{p.distanceKm.toFixed(0)}}<span class="unit">km</span></span> </div>  </div> </div> <div class="showcase-overlay"></div> </div> </a> </div> </div> <div id="afterViewportFiller" ng-style="{ height: afterViewportFillerHeight }"> <div class="data-loading-indicator" ng-show="beforeViewportFillerHeight &gt; 0"></div> </div> </div> </div> </section>'), e.put("app/views/provider_map_google.html", '<section class="provider-map-section view-provider-map-google"> <ui-gmap-google-map ng-attr-center="map.center" ng-attr-zoom="map.zoom" ng-attr-draggable="true" ng-attr-events="map.events" ng-attr-event-opts="map.eventOpts" ng-attr-options="map.mapOptions"> <ui-gmap-markers models="mapMarkers" coords="\'self\'" icon="\'icon\'" click="\'clickMarker\'" docluster="true" clusteroptions="\'map.clusterOptions\'"> <ui-gmap-windows show="\'show\'" options="\'infoWindowOptions\'"> <div class="map-provider-popup" ng-non-bindable="">  <div class="map-provider-popup-content small"> <h3><a href="{{profileURL}}">{{providerInfo.provider.name}}</a></h3>  <a href="{{profileURL}}"> <div class="image th" style="background-image: url({{pepprRestBaseUrl}}/image/{{providerInfo.profilePictures[0].uploadUUID}}?width=250)"></div> </a> <div class="profile-info"> <div class="indicator price-indicator"> <i class="peppr-icon-price"></i> <span class="data">{{providerInfo.provider.pricePerHour}}â‚¬<span class="unit">/h</span></span> </div> <div class="indicator availability-indicator availability-instant-indicator" style="display: {{instantAvailDisplayStyleVal}};"> <i class="peppr-icon-time"></i> <span class="data">{{ \'availability_now\' | translate }}</span> </div> </div> {{providerInfo.htmlDescription}} <a class="read-more" href="{{profileURL}}">{{\'show_more\' | translate}}</a> </div> </div> </ui-gmap-windows> </ui-gmap-markers> </ui-gmap-google-map> </section>'), e.put("app/views/provider_services.html", '<section class="provider-services-section view-provider-services"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'provider_services_title\' | translate }}</h1> </div> </div> <form ng-submit="clickNewServiceForm()" ng-if="isAdmin" novalidate=""> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.nameId" placeholder="footFetish"> </div> <div class="small-6 columns"> <input type="checkbox" ng-model="newEntry.filterable" placeholder="footFetish"> <label>Filterable</label> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="service in servicesEntries"> <dt>{{ service.nameId }} <small ng-show="service.filterable">filterable</small></dt> <dd>{{ \'Service_\' + service.nameId | translate }}</dd> </dl> </div> </div> </section>'), e.put("app/views/provider_status.html", '<section class="provider-status section view-provider-status"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'provider_status_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="large-12 columns"> <p>See how much you have earned from being a peppr.</p> </div> </div> <div class="row narrow-small-only"> <div class="large-3 medium-3 small-6 columns"> <ul class="pricing-table"> <li class="title" data-tooltip="" title="How much you have earned since last Monday">Week</li> <li class="price">35<small>â‚¬</small></li> </ul> </div> <div class="large-3 medium-3 small-6 columns"> <ul class="pricing-table"> <li class="title" data-tooltip="" title="How much you have earned since the beginning of this month">Month</li> <li class="price">98<small>â‚¬</small></li> </ul> </div> <div class="large-3 medium-3 small-6 columns"> <ul class="pricing-table"> <li class="title" data-tooltip="" title="How much you have earned since signing up with peppr">All time</li> <li class="price">431<small>â‚¬</small></li> </ul> </div> <div class="large-3 medium-3 small-6 columns"> <ul class="pricing-table"> <li class="title" data-tooltip="" title="How much money you get if you do a cash out now">Collect</li> <li class="price">64<small>â‚¬</small></li> </ul> </div> </div> <div class="row"> <div class="large-12 columns"> <div class="panel text-justify"> <p>If you want to collect your money, just click below and we\'ll send you instructions how to get your cash.</p> <div class="text-center"> <a href="#" class="button">Cash out <small>64 â‚¬</small></a> </div> </div> </div> </div> </section>'), e.put("app/views/shortlink_admin.html", '<section class="shortlink-admin-section view-shortlink-admin"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'shortlink_admin_title\' | translate }}</h1> </div> </div> <form name="shortlinkadminform" ng-submit="clickNewShortlinkForm()" ng-if="isAdmin"> <div class="row"> <div class="small-6 columns"> <input type="text" ng-model="newEntry.campaignId" name="campaignId" pp-has-error="" placeholder="sms201402-001" required="true"> <small class="error">Bezeichnung der Kampagne, nicht auf den Tag festmachen, besser auf den Monat oder nur Nummer</small> </div> <div class="small-6 columns"> <select ng-model="newEntry.type" name="type" pp-has-error="" required="true" ng-options="c.value as c.name for c in selShortLinkUsageOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> <small class="error">AuswÃ¤hlen!</small> </div> </div> <div class="row"> <div class="small-12 columns"> <input type="text" ng-model="newEntry.data" name="data" pp-has-error="" placeholder="data e.g. +436501234567 or me@example.com" required="true"> <small class="error">Erlaubt die Identifikation des EmpfÃ¤ngers. Telefonnummer, EMail Adress oder Name des EmpfÃ¤ngers / Firma eintragen</small> </div> </div> <div class="row"> <div class="small-12 columns"> <input type="text" ng-model="newEntry.link" name="link" pp-has-error="" placeholder="http://yourlink.to/url" required="true"> <small class="error">Die URL auf die der Kurzlink verweisen soll</small> </div> </div> <div class="row"> <div class="small-12 columns"> <button type="submit" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> <div class="row"> <div class="small-12 columns"> <dl ng-repeat="sl in shortLinks"> <dt> <a href="{{ pepprShortLinkPrefix }}{{ sl.key }}" ng-click="clickShortlink($event)">{{ sl.key }}</a> <span ng-show="sl.type">type: {{ sl.type }}</span> <span ng-show="sl.campaignId">campaign: {{ sl.campaignId }}</span> <span ng-show="sl.data">data: {{ sl.data }}</span> clicks: {{ sl.clickCount }} </dt> <dd>{{ sl.link }}</dd> </dl> </div> </div> </section>'), e.put("app/views/signup_admin.html", '<section class="signup-admin-section view-signup-admin"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'signup_admin_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="small-12 columns"> <table> <thead> <tr> <th>Date</th> <th>Email</th> <th>Name</th> <th>Type</th> </tr> </thead> <tbody> <tr ng-repeat="signup in signupEntries"> <td>{{ formatDate(signup.createdOn) }}</td> <td class="email"><a href="mailto:{{ signup.email }}">{{ signup.name }} &lt;{{ signup.email }}&gt;</a></td> <td>{{ signup.name }}</td> <td>{{ signup.type }}</td> </tr> </tbody> </table> </div> </div> </section>'), e.put("app/views/signup_agency.html", '<section class="signup-agency-section view-signup-agency"> <div class="row"> <div class="large-12 columns"> <h1>{{ \'welcome_slogan\' | translate }}</h1> </div> </div> <div class="row"> <div class="large-8 medium-10 columns"> <h5>{{ \'agency_signup_form_short_instructions\' | translate }}</h5> <form name="signupagencyform" ng-submit="clickSubmitAgencyForm()" novalidate=""> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'agency_name\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="agency.name" name="name" pp-has-error="" required="true" placeholder="Spicy Escorts"> <small class="error">{{ \'agency_name_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'email_address\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="email" ng-model="agency.email" name="email" pp-has-error="" required="true" placeholder="you@gmail.com"> <small class="error">{{ \'provider_email_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-12 medium-12 small-12 columns">  <label class="with-description">{{ \'phone_number\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="label-description">{{ \'phone_number_privacy_disclaimer\' | translate }}</div> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="phoneNumberCountry" required="true" ng-options="c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="phoneNumber" name="phoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'password\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="password" ng-model="agency.admin.passwordHash" name="password" pp-has-error="" id="aFormPassword" ng-pattern="peppr.validators.relaxed_password" required="true" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'password_confirm\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="password" ng-model="agency.admin.password_confirm" name="passwordConfirm" pp-has-error="" pp-equal-to="agency.admin.passwordHash" ng-pattern="peppr.validators.relaxed_password" required="true" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_confirm_error\' | translate }}</small> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'agency_location\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="map-wrapper"> <img class="crosshair" src="https://cdn3.iconfinder.com/data/icons/block/32/target-128.png"> <ui-gmap-google-map ng-attr-center="mapCenter" ng-attr-zoom="mapCenter.zoom" ng-attr-draggable="true" ng-attr-events="mapEvents"> </ui-gmap-google-map></div> </div> </div> <div class="row"> <div class="large-12 medium-12 small-12 columns"> <label>{{ \'bank_account\' | translate }}</label> <div class="row collapse"> <div class="large-8 medium-8 small-8 columns"> <input type="text" ng-model="agency.iban" name="iban" pp-has-error="" pp-valid-iban="" placeholder="DE89 3704 0044 0532 0130 00"> <small class="error">{{ \'provider_bank_account_error\' | translate }}</small> </div> <div class="large-4 medium-4 small-4 columns"> <input type="text" ng-model="agency.bic" name="bic" pp-has-error="" ng-pattern="peppr.validators.cstm_bic" placeholder="COBADEFFXXX"> <small class="error">{{ \'provider_bank_account_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="small-12 columns"> <label>{{ \'app_language\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="agency.admin.langCode" name="appLangCode" required="true" ng-options="c.value as c.name for c in chkAppLangOptions"> </select> </div> </div> <div class="row" ng-if="peppr.features.showFreeText"> <div class="small-12 columns"> <label>{{ \'provider_booking_notes\' | translate }}</label> <textarea ng-model="agency.bookingNotes" placeholder="{{ \'provider_booking_notes_placeholder\' | translate }}"></textarea> </div> </div> <div class="row"> <div class="small-12 columns signup-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="cbConfirmChecked" id="aFormConfirmCb"> </div> <label for="aFormConfirmCb"> {{ \'offline_disclaimer\' | translate }} <span ng-bind-html="tacPpText"></span> </label> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="!cbConfirmChecked || signupagencyform.$invalid">{{ \'create_client\' | translate }}</button> </div> </div> </form> </div> </div> </section> '), e.put("app/views/signup_client.html", '<section class="signup-client-section view-signup-client"> <div class="row" ng-show="showBookingSteps &amp;&amp; activeLang == \'de\'"> <div class="medium-10 medium-offset-1 large-8 large-offset-2 column"> <h3>Nur noch 3 Schritte zu deinem Date</h3> <p> Du hast auf â€ž{{ \'enquire\' | translate }}â€œ geklickt, daher nehmen wir an du mÃ¶chtest auf PEPPR buchen. Wir mÃ¶chten dir kurz erklÃ¤ren wie es funktioniert. Du kannst natÃ¼rlich auch <a ng-click="showBookingSteps = false">direkt zur Anmeldung</a> gehen. </p> <h4>Account anlegen</h4> <p> Du legst dir einen PEPPR Account mit deinem Vornamen und deiner Telefonnummer an. </p> <a ui-sref="app.login({lang: activeLang})" ng-click="onHaveAccount($event)">Ich habe bereits einen Account</a>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_signup.png" alt=""> </div> <p> Wir benÃ¶tigen deine Telefonnummer, weil wir dir alle Informationen und Nachrichten zur Buchung per SMS schicken. Keine Sorge, deine Telefonnummer ist bei uns sicher, wir geben diese niemandem weiter! Um deine Telefonnummer zu bestÃ¤tigen, klickst du auf den Link, den du per SMS bekommen hast. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_confirm_phone.png" alt=""> </div> <p> Erst damit kÃ¶nnen wir sicher sein, dass es auch wirklich deine Telefonnummer ist. </p> <h4>Anfrage erstellen</h4> <p> Sobald du deinen PEPPR Account angelegt und deine Telefonnummer bestÃ¤tigt hast, kannst du Zeit, Ort, Dauer und extra Services fÃ¼r dein Treffen festlegen und den Preis prÃ¼fen. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_book.png" alt=""> </div> <h4>BuchungsgebÃ¼hr bezahlen</h4> <p> Der nÃ¤chste Schritt ist die Zahlung unserer kleinen BuchungsgebÃ¼hr. WÃ¤hle dein Zahlungsmittel und gib die Zahlungsdetails ein. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_payment.png" alt=""> </div> <p> AnonymitÃ¤t ist uns sehr wichtig, daher speichern wir keine der Angaben die du auf der Bezahlseite machst, sondern reichen diese direkt unserem Zahlungsanbieter weiter. </p> <p> Deine Buchungsanfrage geht direkt per SMS an den peppr deiner Wahl und ihr kÃ¶nnt weitere Details per SMS klÃ¤ren. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_sms.png" alt=""> </div> <p> Genug der ErklÃ¤rungen! </p> <a class="button" ng-click="showBookingSteps = false">weiter zur Anmeldung!</a> </div> </div> <div class="row" ng-show="showBookingSteps &amp;&amp; activeLang == \'en\'"> <div class="medium-10 medium-offset-1 large-8 large-offset-2 column"> <h3>Your date is only 3 steps away</h3> <p> You clicked on \'{{ \'enquire\' | translate }}\', so you probably want to book on PEPPR. We\'ll explain briefly how it works. You can also <a ng-click="showBookingSteps = false">Continue straight to the sign-up</a>. </p> <h4>Create an account</h4> <p> You create a PEPPR account and specify your first name and your phone number. </p> <a class="button" ui-sref="app.login({lang: activeLang})" ng-click="onHaveAccount($event)">I already have an account</a>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_signup.png" alt=""> </div> <p> We need your phone number, as we send all relevant information and messages regarding your booking via text messages. No worries, your number is safe with us! We do not share it with anyone, ever! In order to confirm your phone number, please click the link you have received via SMS. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_confirm_phone.png" alt=""> </div> <p> Only after you have clicked the link, we can be sure it\'s actually your phone number. </p> <h4>Create an enquiry</h4> <p> As soon as you have created a PEPPR account and confirmed your phone number, you can specify the time, location, duration and extra services for your date and review the price. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_book.png" alt=""> </div> <h4>Pay our booking fee</h4> <p> The next step is the payment of our small booking fee. Choose your payment method and enter the payment details. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_payment.png" alt=""> </div> <p> Your privacy is very important to us! Therefore we hand off all the details directly to our payment processor. </p> <p> Your booking request is directly sent to the peppr of your choice via SMS. You can then discuss the details using text messages. </p>  <div class="screenshot"> <img class="screenshot-image" src="images/screenshot_sms.png" alt=""> </div> <p> Enough of the explanations! </p> <a class="button" ng-click="showBookingSteps = false">Continue to the sign-up!</a> </div> </div> <div class="row" ng-hide="showBookingSteps"> <div class="medium-10 medium-offset-1 large-8 large-offset-2 column"> <h1>{{ \'welcome_slogan\' | translate }}</h1> </div> </div> <div class="row" ng-hide="showBookingSteps"> <div class="medium-10 medium-offset-1 large-8 large-offset-2 column"> <div class="instant-booking-wrapper" ng-show="freeRideAvailable"> <div class="panel"> <div class="secure-notice"> <i class="peppr-icon-dollar"></i> <span>{{ \'client_signup_free_ride\' | translate }}</span> </div> </div> </div> <h5 ng-hide="$state.includes(\'app.signup_client.1_confirm\')"> <span ng-show="$state.includes(\'app.signup_client.1\')"> {{ \'client_signup_form_short_instructions\' | translate }} </span> <span ng-hide="$state.includes(\'app.signup_client.1\')"> {{ \'client_signup_form_short_instructions_completion\' | translate }} </span> </h5>   <div class="status-buttons text-center" ng-hide="$state.includes(\'app.signup_client.1\') || $state.includes(\'app.signup_client.1_confirm\')"> <a class="disabled"><span>1</span> Verify</a> <a ui-sref-active="active" ui-sref=".2"><span>2</span> Secure</a> <a ui-sref-active="active" ui-sref=".3"><span>3</span> Save</a> </div> <form name="signupclientform" ng-submit="onClickSubmitClientForm()" novalidate="">  <div ui-view=""></div> </form> </div> </div> </section> '), e.put("app/views/signup_client_1.html", ' <div class="show-for-small-only"> <div class="row"> <div class="column"> <label>{{ \'forename\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="$parent.client.forename" name="forename" pp-has-error="" required="true" placeholder="John"> <small class="error">{{ \'provider_name_error\' | translate }}</small> </div> <div class="column"> <label class="with-description">{{ \'phone_number\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="label-description">{{ \'phone_number_privacy_disclaimer\' | translate }}</div> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="$parent.phoneNumberCountry" required="true" ng-options="c.name for c in $parent.chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="$parent.phoneNumber" name="phoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> </div> <div class="show-for-medium-up"> <div class="row"> <div class="large-3 medium-5 small-12 columns"> <label for="signup-client-forename">{{ \'forename\' | translate }} <small>{{ \'required\' | translate }}</small></label> </div> <div class="large-9 medium-7 small-12 columns"> <label class="with-description" for="signup-client-phonenumber">{{ \'phone_number\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="label-description">{{ \'phone_number_privacy_disclaimer\' | translate }}</div> </div> </div> <div class="row"> <div class="large-3 medium-5 small-12 columns"> <input type="text" ng-model="$parent.client.forename" name="forename" pp-has-error="" id="signup-client-forename" required="true" placeholder="John"> <small class="error">{{ \'provider_name_error\' | translate }}</small> </div> <div class="large-9 medium-7 small-12 columns"> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="$parent.phoneNumberCountry" required="true" ng-options="c.name for c in $parent.chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" ng-model="$parent.phoneNumber" name="phoneNumber" pp-has-error="" id="signup-client-phonenumber" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> </div>   <div class="row show-hide-animation" ng-show="signupclientform.$valid"> <div class="small-12 columns signup-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="cbConfirmChecked" id="cFormConfirmCb"> </div> <label class="long-label" for="cFormConfirmCb"> {{ \'age_disclaimer\' | translate }} {{ \'offline_disclaimer\' | translate }} <span ng-bind-html="tacPpText"></span> </label> </div> </div> <div class="row show-hide-animation" ng-show="signupclientform.$valid"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="!cbConfirmChecked || signupclientform.$invalid">{{ \'create_client\' | translate }}</button> </div> </div>'), e.put("app/views/signup_client_1_confirm.html", '<div ng-hide="phoneConfirmed || showPhoneConfirmation"> <div class="row"> <div class="medium-6 columns text-center"> <div class="spinner"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div> <br> Waiting for you to click the link in the text message <br><br> </div> </div> <div class="row"> <div class="medium-6 columns text-center"> <p class="small"> <a ng-click="onShowPhoneConfirmation()">Enter manually</a> </p> </div> </div> <div class="row"> <div class="medium-6 columns text-center"> Your temporary password is: {{$parent.temporaryPassword}} </div> </div> </div> <div class="row" ng-show="phoneConfirmed"> <div class="column"> Thank you! Continuing in {{ continueCountdown }} <a ng-click="onContinueAfterConfirmation()">contine</a> </div> </div> <div class="row" ng-show="showPhoneConfirmation"> <div class="column"> <pp-phone-confirm on-phone-confirmed="onPhoneManuallyConfirmed"> </pp-phone-confirm></div> </div>'), e.put("app/views/signup_client_2.html", '<div class="row"> <div class="medium-6 columns"> <label>{{ \'forename\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" ng-model="$parent.client.forename" name="forename" pp-has-error="" required="true" placeholder="John"> <small class="error">{{ \'provider_name_error\' | translate }}</small> </div> <div class="medium-6 columns"> <label>{{ \'email_address\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="email" ng-model="$parent.client.email" name="email" pp-has-error="" required="true" placeholder="you@gmail.com"> <small class="error">{{ \'provider_email_error\' | translate }}</small> </div> </div> <div class="row"> <div class="medium-6 columns"> <label>{{ \'password\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="password" ng-model="$parent.client.password" name="password" id="cFormPassword" pp-has-error="" ng-pattern="peppr.validators.relaxed_password" required="true" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_error\' | translate }}</small> </div> <div class="medium-6 columns"> <label>{{ \'password_confirm\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="password" ng-model="$parent.client.password_confirm" name="passwordConfirm" pp-has-error="" pp-equal-to="$parent.client.password" ng-pattern="peppr.validators.relaxed_password" required="true" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_confirm_error\' | translate }}</small> </div> </div> <div class="row" ng-hide="showAppLang"> <div class="medium-12 columns"> <label>{{ \'app_language\' | translate }}: <a ng-click="$parent.showAppLang = true">{{ client.langCode | translateEnum:\'Languages\' }}</a></label> </div> </div> <div class="row" ng-show="showAppLang"> <div class="medium-6 columns"> <label>{{ \'app_language\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="$parent.client.langCode" name="appLangCode" required="true" ng-options="c.value as c.name for c in $parent.chkAppLangOptions"> </select> </div> </div> <div class="row show-hide-animation" ng-show="signupclientform.$valid"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="signupclientform.$invalid">{{ \'continue\' | translate }}</button> </div> </div> '), e.put("app/views/signup_client_3.html", ' <div class="row"> <div class="small-12 columns"> <label>{{ \'how_did_you_learn_about_peppr\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="client.acquisition" name="acquisition" required="true" ng-options="c.value as c.name for c in chkAcquisitionChannelOptions"> </select> </div> </div> <div class="row"> <div class="medium-12 columns" ng-if="client.acquisition == \'OTHER\'"> <input type="text" ng-model="client.acquisitionOther" name="acquisitionOther" pp-has-error="" ng-required="client.acquisition == \'OTHER\'" placeholder="Santa told me"> <small class="error">{{ \'acquisition_error\' | translate }}</small> </div> </div> <div class="row"> <div class="column newsletter-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="client.newsletterSubscribed" id="cFormNewsletterSubscribed"> </div> <label for="cFormNewsletterSubscribed"> {{ \'newsletter_subsribed\' | translate }} </label> </div> </div> <div class="row"> <div class="small-12 columns signup-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="cbConfirmChecked" id="cFormConfirmCb"> </div> <label class="long-label" for="cFormConfirmCb"> {{ \'age_disclaimer\' | translate }} {{ \'offline_disclaimer\' | translate }} <span ng-bind-html="tacPpText"></span> </label> </div> </div> <div class="row"> <div class="large-12 columns"> <button type="submit" class="button" ng-disabled="!cbConfirmChecked || signupclientform.$invalid">{{ \'create_client\' | translate }}</button> </div> </div> '), e.put("app/views/signup_professional.html", '<section class="signup-professional-section view-signup-professional"> <div class="row"> <div class="large-8 medium-10 columns"> <h1 ng-hide="providerId">{{ \'welcome_slogan\' | translate }}</h1> <h1 ng-show="providerId">{{ \'edit_professional_title\' | translate }}</h1> </div> </div> <div class="row"> <div class="large-8 medium-10 columns"> <h5 ng-hide="providerId">{{ \'signup_form_short_instructions\' | translate }}</h5> <form name="signupprofessional" ng-submit="clickSubmitProviderForm()" id="pForm"> <div class="row"> <div class="small-12 columns" ng-if="isAdmin &amp;&amp; providerId &amp;&amp; !peppr.features.showPrices"> <div class="panel secure-notice-wrapper"> <div class="secure-notice"> <i class="peppr-icon-lock"></i> <span>{{ \'admin_only\' | translate }}</span> </div> <div class="row"> <div class="small-12 medium-6 columns checkbox-wrapper provider-flame"> <input type="checkbox" ng-model="provider.flameEnabled" name="pFormFlameEnabled" id="pFormFlameEnabled"> <label for="pFormFlameEnabled"><i class="peppr-icon-flame" ng-class="{active: provider.flameEnabled}"></i></label> </div> <div class="small-12 medium-6 medium-6 columns"> <label class="">{{ \'price_h\' | translate }}: <div class="ui-slider-labels" ng-show="provider.pricePerHour == 0">-</div> <div class="ui-slider-labels" ng-repeat="n in [provider.pricePerHour] | makeRange" ng-show="provider.pricePerHour > 0"> <span>â‚¬</span> </div> </label> <div class="ui-slider-widget" pp-slider="" pp-val="provider.pricePerHour" pp-range-min="0" pp-range-max="4" pp-step="1"> <div class="ui-slider-container"> <div class="ui-slider"> <div class="ui-slider-handle" style="left: 0%"></div> <div class="ui-slider-range" style="left: 0%; width: 100%;"></div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'forename\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" name="name" ng-model="provider.name" pp-has-error="" required="true" placeholder="Stacey" ng-pattern="peppr.validators.forename"> <small class="error">{{ \'provider_name_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns" ng-hide="providerId"> <label>{{ \'username\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="small-3 columns"> <span class="prefix">peppr.it/</span> </div> <div class="small-9 columns"> <input type="text" name="username" ng-model="provider.admin.username" pp-has-error="" id="pFormUserName" pp-valid-provider-username="" pp-provider-id="providerId" required="true" placeholder="stacey_69"> <small class="error">{{ \'provider_username_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'claim\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="provider.claim" name="claim" pp-has-error="" required="true" ng-options="c as c.name for c in chkClaimOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> <small class="error">{{ \'provider_claim_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns" ng-if="!provider.agency.id &amp;&amp; (!loggedIn || userProvider)"> <label>{{ \'email_address\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="email" name="email" ng-model="provider.email" pp-has-error="" id="pFormEmail" pp-valid-provider-email="" pp-provider-id="providerId" required="true" placeholder="you@gmail.com"> <small class="error">{{ \'provider_email_error\' | translate }}</small> </div> </div> <div class="row" ng-if="!provider.agency.id &amp;&amp; !loggedIn"> <div class="large-6 medium-6 columns"> <label>{{ \'password\' | translate }} <small>{{ \'required\' | translate }}</small></label>  <input type="password" name="password" ng-model="provider.admin.passwordHash" pp-has-error="" id="pFormPassword" ng-pattern="peppr.validators.relaxed_password" ng-required="!providerId" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'password_confirm\' | translate }} <small>{{ \'required\' | translate }}</small></label>  <input type="password" name="passwordConfirm" ng-model="provider.admin.password_confirm" pp-has-error="" pp-equal-to="provider.admin.passwordHash" ng-pattern="peppr.validators.relaxed_password" ng-required="!providerId" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_confirm_error\' | translate }}</small> </div> </div> <div class="row" ng-if="!provider.agency.id &amp;&amp; (!loggedIn || userProvider)"> <div class="large-12 medium-12 small-12 columns">  <label>{{ \'phone_number\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="hack.phoneNumberCountry" required="true" ng-options="c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" name="phoneNumber" ng-model="hack.phoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> </div> </div> <div class="row"> <div class="large-6 medium-6 columns checkbox-wrapper"> <label>{{ \'provider_app_usage\' | translate }}</label> <input type="checkbox" ng-model="provider.usesSmartphone" id="pFormUsesSmartphone"> <label for="pFormUsesSmartphone">{{ \'provider_uses_smartphone\' | translate }}</label> </div> <div class="large-6 medium-6 columns"> <label>{{ \'your_sex\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="radio" ng-model="provider.sex" pp-has-error="" value="FEMALE" id="pFormSexFemale" name="pFormSex" required="true"> <label for="pFormSexFemale">{{ \'ENUM_Sex_FEMALE\' | translate }}</label> <input type="radio" ng-model="provider.sex" pp-has-error="" value="MALE" id="pFormSexMale" name="pFormSex" required="true"> <label for="pFormSexMale">{{ \'ENUM_Sex_MALE\' | translate }}</label> <input type="radio" ng-model="provider.sex" pp-has-error="" value="TRANS" id="pFormSexTrans" name="pFormSex" required="true"> <label for="pFormSexTrans">{{ \'ENUM_Sex_TRANS\' | translate }}</label> <small class="error">{{ \'provider_sex_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showSexRelatedAttributes"> <label>{{ \'sexuality\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="provider.sexuality" name="sexuality" pp-has-error="" ng-options="c.value as c.name for c in chkSexualityOptions" required="true"> <option value="">{{ \'option_choose\' | translate }}</option> </select> <small class="error">{{ \'provider_figure_error\' | translate }}</small> <small class="input-info warning" ng-show="provider.sex === \'MALE\' &amp;&amp; provider.sexuality === \'HETERO\'">{{ \'we_only_accept_professional_hetero_male_escorts\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'date_of_birth\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="date" name="birthDate" ng-model="provider.birthDate" pp-has-error="" required="true"> <small class="error">{{ \'provider_birthdate_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'height_cm\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="number" name="heightCm" ng-model="provider.heightCm" pp-has-error="" required="true"> <small class="error">{{ \'provider_height_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'figure\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="provider.figure" name="figure" pp-has-error="" ng-options="c.value as c.name for c in chkFigureOptions" required="true"> <option value="">{{ \'option_choose\' | translate }}</option> </select> <small class="error">{{ \'provider_figure_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns" ng-hide="provider.sex == \'MALE\'"> <label>{{ \'bust_size\' | translate }} <small ng-show="provider.sex == \'FEMALE\'">{{ \'required\' | translate }}</small></label> <select ng-model="provider.bustSize" name="bustSize" ng-options="c.value as c.name for c in chkBustSizeOptions" ng-disabled="provider.sex == \'MALE\'" ng-required="provider.sex == \'FEMALE\'"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> </div> <div class="row" ng-if="peppr.features.showSexRelatedAttributes"> <div class="small-12 columns show-all-attributes"> <label><a class="expandable right" ng-click="hack.chkShowAllAttributes = !hack.chkShowAllAttributes" ng-class="{true: \'expanded\', false: \'\'}[chkShowAllAttributes]"><span>{{ \'show_more_attributes\' | translate }}</span></a></label> </div> </div> <div class="row" ng-show="hack.chkShowAllAttributes"> <div class="large-6 medium-6 columns"> <label>{{ \'hair_colour\' | translate }}</label> <select ng-model="provider.hairColour" name="hairColour" ng-options="c.value as c.name for c in chkHairColourOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> <div class="large-6 medium-6 columns"> <label>{{ \'hair_length\' | translate }}</label> <select ng-model="provider.hairLength" name="hairLength" ng-options="c.value as c.name for c in chkHairLengthOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showSexRelatedAttributes"> <label>{{ \'pubic_hair\' | translate }}</label> <select ng-model="provider.pubicHair" name="pubicHair" ng-options="c.value as c.name for c in chkPubicHairOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showSexRelatedAttributes"> <label>{{ \'body_hair\' | translate }}</label> <select ng-model="provider.bodyHair" name="bodyHair" ng-options="c.value as c.name for c in chkBodyHairOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> <div class="large-6 medium-6 columns"> <label>{{ \'ethnicity\' | translate }}</label> <select ng-model="provider.ethnicity" name="ethnicity" ng-options="c.value as c.name for c in chkEthnicityOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div> <div class="large-6 medium-6 columns"> <label>{{ \'nationality\' | translate }}</label> <select ng-model="provider.nationality" name="nationality" ng-options="c.countryCode as c.countryName group by c.continentName for c in chkNationalityOptions"> <option value="">{{ \'option_choose\' | translate }}</option> </select> </div>          </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'provider_languages\' | translate }} <a class="expandable right" ng-click="chkShowMoreLanguages = !chkShowMoreLanguages" ng-class="{true: \'expanded\', false: \'\'}[chkShowMoreLanguages]"><span>{{ \'show_more\' | translate }}</span></a></label> <div class="row"> <div class="small-6 columns checkbox-wrapper"> <input type="checkbox" ng-model="chkLanguageOptions[0].checked" name="pFormLanguagede" id="pFormLanguagede"> <label for="pFormLanguagede">{{ chkLanguageOptions[0].name }}</label> </div> <div class="small-6 columns checkbox-wrapper"> <input type="checkbox" ng-model="chkLanguageOptions[1].checked" name="pFormLanguageen" id="pFormLanguageen"> <label for="pFormLanguageen">{{ chkLanguageOptions[1].name }}</label> </div> </div> <div class="row" ng-show="chkShowMoreLanguages"> <div class="small-6 columns checkbox-wrapper" ng-repeat="language in chkMoreLanguageOptions"> <input type="checkbox" ng-model="language.checked" name="pFormLanguage{{language.value}}" id="pFormLanguage{{language.value}}"> <label for="pFormLanguage{{language.value}}">{{ language.name }}</label> </div> </div> </div> <div class="large-6 medium-6 columns"> <label>{{ \'app_language\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="provider.admin.langCode" name="appLangCode" required="true" ng-options="c.value as c.name for c in chkAppLangOptions"> </select> </div> <div class="large-6 medium-6 columns"> <label>{{ \'provider_interests\' | translate }}</label> <input type="text" ng-if="peppr.features.showFreeText" ng-model="provider.interests" name="interests" maxlength="120" placeholder="Literature, Music"> <div class="row" ng-if="!peppr.features.showFreeText"> <div class="small-6 columns checkbox-wrapper" ng-repeat="interest in chkInterestsOptions"> <input type="checkbox" ng-model="interest.checked" name="pFormInterest{{interest.value}}" id="pFormInterest{{interest.value}}"> <label for="pFormInterest{{interest.value}}">{{ interest.name }}</label> </div> </div> </div> <div class="large-6 medium-6 columns"> <label>{{ \'provider_food_preferences\' | translate }}</label> <input type="text" ng-if="peppr.features.showFreeText" ng-model="provider.foodPreferences" name="foodPreferences" maxlength="100" placeholder="Italian, French"> <div class="row" ng-if="!peppr.features.showFreeText"> <div class="small-6 columns checkbox-wrapper" ng-repeat="pref in chkFoodPrefOptions"> <input type="checkbox" ng-model="pref.checked" name="pFormFoodPref{{pref.value}}" id="pFormFoodPref{{pref.value}}"> <label for="pFormFoodPref{{pref.value}}">{{ pref.name }}</label> </div> </div> </div> <div class="large-6 medium-6 columns"> <label>{{ \'provider_drink_preferences\' | translate }}</label> <input type="text" ng-if="peppr.features.showFreeText" ng-model="provider.drinkPreferences" name="drinkPreferences" maxlength="100" placeholder="Wine, Champagne"> <div class="row" ng-if="!peppr.features.showFreeText"> <div class="small-6 columns checkbox-wrapper" ng-repeat="pref in chkDrinkPrefOptions"> <input type="checkbox" ng-model="pref.checked" name="pFormDrinkPref{{pref.value}}" id="pFormDrinkPref{{pref.value}}"> <label for="pFormDrinkPref{{pref.value}}">{{ pref.name }}</label> </div> </div> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showFreeText"> <label>{{ \'provider_occupation\' | translate }}</label> <input type="text" ng-model="provider.occupation" name="occupation" maxlength="40" placeholder="Graphic Designer">  </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showFreeText"> <label>{{ \'provider_perfume\' | translate }}</label> <input type="text" ng-model="provider.perfume" name="perfume" maxlength="25" placeholder="Chloe"> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showFreeText"> <label>{{ \'provider_dress_style\' | translate }}</label> <input type="text" ng-model="provider.dressStyle" name="dressStyle" maxlength="40" placeholder="elegant"> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showPrices"> <label>{{ \'provider_booking_upfront_hours\' | translate }}</label> <input type="number" name="bookingUpfrontHours" ng-model="provider.bookingUpfrontHours" min="2" step="0.5"> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showPrices"> <label>{{ \'provider_booking_min_hours\' | translate }}</label> <input type="number" name="bookingMinHours" ng-model="provider.bookingMinHours" min="0" step="0.5"> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showPrices"> <label>{{ \'provider_travel_confirmation_threshold_km\' | translate }}</label> <input type="number" name="travelConfirmationThresholdKm" ng-model="provider.travelConfirmationThresholdKm" min="0" step="5"> </div> <div class="large-6 medium-6 small-12 columns" ng-if="peppr.features.showPrices"> <label>{{ \'provider_price_per_hour\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="small-10 large-11 columns"> <input type="number" name="pricePerHour" ng-model="provider.pricePerHour" pp-has-error="" min="1" step="1" required="true" placeholder="{{ \'eur_per_hour\' | translate }}"> <small class="error">{{ \'provider_price_per_hour_error\' | translate }}</small> </div> <div class="small-2 large-1 columns"> <span class="postfix">â‚¬</span> </div> </div> </div> <div class="large-6 medium-6 columns" ng-show="provider.travelConfirmationThresholdKm &gt; 0" ng-if="peppr.features.showPrices"> <label>{{ \'provider_booking_upfront_hours\' | translate }} {{ \'for_travels\' | translate }}</label> <input type="number" name="bookingUpfrontHours" ng-model="provider.bookingUpfrontHoursTravel" min="0" step="0.5"> </div> <div class="large-6 medium-6 columns" ng-show="provider.travelConfirmationThresholdKm &gt; 0" ng-if="peppr.features.showPrices"> <label>{{ \'provider_booking_min_hours\' | translate }} {{ \'for_travels\' | translate }}</label> <input type="number" name="bookingMinHours" ng-model="provider.bookingMinHoursTravel" min="0" step="0.5"> </div> <div class="small-12 columns" ng-show="provider.discounts.length &gt; 0" ng-if="peppr.features.showPrices"> <label>{{ \'provider_price_discount\' | translate }}</label> <small>{{ \'provider_price_discount_instructions\' | translate }}</small> <div class="row collapse" ng-repeat="discount in provider.discounts"> <div class="small-3 columns"> <input type="number" name="minHours" ng-model="discount.minHours" min="1" step="1" required="true" placeholder="{{ \'min_booked_hours\' | translate }}"> </div> <div class="small-2 columns"> <span class="postfix">h</span> </div> <div class="small-3 columns"> <input type="number" name="pricePerHour" ng-model="discount.pricePerHour" min="1" step="any" required="true" placeholder="{{ \'eur_per_hour\' | translate }}"> </div> <div class="small-2 columns"> <span class="postfix">â‚¬</span> </div> <div class="small-2 columns"> <a class="postfix delete button" ng-click="deleteDiscount(discount)">&#215;</a> </div> </div> </div> <div class="small-12 columns show-all-attributes" ng-if="peppr.features.showPrices"> <label> <a ng-click="addPriceDiscount()"> {{ \'add_price_discount\' | translate }} </a> </label> </div> <div class="large-6 medium-6 columns" ng-if="peppr.features.showPrices"> <label>{{ \'provider_location_types\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row"> <div class="small-6 columns checkbox-wrapper" ng-repeat="loc in chkLocationTypeOptions"> <input type="checkbox" ng-model="loc.checked" id="pFormLocationType{{loc.value}}" name="pFormLocationType"> <label for="pFormLocationType{{loc.value}}">{{ loc.name }}</label> </div> </div> </div> <div class="large-6 medium-6 columns"> <label>{{ \'provider_location\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input class="location-search" ng-model="locationSearchInput" type="text" ng-keyup="locationSearchInputUpdated()" ng-focus="inputGotFocus()" ng-blur="inputLostFocus()" placeholder="{{ \'search_map\' | translate }}"> <div class="location-suggestions"> <div class="data-loading-indicator" ng-show="locationSearchActive"></div> <div class="location-suggestion" ng-repeat="location in locationSearchResults" ng-click="chooseLocationResult(location)"> {{ locationResultDisplayStr(location) }} </div> </div> <div class="map-wrapper"> <img class="crosshair" src="https://cdn3.iconfinder.com/data/icons/block/32/target-128.png"> <ui-gmap-google-map ng-attr-center="mapCenter" ng-attr-zoom="mapCenter.zoom" ng-attr-draggable="true" ng-attr-events="mapEvents"> </ui-gmap-google-map></div> </div> <div class="small-12 columns services" ng-if="peppr.features.showPrices"> <label>{{ \'provider_travel_types\' | translate }}</label> </div> <div class="small-6 columns checkbox-wrapper" ng-repeat="travel in chkTravelTypeOptions" ng-if="peppr.features.showPrices"> <input type="checkbox" ng-model="travel.checked" id="pFormTravelType{{language.value}}"> <label for="pFormTravelType{{language.value}}">{{ travel.name }}</label> </div> </div> <div class="row" ng-if="peppr.features.showServices"> <div class="small-12 columns services"> <label>{{ \'provider_available_services\' | translate }}</label> </div> <div class="large-6 medium-6 small-12 columns services" ng-repeat="service in chkServiceOptions | filter:filterBasicServices"> <div class="row"> <div class="small-12 columns checkbox-wrapper"> <input id="pFormServiceCheckbox{{service.id}}" ng-model="service.checked" type="checkbox"> <label for="pFormServiceCheckbox{{service.id}}">{{service.name}}</label> </div> </div> <div class="row text-right"> <div class="small-12 columns checkbox-wrapper"> <input id="pFormServiceIncludedCheckbox{{service.id}}" ng-model="service.included" ng-disabled="!service.checked" type="checkbox" class="right"> <label for="pFormServiceIncludedCheckbox{{service.id}}" class="right">{{ \'service_included\' | translate }}</label> <input id="pFormServiceRequiresCallCheckbox{{service.id}}" ng-model="service.requiresPhoneCall" ng-disabled="!service.checked" type="checkbox" class="right"> <label for="pFormServiceRequiresCallCheckbox{{service.id}}" class="right">{{ \'service_requires_phone_call\' | translate }}</label> </div> </div> <div class="row collapse"> <div class="medium-10 small-11 columns"> <input id="pFormServiceFee{{service.id}}" ng-model="service.fee" ng-disabled="service.included" type="number" min="1" step="0.5" placeholder="{{ \'service_fee\' | translate }}" class="service-fee"> </div> <div class="medium-2 small-1 columns"> <span class="postfix radius">â‚¬</span> </div> </div> </div> </div> <div class="row" ng-if="peppr.features.showServices"> <div class="small-12 columns show-all-attributes"> <label> <a class="expandable right" ng-click="hack.chkShowAllServices = !hack.chkShowAllServices" ng-class="{true: \'expanded\', false: \'\'}[hack.chkShowAllServices]"> <span>{{ \'show_more_services\' | translate }}</span> </a> </label> </div> </div> <div class="row" ng-show="hack.chkShowAllServices" ng-if="peppr.features.showServices"> <div class="small-12 columns services"> <label>{{ \'available_extra_services\' | translate }}</label> </div> <div class="large-6 medium-6 small-12 columns services" ng-repeat="service in chkServiceOptions | filter:filterExtendedServices"> <div class="row"> <div class="small-12 columns checkbox-wrapper"> <input id="pFormServiceCheckbox{{service.id}}" ng-model="service.checked" type="checkbox"> <label for="pFormServiceCheckbox{{service.id}}">{{service.name}}</label> </div> </div> <div class="row text-right"> <div class="small-12 columns checkbox-wrapper"> <input id="pFormServiceIncludedCheckbox{{service.id}}" ng-model="service.included" ng-disabled="!service.checked" type="checkbox" class="right"> <label for="pFormServiceIncludedCheckbox{{service.id}}" class="right">{{ \'service_included\' | translate }}</label> <input id="pFormServiceRequiresCallCheckbox{{service.id}}" ng-model="service.requiresPhoneCall" ng-disabled="!service.checked" type="checkbox" class="right"> <label for="pFormServiceRequiresCallCheckbox{{service.id}}" class="right">{{ \'service_requires_phone_call\' | translate }}</label> </div> </div> <div class="row collapse"> <div class="medium-10 small-11 columns"> <input id="pFormServiceFee{{service.id}}" ng-model="service.fee" ng-disabled="service.included" type="number" min="1" step="0.5" placeholder="{{ \'service_fee\' | translate }}" class="service-fee"> </div> <div class="medium-2 small-1 columns"> <span class="postfix radius">â‚¬</span> </div> </div> </div> </div> <div class="row" ng-if="peppr.features.showAvailability"> <div class="small-12 columns availability"> <label>{{ \'availability\' | translate }}</label> </div> <div class="large-6 medium-6 small-12 columns availability" ng-repeat="avail in chkAvailabilityOptions"> <div class="row"> <div class="large6 medium-6 small-6 columns checkbox-wrapper"> <input id="pFormAvailabilityCheckbox{{avail.day}}" ng-model="avail.checked" type="checkbox"> <label for="pFormAvailabilityCheckbox{{avail.day}}">{{avail.name}}</label> </div> </div> <div class="row"> <div class="small-6 columns"> <input type="time" ng-pattern="peppr.validators.time_hm" name="{{\'fromTime\' + avail.day}}" ng-model="avail.fromTimeDate" pp-has-error="" ng-disabled="!avail.checked" placeholder="09:00"> <small class="error">{{ \'provider_availability_time_error\' | translate }}</small> </div> <div class="small-6 columns"> <input type="time" ng-pattern="peppr.validators.time_hm" name="{{\'toTime\' + avail.day}}" ng-model="avail.toTimeDate" pp-has-error="" ng-disabled="!avail.checked" placeholder="22:00"> <small class="error">{{ \'provider_availability_time_error\' | translate }}</small> </div> </div> </div> </div>                           <div class="row" ng-if="peppr.features.showFreeText"> <div class="small-12 columns"> <label>{{ \'provider_description\' | translate }}</label> <textarea ng-model="provider.description" placeholder="{{ \'provider_notes_placeholder\' | translate }}"></textarea> </div> </div> <div class="row" ng-if="peppr.features.showFreeText"> <div class="small-12 columns"> <label>{{ \'provider_booking_notes\' | translate }}</label> <textarea ng-model="provider.providerBookingNotes" placeholder="{{ \'provider_booking_notes_placeholder\' | translate }}"></textarea> </div> </div> <div class="row" ng-if="!providerId &amp;&amp !provider.agency.id"> <div class="small-12 columns signup-confirm-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="hack.cbConfirmChecked" id="pFormConfirmCb"> </div> <label for="pFormConfirmCb"> {{ \'age_disclaimer\' | translate }} {{ \'offline_disclaimer\' | translate }} </label> </div> </div> <div class="row"> <div class="small-12 columns"> <button ng-hide="providerId" type="submit" class="button" ng-disabled="(!hack.cbConfirmChecked &amp;&amp; !providerId &amp;&amp !provider.agency.id) || submitInProgress || signupprofessional.$invalid">{{ \'create_provider\' | translate }} <small>{{ \'create_not_published_now\' | translate }}</small></button> <button ng-show="providerId" type="submit" class="button" ng-disabled="submitInProgress">{{ \'save\' | translate }}</button> </div> </div> </form> </div> </div> </section> '), e.put("app/views/tnc.html", '<section class="tnc-section view-tnc row centered"> <div class="agb-wrapper medium-8 medium-offset-2 large-6 large-offset-3 columns" ng-include="peppr.isItaly ? \'app/views/content_tnc_it.html\' : \'app/views/content_tnc.html\'"> </div></section>'), e.put("app/views/user.html", '<section class="user-section view-user"> <div class="row"> <div class="medium-8 large-6 column"> <h1>{{ \'welcome_slogan\' | translate }}</h1> <h5>{{ user.forename || user.username }}</h5> </div> </div> <div class="row client-location location-change"> <div class="medium-8 large-6 columns"> <h3>{{ \'change_location_title\' | translate }}</h3> <form ng-submit="clickEnterLocation()" novalidate=""> <div class="row collapse zip"> <div class="small-10 columns"> <input type="text" ng-model="peppr.clientLocation.zipCode" placeholder="{{ \'zip_code_country\' | translate }}" required="true"> </div> <div class="small-2 columns locate-me" ng-class="{ working: peppr.clientLocation.working }"> <span class="postfix" ng-click="clickLocateMe()"><i class="peppr-icon-gps"></i></span> </div> </div> <div class="row collapse geocoded-address" ng-show="peppr.clientLocation.geocodedAddress"> <div class="columns"> <div> <small>{{ peppr.clientLocation.geocodedAddress }}</small> </div> </div> </div> <div class="row"> <div class="columns"> <button type="submit" ng-disabled="!peppr.clientLocation.isValid" class="button">{{ \'save\' | translate }}</button> </div> </div> </form> </div> </div> <div class="row"> <div class="medium-8 large-6 columns"> <h3><a class="expandable" ng-click="chkShowEditProfile = !chkShowEditProfile" ng-class="{true: \'expanded\', false: \'\'}[chkShowEditProfile]"><span>{{ \'edit_user_profile_title\' | translate }}</span></a></h3> <form name="userprofileform" ng-submit="clickEditProfile()" ng-show="chkShowEditProfile"> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'forename\' | translate }} <small>{{ \'required\' | translate }}</small></label> <input type="text" name="forename" ng-model="user.forename" pp-has-error="" required="true" placeholder="John"> <small class="error">{{ \'provider_name_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'app_language\' | translate }} <small>{{ \'required\' | translate }}</small></label> <select ng-model="user.langCode" name="appLangCode" pp-has-error="" required="true" ng-options="c.value as c.name for c in chkAppLangOptions"> </select> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'email\' | translate }}</label> <input type="text" name="email" ng-model="user.email" required="true" disabled="disabled"> </div> <div class="large-6 medium-6 columns"> <label class="with-description">{{ \'phone_number\' | translate }} <small>{{ \'required\' | translate }}</small></label> <div class="row collapse"> <div class="large-1 medium-1 small-1 columns"> <span class="prefix radius">+</span> </div> <div class="large-4 medium-4 small-4 columns"> <select ng-model="phoneNumberCountry" required="true" ng-options="c.value as c.name for c in chkPhoneNumberCountryOptions"></select> </div> <div class="large-7 medium-7 small-7 columns"> <input type="tel" name="phoneNumber" ng-model="phoneNumber" pp-has-error="" required="true" min="4" ng-pattern="peppr.validators.phone_number_noprefix" placeholder="176 1234 1234"> <small class="error">{{ \'provider_phone_error\' | translate }}</small> </div> </div> <small class="phone-validate alert-box warning" ng-hide="user.phoneValid">{{ \'please_validate_your_phone_number\' | translate}} <a ui-sref="app.phone_confirm({lang: activeLang})">{{ \'confirm_now\' | translate }}</a></small> </div> </div> <div class="row"> <div class="large-6 medium-6 columns"> <label>{{ \'password\' | translate }}</label> <input type="password" name="password" ng-model="password" id="uFormPassword" pp-has-error="" ng-pattern="peppr.validators.relaxed_password" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_error\' | translate }}</small> </div> <div class="large-6 medium-6 columns"> <label>{{ \'password_confirm\' | translate }}</label> <input type="password" name="passwordConfirm" ng-model="password_confirm" pp-equal-to="password" pp-has-error="" ng-pattern="peppr.validators.relaxed_password" placeholder="aG0odPa$$w0rd"> <small class="error">{{ \'password_confirm_error\' | translate }}</small> </div> </div> <div class="row"> <div class="column newsletter-checkbox-wrapper"> <div class="checkbox-wrapper"> <input type="checkbox" ng-model="user.newsletterSubscribed" id="uFormNewsletterSubscribed"> </div> <label for="uFormNewsletterSubscribed"> {{ \'newsletter_subsribed\' | translate }} </label> </div> </div> <div class="row"> <div class="small-12 columns"> <ul class="button-group"> <li><button type="submit" class="button" ng-disabled="userprofileform.$invalid">{{ \'update_profile\' | translate }}</button></li> <li><a class="button" ng-click="deleteAccount()">{{ \'delete_profile\' | translate }}</a></li> </ul> </div> </div> </form> </div> </div> </section>')
}]);
//# sourceMappingURL=../maps/scripts/app-05dd8bf4.js.map
