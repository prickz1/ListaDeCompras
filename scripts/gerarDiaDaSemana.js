function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const diaFormatado = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const dataCompleta = `${diaFormatado} (${data}) às ${hora}`

    return dataCompleta
}

export default gerarDiaDaSemana;