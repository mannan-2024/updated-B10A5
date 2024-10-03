// -------for Noakhali-----
        
document.getElementById('donate-button').addEventListener('click',function(){
        document.getElementById('donate-button').style.backgroundColor = "#B4F461";
                                                                })
        
        document.getElementById('donate-button').addEventListener('click',function(){
                
                const donateMoney = document.getElementById('input-amount-field').value ;
                const donateNumber = parseFloat(donateMoney);
                const balance = document.getElementById('balance-amount').innerText ;
                const balanceNumber = parseFloat(balance);
                const accountBalance = document.getElementById('account-balance').innerText;
                const accountBalanceNumber = parseFloat(accountBalance);
                
                if (!isNaN(donateMoney) === true && donateNumber > 0 && donateNumber <= accountBalanceNumber ) {
                                                       
                const newBalance = donateNumber + balanceNumber;
                document.getElementById('balance-amount').innerText = newBalance;
                
                const newAccountBalance = accountBalanceNumber - donateNumber;
                document.getElementById('account-balance').innerText = newAccountBalance;
                
                const entry = document.createElement('p');
                entry.innerText = `Tk.${donateMoney} is donated for Donate for flood in Noakhali,Bangladesh`;
                document.getElementById('Transaction-history').appendChild(entry);
                document.getElementById('my-modal').open = true;
                const d = document.createElement('p');
                d.innerText = Date();
                document.getElementById('Transaction-history').appendChild(d);
                }
                else{
                        alert('invalid donation amount');
                }                       
     
        })

        document.getElementById('close-modal').addEventListener('click',function(){
                document.getElementById('my-modal').open = false;
        })



        // ------for Feni--------     
        
        document.getElementById('donate-button-2').addEventListener('click',function(){
                document.getElementById('donate-button-2').style.backgroundColor = "#B4F461";
                                                                        })
                
                document.getElementById('donate-button-2').addEventListener('click',function(){
                        
                        const donateMoney2 = document.getElementById('input-amount-field-2').value ;
                        const donateNumber2 = parseFloat(donateMoney2);
                        const balance2 = document.getElementById('balance-amount-2').innerText ;
                        const balanceNumber2 = parseFloat(balance2);
                        const accountBalance = document.getElementById('account-balance').innerText;
                        const accountBalanceNumber = parseFloat(accountBalance);
                        
                        if (!isNaN(donateMoney2) === true && donateNumber2 > 0 && donateNumber2 <= accountBalanceNumber ) {
                                                               
                        const newBalance2 = donateNumber2 + balanceNumber2;
                        document.getElementById('balance-amount-2').innerText = newBalance2;
                        
                        const newAccountBalance = accountBalanceNumber - donateNumber2;
                        document.getElementById('account-balance').innerText = newAccountBalance;
                        
                        const entry = document.createElement('p');
                        entry.innerText = `Tk.${donateMoney2} is donated for Donate for flood in Feni,Bangladesh`;
                        document.getElementById('Transaction-history').appendChild(entry);
                        document.getElementById('my-modal-2').open = true;
                        const d = document.createElement('p');
                        d.innerText = Date();
                        document.getElementById('Transaction-history').appendChild(d);
                        }
                        else{
                                alert('invalid donation amount');
                        }                               
        
                        
                })
                document.getElementById('close-modal-2').addEventListener('click',function(){
                        document.getElementById('my-modal-2').open = false;
                })


        //        
        // -----------For Quota-protest---
        
        
        document.getElementById('donate-button-3').addEventListener('click',function(){
                document.getElementById('donate-button-3').style.backgroundColor = "#B4F461";
                                                                        })
                
                document.getElementById('donate-button-3').addEventListener('click',function(){
                        
                        const donateMoney3 = document.getElementById('input-amount-field-3').value ;
                        const donateNumber3 = parseFloat(donateMoney3);
                        const balance3 = document.getElementById('balance-amount-3').innerText ;
                        const balanceNumber3 = parseFloat(balance3);
                        const accountBalance = document.getElementById('account-balance').innerText;
                        const accountBalanceNumber = parseFloat(accountBalance);
                        
                        if (!isNaN(donateMoney3) === true && donateNumber3 > 0 && donateNumber3 <= accountBalanceNumber ) {
                                                               
                        const newBalance3 = donateNumber3 + balanceNumber3;
                        document.getElementById('balance-amount-3').innerText = newBalance3;
                        
                        const newAccountBalance = accountBalanceNumber - donateNumber3;
                        document.getElementById('account-balance').innerText = newAccountBalance;
                        
                        const entry = document.createElement('p');
                        entry.innerText = `Tk.${donateMoney3} is donated for Donate for flood in Noakhali,Bangladesh`;
                        document.getElementById('Transaction-history').appendChild(entry);
                        document.getElementById('my-modal-3').open = true;
                        const d = document.createElement('p');
                        d.innerText = Date();
                        document.getElementById('Transaction-history').appendChild(d);
                        }
                        else{
                                alert('invalid donation amount');
                        }                             
        
                        
                })
                document.getElementById('close-modal-3').addEventListener('click',function(){
                        document.getElementById('my-modal-3').open = false;
                })
        //        
//   


// ----------Toggle Section-----
        document.getElementById('history-button').addEventListener('click',function(){
                
                document.getElementById('Donation-container').classList.add('hidden');
                document.getElementById('Transaction-history').classList.remove('hidden');
                document.getElementById('history-button').style.backgroundColor = "#B4F461";
                document.getElementById('donation-button').style.backgroundColor = "transparent ";
                
        })
        document.getElementById('donation-button').addEventListener('click',function(){
                
                document.getElementById('Donation-container').classList.remove('hidden');
                document.getElementById('Transaction-history').classList.add('hidden');
                document.getElementById('donation-button').style.backgroundColor = "#B4F461";
                document.getElementById('history-button').style.backgroundColor = "transparent";
                
                
        })

//       