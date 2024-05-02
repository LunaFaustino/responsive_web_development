"use client";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  nome : yup.string().required("O nome é de preenchimento obrigatório!"),
  email : yup.string().required("O e-mail é de preenchimento obrigatório!").email("E-mail incorreto!"),
  cpf : yup.string().required("O CPF é de preenchimento obrigatório").min(11, "O CPF deve ter 11 dígitos"),
  cep : yup.string().required("O CEP é de preenchimento obrigatório").min(8,"O CEP deve ter 8 dígitos!"),
  rua : yup.string(),
  numero : yup.string(),
  complemento : yup.string(),
  bairro : yup.string(),
  cidade : yup.string(),
  estado : yup.string(),
  ddd : yup.number()
}).required();


export default function Home() {

  const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({
    resolver: yupResolver(schema)
  });

  const [listaCliente, setListaCliente] = useState<any[]>([]);

  function inserirCliente(cliente : any){
    setListaCliente([...listaCliente, cliente]);
  }

  function buscaCep(e : {target : {value : string};}){
    const cep = e.target.value.replace(/\D/g,'');
    fetch(`https:viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("cidade", data.localidade);
      setValue("estado", data.uf);
      setValue("ddd", data.ddd);
      setFocus("numero");
    });

  }

  return (
    <>
      <form onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="nome">Nome:
            <input type="text" id="nome" {...register("nome")}/>
            <span>{errors.nome?.message}</span>
          </label>
          <br />
          <label htmlFor="email">E-mail:
            <input type="text" id="email" {...register("email")}/>
            <span>{errors.email?.message}</span>
          </label>
          <br />
          <label htmlFor="cpf">CPF:
            <input type="text" id="cpf" {...register("cpf")}/>
            <span>{errors.cpf?.message}</span>
          </label>
          <br />
          <label htmlFor="cep">CEP:
            <input type="text" id="cep" {...register("cep")} onBlur={buscaCep}/>
            <span>{errors.cep?.message}</span>
          </label>
          <br />
          <label htmlFor="rua">Rua:
            <input type="text" id="rua" {...register("rua")}/>
          </label>
          <br />
          <label htmlFor="numero">Número:
            <input type="text" id="numero" {...register("numero")}/>
          </label>
          <br />
          <label htmlFor="complemento">Complemento:
            <input type="text" id="complemento" {...register("complemento")}/>
          </label>
          <br />
          <label htmlFor="bairro">Bairro:
            <input type="text" id="bairro" {...register("bairro")}/>
          </label>
          <br />
          <label htmlFor="cidade">Cidade:
            <input type="text" id="cidade" {...register("cidade")}/>
          </label>
          <br />
          <label htmlFor="estado">Estado:
            <input type="text" id="estado" {...register("estado")}/>
          </label>
          <br />
          <label htmlFor="ddd">DDD:
            <input type="number" id="ddd" {...register("ddd")}/>
          </label>
          <br />
          <button type="submit">Gravar Dados</button>
        </fieldset>
      </form>
    </>
  );
}
