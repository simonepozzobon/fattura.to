<template lang="html">
    <div class="fattura">
        <div class="fattura-headcolor"></div>
        <div class="fattura-inner">
            <div class="fattura-content">
                <h1>Crea Fattura</h1>
                <div class="fattura-form-naming">
                    <div class="fattura-form-split">
                        <label for="name">Nome</label>
                        <input type="text" name="name" value="" class="form-control">
                    </div>
                    <div class="fattura-form-split">
                        <label for="name">P.IVA</label>
                        <input type="text" name="name" value="" class="form-control">
                    </div>
                </div>
                <div class="fattura-form-address">
                    <div class="fattura-inner-box">
                        <div class="form-group">
                            <label for="name">Indirizzo</label>
                            <input type="text" name="name" value="" class="form-control">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="name">Cap</label>
                                <input type="text" name="name" value="" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Provincia</label>
                                <input type="text" name="name" value="" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Città</label>
                            <input type="text" name="name" value="" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="fattura-form-address">
                    <div class="fattura-inner-box">
                        <div class="form-group">
                            <label for="name">Descrizione</label>
                            <input type="text" name="name" value="" class="form-control">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="name">Aliquota</label>
                                <input type="text" name="name" value="" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Prezzo</label>
                                <input type="text" name="name" value="" class="form-control">
                            </div>
                        </div>
                        <div class="row py-2 justify-content-center">
                            <div class="col-2">
                                <button class="btn btn-outline-primary btn-block">Aggiungi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
@import '~styles/shared';

.fattura {
    @include make-container();

    .fattura-headcolor {
        @include make-row();
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 300px;
        @include gradient-directional($blue, $teal, 170deg);
    }

    .fattura-inner {
        @include make-row();
        justify-content: center;

        .fattura-content {
            @include make-col(8);
            @include border-radius($spacer / 4);
            @include box-shadows($gray-500);
            min-height: 300px;
            background-color: $gray-200;
            margin-top: $spacer * 4;
            padding: $spacer * 2;

            h1 {
                display: block;
                font-family: $font-family-monospace;
                text-transform: uppercase;
                font-weight: 400;
                padding-bottom: $spacer;
                margin-bottom: $spacer;
                border-bottom: 2px solid $gray-400;
                color: $gray-700;
            }

            label {
                font-family: $font-family-monospace;
            }

            .fattura-form-naming {
                @include make-row();
                padding: $spacer;
                background-color: $gray-300;
                @include border-radius($spacer / 4);
                margin-left: $spacer / 4;
                margin-right: $spacer / 4;
                margin-top: $spacer * 2;
                margin-bottom: $spacer * 2;
            }

            .fattura-form-split {
                @include make-col(6);
                padding-right: $spacer;
            }

            .fattura-form-address {
                @include make-row();
                margin-left: $spacer / 4;
                margin-right: $spacer / 4;
                margin-bottom: $spacer * 2;

                .fattura-inner-box {
                    @include make-col(12);
                    padding: $spacer;
                    background-color: $gray-300;
                    @include border-radius($spacer / 4);
                }
            }
        }
    }
}

</style>
