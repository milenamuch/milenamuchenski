const BoasVindas = () => {
  return (
    <div className="texto-centralizado">
      <div className="centralizado">
        <img
          src="https://rollingstone.uol.com.br/media/uploads/queen_-_logo__reproducao.jpg"
          alt="Queen"
          width={400}
          magin-={50}
        />
      </div>
      <h1>Seja bem vindo</h1>
      <h2>Veja 10 curiosidades sobre a Banda Queen</h2>
      <ol>
        <li>
          A banda surgiu em 1968, quando os amigos Brian May (guitarrista) e Tim
          Staffel (cantor e baixista) decidiram se juntar e colocaram um anúncio
          no Imperial College, em Londres, procurando um baterista - que foi
          quando Roger Taylor apareceu.
        </li>
        <li>
          Antes de ganhar o famoso nome Queen, a banda se chamava Smile. O nome
          original foi dado apenas em 1970, quando Freddie Mercury substituiu
          Tim Staffel como vocalista e sugeriu a mudança.
        </li>
        <li>
          O brasão do Queen foi criado por Freddie Mercury, que usou símbolos
          dos signos integrantes da banda: dois leões, representando Roger
          Taylor e John Deacon, o caranguejo de câncer, de Brian May, e suas
          fadas representando o signo de virgem, de Freddie.
        </li>
        <li>
          Além de artistas, os integrantes da banda possuíam outras formações
          acadêmicas: Freddie Mercury era formado em design gráfico; Roger
          Taylor, em ciências biológicas; John Deacon era engenheiro eletrônico
          (e construía equipamentos para a banda); enquanto Brian May é PhD em
          astrofísica, chegando até a colaborar como pesquisador da NASA!
        </li>
      </ol>
    </div>
  );
};

export default BoasVindas;
