import { FC } from "react";
import Image from "next/image";
import { Invoice } from "@/app/types";

interface InvoiceLIstProps {
  invoices: Invoice[];
}

const InvoiceLIst: FC<InvoiceLIstProps> = ({ invoices }) => {
  console.log(invoices);
  return (
    <div className="border h-auto w-full max-w-[730px]">
      <div>
        <div>
          <p>Invoices</p>
          <p>{invoices.length ? invoices.length : "No"} invoices</p>
        </div>
        <div>
          Filter{" "}
          <Image
            src="/icon-arrow-down.svg"
            alt="arrow down icon"
            height={4}
            width={8}
          />
        </div>
        <div>Button</div>
        <div>
          I'm baby bespoke umami iPhone adaptogen hell of. Food truck franzen
          blue bottle, salvia same everyday carry hammock jawn yes plz etsy
          meditation VHS. Scenester crucifix fit hell of chicharrones tbh
          hexagon gentrify bushwick occupy. Retro bitters asymmetrical you
          probably haven't heard of them tonx pok pok sriracha venmo
          vibecession. Butcher knausgaard truffaut, street art food truck subway
          tile mukbang dreamcatcher health goth listicle bruh selvage tote bag
          fashion axe drinking vinegar. Jean shorts mlkshk pok pok cred. Fanny
          pack cred slow-carb raclette, blue bottle poutine mumblecore umami
          poke keffiyeh. Wayfarers raw denim solarpunk ascot. Four dollar toast
          praxis cardigan pok pok lyft irony air plant brunch readymade hot
          chicken vaporware microdosing kinfolk forage. Brunch big mood
          distillery, vice YOLO man braid hot chicken locavore raclette
          farm-to-table affogato succulents yuccie. Adaptogen gluten-free
          whatever, keytar copper mug pok pok banh mi photo booth cred blackbird
          spyplane yuccie. Mumblecore kinfolk kickstarter kitsch pug whatever
          cray venmo. Lo-fi gastropub pok pok, man braid butcher twee chillwave
          solarpunk pinterest etsy beard meh chartreuse distillery. Four dollar
          toast synth meditation hella poke, YOLO hell of vaporware JOMO
          humblebrag. Enamel pin jianbing vape poke, skateboard hexagon man
          braid hoodie tofu. Pitchfork art party tumblr, direct trade polaroid
          authentic shaman chillwave normcore cloud bread. Flannel celiac
          Brooklyn, cray roof party DSA man bun helvetica. Gochujang truffaut
          keytar schlitz small batch literally narwhal chillwave distillery
          health goth. Venmo keytar squid wayfarers small batch live-edge
          pinterest pug typewriter iPhone fit. Occupy meditation tumblr vinyl
          pop-up squid. 8-bit venmo bruh wolf humblebrag twee pitchfork gatekeep
          wayfarers williamsburg grailed gluten-free quinoa ugh chia. Humblebrag
          messenger bag +1 typewriter woke solarpunk, neutra literally pickled
          air plant. Kombucha blackbird spyplane affogato hell of tonx mlkshk.
          8-bit vexillologist twee, shoreditch man braid tofu slow-carb. Before
          they sold out pop-up ramps DIY YOLO cliche. Marfa jawn la croix, green
          juice typewriter bruh lo-fi hell of tumeric cupping tilde synth
          shoreditch tacos cred. Neutra blue bottle adaptogen ennui hammock meh
          shoreditch iPhone williamsburg gorpcore. Stumptown fit hoodie,
          jianbing roof party selfies raw denim squid shaman cray. Vinyl
          waistcoat quinoa irony intelligentsia pinterest. Green juice hammock
          raw denim poutine before they sold out distillery, marfa activated
          charcoal chartreuse yes plz YOLO organic hashtag. Wolf edison bulb
          cray franzen fingerstache. +1 bodega boys yes plz gluten-free. Pop-up
          kinfolk subway tile mumblecore lyft swag air plant XOXO cliche
          wayfarers adaptogen craft beer. Asymmetrical sus tacos +1 gastropub
          XOXO celiac lumbersexual pop-up typewriter bushwick helvetica small
          batch green juice. Lo-fi taiyaki fixie affogato, everyday carry jawn
          thundercats leggings raclette. Yuccie pinterest biodiesel, organic
          glossier 8-bit cray small batch craft beer gentrify semiotics. Godard
          intelligentsia bespoke cred, vinyl tousled tattooed XOXO pinterest
          copper mug pour-over typewriter church-key. Knausgaard gorpcore austin
          sus normcore bodega boys seitan same hexagon readymade selvage
          biodiesel. Cupping banh mi fashion axe gastropub lyft, yuccie unicorn
          listicle organic. Keytar ugh subway tile, mlkshk austin actually ennui
          tofu bodega boys distillery kogi truffaut pinterest pork belly. Neutra
          venmo pop-up vinyl, tacos copper mug 3 wolf moon tilde lumbersexual.
          Next level DSA pug, palo santo you probably haven't heard of them
          fanny pack chicharrones subway tile marfa slow-carb. Bitters wayfarers
          twee literally offal migas kitsch master cleanse pabst ascot pork
          belly. Next level jianbing bespoke tumblr, health goth cloud bread
          ennui selvage taiyaki plaid. 3 wolf moon four dollar toast listicle
          offal fam etsy plaid raw denim next level banh mi intelligentsia.
          Post-ironic crucifix pabst sustainable VHS pug locavore iceland.
          Brooklyn vaporware enamel pin glossier pug master cleanse DSA woke
          everyday carry vibecession craft beer crucifix iPhone 3 wolf moon.
          Helvetica schlitz cold-pressed, gatekeep raw denim listicle truffaut
          subway tile freegan vape hell of readymade leggings. Brooklyn ennui
          next level vibecession, twee synth echo park tumeric umami photo booth
          hoodie mustache bicycle rights blue bottle. Enamel pin craft beer tbh
          fixie tofu vape vexillologist gatekeep glossier. Gorpcore selvage
          williamsburg prism pour-over drinking vinegar. Heirloom shabby chic
          XOXO knausgaard gatekeep swag. Cardigan stumptown tumblr jean shorts.
          Fingerstache ascot fam palo santo vegan. Neutral milk hotel tousled
          90's vibecession hexagon kogi woke artisan chambray selvage ascot
          paleo. Vice hot chicken activated charcoal hoodie mukbang neutra XOXO
          cronut 90's street art tilde tote bag quinoa artisan bushwick. Dummy
          text? More like dummy thicc text, amirite?I'm baby bespoke umami
          iPhone adaptogen hell of. Food truck franzen blue bottle, salvia same
          everyday carry hammock jawn yes plz etsy meditation VHS. Scenester
          crucifix fit hell of chicharrones tbh hexagon gentrify bushwick
          occupy. Retro bitters asymmetrical you probably haven't heard of them
          tonx pok pok sriracha venmo vibecession. Butcher knausgaard truffaut,
          street art food truck subway tile mukbang dreamcatcher health goth
          listicle bruh selvage tote bag fashion axe drinking vinegar. Jean
          shorts mlkshk pok pok cred. Fanny pack cred slow-carb raclette, blue
          bottle poutine mumblecore umami poke keffiyeh. Wayfarers raw denim
          solarpunk ascot. Four dollar toast praxis cardigan pok pok lyft irony
          air plant brunch readymade hot chicken vaporware microdosing kinfolk
          forage. Brunch big mood distillery, vice YOLO man braid hot chicken
          locavore raclette farm-to-table affogato succulents yuccie. Adaptogen
          gluten-free whatever, keytar copper mug pok pok banh mi photo booth
          cred blackbird spyplane yuccie. Mumblecore kinfolk kickstarter kitsch
          pug whatever cray venmo. Lo-fi gastropub pok pok, man braid butcher
          twee chillwave solarpunk pinterest etsy beard meh chartreuse
          distillery. Four dollar toast synth meditation hella poke, YOLO hell
          of vaporware JOMO humblebrag. Enamel pin jianbing vape poke,
          skateboard hexagon man braid hoodie tofu. Pitchfork art party tumblr,
          direct trade polaroid authentic shaman chillwave normcore cloud bread.
          Flannel celiac Brooklyn, cray roof party DSA man bun helvetica.
          Gochujang truffaut keytar schlitz small batch literally narwhal
          chillwave distillery health goth. Venmo keytar squid wayfarers small
          batch live-edge pinterest pug typewriter iPhone fit. Occupy meditation
          tumblr vinyl pop-up squid. 8-bit venmo bruh wolf humblebrag twee
          pitchfork gatekeep wayfarers williamsburg grailed gluten-free quinoa
          ugh chia. Humblebrag messenger bag +1 typewriter woke solarpunk,
          neutra literally pickled air plant. Kombucha blackbird spyplane
          affogato hell of tonx mlkshk. 8-bit vexillologist twee, shoreditch man
          braid tofu slow-carb. Before they sold out pop-up ramps DIY YOLO
          cliche. Marfa jawn la croix, green juice typewriter bruh lo-fi hell of
          tumeric cupping tilde synth shoreditch tacos cred. Neutra blue bottle
          adaptogen ennui hammock meh shoreditch iPhone williamsburg gorpcore.
          Stumptown fit hoodie, jianbing roof party selfies raw denim squid
          shaman cray. Vinyl waistcoat quinoa irony intelligentsia pinterest.
          Green juice hammock raw denim poutine before they sold out distillery,
          marfa activated charcoal chartreuse yes plz YOLO organic hashtag. Wolf
          edison bulb cray franzen fingerstache. +1 bodega boys yes plz
          gluten-free. Pop-up kinfolk subway tile mumblecore lyft swag air plant
          XOXO cliche wayfarers adaptogen craft beer. Asymmetrical sus tacos +1
          gastropub XOXO celiac lumbersexual pop-up typewriter bushwick
          helvetica small batch green juice. Lo-fi taiyaki fixie affogato,
          everyday carry jawn thundercats leggings raclette. Yuccie pinterest
          biodiesel, organic glossier 8-bit cray small batch craft beer gentrify
          semiotics. Godard intelligentsia bespoke cred, vinyl tousled tattooed
          XOXO pinterest copper mug pour-over typewriter church-key. Knausgaard
          gorpcore austin sus normcore bodega boys seitan same hexagon readymade
          selvage biodiesel. Cupping banh mi fashion axe gastropub lyft, yuccie
          unicorn listicle organic. Keytar ugh subway tile, mlkshk austin
          actually ennui tofu bodega boys distillery kogi truffaut pinterest
          pork belly. Neutra venmo pop-up vinyl, tacos copper mug 3 wolf moon
          tilde lumbersexual. Next level DSA pug, palo santo you probably
          haven't heard of them fanny pack chicharrones subway tile marfa
          slow-carb. Bitters wayfarers twee literally offal migas kitsch master
          cleanse pabst ascot pork belly. Next level jianbing bespoke tumblr,
          health goth cloud bread ennui selvage taiyaki plaid. 3 wolf moon four
          dollar toast listicle offal fam etsy plaid raw denim next level banh
          mi intelligentsia. Post-ironic crucifix pabst sustainable VHS pug
          locavore iceland. Brooklyn vaporware enamel pin glossier pug master
          cleanse DSA woke everyday carry vibecession craft beer crucifix iPhone
          3 wolf moon. Helvetica schlitz cold-pressed, gatekeep raw denim
          listicle truffaut subway tile freegan vape hell of readymade leggings.
          Brooklyn ennui next level vibecession, twee synth echo park tumeric
          umami photo booth hoodie mustache bicycle rights blue bottle. Enamel
          pin craft beer tbh fixie tofu vape vexillologist gatekeep glossier.
          Gorpcore selvage williamsburg prism pour-over drinking vinegar.
          Heirloom shabby chic XOXO knausgaard gatekeep swag. Cardigan stumptown
          tumblr jean shorts. Fingerstache ascot fam palo santo vegan. Neutral
          milk hotel tousled 90's vibecession hexagon kogi woke artisan chambray
          selvage ascot paleo. Vice hot chicken activated charcoal hoodie
          mukbang neutra XOXO cronut 90's street art tilde tote bag quinoa
          artisan bushwick. Dummy text? More like dummy thicc text, amirite?I'm
          baby bespoke umami iPhone adaptogen hell of. Food truck franzen blue
          bottle, salvia same everyday carry hammock jawn yes plz etsy
          meditation VHS. Scenester crucifix fit hell of chicharrones tbh
          hexagon gentrify bushwick occupy. Retro bitters asymmetrical you
          probably haven't heard of them tonx pok pok sriracha venmo
          vibecession. Butcher knausgaard truffaut, street art food truck subway
          tile mukbang dreamcatcher health goth listicle bruh selvage tote bag
          fashion axe drinking vinegar. Jean shorts mlkshk pok pok cred. Fanny
          pack cred slow-carb raclette, blue bottle poutine mumblecore umami
          poke keffiyeh. Wayfarers raw denim solarpunk ascot. Four dollar toast
          praxis cardigan pok pok lyft irony air plant brunch readymade hot
          chicken vaporware microdosing kinfolk forage. Brunch big mood
          distillery, vice YOLO man braid hot chicken locavore raclette
          farm-to-table affogato succulents yuccie. Adaptogen gluten-free
          whatever, keytar copper mug pok pok banh mi photo booth cred blackbird
          spyplane yuccie. Mumblecore kinfolk kickstarter kitsch pug whatever
          cray venmo. Lo-fi gastropub pok pok, man braid butcher twee chillwave
          solarpunk pinterest etsy beard meh chartreuse distillery. Four dollar
          toast synth meditation hella poke, YOLO hell of vaporware JOMO
          humblebrag. Enamel pin jianbing vape poke, skateboard hexagon man
          braid hoodie tofu. Pitchfork art party tumblr, direct trade polaroid
          authentic shaman chillwave normcore cloud bread. Flannel celiac
          Brooklyn, cray roof party DSA man bun helvetica. Gochujang truffaut
          keytar schlitz small batch literally narwhal chillwave distillery
          health goth. Venmo keytar squid wayfarers small batch live-edge
          pinterest pug typewriter iPhone fit. Occupy meditation tumblr vinyl
          pop-up squid. 8-bit venmo bruh wolf humblebrag twee pitchfork gatekeep
          wayfarers williamsburg grailed gluten-free quinoa ugh chia. Humblebrag
          messenger bag +1 typewriter woke solarpunk, neutra literally pickled
          air plant. Kombucha blackbird spyplane affogato hell of tonx mlkshk.
          8-bit vexillologist twee, shoreditch man braid tofu slow-carb. Before
          they sold out pop-up ramps DIY YOLO cliche. Marfa jawn la croix, green
          juice typewriter bruh lo-fi hell of tumeric cupping tilde synth
          shoreditch tacos cred. Neutra blue bottle adaptogen ennui hammock meh
          shoreditch iPhone williamsburg gorpcore. Stumptown fit hoodie,
          jianbing roof party selfies raw denim squid shaman cray. Vinyl
          waistcoat quinoa irony intelligentsia pinterest. Green juice hammock
          raw denim poutine before they sold out distillery, marfa activated
          charcoal chartreuse yes plz YOLO organic hashtag. Wolf edison bulb
          cray franzen fingerstache. +1 bodega boys yes plz gluten-free. Pop-up
          kinfolk subway tile mumblecore lyft swag air plant XOXO cliche
          wayfarers adaptogen craft beer. Asymmetrical sus tacos +1 gastropub
          XOXO celiac lumbersexual pop-up typewriter bushwick helvetica small
          batch green juice. Lo-fi taiyaki fixie affogato, everyday carry jawn
          thundercats leggings raclette. Yuccie pinterest biodiesel, organic
          glossier 8-bit cray small batch craft beer gentrify semiotics. Godard
          intelligentsia bespoke cred, vinyl tousled tattooed XOXO pinterest
          copper mug pour-over typewriter church-key. Knausgaard gorpcore austin
          sus normcore bodega boys seitan same hexagon readymade selvage
          biodiesel. Cupping banh mi fashion axe gastropub lyft, yuccie unicorn
          listicle organic. Keytar ugh subway tile, mlkshk austin actually ennui
          tofu bodega boys distillery kogi truffaut pinterest pork belly. Neutra
          venmo pop-up vinyl, tacos copper mug 3 wolf moon tilde lumbersexual.
          Next level DSA pug, palo santo you probably haven't heard of them
          fanny pack chicharrones subway tile marfa slow-carb. Bitters wayfarers
          twee literally offal migas kitsch master cleanse pabst ascot pork
          belly. Next level jianbing bespoke tumblr, health goth cloud bread
          ennui selvage taiyaki plaid. 3 wolf moon four dollar toast listicle
          offal fam etsy plaid raw denim next level banh mi intelligentsia.
          Post-ironic crucifix pabst sustainable VHS pug locavore iceland.
          Brooklyn vaporware enamel pin glossier pug master cleanse DSA woke
          everyday carry vibecession craft beer crucifix iPhone 3 wolf moon.
          Helvetica schlitz cold-pressed, gatekeep raw denim listicle truffaut
          subway tile freegan vape hell of readymade leggings. Brooklyn ennui
          next level vibecession, twee synth echo park tumeric umami photo booth
          hoodie mustache bicycle rights blue bottle. Enamel pin craft beer tbh
          fixie tofu vape vexillologist gatekeep glossier. Gorpcore selvage
          williamsburg prism pour-over drinking vinegar. Heirloom shabby chic
          XOXO knausgaard gatekeep swag. Cardigan stumptown tumblr jean shorts.
          Fingerstache ascot fam palo santo vegan. Neutral milk hotel tousled
          90's vibecession hexagon kogi woke artisan chambray selvage ascot
          paleo. Vice hot chicken activated charcoal hoodie mukbang neutra XOXO
          cronut 90's street art tilde tote bag quinoa artisan bushwick. Dummy
          text? More like dummy thicc text, amirite?I'm baby bespoke umami
          iPhone adaptogen hell of. Food truck franzen blue bottle, salvia same
          everyday carry hammock jawn yes plz etsy meditation VHS. Scenester
          crucifix fit hell of chicharrones tbh hexagon gentrify bushwick
          occupy. Retro bitters asymmetrical you probably haven't heard of them
          tonx pok pok sriracha venmo vibecession. Butcher knausgaard truffaut,
          street art food truck subway tile mukbang dreamcatcher health goth
          listicle bruh selvage tote bag fashion axe drinking vinegar. Jean
          shorts mlkshk pok pok cred. Fanny pack cred slow-carb raclette, blue
          bottle poutine mumblecore umami poke keffiyeh. Wayfarers raw denim
          solarpunk ascot. Four dollar toast praxis cardigan pok pok lyft irony
          air plant brunch readymade hot chicken vaporware microdosing kinfolk
          forage. Brunch big mood distillery, vice YOLO man braid hot chicken
          locavore raclette farm-to-table affogato succulents yuccie. Adaptogen
          gluten-free whatever, keytar copper mug pok pok banh mi photo booth
          cred blackbird spyplane yuccie. Mumblecore kinfolk kickstarter kitsch
          pug whatever cray venmo. Lo-fi gastropub pok pok, man braid butcher
          twee chillwave solarpunk pinterest etsy beard meh chartreuse
          distillery. Four dollar toast synth meditation hella poke, YOLO hell
          of vaporware JOMO humblebrag. Enamel pin jianbing vape poke,
          skateboard hexagon man braid hoodie tofu. Pitchfork art party tumblr,
          direct trade polaroid authentic shaman chillwave normcore cloud bread.
          Flannel celiac Brooklyn, cray roof party DSA man bun helvetica.
          Gochujang truffaut keytar schlitz small batch literally narwhal
          chillwave distillery health goth. Venmo keytar squid wayfarers small
          batch live-edge pinterest pug typewriter iPhone fit. Occupy meditation
          tumblr vinyl pop-up squid. 8-bit venmo bruh wolf humblebrag twee
          pitchfork gatekeep wayfarers williamsburg grailed gluten-free quinoa
          ugh chia. Humblebrag messenger bag +1 typewriter woke solarpunk,
          neutra literally pickled air plant. Kombucha blackbird spyplane
          affogato hell of tonx mlkshk. 8-bit vexillologist twee, shoreditch man
          braid tofu slow-carb. Before they sold out pop-up ramps DIY YOLO
          cliche. Marfa jawn la croix, green juice typewriter bruh lo-fi hell of
          tumeric cupping tilde synth shoreditch tacos cred. Neutra blue bottle
          adaptogen ennui hammock meh shoreditch iPhone williamsburg gorpcore.
          Stumptown fit hoodie, jianbing roof party selfies raw denim squid
          shaman cray. Vinyl waistcoat quinoa irony intelligentsia pinterest.
          Green juice hammock raw denim poutine before they sold out distillery,
          marfa activated charcoal chartreuse yes plz YOLO organic hashtag. Wolf
          edison bulb cray franzen fingerstache. +1 bodega boys yes plz
          gluten-free. Pop-up kinfolk subway tile mumblecore lyft swag air plant
          XOXO cliche wayfarers adaptogen craft beer. Asymmetrical sus tacos +1
          gastropub XOXO celiac lumbersexual pop-up typewriter bushwick
          helvetica small batch green juice. Lo-fi taiyaki fixie affogato,
          everyday carry jawn thundercats leggings raclette. Yuccie pinterest
          biodiesel, organic glossier 8-bit cray small batch craft beer gentrify
          semiotics. Godard intelligentsia bespoke cred, vinyl tousled tattooed
          XOXO pinterest copper mug pour-over typewriter church-key. Knausgaard
          gorpcore austin sus normcore bodega boys seitan same hexagon readymade
          selvage biodiesel. Cupping banh mi fashion axe gastropub lyft, yuccie
          unicorn listicle organic. Keytar ugh subway tile, mlkshk austin
          actually ennui tofu bodega boys distillery kogi truffaut pinterest
          pork belly. Neutra venmo pop-up vinyl, tacos copper mug 3 wolf moon
          tilde lumbersexual. Next level DSA pug, palo santo you probably
          haven't heard of them fanny pack chicharrones subway tile marfa
          slow-carb. Bitters wayfarers twee literally offal migas kitsch master
          cleanse pabst ascot pork belly. Next level jianbing bespoke tumblr,
          health goth cloud bread ennui selvage taiyaki plaid. 3 wolf moon four
          dollar toast listicle offal fam etsy plaid raw denim next level banh
          mi intelligentsia. Post-ironic crucifix pabst sustainable VHS pug
          locavore iceland. Brooklyn vaporware enamel pin glossier pug master
          cleanse DSA woke everyday carry vibecession craft beer crucifix iPhone
          3 wolf moon. Helvetica schlitz cold-pressed, gatekeep raw denim
          listicle truffaut subway tile freegan vape hell of readymade leggings.
          Brooklyn ennui next level vibecession, twee synth echo park tumeric
          umami photo booth hoodie mustache bicycle rights blue bottle. Enamel
          pin craft beer tbh fixie tofu vape vexillologist gatekeep glossier.
          Gorpcore selvage williamsburg prism pour-over drinking vinegar.
          Heirloom shabby chic XOXO knausgaard gatekeep swag. Cardigan stumptown
          tumblr jean shorts. Fingerstache ascot fam palo santo vegan. Neutral
          milk hotel tousled 90's vibecession hexagon kogi woke artisan chambray
          selvage ascot paleo. Vice hot chicken activated charcoal hoodie
          mukbang neutra XOXO cronut 90's street art tilde tote bag quinoa
          artisan bushwick. Dummy text? More like dummy thicc text, amirite?
        </div>
      </div>
    </div>
  );
};

export default InvoiceLIst;
