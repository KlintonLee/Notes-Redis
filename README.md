# Redis

## O que é o Redis?
Redis é uma ferramenta open-source que salva em memória estruturas de dados, sendo um dos armazenamentos em `chave: valor` mais conhecido do mercado. 

Ele garante um armazenamento em alta velocidade e claro, fácil de utilizar, já que exige um baixo nível de código para gerenciar os dados.

O benefício de utiliza-lo, é evitar gasto de recursos quando o número de acessos começa a aumentar. Já que o armazenamento na memória leva menos tempo para efetuar a atividade em comparação as ferramentas tradicionais.

### Por que utilizar o Redis?
- Desempenho muito rápido - ao evitar o acesso em disco, evita atrasos de tempo de busca e podem acessar dados com algoritmos mais simples que usam menos instruções de CPU.
- Estrutura de dados em memória - O tipo de dados fundamental é uma `string`, que pode ser em formato de dados de `texto` ou `binários` e ter no máximo `512 MB`.
- Versatilidade e facilidade de uso - manipular os dados no Redis é simples, porque mantém a estrutura de dados intacta.
- Escalabilidade - permite atingir níveis de performance desejáveis, tanto horizontal quanto vertical.

## Como funciona?
![Redis](/assets/redis.png)

## Datatypes suportados - eu costumo utilizar apenas strings
- **Hashes** - Coleção de chave:valor;
- **Lists** - Lista de strings, ordenados na ordem que foram inseridos. Os elementos podem ser adicionados na head ou na tail;
- **Sets** - Coleção de strings não ordenados;
- **Strings** - Desde que não ultrapasse 512 megabytes, ciente que cada caracter dentro da tabela ASCII vale 1 byte;

```
redis 127.0.0.1:6379> SET name "tutorialspoint" 
OK 
redis 127.0.0.1:6379> GET name 
"tutorialspoint"
```
