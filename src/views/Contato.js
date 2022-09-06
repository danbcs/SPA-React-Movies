import { ContatoContainer } from "../styles/ContatoContainer";

export const Contato = () => {
    return (
        <ContatoContainer>
            <section className="formcontato" id="contato">
                <div className="formcontato--contacto">
                    <div className="formcontato--icone">
                        <h1>CastroMovies</h1>
                    </div>
                    <div className="formcontato--esquerda">
                        <h4 className="formcontato--title">Quem somos</h4>
                        <h4 className="formcontato--title">Política de privacidade</h4>
                        <h4 className="formcontato--title">Programa fidelidade</h4>
                        <h4 className="formcontato--title">Nossas lojas</h4>
                        <h4 className="formcontato--title">Quero ser franqueado</h4>
                        <h4 className="formcontato--title">Anuncie aqui</h4>
                    </div>
                    <div className="formcontato--text">
                        <h2 className="formcontato--title">Fale conosco</h2>
                        <form className="formcontato--form" action="" method="">
                            <input className="formcontato--input" type="text" id="nome" placeholder="Nome" />
                            <textarea className="formcontato--textarea" rows="5" cols="40" id="mensagem" name="mensagem"
                                placeholder="Sua mensagem" type="text"></textarea>
                            <button className="formcontato--botao" type="submit">Enviar mensagem</button>
                        </form>
                    </div>
                </div>
            </section>
        </ContatoContainer>
    );
};