
import { useFetch, useCounter } from "../hooks"
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>BreakingBAd Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote/>
                    )
                    : (
                        <Quote  author={author} quote={quote} />
                    )
            }

            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onclick={ () => increment() } >
                next quote
            </button>
        </>
    )
}
