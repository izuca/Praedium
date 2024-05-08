import Button from "./button";

export default function SearchMenu() {
  return (
    <div className="bg-black flex flex-col gap-8 w-80">
      <div className="bg-orange h-6" />
      <div className="flex justify-center">
        <h2 className="text-white-900 text-2xl font-thin text-center w-40">
          Encontre o seu imóvel aqui.
        </h2>
      </div>
      <ul className="flex flex-col items-center gap-4 pb-8">
        <li>
          <select
            name="contrato"
            id="contrato"
            className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 "
          >
            <option value="Apartamento">Apartamento</option>
            <option value="Studio">Studio</option>
            <option value="Kitnet">Kitnet</option>
            <option value="Casa">Casa</option>
            <option value="Sobrado">Sobrado</option>
          </select>
        </li>
        <li>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cidade, Bairro ou Cidade"
            className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 placeholder-white-600 "
          />
        </li>
        <li>
          <select
            id="estado"
            name="estado"
            className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 "
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
        </li>
        <li>
          <select
            name="contrato"
            id="contrato"
            className="w-56 py-2 px-3 text-sm bg-black border-solid border hover:border-2 focus:border-2 text-white-600 font-thin border-white-600 "
          >
            <option value="Aluguel">Aluguel</option>
            <option value="Venda">Venda</option>
          </select>
        </li>
        <li>
          <Button label="Pesquisar" />
        </li>
      </ul>
    </div>
  );
}
