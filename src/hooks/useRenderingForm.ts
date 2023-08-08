import {useEffect, useRef, useState} from "react";
import {FetchData, ReformatRuleSets} from "../configs/API.tsx";
import {ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";

export function useRenderingForm() {

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrixData, setMatrixData] = useState({name: "", id: 0})

  const [loadingSpin, setLoadingSpin] = useState<boolean>(true);
  useEffect(() => {
    FetchData().then((res) => setMatrixData(res))
    ReformatRuleSets()
      .then((res) => {
        setResolvedRuleSets(res);
        setLoadingSpin(false);
      })
  }, [loadingSpin])

  const RefOnTop = useRef(null)

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false);
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null);

  const AddRulesetAnimate = () => {
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      ScrollToTop(RefOnTop);
    }, 500);
  };

  const [requestModalState, setRequestModalState] = useState<boolean>(false)
  const [ErrorStateModal, setErrorStateModal] = useState<boolean>(false)
  useEffect(() => {
    if (requestModalState) {
      const timeout = setTimeout(() => {
        setRequestModalState(false)
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [requestModalState]);

  function DisplayError() {
    setErrorStateModal(true)
    setRequestModalState(true)
  }

  return {
    RefOnTop,
    setLoadingSpin,
    loadingSpin,
    resolvedRuleSets,
    matrixData,
    setRequestModalState,
    requestModalState,
    lastRuleSetAdded,
    setRuleSetToRemoveAnimation,
    ruleSetToRemoveAnimation,
    AddRulesetAnimate,
    setErrorStateModal,
    ErrorStateModal,
    DisplayError
  }
}