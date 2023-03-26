```sh
http --form POST https://reiseauskunft.bahn.de/bin/bhftafel.exe/dn input='Barcelona Sants' date='24.03.23' time='08:00' boardType='dep' start='Suchen' | grep "Madrid"
http POST "https://reiseauskunft.bahn.de/bin/bhftafel.exe/dn&input=Barcelona%20Sants%237100064&boardType=dep&time=08:00%2B60&productsFilter=1111111111&&&date=24.03.23&&selectDate=&start=yes"
```

```html
<tbody>
  <tr>
    <th class="time">Zeit</th>
    <th class="icon">&nbsp;</th>
    <th class="train">Zug</th>
    <th class="route">Richtung / Unterwegshaltestellen</th>
    <th class="station">Bahnhof / Haltestelle</th>
    <th class="ris">Aktuelles</th>
  </tr>
  <tr class="browse">
    <td class="time">
      <a
        href="https://reiseauskunft.bahn.de/bin/bhftafel.exe/dn?ld=43154&amp;protocol=https:&amp;rt=1&amp;input=Barcelona Sants%237100064&amp;boardType=dep&amp;time=07:00%2D60&amp;productsFilter=1111111111&amp;&amp;&amp;date=24.03.23&amp;selectDate=&amp;start=yes"
        class="arrowlink arrowlinktop"
        >früher</a
      >
    </td>
    <td colspan="2" class="train">&nbsp;</td>
    <td class="route"></td>
    <td class="platform">&nbsp;</td>
    <td class="ris">&nbsp;</td>
  </tr>
  <tr class="current">
    <td class="time">17:00</td>
    <td class="train" colspan="2">aktuelle Uhrzeit</td>
    <td class="route">&nbsp;</td>
    <td class="track">&nbsp;</td>
    <td class="ris">&nbsp;</td>
  </tr>
  <tr id="journeyRow_1" class="">
    <td class="time">07:04</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/35268/540224/268164/122326/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:04&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/35268/540224/268164/122326/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:04&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        R 15151
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100073','10:00'); return false;"
          href="/bin/bhftafel.exe/dn?input=Lerida/Lleida%237100073&amp;boardType=dep&amp;time=10:00&amp;productsFilter=1111111111&amp;start=yes"
        >
          Lerida/Lleida
        </a>
      </span>
      <br />
      Barcelona Sants 07:04 - Gava 07:22 - Castelldefels 07:28 - Sitges-San
      Pedro de Ribas 07:41
      <img
        src="https://www.img-bahn.de/s3/prod/v/img_old/sq_sep.gif"
        height="9"
        width="9"
        border="0"
        alt=""
      />
      Villenueva Y Geltru 07:48 - Cubellas 07:53 - Cunit (APD.) 07:57 - Segur de
      Calafell (APD.) 08:00 - Espluga 09:16 - Lerida/Lleida 10:00
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_2" class="">
    <td class="time">07:15</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/601116/728288/371274/14735/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:15&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/ice_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/601116/728288/371274/14735/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:15&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        EM 1071
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100051','12:15'); return false;"
          href="/bin/bhftafel.exe/dn?input=Alacant-Terminal%237100051&amp;boardType=dep&amp;time=12:15&amp;productsFilter=1111111111&amp;start=yes"
        >
          Alacant-Terminal
        </a>
      </span>
      <br />
      Barcelona Sants 07:15 - Camp de Tarragona 07:49 - Castello de la Plana
      09:13 - Valencia Joaquin Sorolla 10:02 - Alacant-Terminal 12:15
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_3" class="">
    <td class="time">07:16</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/137802/574482/190488/49310/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:16&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/137802/574482/190488/49310/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:16&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        R 15829
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '8700147','10:04'); return false;"
          href="/bin/bhftafel.exe/dn?input=Cerbère%238700147&amp;boardType=dep&amp;time=10:04&amp;productsFilter=1111111111&amp;start=yes"
        >
          Cerbère
        </a>
      </span>
      <br />
      Barcelona Sants 07:16 - Barcelona P.Gracia 07:20 - Barcelona Clot-Arago
      07:24 - Barcelona Sant Andreu Comtal 07:29
      <img
        src="https://www.img-bahn.de/s3/prod/v/img_old/sq_sep.gif"
        height="9"
        width="9"
        border="0"
        alt=""
      />
      Gualba (APD.) 08:18 - Riells-Viabrea-Breda 08:21 - Hostalrich 08:26 -
      Macanet-Massanes 08:30 - Vilamalla 09:30 - Cerbère 10:04
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_4" class="">
    <td class="time">07:20</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/527805/704400/518300/83215/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:20&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/527805/704400/518300/83215/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:20&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        R 15130
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100067','07:35'); return false;"
          href="/bin/bhftafel.exe/dn?input=Barcelona Franca%237100067&amp;boardType=dep&amp;time=07:35&amp;productsFilter=1111111111&amp;start=yes"
        >
          Barcelona Franca
        </a>
      </span>
      <br />
      Barcelona Sants 07:20 - Barcelona P.Gracia 07:24 - Barcelona Franca 07:35
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_5" class="">
    <td class="time">07:30</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/424269/669844/695644/206399/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:30&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/424269/669844/695644/206399/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:30&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        R 15029
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100061','09:04'); return false;"
          href="/bin/bhftafel.exe/dn?input=Reus%237100061&amp;boardType=dep&amp;time=09:04&amp;productsFilter=1111111111&amp;start=yes"
        >
          Reus
        </a>
      </span>
      <br />
      Barcelona Sants 07:30 - Villenueva Y Geltru 08:08 - Sant Vicenc de Calde
      08:23 - Torredembarra 08:32 - Altafulla-Tamarit 08:36 - Tarragona 08:46 -
      Vilaseca 08:55 - Reus 09:04
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_6" class="">
    <td class="time">07:40</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/321378/636625/583146/184447/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:40&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/ice_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/321378/636625/583146/184447/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:40&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        AVE 3662
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100049','10:10'); return false;"
          href="/bin/bhftafel.exe/dn?input=Madrid-Puerta de Atocha%237100049&amp;boardType=dep&amp;time=10:10&amp;productsFilter=1111111111&amp;start=yes"
        >
          Madrid-Puerta de Atocha
        </a>
      </span>
      <br />
      Barcelona Sants 07:40 - Madrid-Puerta de Atocha 10:10
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_7" class="">
    <td class="time">07:43</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/574836/720415/244328/69448/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:43&amp;station_evaId=7100067&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/574836/720415/244328/69448/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:43&amp;station_evaId=7100067&amp;station_type=dep&amp;"
      >
        R 18051
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100121','10:37'); return false;"
          href="/bin/bhftafel.exe/dn?input=Tortosa%237100121&amp;boardType=dep&amp;time=10:37&amp;productsFilter=1111111111&amp;start=yes"
        >
          Tortosa
        </a>
      </span>
      <br />
      Barcelona Franca 07:43 - Barcelona P.Gracia 07:52 - Barcelona Sants 07:58
      - Villenueva Y Geltru 08:39
      <img
        src="https://www.img-bahn.de/s3/prod/v/img_old/sq_sep.gif"
        height="9"
        width="9"
        border="0"
        alt=""
      />
      Altafulla-Tamarit 09:07 - Tarragona 09:15 - Vilaseca 09:27 - Cambrils
      09:39 - L'Hospitalet de L'Infant 09:50 - Tortosa 10:37
    </td>
    <td class="platform">&nbsp; Barcelona Franca</td>
    <td class="ris"></td>
  </tr>
  <tr id="journeyRow_8" class="">
    <td class="time">07:52</td>
    <td class="train">
      <a
        href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/29559/538356/748830/364562/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:52&amp;station_evaId=7100064&amp;station_type=dep&amp;"
        ><img
          src="https://www.img-bahn.de/s3/prod/v/img_old/re_24x24.gif"
          class="middle"
          alt=""
      /></a>
    </td>
    <td class="train">
      <a
        href="/bin/traininfo.exe/dn/29559/538356/748830/364562/80?ld=43154&amp;protocol=https:&amp;rt=1&amp;date=24.03.23&amp;time=07:52&amp;station_evaId=7100064&amp;station_type=dep&amp;"
      >
        R 15623
      </a>
    </td>
    <td class="route">
      <span class="bold">
        <a
          onclick="sHC(this, '', '7100073','11:06'); return false;"
          href="/bin/bhftafel.exe/dn?input=Lerida/Lleida%237100073&amp;boardType=dep&amp;time=11:06&amp;productsFilter=1111111111&amp;start=yes"
        >
          Lerida/Lleida
        </a>
      </span>
      <br />
      Barcelona Sants 07:52 - Barcelona Pl. Catalunya 07:57 - Barcelona Arc de
      Triomf 08:00 - Barcelona La Sagrera Meridiana 08:06
      <img
        src="https://www.img-bahn.de/s3/prod/v/img_old/sq_sep.gif"
        height="9"
        width="9"
        border="0"
        alt=""
      />
      Barcelona Torre Barro 08:12 - Montcada Bifurcacio (APT.) 08:14 -
      Montcada-Reixac Manresa (APD.) 08:17 - Segues de San Pedro Salavinera
      09:41 - Castellnou de Seanna (APD.) 10:41 - Lerida/Lleida 11:06
    </td>
    <td class="platform">&nbsp;</td>
    <td class="ris"></td>
  </tr>
  <tr class="browse">
    <td class="time">
      <a
        href="https://reiseauskunft.bahn.de/bin/bhftafel.exe/dn?ld=43154&amp;protocol=https:&amp;rt=1&amp;input=Barcelona Sants%237100064&amp;boardType=dep&amp;time=07:00%2B60&amp;productsFilter=1111111111&amp;&amp;&amp;date=24.03.23&amp;&amp;selectDate=&amp;start=yes"
        class="arrowlink arrowlinkbottom"
        >später</a
      >
    </td>
    <td colspan="2" class="train">&nbsp;</td>
    <td class="route"></td>
    <td class="platform">&nbsp;</td>
    <td class="ris">&nbsp;</td>
  </tr>
</tbody>
```
