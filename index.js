

        
        
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
                if (!isNaN(donateMoney) === true && donateNumber > 0 ) {
                                       
                const newBalance = donateNumber + balanceNumber;
                document.getElementById('balance-amount').innerText = newBalance;
                const newAccountBalance = accountBalanceNumber - donateNumber;
                document.getElementById('account-balance').innerText = newAccountBalance;
                const entry = document.createElement('p');
                entry.innerText = `Tk.${donateMoney} is donated for Donate for flood in Noakhali,Bangladesh`;
                document.getElementById('Transaction-history').appendChild(entry);
                }
                else{
                        alert('invalid donation amount');
                }
                

                          

                
        })
       
        document.getElementById('history-button').addEventListener('click',function(){
                
                document.getElementById('Noakhali-Flood').classList.add('hidden');
                document.getElementById('Transaction-history').classList.remove('hidden');
                document.getElementById('history-button').style.backgroundColor = "#B4F461";
                document.getElementById('donation-button').style.backgroundColor = "transparent ";

                
                
                
        })
        document.getElementById('donation-button').addEventListener('click',function(){
                
                document.getElementById('Noakhali-Flood').classList.remove('hidden');
                document.getElementById('Transaction-history').classList.add('hidden');
                document.getElementById('donation-button').style.backgroundColor = "#B4F461";
                document.getElementById('history-button').style.backgroundColor = "transparent";
                
                
        })

//       