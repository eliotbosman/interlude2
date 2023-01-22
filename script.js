var homepage = document.getElementsByClassName('container')[0];
var projectpage = document.getElementsByClassName('ppg')[0];
var rubrik = document.getElementsByClassName('p-rubrik')[0];
var undertitel = document.getElementsByClassName('p-undertitel')[0];
var img = document.getElementsByClassName('p-img')[0];
var mimg = document.getElementsByClassName('m-p-img')[0];
var beskrivning = document.getElementsByClassName('p-beskrivning')[0];
var specifikationer = document.getElementsByClassName('p-specifikationer')[0];
var gridimg = document.getElementsByClassName('p-gridimg')[0];
var gridimg2 = document.getElementsByClassName('p-gridimg2')[0];
var gridimg3 = document.getElementsByClassName('p-gridimg3')[0];
var nav = document.getElementsByClassName('nav-logo')[0];
var info = document.getElementsByClassName('info-pg')[0];
var infom = document.getElementsByClassName('m-info-pg')[0];
var sponsor = document.getElementsByClassName('p-sponsortitel')[0];
var menu = document.getElementsByClassName('m-menu')[0];
var circle = document.getElementsByClassName('m-circle')[0];
var circlet = document.getElementsByClassName('m-circle-t')[0];
var gline = document.getElementsByClassName('g-line')[0];
var circleback = document.getElementById('m-circle-back');

function hpg() {
  projectpage.style.display = "none";
  homepage.style.display = "grid";
  infom.style.display = "none";
  info.style.display = "none";
  homepage.style.transition = "all 2s";
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
};

function ppg() {
    homepage.style.display = "none";
    info.style.display = "none";
    projectpage.style.display = "grid";
    projectpage.style.transition = "all 2s";
    gline.style.display = "none";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};

function ppg_g1() {
  rubrik.innerHTML = "SMYG";
  undertitel.innerHTML = "Annelie Wihlborg & Fanny Johansson";
  sponsor.innerHTML = "in collaboration with Garsnäs"
  mimg.src = "img/BE_INTERLUDE_WEB_GÄRSNÄS_MAIN_335.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_GÄRSNÄS_338.jpg";
  specifikationer.innerHTML = "<u>Material</u><br><br> Beech, colour impregnated mdf, leather.<br> <br><u>Dimensions</u><br><br> H590, W650, D250mm";
  beskrivning.innerHTML = "<u>Brief</u><br><br> Gärsnäs requested a wall-mounted storage solution for both the office and the home, something that would meet today's demands. <br> <br><u>Description</u><br><br> Smyg is mainly made of solid Swedish beech with artisanal joints, both in line with Gärsnäs' history as well as the Scanian landscape. The modular aspect of the design is central, we want the shelf to be able to accompany us through life, as well as being a piece of furniture that can function as a bridge between the aesthetics of the office and the home. The shelf can be used both solitary or in group, with each interstice serving a purpose. With inspiration drawn from 1930´s architecture, the graphic blue line in each vertical plane defines the form. <br><br><u>Process</u><br><br> We began exploring all different types of shelving, both traditional methods and new ideas, resulting in a new way of hiding and displaying content without for that matter adding a door or a hatch. The slight angle to each vertical plane works as a lamella, creating an optical illusion, opening and closing as you move around it.";
  gridimg.src = "img/BE_INTERLUDE_WEB_GÄRSNÄS_338.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_GÄRSNÄS_342.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_GÄRSNÄS_361.jpg"
}

function ppg_g2() {

  rubrik.innerHTML = "Itu";
  undertitel.innerHTML = "Carl Folkesson & Elin Åkerfeldt ";
  sponsor.innerHTML = "in collaboration with G.A.D.";
  mimg.src = "img/BE_INTERLUDE_WEB_GAD_MAIN_245.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_GAD_246.jpg";
  specifikationer.innerHTML = "<u>Material</u><br><br> Limestone & solid pine.<br><br><u> Dimensions</u><br><br> Table 1: H550, W380, D380 mm. <br><br>Table 2: H465, W250, D310 mm";
  beskrivning.innerHTML = "<u>Brief</u><br><br> With no brief, we set out to fill a gap in G.A.Ds collection. We wanted to create a smaller product that could work in both smaller and larger homes, following the user through life. <br><br><u>Product text</u> <br><br>Using G.A.Ds traditional methods and knowledge in new ways, Itu is a contemporary interpretation of timeless craftsmanship. The core of our project has been to use locally sourced materials from Gotland, limestone from Slite and pine wood from Ardre. By using these different materials we wanted to highlight details in the joinery between wood and stone. Our vision was to work with contrasts between the light and heavy, the raw and elegant. By letting the materials speak for themselves, we wanted to create an honest piece of furniture. Two side tables in different heights, back to back creating a sculptural body. <br><br><u>Process</u><br><br>For us it felt important to show the materials honestly and not beautify them to the point where you can't connect them to the place they originally came from. We have explored how we could let the perfection that G.A.D stands for meet a rawer expression, while the furniture still has a harmony. <br><br><u>Thanks to</u><br><br>G.A.D, Joel Rickardsson, Slite Stenhuggeri och Ullkontoret.";
  gridimg.src = "img/BE_INTERLUDE_WEB_GAD_246.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_GAD_272.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_GAD_MAIN_245.jpg";


}

