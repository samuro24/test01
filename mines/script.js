document.addEventListener("DOMContentLoaded", function () {
  const _0x3d5edc = document.querySelector(".cells-board");
  if (!_0x3d5edc) {
    console.error("Element .cells-board not found.");
    return;
  }
  let _0xa1e3ec = _0x3d5edc.innerHTML;
  const _0x20a032 = new URLSearchParams(window.location.search);
  const _0x511536 = _0x20a032.get("botName") || "Unknown";
  const _0x242092 = _0x20a032.get("language") || "en";
  const _0x2adfd8 = [1, 3, 5, 7];
  const _0xba634a = {
    "1": 7,
    "3": 5,
    "5": 4,
    "7": 3
  };
  let _0x6ed3d5 = 0;
  const _0x5e4d08 = document.getElementById("trapsAmount");
  const _0x26da5e = document.getElementById("prev_preset_btn");
  const _0x20cc41 = document.getElementById("next_preset_btn");
  const _0x59b8f6 = document.getElementById("modeButton");
  let _0x366b1a = "nesk";
  function _0x3d8b58() {
    if (_0x5e4d08) {
      _0x5e4d08.textContent = _0x2adfd8[_0x6ed3d5];
    }
  }
  if (_0x26da5e) {
    _0x26da5e.addEventListener("click", function () {
      if (_0x6ed3d5 > 0) {
        _0x6ed3d5--;
        _0x3d8b58();
      }
    });
  }
  if (_0x20cc41) {
    _0x20cc41.addEventListener("click", function () {
      if (_0x6ed3d5 < _0x2adfd8.length - 1) {
        _0x6ed3d5++;
        _0x3d8b58();
      }
    });
  }
  if (_0x59b8f6) {
    _0x59b8f6.addEventListener("click", function () {
      _0x366b1a = _0x366b1a === "nesk" ? "all" : "nesk";
      _0x59b8f6.textContent = _0x366b1a === "nesk" ? "Switch to All" : "Switch to multiple";
    });
  }
  _0x3d8b58();
  function _0x11ccbf() {
    const _0x235a39 = document.querySelectorAll(".cells-board .cell");
    _0x235a39.forEach(_0x284266 => {
      _0x284266.addEventListener("click", () => {
        _0x284266.style.transform = "scale(0.7)";
        setTimeout(() => {
          _0x284266.style.transform = "scale(1)";
        }, 200);
      });
    });
  }
  function _0x45ac11(_0x33fecd) {
    _0x33fecd.style.display = "block";
    return _0x33fecd;
  }
  let _0x87c5da = true;
  const _0x5aad7e = document.getElementById("playButton");
  if (_0x5aad7e) {
    _0x5aad7e.addEventListener("click", function () {
      _0x5aad7e.disabled = true;
      let _0x35fe31 = document.querySelectorAll(".cells-board .cell");
      if (!_0x87c5da) {
        _0x3d5edc.innerHTML = "";
        _0x9b1db7();
        _0x35fe31 = document.querySelectorAll(".cells-board .cell");
      }
      const _0x421a16 = parseInt(_0x5e4d08.textContent);
      const _0x12f1db = _0x35fe31.length;
      const _0x267f2f = new Set();
      while (_0x267f2f.size < _0x421a16) {
        const _0x15af9a = Math.floor(Math.random() * _0x12f1db);
        _0x267f2f.add(_0x15af9a);
      }
      if (_0x366b1a === "nesk") {
        const _0x3e3d4c = _0xba634a[_0x421a16] || 0;
        const _0x4e143e = [];
        while (_0x4e143e.length < _0x3e3d4c) {
          const _0x13fc37 = Math.floor(Math.random() * _0x35fe31.length);
          if (!_0x4e143e.includes(_0x13fc37)) {
            _0x4e143e.push(_0x13fc37);
          }
        }
        let _0x5b6bd3 = 0;
        function _0x1c75d4() {
          if (_0x5b6bd3 < _0x4e143e.length) {
            const _0x289427 = _0x4e143e[_0x5b6bd3];
            const _0x18ccc9 = _0x35fe31[_0x289427];
            _0x18ccc9.classList.add("cell-fade-out");
            setTimeout(async () => {
              _0x18ccc9.innerHTML = "";
              try {
                const _0x591e58 = await fetch("img/stars.svg");
                const _0x13f0b1 = await _0x591e58.text();
                const _0x270884 = document.createElement("div");
                _0x270884.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    position: relative;\n                                ";
                _0x270884.innerHTML = _0x13f0b1;
                _0x18ccc9.appendChild(_0x270884);
                const _0x30bd59 = _0x270884.querySelector("svg");
                if (_0x30bd59) {
                  _0x30bd59.style.cssText = "\n                                        width: 56px;\n                                        height: 56px;\n                                        max-width: 100%;\n                                        max-height: 100%;\n                                        display: block;\n                                        opacity: 0;\n                                        transform: scale(0);\n                                        transition: opacity 0.3s, transform 0.3s;\n                                    ";
                  const _0x550406 = _0x30bd59.getAttribute("viewBox");
                  if (!_0x550406) {
                    const _0x377117 = _0x30bd59.getAttribute("width") || "100";
                    const _0x4289ff = _0x30bd59.getAttribute("height") || "100";
                    _0x30bd59.setAttribute("viewBox", "0 0 " + _0x377117 + " " + _0x4289ff);
                  }
                  _0x30bd59.setAttribute("preserveAspectRatio", "xMidYMid meet");
                  _0x30bd59.classList.add("star-animation");
                  requestAnimationFrame(() => {
                    _0x30bd59.style.opacity = "1";
                    _0x30bd59.style.transform = "scale(1)";
                  });
                }
              } catch (_0x497da4) {
                const _0x48c4eb = document.createElement("img");
                _0x48c4eb.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: block;\n                                    will-change: transform, opacity;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                _0x48c4eb.src = "img/stars.svg";
                _0x18ccc9.appendChild(_0x48c4eb);
                requestAnimationFrame(() => {
                  _0x48c4eb.style.opacity = "1";
                  _0x48c4eb.style.transform = "scale(1)";
                });
              }
              _0x18ccc9.classList.remove("cell-fade-out");
              _0x5b6bd3++;
              setTimeout(_0x1c75d4, 700);
            }, 400);
          } else {
            _0x5aad7e.disabled = false;
            if (_0x87c5da) {
              _0x87c5da = false;
            }
          }
        }
        _0x1c75d4();
      } else {
        Promise.all([..._0x35fe31].map((_0x4d6782, _0x2ab2ec) => {
          return new Promise(async _0x5c8918 => {
            _0x4d6782.classList.add("cell-fade-out");
            _0x4d6782.innerHTML = "";
            try {
              const _0x47f84e = await fetch(_0x267f2f.has(_0x2ab2ec) ? "img/krest.svg" : "img/stars.svg");
              const _0x4880af = await _0x47f84e.text();
              const _0xbbdc6f = document.createElement("div");
              _0xbbdc6f.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                position: relative;\n                            ";
              _0xbbdc6f.innerHTML = _0x4880af;
              _0x4d6782.appendChild(_0xbbdc6f);
              const _0x2c323e = _0xbbdc6f.querySelector("svg");
              if (_0x2c323e) {
                _0x2c323e.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    max-width: 100%;\n                                    max-height: 100%;\n                                    display: block;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                const _0x31529b = _0x2c323e.getAttribute("viewBox");
                if (!_0x31529b) {
                  const _0x2c9cc5 = _0x2c323e.getAttribute("width") || "100";
                  const _0x5f586b = _0x2c323e.getAttribute("height") || "100";
                  _0x2c323e.setAttribute("viewBox", "0 0 " + _0x2c9cc5 + " " + _0x5f586b);
                }
                _0x2c323e.setAttribute("preserveAspectRatio", "xMidYMid meet");
                _0x2c323e.classList.add("star-animation");
                _0x2c323e.style.opacity = "0";
                _0x2c323e.style.transform = "scale(0)";
                requestAnimationFrame(() => {
                  _0x2c323e.style.opacity = "1";
                  _0x2c323e.style.transform = "scale(1)";
                });
              }
            } catch (_0x39450f) {
              const _0x53e153 = document.createElement("img");
              _0x53e153.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: block;\n                                will-change: transform, opacity;\n                                opacity: 0;\n                                transform: scale(0);\n                                transition: opacity 0.3s, transform 0.3s;\n                            ";
              _0x53e153.src = _0x267f2f.has(_0x2ab2ec) ? "img/krest.svg" : "img/stars.svg";
              _0x4d6782.appendChild(_0x53e153);
              requestAnimationFrame(() => {
                _0x53e153.style.opacity = "1";
                _0x53e153.style.transform = "scale(1)";
              });
            }
            _0x4d6782.classList.remove("cell-fade-out");
            _0x5c8918();
          });
        })).then(() => {
          _0x5aad7e.disabled = false;
          _0x87c5da &&= false;
        });
      }
    });
  }
  function _0x9b1db7() {
    const _0x46a72c = ["output_svgs/image_5450.svg", "output_svgs/image_11641.svg", "output_svgs/image_18337.svg", "output_svgs/image_24493.svg", "output_svgs/image_31201.svg", "output_svgs/image_37357.svg", "output_svgs/image_44065.svg", "output_svgs/image_50221.svg", "output_svgs/image_56929.svg", "output_svgs/image_63085.svg", "output_svgs/image_69793.svg", "output_svgs/image_75949.svg", "output_svgs/image_82645.svg", "output_svgs/image_89353.svg", "output_svgs/image_95509.svg", "output_svgs/image_102217.svg", "output_svgs/image_108373.svg", "output_svgs/image_115081.svg", "output_svgs/image_121237.svg", "output_svgs/image_127381.svg", "output_svgs/image_134077.svg", "output_svgs/image_140221.svg", "output_svgs/image_146917.svg", "output_svgs/image_153061.svg", "output_svgs/image_159757.svg"];
    _0x46a72c.forEach(_0x2beef5 => {
      const _0x393b6b = document.createElement("button");
      _0x393b6b.type = "button";
      _0x393b6b.className = "cell";
      _0x393b6b.innerHTML = "<img width=\"56\" height=\"56\" src=\"" + _0x2beef5 + "\">";
      _0x3d5edc.appendChild(_0x393b6b);
    });
    _0x11ccbf();
  }
  _0x9b1db7();
});
