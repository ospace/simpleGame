;(function(){
    "use strict"
    window.addEventListener("load", setupWebGL, false);

    var vertextString = '#ifdef GL_ES\n\
    precision mediump float;\n\
    #endif\n\
    void main() {\n\
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n\
      gl_PointSize = 1024.0;\n\
    }';

    // var vertextString = '#ifdef GL_ES\n\
    //   precision mediump float;\n\
    //   #endif\n\
    //   attribute vec2 a_position;\n\
    //   attribute vec2 a_texcoord;\n\
    //   varying vec2 v_texcoord;\n\
    //   void main() {\n\
    //       gl_Position = vec4(a_position, 0.0, 1.0);\n\
    //       v_texcoord = a_texcoord;\n\
    //   }';

    var fragmentString ='#ifdef GL_ES\n\
      precision mediump float;\n\
      #endif\n\
      varying vec2 v_texcoord;\n\
      void main(){\n\
          gl_FragColor = vec4(0.0);\n\
      }';

    var gl, program;
    function setupWebGL (evt) {
        window.removeEventListener(evt.type, setupWebGL, false);
        if (!(gl = getRenderingContext())) return;

        var vertexShader = buildShader(getInlineHTML("#vertex-shader") || vertextString, gl.VERTEX_SHADER);
        var fragmentShader = buildShader(getInlineHTML("#fragment-shader") || fragmentString, gl.FRAGMENT_SHADER);

        program = gl.createProgram();

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        //gl.detachShader(program, vertexShader);
        //gl.detachShader(program, fragmentShader);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          var linkErrLog = gl.getProgramInfoLog(program);
          cleanup();

          if (linkErrLog) {
              console.error(linkErrLog);
              throw new Error("Shader program did not link successfully. "
                  + "Error log: " + linkErrLog);
          }
          return;
        } 

        initializeAttributes();

        gl.useProgram(program);
        gl.drawArrays(gl.POINTS, 0, 1);

        cleanup();
        console.log('> glsl loaded...')
    }

    function  getInlineHTML(selector)  {
      var elem = document.querySelector(selector);
      return elem && elem.innerHTML
    }

    function buildShader(source, type) {
      var ret = gl.createShader(type);
      gl.shaderSource(ret, source);
      gl.compileShader(ret);

      if (!gl.getShaderParameter(ret, gl.COMPILE_STATUS)) {
        console.error("Error compiling: ", gl.getShaderInfoLog(ret));
        gl.deleteShader(ret);
        return null;
      } 

      return ret;
    }
    
    var buffer;
    function initializeAttributes() {
        gl.enableVertexAttribArray(0);
        buffer = gl.createBuffer();  
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
    }
    
    function cleanup() {
        gl.useProgram(null);
        if (buffer)
        gl.deleteBuffer(buffer);
        if (program) 
        gl.deleteProgram(program);
    }
    
    function getRenderingContext() {
      var canvas = document.querySelector("canvas");
      if (!canvas) throw new Error('Not found canvas element!!!');

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      var gl = canvas.getContext("webgl") 
        || canvas.getContext("experimental-webgl");
      if (!gl) {
        throw new Error("Failed to get WebGL context."
          + "Your browser or device may not support WebGL.");
      }
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return gl;
    }
    })();