function ppg_g3() {

  rubrik.innerHTML = "Teo";
  undertitel.innerHTML = "Cecilia Mossesson & Emilia Lamberg";
  sponsor.innerHTML = "in collaboration with Storängen";
  mimg.src = "img/BE_INTERLUDE_WEB_STORÄNGEN_MAIN_077.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_STORÄNGEN_106.jpg";
  specifikationer.innerHTML = "<u>Material</u><br><br>Ash wood, steel. <br><br><u>Dimensions</u><br><br> H1900, B1625 D1460mm";
  beskrivning.innerHTML = "<u>Brief</u><br><br>To create a flexible coat hanging system that works for both the public and private setting. <br><br><u>Description</u><br><br>Teo is a lightweight modular coat hanging system which is inspired by the simplicity and harmony of Japanese architecture and design, as well as Scandinavian minimalism. It is made in ash wood, and can be either freestanding or wall mounted, and its simple construction makes it user friendly and easy to assemble. All the wooden planks are mounted together with hooks which screw them into place, meaning that all the connections and screws are hidden, and the important details stand in focus. As a modular system, this gives more flexibility to the user who can customise the components and colours to suit their specific needs and taste. <br><br><u>Process</u><br></br>We wanted to challenge the idea of a coat hanging system as a product which is often overlooked, by giving it a strong and sculptural design identity, and integrating it more within the public space. We wanted our furniture to carry the Storängen identity by taking inspiration from some of their existing products, whilst giving it a playful twist in the hook details and its overall expression. <br><br><u>Thanks to</u><br><br>Mårten and Calle from Storängen, Mark";
  gridimg.src = "img/BE_INTERLUDE_WEB_STORÄNGEN_106.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_STORÄNGEN_081.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_STORÄNGEN_082.jpg";

}

function ppg_g4() {

  rubrik.innerHTML = "Hedda";
  undertitel.innerHTML = "Elinor Parra & Imad Benkabbou";
  mimg.src = "img/BE_INTERLUDE_WEB_NC_MAIN_150.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_NC_183.jpg";
  sponsor.innerHTML = "in collaboration with NC";
  specifikationer.innerHTML = "<u>Material</u><br><br> Solid oak, polyether, natural fiber textile. <br><br><u>Dimensions</u><br><br> H800, W700, D530mm";
  beskrivning.innerHTML = "<u>Brief</u><br><br>Our design objective was to create a flexible form of public seating in wood with the intention to be as inclusive as possible, ensuring minimal manufacturing waste.<br><br><u>Description</u><br><br>Exploring ways of working with diversity and inclusivity, we have designed a seating system based on individual chairs that are generous in width when used separately—embracing both different body sizes, need for personal space and service social interactions. When connected, the chairs become benches of different lengths: long benches in rows for big halls, or shorter benches for waiting rooms for example. The angular expression and its seamless joints invite versatile seating options and help to minimise production leftovers. Hedda has been designed with natural materials in mind: the frame is made from solid oak, with a linen blend upholstery. When not in use, Hedda can be stacked, slotting into each other sturdily, wood on wood. Hedda comes in two versions, with or without an upholstered seat.<br><br><u>Process</u><br><br>Defining what inclusive furniture is, and can be, has been a big part of our process. Through discussions, workshops and research, we noted a potential missing link and created a piece of seating that we believe is useful, a piece that also fits within NCs brand vision.";
  gridimg.src = "img/BE_INTERLUDE_WEB_NC_156.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_NC_176.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_NC_183.jpg"
}

