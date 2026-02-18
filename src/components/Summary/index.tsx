
import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";
export function Summary(){

    const summary = useSummary();

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>
                        <h1>Entradas</h1>
                    </span>
                    <ArrowCircleUp size={32} color="#00b37e"  />
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>
                    <h1>Saídas</h1>
                    </span>
                    <ArrowCircleDown size={32} color="#f75a68"  />
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant='green' >
                <header>
                    <span>
                    <h1>Total</h1>
                    </span>
                    <CurrencyDollar size={32} color="#fff"  />
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}