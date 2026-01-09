import { LogIn } from "lucide-react";
import React from "react";
const Disclaimer = () => {
  const handleClick = () => {
    localStorage.setItem("isDisclaimerRead", true);
    window.location.reload();
  };
  return (
    <div>
      <dialog open id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Дароу петух</h3>
          <p className="py-4 ">
            Это место срущий ад, не советую сюда соваться. Если ты что то не
            будешь понимать, то оно и к лучшему. Этот сайт не предназначен для
            просмотра людей которые не разбираются во всей истории. Если не хочешь поймать
            лютую кринжату, то советую покинуть этот сайт.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClick} className="btn btn-primary">
                Продолжить <LogIn />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Disclaimer;
