function addItems(elementId,priceId)
{
    
   const price =Getprice(priceId);
   console.log(price);
   
// get input price and total calculation
const TotalpriceP=document.getElementById('total-price')
    const TotalpricePString=TotalpriceP.innerText;
    const Totalprice=parseFloat(TotalpricePString);
   
    const AllTotalprice=Totalprice+price;
  
    TotalpriceP.innerText=AllTotalprice;


    //WITHOUT discount Total price
    const TotalValueDoc=document.getElementById('Total-Value');
   TotalValueDoc.innerHTML=AllTotalprice;

    //enable cupon button
    const cupponbutton=document.getElementById('cuppon-btn');
    if(AllTotalprice>=200)
    {
        
     cupponbutton.removeAttribute('disabled')
     document.getElementById('cuppon-btn').addEventListener('click',function(){
        const textValue=document.getElementById('input-field');
        const text=textValue.value;
        console.log(text);

        if(text=='SELL200')
        {
            
         const DiscountPdocument=document.getElementById('Discount');
        const DiscountPString=DiscountPdocument.innerText;
        const Discount=parseFloat(DiscountPString);
        const Discountprice =(AllTotalprice/100)*20;
        DiscountPdocument.innerText=Discountprice;





          // total calculation 

   const TotalValueDoc=document.getElementById('Total-Value');
   
     const Total=(AllTotalprice-Discountprice);
        
     TotalValueDoc.innerText=Total;

        }





     })
     
    }
    //make purchase buttopn 
     //enable cupon button
     const purchasebutton=document.getElementById('make-purchase');
     if(AllTotalprice>0)
     {
         
      purchasebutton.removeAttribute('disabled')
     }
    
    // discount calculation 


   
    
//set list 

    
    const div=document.getElementById(elementId);
    const listName=div.innerText;

    
    const ol=document.getElementById('ol-list');
    const divList=document.getElementById('div-list');
    const li=document.createElement('li');
    li.innerText=listName;
   
    ol.appendChild(li);
    divList.appendChild(ol);
    
    console.log(ol);

 

     



}


function AlltotalPrice(PriceId){
    const sum=0;

}

function Getprice(priceId)


{
    const PriceInStringValue=document.getElementById(priceId);
    const PriceInString=PriceInStringValue.innerText;
    const pric=parseFloat(PriceInString);
    return pric

}


   

