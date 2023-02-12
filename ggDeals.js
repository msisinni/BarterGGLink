var priceLinks = document.querySelector("[data-test]");

if (typeof(priceLinks) != 'undefined' && priceLinks != null)
{
  priceLinks.append(", ");
  var text = document.createTextNode("gg.Deals");
  var link = document.createElement("a");
  link.appendChild(text);
  var steamID = priceLinks.children[0].href.split('/')[4];
  link.setAttribute("href", "https://gg.deals/steam/app/" + steamID + "/");
  priceLinks.appendChild(link);
}
