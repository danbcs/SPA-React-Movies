import { ContatoContainer } from "../styles/ContatoContainer";

export const Contato = () => {
    return (
        <ContatoContainer>
            <section class="formcontato" id="contato">
                <div class="formcontato--contacto">
                    <div class="formcontato--icone">
                        <h1>CastroMovies</h1>
                    </div>
                    <div class="formcontato--esquerda">
                        <h4 class="formcontato--title">Quem somos</h4>
                        <h4 class="formcontato--title">Política de privacidade</h4>
                        <h4 class="formcontato--title">Programa fidelidade</h4>
                        <h4 class="formcontato--title">Nossas lojas</h4>
                        <h4 class="formcontato--title">Quero ser franqueado</h4>
                        <h4 class="formcontato--title">Anuncie aqui</h4>
                    </div>
                    <div class="formcontato--text">
                        <h2 class="formcontato--title">Fale conosco</h2>
                        <form class="formcontato--form" action="" method="">
                            <input class="formcontato--input" type="text" id="nome" placeholder="Nome" />
                            <textarea class="formcontato--textarea" rows="5" cols="40" id="mensagem" name="mensagem"
                                placeholder="Sua mensagem" type="text"></textarea>
                            <button class="formcontato--botao" type="submit">Enviar mensagem</button>
                        </form>
                    </div>
                </div>
            </section>
        </ContatoContainer>
    );
};