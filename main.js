window.onload = () => {
  const submeter = document.querySelector(".submeter");
  const submissao = document.querySelector(".submissao");
  const confirmacao = document.querySelector(".confirmacao");
  const avaliacao = document.querySelector(".avaliacao");

  submeter.addEventListener("click", trocarTela);
  function trocarTela() {
    const active = document.querySelector('.active');
    if(!active){
      return;
    }
    submissao.classList.add("hidden");
    confirmacao.classList.remove("hidden");
    avaliacao.textContent = `You selected ${active.textContent} out of 5`
  }

  let buttons = document.querySelectorAll('.botoes > button');
  buttons.forEach(button => {
    button.addEventListener('click', function (){
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
  });



};
