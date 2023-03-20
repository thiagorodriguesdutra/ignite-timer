import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Relatório matinal</td>
              <td>26 minutos</td>
              <td>Há cerca de 2 horas</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
