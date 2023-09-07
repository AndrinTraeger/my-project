export const users = 
{
prename: "Andrin",
name: "Traeger",
birthday:  new Date("2004-06-11"),
username: "andT",
email: "andrin.traeger@hotmail.com",
password: "123456",
img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
loggedIn: null,
};


export const phones = [
    {
        productId: 1,
        id: 1,
        title: "Iphone 14 128GB",
        price: 1234.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276949/fee_325_225_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276949/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276951/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276953/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_103232321/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_103232337/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        type: "Smartphone",
        description: (
            <div style={{marginTop: "5%"}}>
                <h1 style={{color: "dodgerblue"}}>Produktbeschreibung</h1>
                <br/>
                <h3>iPhone 14. Voller fantastischer Features.</h3>
                <br/>
                <p>iPhone 14. Mit dem beeindruckendsten Zwei-Kamera-System auf einem iPhone. Mach brillante Fotos bei wenig oder hellem Licht. Die Unfallerkennung[1], ein wichtiges Sicherheitsfeature, kann einen schweren Autounfall erkennen und Hilfe rufen.</p>
                <br/>
                <h3>Bullet Points mit wichtigen Features</h3>
                <br/>
                <p>6,1" Super Retina XDR Display
                    <br/>
                    Batterielaufzeit für den ganzen Tag und bis zu 20 Std. Videowiedergabe
                    <br/>
                    Branchenführende Features für Langlebigkeit wie Ceramic Shield und Wasserschutz
                    <br/>
                    A15 Bionic Chip mit 5Core GPU für superschnelle Performance. Superschneller 5G Mobilfunk.
                    <br/>
                    Fortschrittliches Kamera-System für bessere Fotos bei jedem Licht Action Modus für ruckelfreie, handgefilmte Videos
                    <br/>
                    Kinomodus jetzt in 4K Dolby Vision mit bis zu 30 fps
                    <br/>
                    Eine wichtige Sicherheitstechnologie – die Unfallerkennung kann einen schweren Autounfall erkennen und Hilfe rufen
                    <br/>
                    iOS 16 gibt dir noch mehr Möglichkeiten zum Personalisieren, Kommunizieren und Teilen
                    <br/>
                    <h3>Rechtliche Hinweise</h3>
                    <br/>
                    Das iPhone 14 kann einen schweren Autounfall erkennen und Hilfe rufen. Erfordert eine Mobilfunkverbindung oder WLAN Anrufe.
                    <br/>
                    Das Display hat gerundete Ecken. Als Standard-Rechteck gemessen hat das Display eine Diagonale von 6,06" (15,40 cm). Der tatsächlich sichtbare Displaybereich ist kleiner.
                    <br/>
                    Die Batterielaufzeit variiert abhängig von Verwendung und Konfiguration. Weitere Infos unter apple.com/chde/batteries
                    <br/>
                    Das iPhone 14 ist vor Wasser und Staub geschützt und wurde unter kontrollierten Laborbedingungen getestet. Es ist nach IEC Norm 60529 unter IP68 klassifiziert (bis zu 6 Meter für bis zu 30 Minuten). Der Schutz vor Wasser und Staub ist nicht dauerhaft und kann mit der Zeit als Resultat von normaler Abnutzung geringer werden. Ein nasses iPhone darf nicht geladen werden. Im Benutzerhandbuch befindet sich eine Anleitung zum Reinigen und Trocknen. Die Garantie deckt keine Schäden durch Flüssigkeiten ab.
                    <br/>
                    Datentarif erforderlich. 5G ist in ausgewählten Ländern und über ausgewählte Anbieter verfügbar. Die Geschwindigkeit kann je nach Standort und Anbieter variieren. Nähere Informationen zur 5G Unterstützung gibt es beim jeweiligen Mobilfunkanbieter und auf apple.com/chde/iphone/cellular.
                    <br/>
                    Einige Features sind u. U. nicht in allen Ländern oder Regionen verfügbar.
                </p>
            </div>
        ),
        specification:(
            <div style={{marginTop: "5%"}}>
                <h1 style={{color: "dodgerblue"}}>Spezifikationen</h1>
                <table className="styled-table">
                    <thead>
                        <th>Produkttyp:</th>
                        <th>Smartphone</th>
                    </thead>
                    <thead>
                        <th>Betriebssystem:</th>
                        <th>iOS 16</th>
                    </thead>
                    <thead>
                        <th>Prozessor:</th>
                        <th>A15 Bionic Chip (6‑Core CPU mit 2 Performance-Kernen und 4 Effizienz-Kernen, 5‑Core GPU, 16‑Core Neural Engine)</th>
                    </thead>
                    <thead>
                        <th>Speicherkapazität</th>
                        <th>128 GB</th>
                    </thead>
                    <thead>
                        <th>Steckplatz für Speicherkarten:</th>
                        <th>nein</th>
                    </thead>
                    <thead>
                        <th>Arbeitsspeicher Grösse:</th>
                        <th>6 GB</th>
                    </thead>
                    <thead>
                        <th>Frequenzbereich(Band):</th>
                        <th>GSM/EDGE (850, 900, 1800, 1900 MHz), UMTS/HSPA+/DC‑HSDPA (850, 900, 1700/2100, 1900, 2100 MHz), FDD‑LTE (Bänder 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 66), TD‑LTE (Bänder 34, 38, 39, 40, 41, 42, 46, 48, 53), 5G NR (Bänder n1, n2, n3, n5, n7, n8, n12, n20, n25, n26, n28, n30, n38, n40, n41, n48, n53, n66, n70, n77, n78, n79)</th>
                    </thead>
                    <thead>
                        <th></th>
                        <th></th>
                    </thead>
                </table>
            </div>
        )
        
    },
    {
        productId: 2,
        id: 2,
        title: "Iphone 14 64GB",
        price: 899.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276949/fee_325_225_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276949/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276951/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97276953/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_103232321/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_103232337/fee_786_587_png/APPLE-iPhone-14---Smartphone-%286.1-%22--128-GB--Starlight%29",
        type: "Smartphone",
        description: ""
        
    },
    {
        productId: 3,
        id: 3,
        title: "Iphone 14 Pro 128GB",
        price: 1449.99,
        img: "https://cdn.competec.ch/images2/4/1/7/235129714/235129714_xxl3.jpg",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277788/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277789/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277790/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277791/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277792/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId:4,
        id: 4,
        title: "Iphone 14 Pro 64GB",
        price: 1249.99,
        img: "https://cdn.competec.ch/images2/4/1/7/235129714/235129714_xxl3.jpg",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277788/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277789/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277790/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277791/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277792/fee_786_587_png/APPLE-iPhone-14-Pro---Smartphone-%286.1-%22--128-GB--Space-Black%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 5,
        id: 5,
        title: "Samsung Z Fold5 128GB",
        price: 1999.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449327/fee_325_225_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449327/fee_786_587_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449328/fee_786_587_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449330/fee_786_587_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449352/fee_786_587_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108449364/fee_786_587_png/SAMSUNG-Galaxy-Z-Fold5---Smartphone-%287.6-%22--512-GB--Cream%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 6,
        id: 6,
        title: "Samsung Galaxy S23 128GB",
        price: 1249.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653270/fee_194_131_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653270/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653272/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653274/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653275/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653276/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 7,
        id: 7,
        title: "Samsung Galaxy S23 64GB",
        price: 999.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653270/fee_194_131_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653270/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653272/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653274/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653275/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101653276/fee_786_587_png/SAMSUNG-Galaxy-S23---Smartphone-%286.1-%22--256-GB--Green%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 8,
        id: 8,
        title: "Samsung Galaxy S23 Ultra 128GB",
        price: 1799.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660392/fee_194_131_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660392/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660469/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660517/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660566/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660620/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 9,
        id: 9,
        title: "Samsung Galaxy S23 Ultra 64GB",
        price: 1499.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660392/fee_194_131_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660392/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660469/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660517/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660566/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101660620/fee_786_587_png/SAMSUNG-Galaxy-S23-Ultra---Smartphone-%286.8-%22--512-GB--Lavander%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 10,
        id: 10,
        title: "Huawei P60 Pro 256GB",
        price: 1100.00,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735160/fee_325_225_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735160/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735205/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735207/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735218/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735221/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 11,
        id: 11,
        title: "Huawei P60 Pro 128GB",
        price: 799.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735160/fee_325_225_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735160/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735205/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735207/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735218/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105735221/fee_786_587_png/HUAWEI-P60-Pro---Smartphone-%286.67-%22--256-GB--Schwarz%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 12,
        id: 12,
        title: "Google Pixel 7 Pro 128GB",
        price: 719.00,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710506/fee_325_225_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710506/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710508/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710510/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710513/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710515/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 13,
        id: 13,
        title: "Google Pixel 7 Pro 64GB",
        price: 559.00,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710506/fee_325_225_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710506/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710508/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710510/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710513/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105710515/fee_786_587_png/GOOGLE-Pixel-7-Pro---Smartphone-%286.7-%22--256-GB--Snow%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 14,
        id: 14,
        title: "Nokia G60 128GB",
        price: 299.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342341/fee_325_225_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342341/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342342/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342343/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342344/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342345/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 15,
        id: 15,
        title: "Nokia G60 64GB",
        price: 199.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342341/fee_325_225_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342341/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342342/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342343/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342344/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99342345/fee_786_587_png/NOKIA-G60-5G---Smartphone-%286.58-%22--128-GB--Grau%29",
        type: "Smartphone",
        description: ""
    },
    {
        productId: 16,
        id: 16,
        title: "Nokia 225 4G",
        price: 59.99,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568900/fee_325_225_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568900/fee_786_587_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568903/fee_786_587_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568904/fee_786_587_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568907/fee_786_587_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78568910/fee_786_587_png/NOKIA-225-4G---Mobiltelefon-%28Schwarz%29",
        type: "Smartphone",
        description: ""
    }
]


    export const tablets = [
        {
            productId: 1,
            id: 1,
            title: "iPad 11 Pro 128GB",
            price: 929.00,
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg" ,           
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698906/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698957/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698958/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698959/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698962/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            type: "Tablet",
        },
        {
            productId: 2,
            id: 2,
            title: "iPad 11 Pro 64GB",
            price: 819.00,
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698906/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698957/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698958/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698959/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98698962/fee_786_587_png/APPLE-iPad-Pro-%282022%29-Wi-Fi---Tablet-%2811-%22--128-GB--Silver%29",
            type: "Tablet",
        },
        {
            productId: 3,
            id: 3,
            title: "iPad 11 128GB",
            price: 789.00,
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269036/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269040/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269057/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269062/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269065/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            type: "Tablet",
        },
        {
            productId: 4,
            id: 4,
            title: "iPad 11 64GB",
            price: 689.00,
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269036/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269040/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269057/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269062/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269065/fee_786_587_png/APPLE-iPad-%282021%29-Wi-Fi---Tablet-%2810.2-%22--64-GB--Silver%29",
            type: "Tablet",
        },
        {
            productId: 5,
            id: 5,
            title: "Samsung Galaxy Tab S9 Ultra 256GB",
            price: 1359.00,
            img: "https://images.samsung.com/is/image/samsung/p6pim/ch/2307/gallery/ch-galaxy-tab-s9-plus-5g-x816-sm-x816bzaeeue-thumb-537345348?$344_344_PNG$",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961215/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961234/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961241/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961245/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961246/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            type: "Tablet",
        },
        {
            productId: 6,
            id: 6,
            title: "Samsung Galaxy Tab S9 Ultra 128GB",
            price: 1129.00,
            img: "https://images.samsung.com/is/image/samsung/p6pim/ch/2307/gallery/ch-galaxy-tab-s9-plus-5g-x816-sm-x816bzaeeue-thumb-537345348?$344_344_PNG$",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961215/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961234/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961241/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961245/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961246/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            type: "Tablet",
        },
        {
            productId: 7,
            id: 7,
            title: "Samsung Galaxy Tab S9 256GB",
            price: 1109.90,
            img: "https://images.samsung.com/is/image/samsung/p6pim/ch/2307/gallery/ch-galaxy-tab-s9-plus-5g-x816-sm-x816bzaeeue-thumb-537345348?$344_344_PNG$",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961215/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961234/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961241/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961245/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961246/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            type: "Tablet",
        },
        {
            productId: 8,
            id: 8,
            title: "Samsung Galaxy Tab S9 128GB",
            price: 999.99,
            img: "https://images.samsung.com/is/image/samsung/p6pim/ch/2307/gallery/ch-galaxy-tab-s9-plus-5g-x816-sm-x816bzaeeue-thumb-537345348?$344_344_PNG$",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961215/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961234/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961241/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961245/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107961246/fee_786_587_png/SAMSUNG-Galaxy-Tab-S9-Ultra-5G---Tablet-%2814.6-%22--256-GB--Graphite%29",
            type: "Tablet",
        },
    ]

    export const laptops = [
        {
            productId: 1,
            id: 1,
            title: "MacBook Pro 2022",
            price: 1268.00,
            img: "https://static.digitecgalaxus.ch/Files/7/1/2/6/7/4/5/8/MacBook_Pro_13_in_Space_Gray_PDP_Image_Position-1__WWEN.jpg",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94605430/fee_786_587_png/APPLE-MacBook-Pro-%282022%29-M2---Notebook-%2813.3-%22--256-GB-SSD--Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94605431/fee_786_587_png/APPLE-MacBook-Pro-%282022%29-M2---Notebook-%2813.3-%22--256-GB-SSD--Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94605433/fee_786_587_png/APPLE-MacBook-Pro-%282022%29-M2---Notebook-%2813.3-%22--256-GB-SSD--Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94605434/fee_786_587_png/APPLE-MacBook-Pro-%282022%29-M2---Notebook-%2813.3-%22--256-GB-SSD--Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94605439/fee_786_587_png/APPLE-MacBook-Pro-%282022%29-M2---Notebook-%2813.3-%22--256-GB-SSD--Silver%29",
            type: "Laptop",
        },
        {
            productId: 2,
            id: 2,
            title: "MacBook Pro (2023)",
            price: 1900.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379789/fee_325_225_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379789/fee_786_587_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379794/fee_786_587_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379798/fee_786_587_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379807/fee_786_587_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101379818/fee_786_587_png/APPLE-MacBook-Pro-%282023%29-M2-Pro---Notebook-%2814.2-%22--512-GB-SSD--Space-Gray%29",
            type: "Laptop",
        },
        {
            productId: 3,
            id: 3,
            title: "LENOVO IdeaPad 1",
            price: 349.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855456/fee_194_131_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855456/fee_786_587_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855458/fee_786_587_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855463/fee_786_587_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855471/fee_786_587_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92855477/fee_786_587_png/LENOVO-IDEA-IdeaPad-1-15ALC7---Notebook-%2815.6-%22--256-GB-SSD--Cloud-Grey%29",
            type: "Laptop",
        },
        {
            productId: 4,
            id: 4,
            title: "ASUS Vivobook 15",
            price: 749.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992369/fee_194_131_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992369/fee_786_587_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992370/fee_786_587_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992371/fee_786_587_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992372/fee_786_587_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94992374/fee_786_587_png/ASUS-Vivobook-15-X1502ZA-BQ763W---Notebook-%2815.6-%22--512-GB-SSD--Icelight-Silver%29",
            type: "Laptop",
        },
        {
            productId: 5,
            id: 5,
            title: "ACER Aspire 3",
            price: 549.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482382/fee_194_131_png/ACER-Aspire-3-A317-33-C4QQ---Notebook-%2817.3-%22--512-GB-SSD--Pure-Silver%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482373/fee_786_587_png/ACER-Aspire-3-A315-35-C9SV---Notebook-%2815.6-%22--512-GB-SSD--Pure-Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482374/fee_786_587_png/ACER-Aspire-3-A315-35-C9SV---Notebook-%2815.6-%22--512-GB-SSD--Pure-Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482375/fee_786_587_png/ACER-Aspire-3-A315-35-C9SV---Notebook-%2815.6-%22--512-GB-SSD--Pure-Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482377/fee_786_587_png/ACER-Aspire-3-A315-35-C9SV---Notebook-%2815.6-%22--512-GB-SSD--Pure-Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90482378/fee_786_587_png/ACER-Aspire-3-A315-35-C9SV---Notebook-%2815.6-%22--512-GB-SSD--Pure-Silver%29",
            type: "Laptop",
        },
        {
            productId: 6,
            id: 6,
            title: "MacBook Air (2023)",
            price: 1299.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729935/fee_325_225_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729935/fee_786_587_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729936/fee_786_587_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729937/fee_786_587_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729941/fee_786_587_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106729942/fee_786_587_png/APPLE-MacBook-Air-%282023%29-M2---Notebook-%2815.3-%22--256-GB-SSD--Starlight%29",
            type: "Laptop",
        },
        {
            productId: 7,
            id: 7,
            title: "PEAQ Evolution",
            price: 499.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340111/fee_194_131_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340111/fee_786_587_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340126/fee_786_587_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340132/fee_786_587_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340148/fee_786_587_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91340182/fee_786_587_png/PEAQ-Evolution-V140V-5T812C---Notebook-%2814.1-%22--512-GB-SSD--Schwarz%29",
            type: "Laptop",
        },
        {
            productId: 8,
            id: 8,
            title: "HP 15",
            price: 599.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777017/fee_325_225_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777017/fee_786_587_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777018/fee_786_587_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777019/fee_786_587_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777020/fee_786_587_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101777022/fee_786_587_png/HP-15-fc0434nz---Notebook-%2815.6-%22--512-GB-SSD--Jet-Black%29",
            type: "Laptop",
        },
        {
            productId: 9,
            id: 9,
            title: "ASUS Vivobook 16X",
            price: 1099.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240758/fee_194_131_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240758/fee_786_587_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240759/fee_786_587_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240760/fee_786_587_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240778/fee_786_587_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105240780/fee_786_587_png/ASUS-Vivobook-16X-K3605ZF-PL163W---Notebook-%2816-%22--1-TB-SSD--Indie-Black%29",
            type: "Laptop",
        },
        {
            productId: 10,
            id: 10,
            title: "Microsoft Surface-Laptop 5",
            price: 939.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479589/fee_194_131_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--256-GB-SSD--Platin%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479615/fee_786_587_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--512-GB-SSD--Platin%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479631/fee_786_587_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--512-GB-SSD--Platin%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479641/fee_786_587_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--512-GB-SSD--Platin%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479649/fee_786_587_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--512-GB-SSD--Platin%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98479659/fee_786_587_png/MICROSOFT-Surface-Laptop-5---Notebook-%2813.5-%22--512-GB-SSD--Platin%29",
            type: "Laptop",
        },
    ]

    export const computers = [
        {
            productId: 1,
            id: 1,
            title: "Lenovo Legion T5i",
            price: 799.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148664/fee_325_225_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148664/fee_786_587_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148674/fee_786_587_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148665/fee_786_587_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148671/fee_786_587_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101148672/fee_786_587_png/LENOVO-Legion-T5-26IAB7---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i7--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-RTX%E2%84%A2-3070--Schwarz",
            type: "Pc",
        },
        {
            productId: 2,
            id: 2,
            title: "Acer Aspire Xc-1760",
            price: 629.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730616/fee_325_225_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i3-i3-12100--512-GB-SSD--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730620/fee_786_587_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730621/fee_786_587_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730622/fee_786_587_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730620/fee_786_587_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD--Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90730621/fee_786_587_png/ACER-Aspire-XC-1760---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD--Schwarz%29",
            type: "Pc",
        },
        {
            productId: 3,
            id: 3,
            title: "Lenovo IdeaCentre 3",
            price: 599.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421094/fee_325_225_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421094/fee_786_587_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421093/fee_786_587_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421097/fee_786_587_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421099/fee_786_587_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94421101/fee_786_587_png/LENOVO-IDEA-IdeaCentre-3-07IAB7---Desktop-PC-%28Intel%C2%AE-Core%E2%84%A2-i5-i5-12400--512-GB-SSD---1-TB-HDD--Mineralgrau%29",
            type: "Pc",
        },
        {
            productId: 4,
            id: 4,
            title: "Asus VIVO AiO M3700WYAK",
            price: 1199.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_95555971/fee_325_225_png/ASUS-Vivo-AiO-M3700WYAK-WA025W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90819252/fee_786_587_png/ASUS-Vivo-AiO-M3700WUAK-WA046W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90819254/fee_786_587_png/ASUS-Vivo-AiO-M3700WUAK-WA046W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90819257/fee_786_587_png/ASUS-Vivo-AiO-M3700WUAK-WA046W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90819258/fee_786_587_png/ASUS-Vivo-AiO-M3700WUAK-WA046W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90819260/fee_786_587_png/ASUS-Vivo-AiO-M3700WUAK-WA046W---All-in-One-PC-%2827-%22--512-GB-SSD---1-TB-HDD--Weiss%29",
            type: "Pc",
        },
        {
            productId: 5,
            id: 5,
            title: "Lenovo IdeaCentre AIO 3",
            price: 949.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934117/fee_325_225_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934117/fee_786_587_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934122/fee_786_587_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934161/fee_786_587_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934170/fee_786_587_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94934178/fee_786_587_png/LENOVO-IDEA-IdeaCentre-AIO-3-24IAP7---All-in-One-PC-%2823.8-%22--512-GB-SSD--Schwarz%29",
            type: "Pc",
        },
        {
            productId: 6,
            id: 6,
            title: "Acer Aspire S27-1755",
            price: 1499.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894792/fee_325_225_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894792/fee_786_587_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894794/fee_786_587_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894795/fee_786_587_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894796/fee_786_587_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102894797/fee_786_587_png/ACER-Aspire-S27-1755---All-in-One-PC-%2827-%22--1-TB-SSD--Schwarz%29",
            type: "Pc",
        },
        {
            productId: 7,
            id: 7,
            title: "HP ENVY 34",
            price: 2799.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242952/fee_325_225_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242952/fee_786_587_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242956/fee_786_587_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242963/fee_786_587_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242973/fee_786_587_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100242926/fee_786_587_png/HP-ENVY-34-c1724nz---All-in-One-PC-%2834-%22--1-TB-SSD--Turbo-Silver%29",
            type: "Pc",
        },
        {
            productId: 8,
            id: 8,
            title: "HP Victus TG02",
            price: 1074.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818456/fee_325_225_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818456/fee_786_587_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818457/fee_786_587_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818458/fee_786_587_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818454/fee_786_587_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90818455/fee_786_587_png/HP-Victus-TG02-0504nz---Gaming-PC--Intel%C2%AE-Core%E2%84%A2-i5--512-GB-SSD---1-TB-HDD--16-GB-RAM--NVIDIA%C2%AE-GeForce%C2%AE-GTX-1650--Ceramic-White",
            type: "Pc",
        }
    ]

    export const others = [
        {
            productId: 1,
            id: 1,
            title: "SONY WH-1000XM5",
            price: 229.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97648465/fee_325_225_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97648465/fee_786_587_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94150563/fee_786_587_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76352783/fee_786_587_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76352840/fee_786_587_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76352680/fee_786_587_png/SONY-WH-1000XM4---Bluetooth-Noise-Cancelling-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
            type: "Headphones",
        },
        {
            productId: 2,
            id: 2,
            title: "Lenovo E1 Pro",
            price: 39.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85872785/fee_325_225_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85872785/fee_786_587_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85872789/fee_786_587_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85872790/fee_786_587_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85873349/fee_786_587_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Silber-Grau%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85873351/fee_786_587_png/LENOVO-E1-Pro---Smartwatch-%28Silikon--Silber-Grau%29",
            type: "Smartwatch"
        },
        {
            productId: 3,
            id: 3,
            title: "Airpods (3. Generation)",
            price: 174.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88194265/fee_325_225_png/APPLE-AirPods-%283.-Generation%29---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97340651/fee_786_587_png/APPLE-AirPods-%283.-Generation%29-mit-Lightning-Ladecase---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97340652/fee_786_587_png/APPLE-AirPods-%283.-Generation%29-mit-Lightning-Ladecase---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97340661/fee_786_587_png/APPLE-AirPods-%283.-Generation%29-mit-Lightning-Ladecase---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97340667/fee_786_587_png/APPLE-AirPods-%283.-Generation%29-mit-Lightning-Ladecase---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97340668/fee_786_587_png/APPLE-AirPods-%283.-Generation%29-mit-Lightning-Ladecase---True-Wireless-Kopfh%C3%B6rer-%28In-ear--Weiss%29",
            type: "Headphones",
        },
        {
            productId: 4,
            id: 4,
            title: "Apple Watch Series 8",
            price: 409.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288347/fee_325_225_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288347/fee_786_587_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288349/fee_786_587_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288351/fee_786_587_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288353/fee_786_587_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97288365/fee_786_587_png/APPLE-Watch-Series-8-%28GPS%29-45-mm---Smartwatch-%28Regular-140---220-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            type: "Smartwatch",
        },
        {
            productId: 5,
            id: 5,
            title: "Apple Watch SE (2. Generation)",
            price: 349.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294790/fee_325_225_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294790/fee_786_587_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294795/fee_786_587_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294802/fee_786_587_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294805/fee_786_587_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97294814/fee_786_587_png/APPLE-Watch-SE-%282.-Generation--GPS---Cellular%29-44-mm---Smartwatch-%28Regular-140---210-mm--Fluorelastomer--Midnight-Aluminum-Midnight%29",
            type: "Smartwatch",
        },
        {
            productId: 6,
            id: 6,
            title: "HAMA LED10",
            price: 29.95 ,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98033351/fee_325_225_png/HAMA-LED10---Powerbank-%28Anthrazit%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98033351/fee_786_587_png",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98030886/fee_786_587_png",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98023978/fee_786_587_png",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98028486/fee_786_587_png",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97983590/fee_786_587_png",
            type: "Powerbank",
        },
        {
            productId: 7,
            id: 7,
            title: "ISY IGK-3000",
            price: 32.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256168/fee_325_225_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256168/fee_786_587_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256170/fee_786_587_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256171/fee_786_587_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256168/fee_786_587_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72256170/fee_786_587_png/ISY-IGK-3000---Gaming-Tastatur--Kabelgebunden--Schwarz",
            type: "Keyboard",
        },
        {
            productId: 8,
            id: 8,
            title: "ROCCAT Vulcan TKL",
            price: 109.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231086/fee_325_225_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231086/fee_786_587_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231082/fee_786_587_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231079/fee_786_587_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231076/fee_786_587_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83231086/fee_786_587_png/ROCCAT-Vulcan-TKL---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            type: "Keyboard",
        },
        {
            productId: 9,
            id: 9,
            title: "Corsair K70",
            price: 169.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507533/fee_325_225_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507533/fee_786_587_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507534/fee_786_587_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507540/fee_786_587_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507562/fee_786_587_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83507530/fee_786_587_png/CORSAIR-K70-RGB-TKL-Champion-Series---Gaming-Tastatur--Kabelgebunden--QWERTZ--Tenkeyless-%28TKL%29--Schwarz",
            type: "Keyboard",
        },
        {
            productId: 10,
            id: 10,
            title: "ROCCAT Magma",
            price: 59.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795182/fee_325_225_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795182/fee_786_587_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795184/fee_786_587_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795187/fee_786_587_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795192/fee_786_587_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83795199/fee_786_587_png/ROCCAT-Magma-%28CH%29---Gaming-Tastatur--Kabelgebunden--QWERTZ--Full-size--Schwarz",
            type: "Keyboard",
        },
        {
            productId: 11,
            id: 11,
            title: "ROCCAT Burst Pro",
            price: 64.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027935/fee_325_225_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027935/fee_786_587_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027937/fee_786_587_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027938/fee_786_587_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027939/fee_786_587_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78027934/fee_786_587_png/ROCCAT-Burst-Pro---Gaming-Maus--Kabelgebunden--16.000-dpi--Weiss",
            type: "Mouse",
        },
        {
            productId: 12,
            id: 12,
            title: "Logitech G102",
            price: 37.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168877/fee_325_225_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168877/fee_786_587_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168878/fee_786_587_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168880/fee_786_587_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168881/fee_786_587_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77168885/fee_786_587_png/LOGITECH-G102---Gaming-Maus--Kabelgebunden--8.000-DPI--Weiss",
            type: "Mouse",
        },
        {
            productId: 13,
            id: 13,
            title: "ISY IGM 4500",
            price: 29.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960020/fee_325_225_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960020/fee_786_587_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960024/fee_786_587_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960025/fee_786_587_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960016/fee_786_587_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100960017/fee_786_587_png/ISY-IGM-4500---Gaming-Maus--Kabelgebunden--Optisch-mit-Laserdioden--7200-dpi--Weiss",
            type: "Mouse",
        },
        {
            productId: 14,
            id: 14,
            title: "DJI Mavic 3 Classic",
            price: 1299.99,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99137964/fee_194_131_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99137964/fee_786_587_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98960386/fee_786_587_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98960387/fee_786_587_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98960390/fee_786_587_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98960392/fee_786_587_png/DJI-Mavic-3-Classic---Kameradrohne-%2820-MP--46-Min.-Flugzeit%29",
            type: "Drone",
        },
        {
            productId: 15,
            id: 15,
            title: "DJI Mini 3 Pro",
            price: 949.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93865983/fee_194_131_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93865983/fee_786_587_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93689063/fee_786_587_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93689064/fee_786_587_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93689065/fee_786_587_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93689070/fee_786_587_png/DJI-Mini-3-Pro-%28DJI-RC%29---Kameradrohne-%2812-bis-48-MP--34-Min.-Flugzeit%29",
            type: "Drone",
        },
        {
            productId: 16,
            id: 16,
            title: "GOPRO HERO11",
            price: 376.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101726304/fee_325_225_png/GOPRO-HERO11---Actioncam-Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101726304/fee_786_587_png/GOPRO-HERO11---Actioncam-Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97425686/fee_786_587_png/GOPRO-HERO11---Actioncam-Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97425685/fee_786_587_png/GOPRO-HERO11---Actioncam-Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97425684/fee_786_587_png/GOPRO-HERO11---Actioncam-Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97425683/fee_786_587_png/GOPRO-HERO11---Actioncam-Schwarz",
            type: "Camera",
        },
        {
            productId: 17,
            id: 17,
            title: "GOPRO HERO10",
            price: 329.95,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93317507/fee_325_225_png/GOPRO-Hero-10-%26-128GB-Micro-SD-Karte---Actioncam-Schwarz",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87102118/fee_786_587_png/GOPRO-Hero-10---Actioncam-Schwarz",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87102121/fee_786_587_png/GOPRO-Hero-10---Actioncam-Schwarz",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87102131/fee_786_587_png/GOPRO-Hero-10---Actioncam-Schwarz",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87102136/fee_786_587_png/GOPRO-Hero-10---Actioncam-Schwarz",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87102146/fee_786_587_png/GOPRO-Hero-10---Actioncam-Schwarz",
            type: "Camera",
        },
        {
            productId: 18,
            id: 18,
            title: "XIAOMI Mi Pro 2 (Swiss Edition)",
            price: 499.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107470956/fee_325_225_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107470956/fee_786_587_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88255665/fee_786_587_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88255670/fee_786_587_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88255671/fee_786_587_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107470958/fee_786_587_png/XIAOMI-Mi-Pro-2-Swiss-Edition---E-Scooter-%28Schwarz%29",
            type: "Scooter",
        },
        {
            productId: 19,
            id: 19,
            title: "SOFLOW SO1 Pro",
            price: 299.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86191050/fee_325_225_png/SOFLOW-SO1---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86189400/fee_786_587_png/SOFLOW-SO1-Pro---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86189405/fee_786_587_png/SOFLOW-SO1-Pro---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86189407/fee_786_587_png/SOFLOW-SO1-Pro---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86189409/fee_786_587_png/SOFLOW-SO1-Pro---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86189415/fee_786_587_png/SOFLOW-SO1-Pro---E-Scooter-%28Schwarz-Gr%C3%BCn%29",
            type: "Scooter"
        },
        {
            productId: 20,
            id: 20,
            title: "UNAGI Model One E500",
            price: 1199.00,
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946605/fee_325_225_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            imgOne: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946605/fee_786_587_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            imgTwo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946607/fee_786_587_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            imgThree: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946612/fee_786_587_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            imgFour: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946600/fee_786_587_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            imgFive: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89946603/fee_786_587_png/UNAGI-Model-One-E500-EU---E-Scooter-%28Cosmic-Blue%29",
            type: "Scooter"
        }
    ]




