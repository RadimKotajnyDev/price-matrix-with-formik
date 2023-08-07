import {useEffect, useRef, useState} from "react";
import {FetchData, ReformatRuleSets} from "../configs/API.tsx";
import {ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";

export function useRenderingForm() {

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrix, setMatrix] = useState({name: "", id: 0})

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    FetchData().then((res) => setMatrix(res))
    ReformatRuleSets()
      .then((res) => {
        setResolvedRuleSets(res);
        setLoading(false);
      })
  }, [loading])

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

  const [ModalState, setModalState] = useState<boolean>(false)
  const [ErrorModal, setErrorModal] = useState<boolean>(false)
  useEffect(() => {
    if (ModalState) {
      const timeout = setTimeout(() => {
        setModalState(false)
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [ModalState]);

  function DisplayError() {
    setErrorModal(true)
    setModalState(true)
  }
  return {
    RefOnTop,
    setLoading,
    loading,
    resolvedRuleSets,
    matrix,
    setModalState,
    ModalState,
    lastRuleSetAdded,
    setRuleSetToRemoveAnimation,
    ruleSetToRemoveAnimation,
    AddRulesetAnimate,
    setErrorModal,
    ErrorModal,
    DisplayError
  }
}