function ppg_g5() {

  rubrik.innerHTML = "Inez";
  undertitel.innerHTML = "Johanna Ringqvist, Sofie Krüll <br>& Olivia Ståhl";
  sponsor.innerHTML = "in collaboration with Lammhults";
  mimg.src = "img/BE_INTERLUDE_WEB_LAMMHULTS_MAIN_279.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_LAMMHULTS_318.jpg";
  specifikationer.innerHTML = "<u>Material</u><br><br> Tubular Steel, leather, stainless steel <br><br><u>Dimensions: H700, W940, D420 mm</u>";
  beskrivning.innerHTML = "<u>Brief</u><br><br> To create a serving-trolley that can be used in an office- and home environment. <br><br><u>Description</u><br><br>Inez is a modern take on the serving-trolley. With Inez we want to offer more functions than just the practical, and adapt it to modern everyday life. The sculptural profile and spacious shelving creates an interesting alternative storage, and works as a statement piece for either the home or the office. We want the trolley to be in harmony with, and enhance the objects that are placed upon it. Unlike other trolleys which are often out of sight or hidden away, Inez stands out. Nobody puts Inez in the corner! <br><br><u>Process</u><br><br>The bent tubular steel is a signature material and technique used by Lammhults. We wanted to incorporate their expertise in the manufacturing process, and test the limits of the material by having a more sculptural design. Another important part of our process consisted of discussions around what defines a serving-trolley, because of its clear implication that it should and must be used for serving. Between us, we used the term “coffee-table trolley” as we see our piece being used for selected objects such as coffee-table books, vases and decorative ornaments. We let the objects guide the shelfves' function and area of use. ";
  gridimg.src = "img/BE_INTERLUDE_WEB_LAMMHULTS_294.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_LAMMHULTS_318.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_LAMMHULTS_MAIN_279.jpg"

}

function ppg_g6() {

  rubrik.innerHTML = "Nova";
  undertitel.innerHTML = "Jenny Svensén & Max Lundén";
  sponsor.innerHTML = "in collaboration with Johanson";
  mimg.src = "img/BE_INTERLUDE_WEB_JOHANSON_MAIN_187.jpg";
  img.src = "img/BE_INTERLUDE_WIDE_JOHANSON_214.jpg";
  specifikationer.innerHTML = "<u>Material</u><br><br>Upholstered seat with removable cover, surface treated steel frame. <br><br><u>Dimensions:</u><br><br>Chair 1 : H 980, W460, D370 mm. Seat height: 650 mm <br><br>Chair 2 : H1130, W480, D370 mm. Seat height: 800 mm";
  beskrivning.innerHTML = "<u>Brief</u><br><br>Our brief with Johanson Design was to design a bar stool in two different heights for both public and private environments. <br><br><u>Description</u><br>Nova is a bar stool with sculptural characteristics, based on elegant sweeping lines with a light and airy expression. We wanted our stool to feel secure and comfortable for the user both in its appearance and its function, by having an upholstered cushion with a curved seat and backrest. The wide cushion also makes the barstool more inclusive for all different sizes. Nova’s uninterrupted lines and playful features are reinforced when multiple stools are placed in a row in front of a bar table. <br><br><u>Process</u><br><br>Our design process started with a workshop of transforming our key words into separate sketches, in order to find interesting shapes that also felt connected to the Johanson brand. We worked both digitally and physically with models in different materials to get a better understanding of how the shapes worked together. Our biggest challenge was to make a stool both true to our vision, and to ensure that it would be production friendly.";
  gridimg.src = "img/BE_INTERLUDE_WEB_JOHANSON_214.jpg";
  gridimg2.src = "img/BE_INTERLUDE_WEB_JOHANSON_205.jpg";
  gridimg3.src = "img/BE_INTERLUDE_WEB_JOHANSON_MAIN_187.jpg"
}

function scr1() {
  info.scrollIntoView(
    {behavior: 'smooth'}
  )
}

function scr2() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function scr3() {
  homepage.style.display = "none";
  menu.style.display = "grid";
  infom.style.display = "grid";
  menu.style.animation = "fade-in 0.25s linear";
  circlet.style.display = "none";
  circleback.style.display = "inline";
}

function scr4() {
  homepage.style.animation = "fade-in 0.25s linear;"
  homepage.style.display = "grid";
  circlet.style.display = "grid";
  menu.style.display = "none";
  infom.style.display = "none";
  circleback.style.display = "none";
}

function rot1() {
  Math.random();
}