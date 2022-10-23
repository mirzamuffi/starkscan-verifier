
export const STARKNET_STD_FILES = {
  "0.10.1": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/layouts/recursive/cairo_verifier.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/cairo_keccak/keccak.cairo",
    "starkware/cairo/common/cairo_keccak/packed_keccak.cairo",
    "starkware/cairo/common/cairo_secp/bigint.cairo",
    "starkware/cairo/common/cairo_secp/constants.cairo",
    "starkware/cairo/common/cairo_secp/ec.cairo",
    "starkware/cairo/common/cairo_secp/field.cairo",
    "starkware/cairo/common/cairo_secp/signature.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/ec.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak_state.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/cairo/stark_verifier/air/config.cairo",
    "starkware/cairo/stark_verifier/air/diluted.cairo",
    "starkware/cairo/stark_verifier/air/layout.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/verify.cairo",
    "starkware/cairo/stark_verifier/air/oods.cairo",
    "starkware/cairo/stark_verifier/air/params.cairo",
    "starkware/cairo/stark_verifier/air/public_input.cairo",
    "starkware/cairo/stark_verifier/air/public_memory.cairo",
    "starkware/cairo/stark_verifier/air/traces.cairo",
    "starkware/cairo/stark_verifier/core/air_interface.cairo",
    "starkware/cairo/stark_verifier/core/channel_test.cairo",
    "starkware/cairo/stark_verifier/core/channel.cairo",
    "starkware/cairo/stark_verifier/core/config.cairo",
    "starkware/cairo/stark_verifier/core/domains.cairo",
    "starkware/cairo/stark_verifier/core/fri/config.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri_formula.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri_layer.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri.cairo",
    "starkware/cairo/stark_verifier/core/proof_of_work.cairo",
    "starkware/cairo/stark_verifier/core/queries.cairo",
    "starkware/cairo/stark_verifier/core/stark.cairo",
    "starkware/cairo/stark_verifier/core/table_commitment.cairo",
    "starkware/cairo/stark_verifier/core/utils.cairo",
    "starkware/cairo/stark_verifier/core/vector_commitment.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/constants.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contract_address/contract_address.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test_unwhitelisted_hint.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.10.0": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/layouts/recursive/cairo_verifier.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/cairo_keccak/keccak.cairo",
    "starkware/cairo/common/cairo_keccak/packed_keccak.cairo",
    "starkware/cairo/common/cairo_secp/bigint.cairo",
    "starkware/cairo/common/cairo_secp/constants.cairo",
    "starkware/cairo/common/cairo_secp/ec.cairo",
    "starkware/cairo/common/cairo_secp/field.cairo",
    "starkware/cairo/common/cairo_secp/signature.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/ec.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak_state.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/cairo/stark_verifier/air/config.cairo",
    "starkware/cairo/stark_verifier/air/diluted.cairo",
    "starkware/cairo/stark_verifier/air/layout.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/bitwise/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/dex/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/perpetual_with_bitwise/verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/autogenerated.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/composition.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/global_values.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/periodic_columns.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/public_verify.cairo",
    "starkware/cairo/stark_verifier/air/layouts/recursive/verify.cairo",
    "starkware/cairo/stark_verifier/air/oods.cairo",
    "starkware/cairo/stark_verifier/air/params.cairo",
    "starkware/cairo/stark_verifier/air/public_input.cairo",
    "starkware/cairo/stark_verifier/air/public_memory.cairo",
    "starkware/cairo/stark_verifier/air/traces.cairo",
    "starkware/cairo/stark_verifier/core/air_interface.cairo",
    "starkware/cairo/stark_verifier/core/channel_test.cairo",
    "starkware/cairo/stark_verifier/core/channel.cairo",
    "starkware/cairo/stark_verifier/core/config.cairo",
    "starkware/cairo/stark_verifier/core/domains.cairo",
    "starkware/cairo/stark_verifier/core/fri/config.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri_formula.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri_layer.cairo",
    "starkware/cairo/stark_verifier/core/fri/fri.cairo",
    "starkware/cairo/stark_verifier/core/proof_of_work.cairo",
    "starkware/cairo/stark_verifier/core/queries.cairo",
    "starkware/cairo/stark_verifier/core/stark.cairo",
    "starkware/cairo/stark_verifier/core/table_commitment.cairo",
    "starkware/cairo/stark_verifier/core/utils.cairo",
    "starkware/cairo/stark_verifier/core/vector_commitment.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/constants.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contract_address/contract_address.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test_unwhitelisted_hint.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.9.1": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/cairo_keccak/keccak.cairo",
    "starkware/cairo/common/cairo_keccak/packed_keccak.cairo",
    "starkware/cairo/common/cairo_secp/bigint.cairo",
    "starkware/cairo/common/cairo_secp/constants.cairo",
    "starkware/cairo/common/cairo_secp/ec.cairo",
    "starkware/cairo/common/cairo_secp/field.cairo",
    "starkware/cairo/common/cairo_secp/signature.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/ec.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contract_address/contract_address.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test_unwhitelisted_hint.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.9.0": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/cairo_keccak/keccak.cairo",
    "starkware/cairo/common/cairo_keccak/packed_keccak.cairo",
    "starkware/cairo/common/cairo_secp/bigint.cairo",
    "starkware/cairo/common/cairo_secp/constants.cairo",
    "starkware/cairo/common/cairo_secp/ec.cairo",
    "starkware/cairo/common/cairo_secp/field.cairo",
    "starkware/cairo/common/cairo_secp/signature.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/ec.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contract_address/contract_address.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.8.2": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/cairo_keccak/keccak.cairo",
    "starkware/cairo/common/cairo_keccak/packed_keccak.cairo",
    "starkware/cairo/common/cairo_secp/bigint.cairo",
    "starkware/cairo/common/cairo_secp/constants.cairo",
    "starkware/cairo/common/cairo_secp/ec.cairo",
    "starkware/cairo/common/cairo_secp/field.cairo",
    "starkware/cairo/common/cairo_secp/signature.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.8.1": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ],
  "0.8.0": [
    "starkware/cairo/bootloaders/bootloader/bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/execute_task.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/run_simple_bootloader.cairo",
    "starkware/cairo/bootloaders/simple_bootloader/simple_bootloader.cairo",
    "starkware/cairo/builtin_selection/inner_select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_builtins.cairo",
    "starkware/cairo/builtin_selection/select_input_builtins.cairo",
    "starkware/cairo/builtin_selection/validate_builtins.cairo",
    "starkware/cairo/cairo_verifier/objects.cairo",
    "starkware/cairo/common/alloc.cairo",
    "starkware/cairo/common/bitwise.cairo",
    "starkware/cairo/common/bool.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s_test.cairo",
    "starkware/cairo/common/cairo_blake2s/blake2s.cairo",
    "starkware/cairo/common/cairo_blake2s/packed_blake2s.cairo",
    "starkware/cairo/common/cairo_builtins.cairo",
    "starkware/cairo/common/default_dict.cairo",
    "starkware/cairo/common/dict_access.cairo",
    "starkware/cairo/common/dict.cairo",
    "starkware/cairo/common/ec_point.cairo",
    "starkware/cairo/common/find_element.cairo",
    "starkware/cairo/common/hash_chain.cairo",
    "starkware/cairo/common/hash_state.cairo",
    "starkware/cairo/common/hash.cairo",
    "starkware/cairo/common/invoke.cairo",
    "starkware/cairo/common/keccak.cairo",
    "starkware/cairo/common/math_cmp.cairo",
    "starkware/cairo/common/math.cairo",
    "starkware/cairo/common/memcpy.cairo",
    "starkware/cairo/common/memset.cairo",
    "starkware/cairo/common/merkle_multi_update.cairo",
    "starkware/cairo/common/merkle_update.cairo",
    "starkware/cairo/common/patricia.cairo",
    "starkware/cairo/common/pow.cairo",
    "starkware/cairo/common/registers.cairo",
    "starkware/cairo/common/segments.cairo",
    "starkware/cairo/common/serialize.cairo",
    "starkware/cairo/common/set.cairo",
    "starkware/cairo/common/signature.cairo",
    "starkware/cairo/common/small_merkle_tree.cairo",
    "starkware/cairo/common/squash_dict.cairo",
    "starkware/cairo/common/uint256.cairo",
    "starkware/cairo/common/usort.cairo",
    "starkware/cairo/lang/compiler/lib/registers.cairo",
    "starkware/cairo/lang/package_test/main.cairo",
    "starkware/cairo/lang/vm/test.cairo",
    "starkware/starknet/apps/amm_sample/amm_sample.cairo",
    "starkware/starknet/common/eth_utils.cairo",
    "starkware/starknet/common/messages.cairo",
    "starkware/starknet/common/storage.cairo",
    "starkware/starknet/common/syscalls.cairo",
    "starkware/starknet/core/os/block_context.cairo",
    "starkware/starknet/core/os/builtins.cairo",
    "starkware/starknet/core/os/contracts.cairo",
    "starkware/starknet/core/os/os_config/os_config.cairo",
    "starkware/starknet/core/os/os.cairo",
    "starkware/starknet/core/os/output.cairo",
    "starkware/starknet/core/os/state.cairo",
    "starkware/starknet/core/os/transaction_hash.cairo",
    "starkware/starknet/core/os/transactions.cairo",
    "starkware/starknet/core/test_contract/delegate_proxy.cairo",
    "starkware/starknet/core/test_contract/dummy_account.cairo",
    "starkware/starknet/security/starknet_common.cairo",
    "starkware/starknet/testing/test.cairo",
    "starkware/starknet/third_party/open_zeppelin/Account.cairo",
    "starkware/starknet/third_party/open_zeppelin/utils/constants.cairo"
  ]
}
